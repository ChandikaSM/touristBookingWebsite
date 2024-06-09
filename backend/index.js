
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const User = require('./schemas/signup');
// const connectToMongoDB = require('./conn'); 
// const cors = require("cors");

// console.log("App listen at port 5000");


// const app = express();
// const PORT = process.env.PORT || 5000;
// app.use(bodyParser.json());
// app.use(cors());

// connectToMongoDB() 
// .then(() => {
//         console.log('MongoDB connection');
//     })
//     .catch(error => {
//         console.log("mongodb failsjs", error);
//     });

// app.get("/", (req, res) => {
//     res.send("App is working");
// });


// app.post("/register", async(req, res) => {
  
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).json({message: 'succcess'});
       
//         } catch(e) {
//             console.log("e", e);
//             res.status(500).json({message:'internal erro', error: e.message});
//         }
// });

// app.get("/register", (req, res) => {
//     res.status(200).json({message: 'registration successful'});
// })

// app.get("/users", async (req, res) => {
//     try {
//         const users = await User.find({});
//         res.status(200).json(users);
//     } catch (e) {
//         console.error("Error fetching users:", e);
//         res.status(500).json({ message: 'internal error', error: e.message });
//     }
// });

// // GET route to fetch a user by ID
// app.get("/users/:id", async (req, res) => {
//     try {
//         const user = await User.findById(req.params.id);
//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }
//         res.status(200).json(user);
//     } catch (e) {
//         console.error("Error fetching user:", e);
//         res.status(500).json({ message: 'internal error', error: e.message });
//     }
// });
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
//   });



const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const User = require('./schemas/signup');
const Place = require('./schemas/placeids');

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb+srv://sushmaj2347:Sushmita5678@cluster0.o9wdrqz.mongodb.net/TouristBookingDatabase");


app.post('/register', (req, res) => {
    User.create(req.body)
    .then(registers => res.json(registers))
    .catch(err => res.json(err))

})
app.listen(5000, () => {
    console.log("server running");
})

app.post('/placesm', (req, res) => {
    Place.create(req.body)
    .then(placesms => res.json(placesms))
    .catch(err => res.json(err))
})

app.get("/placesms", async(req, res) => {
    try{
        const places = await Place.find();
        res.json(places);
    } catch(err){
        res.status(500).json({message: err.message});
    }
});

app.post('/book', async (req, res) => {
    try{
        const {
            userId,
            placeId,
            date
        } = req.body;
        const newBook = new TbBrandBooking({
            userId,
            placeId,
            date
        });
        await newBook.save();
        res.status(201).json({message: "booked Successful"});
    } catch(e){
        res.status(500).json({message: "Inter error"});
    }

});
