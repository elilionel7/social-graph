# Social Graph Project

In this practice, I implement a social network utilizing an adjacency list. The network is based on a "follow" system, akin to platforms like Twitter or Instagram.

 Develop the `SocialNetwork` class, with functionalities to add users, establish following relationships, list a user's followers and those they are following, and suggest followers.

The goal of my project is to adeptly build a social network using adjacency lists. This focused approach allows me to reinforce my grasp on these concepts, ensuring their effective application in my future work. While the network's structure is non-OOP, I seamlessly integrate OOP principles for other project components, balancing innovation with familiarity in my development journey.
In this practice, you will implement a social network using an adjacency list.
This network will be "follow" based, similar to Twitter or Instagram.

## Directions

1. Run tests with `npm test`
2. Implement code until tests are all passing

## Part 1: Social Network Setup

Start with the basic implementation of a social network in the `SocialNetwork`
class.

### Add User

Implement `addUser` which takes in a name. It should create and store a User
object with two keys: an integer ID that starts from 1 and increments for each
new user, and a name which uses the passed in name parameter. It should also
initialize a new set to track who the user follows. The return value of
`addUser` should be the unique ID that can be used to access that user.

When implemented correctly, the stored User object will look like this:
`{ "id": 1, "name": "John Doe" }`

Example:

```js
userID1 = socialNetwork.addUser('John Doe');
userID2 = socialNetwork.addUser('Jane Doe');

console.log(userID1); // 1
console.log(userID2); // 2
```

### Get User

Implement `getUser` which takes in a userID and returns a user object. If a
user with that ID cannot be found, return `null`.

Example:

```js
user1 = socialNetwork.getUser(1);
user2 = socialNetwork.getUser(2);
user3 = socialNetwork.getUser(3);

console.log(user1.name); // 'John Doe'
console.log(user2.name); // 'Jane Doe'
console.log(user3);      // null
```

### Follow

Implement `follow` which takes in two userIDs and sets user1 to follow user2.
It should return `true` if the follow was successful and `false` otherwise.

Example:

```js
socialNetwork.follow(1, 2); // true
socialNetwork.follow(1, 3); // false, userID 3 does not exist
```

### Get Follows

Implement `getFollows` which takes in a userID and returns a set
containing all the IDs of the users they follow.

Example:

```js
socialNetwork.getFollows(1); // Set { 2 }
socialNetwork.getFollows(2); // Set {}
```

### Get Followers

Implement `getFollowers` which takes in a userID and returns a set
containing all the IDs of that user's followers.

Example:

```js
socialNetwork.getFollowers(1); // Set {}
socialNetwork.getFollowers(2); // Set { 1 }
```

## Part 2: Recommended Follows

Implement `getRecommendedFollows` which takes in a userID and an integer,
degrees. This function returns an array containing a list of recommended
users to follow.

It finds recommendations by the follows of that user's follows. The distance the algorithm will search for recommended follows is represented by the `degrees` integer.

* degrees = 1 -> Users your follows also follow
* degrees = 2 -> Users your follows follows also follow
* degrees = 3 -> Users your follows follows follows also follow

For example:

```js
socialNetwork.getFollows(1); // [2]
socialNetwork.getFollows(2); // [3]
socialNetwork.getFollows(3); // [4, 5]
socialNetwork.getFollows(4); // [1, 2]
socialNetwork.getFollows(5); // [6]

socialNetwork.getRecommendedFollows(1, 1); // [3]
socialNetwork.getRecommendedFollows(1, 2); // [3, 4, 5]
socialNetwork.getRecommendedFollows(1, 3); // [3, 4, 5, 6]
```


## Note:I did this  Project while in App Academy
