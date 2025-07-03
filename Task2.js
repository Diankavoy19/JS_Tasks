function createTweet(text) {
	let likes = 0;
    const tweet = {
        createdAt: new Date(),

        getLikes() {
            return likes;
        },
        setLikes(value) {
            if (typeof value !== "number" || value < 0) {
                throw new TypeError("Likes must be a number >= 0");
            }
            likes = value;
        },
        toString() {
            return text;
        },

        get linkify() {
            return text.replace(/#(\w+)/g, '<a href="#$1">#$1</a>');
        },
    };

    Object.defineProperty(tweet, "text", {
        value: text,
        writable: false,
        enumerable: true,
        configurable: false,
    });

    return Object.freeze(tweet);
}

const TweetManager = {
  tweets: [],

  createTweet(text) {
    const tweet = createTweet(text);
    this.tweets.push(tweet);
    return tweet;
  },

  getMostLiked() {
    if (this.tweets.length === 0) return null;
    return this.tweets.reduce((mostLiked, current) =>
      current.getLikes() > mostLiked.getLikes() ? current : mostLiked
    );
  },

  getRecentTweets(n) {
    return [...this.tweets]
      .sort((a, b) => b.createdAt - a.createdAt)
      .slice(0, n);
  },

  getAverageLikes() {
    if (this.tweets.length === 0) return 0;
    const totalLikes = this.tweets.reduce((sum, tweet) => sum + tweet.getLikes(), 0);
    return totalLikes / this.tweets.length;
  }
};
Tweet1 = TweetManager.createTweet("Just chilling #relax");
Tweet2 = TweetManager.createTweet("Learning JS #fun #code");
Tweet1.setLikes(10);
Tweet2.setLikes(50);
console.log("Most liked tweet:",TweetManager.getMostLiked().linkify);
console.log("Recent tweet texts:", TweetManager.getRecentTweets(1).map(t => t.text));
console.log("Average likes:", TweetManager.getAverageLikes());