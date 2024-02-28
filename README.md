# dwitter API Spec 

## Tweets

**Tweet Schema**
```
JSON
{
    id: string, // Twitter Id
    text: string, // Twitter content
    createdAt: Date, // Date of Twitter created
    name: string, // Name of user
    username: string, // Username of user
    url: string // user profile's url
}
```
```diff
- GET/tweets
get all tweets
Response 200
{
    [tweet, tweet, ...]
}
```
```diff
- GET/tweets?username=:username
get all tweets for user's username
Response 200
{
    [tweet, tweet, ...]
}
```
```diff
- GET/tweets/:id
get tweet by id
Response 200
{
    tweet
}
```

