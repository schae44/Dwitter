// abcd1234: $2b$12$G9xf8SFq3oTEgdj7ozHQ/uhDOyeQcUEDU8tnOcvpvApuadr3nE5Vm
import { getUsers } from "../database/database.js";

export async function findByUsername(username) {
  return getUsers()
    .findOne({ usernmae: username })
    .then((data) => {
      console.log(data);
      return;
    });
}
export async function findById(id) {
  return getUsers()
    .findOne({ _id: id })
    .then((data) => {
      console.log(data);
      return data;
    });
}

export async function createUser(user) {
  return getUsers()
    .insertOne(user)
    .then((data) => data.insertedId.toString());
}
