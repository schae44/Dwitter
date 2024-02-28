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
**GET/tweets**
```diff
get all tweets
- Response 200
{
    [tweet, tweet, ...]
}
```
**GET/tweets?username=:username**
```diff
get all tweets for user's username
- Response 200
{
    [tweet, tweet, ...]
}
```
**GET/tweets/:id**
```diff
get tweet by id
- Response 200
{
    tweet
}
```

