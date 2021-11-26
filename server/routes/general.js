const express = require('express');
const router = express.Router();
const User = require('../models/userDB');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


require('dotenv').config();



router.get('/', (req, res) => {
  User.find().then(users => {
    res.json(users);
  });

})

router.post("/login", async (req, res) => {

  // Our login logic starts here
  try {
    // Get user input
    const {
      email,
      password
    } = req.body;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("Tüm Alanlar Zorunludur.");
    }
    // Validate if user exist in our database
    const user = await User.findOne({
      email
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign({
          user_id: user._id,
          email
        },
        process.env.TOKEN_KEY, {
          expiresIn: "2h",
        }
      );

      // save user token
      user.token = token;

      res.json(user);
    } else {
      res.status(400).send("Geçersiz Bilgiler");


    }
  } catch (err) {
    console.log(err);
  }
});



router.post("/register", async (req, res) => {

  try {
   
    const {
      name,
      email,
      password
    } = req.body;

    // Gelen Dataları Doğruluyorum
    if (!(email && password && name)) {
      res.status(400).send("Tüm Alanlar Zorunludur");
    }

    // Kullanıcı veritabanında var mı kontrolü
 
    const oldUser = await User.findOne({
      email
    });

    if (oldUser) {
      return res.status(409).send("E-Posta Daha Önceden Alınmış.");
    }

    //Kullanıcı şifre hashleniyor
    encryptedPassword = await bcrypt.hash(password, 10);

    // Veritabanına yeni bir kullanıcı ekle
    const user = await User.create({
      name,
      email: email.toLowerCase(), 
      password: encryptedPassword,
    });

    // Token Oluşturma
    const token = jwt.sign({
        user_id: user._id,
        email
      },
      process.env.TOKEN_KEY, {
        expiresIn: "2h",
      }
    );
    // Kullanıcı Token Kaydetme
    user.token = token;

   
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
});


router.post('/user/update', (req, res) => {
  
  User.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      email: req.body.email,
    }).then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(400).json(err);
    })



    
})



module.exports = router;