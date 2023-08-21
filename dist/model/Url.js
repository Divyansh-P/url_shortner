"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const URLschema = new mongoose_1.Schema({
    urliD: {
        type: String,
        required: true
    },
    origurl: {
        type: String,
        required: true
    },
    shorturl: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now()
    }
});
const Url = (0, mongoose_1.model)("url", URLschema);
exports.default = Url;
