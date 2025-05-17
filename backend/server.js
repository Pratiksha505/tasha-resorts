const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cors=require('cors');

const UserModel=require('./models/user');
const UserModel1=require('./models/user1');
const UserModel2=require('./models/user2');
const UserModel3=require('./models/user3');
const UserModel4=require('./models/user4');

// connecting frontend

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

//database connectivity

mongoose.connect("mongodb://127.0.0.1:27017/bookroom")
.then(()=> {
    console.log("connected successfully");
    app.listen(6050);
})
.catch((error)=> {
    console.log("error");
});

//to show logindata

app.get('/logindetails', async(req,res)=> {
    const showAll=await UserModel.find();
    res.json(showAll);
});

//for signup

app.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userAdded = await UserModel.create({ email, password });
        res.json({ message: "User registered successfully", user: userAdded });
    } catch (err) {
        res.status(500).json({ message: "Error creating user", error: err.message });
    }
});

//for login

app.post('/loginn', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("success");
                } else {
                    res.json("Password incorrect");
                }
            } else {
                res.json("Email Not Registered");
            }
        })
        .catch(err => res.json("Error occurred"));
});

//for forms

// for form1

app.get('/roomdetails', async(req,res)=> {
    const showAll1=await UserModel1.find();
    res.json(showAll1);
})

app.post('/room', async (req, res) => {
    
    const { email, option, city, date1, date2 } = req.body;
        const userAdded1 = await UserModel1.create({ email, option, city, date1, date2 });
        res.json({ message: "Booked successfully", user: userAdded1 });
});

//for form2

app.get('/diningdetails', async(req,res)=> {
    const showAll2=await UserModel2.find();
    res.json(showAll2);
})

app.post('/dining', async (req, res) => {
    
    const { email, opt5, guest2, opt6, city1, date6, time } = req.body;
        const userAdded2 = await UserModel2.create({ email, opt5, guest2, opt6, city1, date6, time });
        res.json({ message: "Booked successfully", user: userAdded2 });
});

//for form3

app.get('/weddetails', async(req,res)=> {
    const showAll3=await UserModel3.find();
    res.json(showAll3);
})

app.post('/wed', async (req, res) => {
   
    const { email, opt1, guest, opt2, city2, date3, date4 } = req.body;
        const userAdded3 = await UserModel3.create({ email, opt1, guest, opt2, city2, date3, date4 });
        res.json({ message: "Booked successfully", user: userAdded3 });
});

//for form4

app.get('/eventdetails', async(req,res)=> {
    const showAll4=await UserModel4.find();
    res.json(showAll4);
})

app.post('/event', async (req, res) => {
   
    const { email, opt3, guest1, opt4, city3, date5 } = req.body;
        const userAdded4 = await UserModel4.create({ email, opt3, guest1, opt4, city3, date5 });
        res.json({ message: "Booked successfully", user: userAdded4 });
});