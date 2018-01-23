const express = require("express")
const bodyParser = require("body-parser")
const userRoutes = require("./routes/user");
const passport = require("passport");
const BearerStrategy = require("passport-http-bearer").Strategy;

const jwt = require("jsonwebtoken");

const app = express()

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept")
    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended : true }))
app.use(passport.initialize());

passport.use("auth", new BearerStrategy((token, done) => {
    jwt.verify(token, "secretkey", (error, decoded) => {

        if (error) {
            return done("User Not Authorized", null);
        }
        else{
            return done(null, decoded);
        }

    })

}));

app.post("/api/validatetoken", passport.authenticate("auth", {session : false}), (req, res) => {
    res.send(req.user)
})

app.get("/", (req, res) => {
    res.send("Ready!!")
})

app.use("/api/user", userRoutes);

app.listen(3300)