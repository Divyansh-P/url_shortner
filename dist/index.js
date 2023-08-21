"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv = require('dotenv');
dotenv.config();
const Url_1 = __importDefault(require("./routes/Url"));
const index_1 = __importDefault(require("./routes/index"));
const root_1 = __importDefault(require("./routes/root"));
//import  corsoptions  from './conifg/corsoption'
const app = (0, express_1.default)();
const port = 5000 || process.env.port;
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use('/', root_1.default);
app.use('/api', Url_1.default);
app.use('/', index_1.default);
app.listen(port, () => {
    console.log(`server is up running on port ${port}`);
});
//--------------------------db setup----------------------
const MongoURL = "mongodb+srv://EcellNith:pokemon@ecellnithweb.vklgf.mongodb.net/test2";
mongoose_1.default.connect(MongoURL, {}).catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
    process.exit();
});
mongoose_1.default.connection.on("connected", () => {
    console.log("connected to database");
});
