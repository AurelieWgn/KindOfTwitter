const mongoose = require("mongoose")
const schema = mongoose.Schema;

//Schema création
const tweetSchema = schema({
   content : {
       type : String, 
        maxlength : [180, 'Votre message est trop long'], 
        minlength : [1, 'Vous devez écrire quelque chose !'], 
        required : [true, "Champs requis"] },
                                            // ref utile à la méthode Populate()
    author : {type : schema.Types.ObjectId, ref: 'user', required : true}
})

//Model création
const Tweet = mongoose.model('tweet', tweetSchema);

module.exports = Tweet;