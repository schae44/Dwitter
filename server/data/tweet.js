import MongoDb from "mongodb";
import { getTweets } from "../database/database.js";
import * as userRepository from "./auth.js";
const ObjectID = MongoDb.ObjectId;
// NoSql prefer repetition rather than relationship
//NOSQL has two independent userDB and tweetDB! These do not have any relationship
// # of every user query tweets > # of one user update its user info

export async function getAll() {
  return getTweets()
    .find()
    .sort({ createdAt: -1 })
    .toArray()
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function getAllByUsername(username) {
  return getTweets()
    .find({ username })
    .sort({ createdAt: -1 })
    .toArray()
    .then(mapTweets);
}

export async function getById(id) {
  return getTweets()
    .findOne({ _id: new ObjectID(id) })
    .then(mapOptionalTweet);
}

export async function create(text, userId) {
  const { name, username, url } = await userRepository.findById(userId);
  const tweet = {
    text,
    createdAt: new Date(),
    userId,
    name: name,
    username: username,
    url: url,
  };
  return getTweets()
    .insertOne(tweet)
    .then((data) => mapOptionalTweet({ ...tweet, _id: data.insertedId }));
}

export async function update(id, text) {
  return getTweets()
    .findOneAndUpdate(
      { _id: new ObjectID(id) },
      { $set: { text } },
      { returnDocument: "after" }
    )
    .then((result) => result.value)
    .then(mapOptionalTweet);
}

export async function remove(id) {
  return getTweets().deleteOne({ _id: new ObjectID(id) });
}

function mapOptionalTweet(tweet) {
  return tweet ? { ...tweet, id: tweet._id.toString() } : tweet;
}

function mapTweets(tweets) {
  return tweets.map((tweet) => mapOptionalTweet(tweet));
}
