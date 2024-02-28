# dwitter API Doc 

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

**GET/tweets?username=:username**

get all tweets for user's username
- Response 200
{
    [tweet, tweet, ...]
}

**GET/tweets/:id**

get tweet by id
- Response 200
{
    tweet
}

**POST/tweets**

create new tweet

Request
{
    text,
    name,
    username
}

- Response 201
{
    tweet
}

