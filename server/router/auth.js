const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require(`bcrypt`);

require("../db/conn");
const User = require("../model/userSchema");
router.get("/", (req, res) => {
  res.send(`Hello world from the server router js`);
});
//
// router.post("/register",async (req, res) => {
//     const { name, email, phone, work, password, confirm_password } = req.body;

//     if (!name || !email || !phone || !work || !password || !confirm_password) {
//         return res.status(422).json({ error: "PLz fill all the field properly" });
//     }

//     User.findOne({email:email})
//     .then((userExist)=>{
//         if(userExist){
//             return res.status(422).json({error:"Already Registered:"});
//         }
//         const user = new User({name,email,phone,work,password,confirm_password});

//         user.save().then(()=>{
//             res.status(201).json({message:"Registration Successful:"});
//         }).catch((err)=>res.status(500).json({error:"Registration Failed:"}));
//     }).catch(err=>{ console.log(err);});

// });

// Async-Await
router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, confirm_password } = req.body;

  if (!name || !email || !phone || !work || !password || !confirm_password) {
    return res.status(422).json({ error: "PLz fill all the field properly" });
  }

  try {
    const userExist = await User.findOne({ email: email });
    if (userExist) {
      return res.status(422).json({ error: "Already Registered:" });
    } else if (password != confirm_password) {
      return res.status(422).json({ error: "Password do not match:" });
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        confirm_password,
      });
      //   const userRegister=
      await user.save();
      //   console.log(`${user} user Registered Successfully`);
      // console.log(userRegister);

      res.status(201).json({ message: "Registeration successful:" });
    }
  } catch (err) {
    console.log(err);
  }
});

// Login route

router.post("/signin", async (req, res) => {
  //  console.log(req.body);
  //  res.json({message:"awesome"});
  try {
    let token;
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid Credential" });
    }
    const userLogin = await User.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);

      token = await userLogin.generateAuthToken();
      console.log(token);

      res.cookie("jwtoken", token, {
        expires: new Date(Date.now() + 25892000000),
        httpOnly: true,
      });

      if (!isMatch) {
        res.status(404).json({ error: "Invalid Credential" });
      } else {
        res.json({ message: "Login Successful" });
      }
    } else {
      res.status(400).json({ error: "User Not Registered" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
