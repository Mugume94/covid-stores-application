const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration')

// get and displays a register page
router.get('/', (req, res) => {
    res.render('register')
})


// router.post('/', async(req, res)=>{
//     const registration = new Registration(req.body);
//     try{
//       await registration.save()
//       res.redirect('/register/userlist')
//       //res.send('Thanks you for your registartion!');
//     }catch (err){
//       res.send('sorry! something went wrong');
//       console.log(err)
//     }

// })

router.post("/", async (req, res) => {
  try {
    const items = new Registration(req.body);
    await Registration.register(items, req.body.password, (err) => {
      if (err) { throw err }
      res.redirect('/login')
    })
  } catch (err) {
     res.status(400).send('Sorry! Something went wrong.')
     console.log(err)
  }
})



router.get('/userlist', async (req, res) => {
  if (req.session.user) {
      
    try {
        let items = await Registration.find()
        if (req.query.gender) {
          items = await Registration.find({ gender: req.query.gender })
        }
        res.render('list', { users: items, currentUser: req.session.user})
      } catch (err) {
        res.status(400).send("unable to find items in the database");
      }

    } else {
      console.log("cant find session")
      res.redirect('/login')
  }
  })

// router.get('/userlist', async (req, res) => {
//   try {
//     let items = await Registration.find()
//     if (req.query.gender) {
//       items = await Registration.find({ gender: req.query.gender })
//     }
//     res.render('list', { users: items })
//   } catch (err) {
//     res.status(400).send("unable to find items in the database");
//   }
// })


router.post("/delete", async (req, res) => {
  if (req.session.user) {
  try {
    await Registration.deleteOne({_id: req.body.id })
    res.redirect('back')
  } catch (error) {
     res.status(400).send("unable to delete to database");
  }
} else {
  console.log("cant find session")
  res.redirect('/login')
}
})




// router.post("/delete", async (req, res) => {
//   try {
//     await Registration.deleteOne({_id: req.body.id })
//     res.redirect('back')
//   } catch (error) {
//      res.status(400).send("unable to delete to database");
//   }
// })
  

module.exports = router;