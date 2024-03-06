let tweets = [
    {
        id: "1",
        text: "Hello world",
        createdAt: Date.now().toString(),
        name: 'Bob',
        username: 'bob',
        //url: 'https://www.pexels.com/photo/men-s-blue-dress-shirt-1043471/',
    }, 
    {
        id: "2",
        text: "Hi :)",
        createdAt: Date.now().toString(),
        name: 'Sarah',
        username: 'sarah',
    }
];

export function getALL() {
    return tweets;
}

export function getByUsername(username) {
    return tweets.filter((tweet) => tweet.username === username);
}

export function getById(id) {
    return tweets.find((tweet) => tweet.id === id);
}

export function create(text, name, username) {
    const tweet = {
        id: Date.now().toString(),
        text,
        createdAt: new Date(),
        name,
        username,
    };
    tweets = [tweet, ...tweets];
    return tweets;
}

export function update(id, text) {
    const tweet = tweets.find((tweet) => tweet.id === id);
    if (tweet) {
        tweet.text = text;
    }
    return tweet;
}

export function remove(id) {
    tweets =  tweets.filter((tweet) => tweet.id !== id);
}