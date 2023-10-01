// // Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.userIdCounter = 0;
  }

  addUser(name) {
    this.userIdCounter += 1;
    this.users[this.userIdCounter] = { id: this.userIdCounter, name: name };
    this.follows[this.userIdCounter] = new Set();
    return this.userIdCounter;
  }

  getUser(userId) {
    return this.users[userId] || null;
  }

  follow(userId1, userId2) {
    if (this.users[userId1] && this.users[userId2]) {
      this.follows[userId1].add(userId2);
      return true;
    }
    return false;
  }

  getFollows(userId) {
    const follows = {};
    this.follows[userId].forEach(followId => {
      follows[followId] = this.users[followId];
    });
    return follows;
  }

  getFollowers(userId) {
    const followers = new Set();
    for (const id in this.follows) {
      if (this.follows[id].has(userId)) {
        followers.add(Number(id));
      }
    }
    return followers;
  }

  getRecommendedFollows(userId, depth = 1) {
    const recommended = new Set();

    const traverse = (id, depth) => {
      if (depth === 0 || !this.follows[id]) return;
      for (const followId of this.follows[id]) {
        if (followId !== userId && !this.follows[userId].has(followId)) {
          recommended.add(followId);
        }
        traverse(followId, depth - 1);
      }
    };

    for (const followId of this.follows[userId]) {
      traverse(followId, depth);
    }

    return Array.from(recommended);
  }

}

module.exports = SocialNetwork;
