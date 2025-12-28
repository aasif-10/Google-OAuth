require("dotenv").config();

const express = require("express");
const app = express();

const expressSession = require("express-session");
const passport = require("passport");
const passportConfig = require("./config/passport-config");
passportConfig(passport);
const mongooseConnection = require("./config/mongoose-connection");
const authRoutes = require("./routes/authRoutes");
const usersRoutes = require("./routes/usersRoutes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use(
  expressSession({
    secret: "someSecret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", authRoutes);
app.use("/", usersRoutes);

// Server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
