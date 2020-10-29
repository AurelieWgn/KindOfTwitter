const mongoose = require("mongoose")
const router = require("../routes")


mongoose.connect('mongodb+srv://Lili:pwd@cluster0.vkrsh.mongodb.net/KindOfTwitter?retryWrites=true&w=majority', { 
    useNewUrlParser: true,  
    useUnifiedTopology: true ,
}).then(()=>{
    console.log('Connexion ok !')
}).catch(()=>{
    console.log(err)
})
