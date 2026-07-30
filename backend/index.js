require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const {User} = require("./model/userModel");
const{HoldingsModel} = require("./model/HoldingsModel");
const{PositionsModel} = require("./model/PositionsModel");
const{OrdersModel} = require("./model/OrdersModel")

const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const app = express();
        
app.use(
    cors({
        origin: [
           "https://zerodha-frontend-ae5z.onrender.com",
      "https://zerodha-dashboard-lrms.onrender.com"
        ],
        credentials: true
    })
);

app.use(bodyParser.json());
app.use(cookieParser());

// SIGNUP

app.post("/signup", async (req, res) => {
    try {
        const { fullName, email, password } = req.body;

        // Check empty fields
        if (!fullName || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check if user already exists(Only checks for it's email)
        const existingUser = await User.findOne({
            email: email.toLowerCase(),
        });

        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "Account already exists with this email",
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            fullName,
            email,
            password: hashedPassword,
        });

        // Save to MongoDB
        await newUser.save();

        const token = jwt.sign(
    {
        userId: newUser._id
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "7d"
    }
);

res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
});

return res.status(201).json({
    success: true,
    message: "Account created successfully",
    user: {
        id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email
    }
});

    } catch (error) {
        console.error("Signup error:", error);

        return res.status(500).json({
            success: false,
            message: "Something went wrong while creating account",
        });
    }
});


app.post("/login", async (req, res) => {
    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const user = await User.findOne({
            email: email.toLowerCase()
        });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const passwordMatched = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatched) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            });
        }

        const token = jwt.sign(
            {
                userId: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "7d"
            }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            user: {
                id: user._id,
                fullName: user.fullName,
                email: user.email
            }
        });

    } catch (error) {

        console.error("Login error:", error);

        return res.status(500).json({
            success: false,
            message: "Login failed"
        });
    }
});



const authenticateUser = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Please login first"
        });
    }

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.userId = decoded.userId;

        next();

    } catch (error) {

        return res.status(401).json({
            success: false,
            message: "Invalid or expired session"
        });
    }
};




app.get("/profile", authenticateUser, async (req, res) => {
    try {

        const user = await User.findById(req.userId)
            .select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user
        });

    } catch (error) {

        return res.status(500).json({
            success: false,
            message: "Unable to get profile"
        });
    }
});


app.post("/logout", (req, res) => {

    res.clearCookie("token", {
        httpOnly: true,
        secure: false,
        sameSite: "lax"
    });

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
});
// app.get('/addHoldings',async(req, res)=>{
//     let tempHoldings = [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

// tempHoldings.forEach((item)=>{
//    let newHolding = new HoldingsModel({
//      name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//    });

//    newHolding.save();
// });
// res.send("Done!");
// });

// app.get('/addPositions',async(req, res)=>{
//     let tempPositions = [
//  {
//     product: "CNC",
//     name: "EVEREADY",
//     qty: 2,
//     avg: 316.27,
//     price: 312.35,
//     net: "+0.58%",
//     day: "-1.24%",
//     isLoss: true,
//   },
//   {
//     product: "CNC",
//     name: "JUBLFOOD",
//     qty: 1,
//     avg: 3124.75,
//     price: 3082.65,
//     net: "+10.04%",
//     day: "-1.35%",
//     isLoss: true,
//   },
// ];

// tempPositions.forEach((item)=>{
//    let newPosition = new PositionsModel({
//     product: item.product,
//     name: item.name,
//     qty: item.qty,
//     avg: item.avg,
//     price: item.price,
//     net: item.net,
//     day: item.day,
//     isLoss: item.isLoss,
//    });

//    newPosition.save();
// });
// res.send("Done 2.0!");
// });

// GET REQUEST for allHoldings:
app.get('/allHoldings', async(req, res)=>{
     let allHoldings = await HoldingsModel.find({});
     res.json(allHoldings);
});

// GET REQUEST for allPositions:
app.get('/allPositions', async(req, res)=>{
     let allPositions = await PositionsModel.find({});
     res.json(allPositions);
});

// POST REQ FOR NEW ORDER:
app.post("/newOrder", async(req, res)=>{
    let newOrder = await new OrdersModel({
      name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
    });
  
    if (Number(req.body.qty) <= 0) {
    return res.status(400).send("Quantity must be greater than 0");
}

    const holding = await HoldingsModel.findOne({
    name: req.body.name,  
  });

    if(!holding){
      if (req.body.mode === "SELL") {
        return res.status(400).send("You don't own this stock.");
    }

      const newHolding = new HoldingsModel({
        name: req.body.name,
        qty: Number(req.body.qty),
        avg: Number(req.body.price),
        price: Number(req.body.price),
        net: "0%",
        day: "0%",
        isLoss: false,
      });
      await newHolding.save();
      await newOrder.save();
      console.log("ORDER SAVED");
      return res.send("Order saves and new holding created succesfully!");
    }

  if(req.body.mode == 'BUY'){
   holding.qty += Number(req.body.qty);
   holding.price = Number(req.body.price);
  await newOrder.save();
  await holding.save();
    
  }else if(req.body.mode == 'SELL'){
    if(holding.qty < Number(req.body.qty)){
      return res.status(400).send("Not enough shares");
    }else{
   holding.qty -= Number(req.body.qty);
   holding.price = Number(req.body.price);

   if (holding.qty === 0) {
    await HoldingsModel.deleteOne({ name: req.body.name });
   } else {
    await holding.save();
   }
    }
  }

    await newOrder.save();
    
    res.send("Order saved!");
});

app.get("/", (req, res) => {
  res.send("Zerodha Clone Backend is running successfully 🚀");
});

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
  });