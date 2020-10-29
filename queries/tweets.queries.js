const Tweet = require('../database/model/tweet.model')

exports.getTweets = () =>{
    return Tweet.find({}).exec()
}


exports.createTweet = (tweet) =>{
    const newTweet =  new Tweet(tweet)
    return newTweet.save()
}

exports.deleteTweet = (tweetId)=>{
    return Tweet.findByIdAndDelete(tweetId).exec()
}

exports.getTweet = (tweetId) =>{
    return Tweet.findOne({_id : tweetId}).exec()
}

exports.updateTweet = (tweetId, tweet)=>{
    return Tweet.findByIdAndUpdate(tweetId, {$set :  tweet}, {runValidators : true})
}

exports.getCurrentUserTweetsWithFollowing = (user) => {   
            // Dans les followers du user on recup la liste de leurs id    Populate -> Comme un liaison en SQL
    return Tweet.find({ author: { $in: [ ...user.following, user._id ] }}).populate('author').exec();
  }

  exports.getUserTweetsFormAuthorId = (authorId) => {
      // Populate -> Comme un liaison en SQL, en lien avec avec author présisé dans le model mongoose des tweets
    return Tweet.find({ author: authorId }).populate('author').exec();
  }