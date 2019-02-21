const express         = require("express");
const app             = express();
const bodyParser      = require("body-parser"); 
const mongoose        = require("mongoose");
const flash           = require("connect-flash");
const passport        = require("passport");
const localStrategy   = require("passport-local").Strategy;
const methodOverride  = require("method-override");
const User            = require("./models/user");

const port = process.env.PORT || 3000;