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
    url: string (optional) // user profile's url
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
**POST/tweets**
```diff
create new tweet

Request
{
    text,
    name,
    username,
    url (optional)
}

- Response 201
{
    tweet
}
```
**PUT/tweets/:id**
```diff
update tweet

Request
{
    text
}

- Response 200
{
    tweet
}
```
**DELETE/tweets/:id**
```diff
delete tweet

- Response 204
```

# dwitter AUTH doc

**User Schema**
```
JSON
{
    id: string, // User's unique ID
    username: string, // Twitter ID
    password: string, // Twitter content
    name: string, // Name of user
    email: string, // Email of user
    url: string (optional) // user profile URL
}
```
**POST/auth/signup**
```diff
- Request
JSON
{
    username,
    password,
    name,
    email,
    url
}

- Response
JSON
{
    token,
    username
}
```

**POST/auth/login**
```diff
- Request
JSON
{
    username,
    password
}

- Response
JSON
{
    token,
    username
}
```
**GET/auth/me**
JSON
{
    token,
    username
}