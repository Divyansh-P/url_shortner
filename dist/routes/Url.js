"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nanoid = require('nanoid');
const Url_1 = __importDefault(require("../model/Url"));
const utils_1 = require("../utils/utils");
const router = express_1.default.Router();
require('dotenv').config();
router.post('/short', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { origurl } = req.body;
    const UrlId = nanoid(8);
    const base = "https://urlbackend-msa3.onrender.com";
    if ((0, utils_1.validateUrl)(origurl)) {
        try {
            let url = yield Url_1.default.findOne({ origurl });
            if (url) {
                res.json(url);
            }
            else {
                const shorturl = `${base}/${UrlId}`;
                url = new Url_1.default({ origurl, shorturl, urliD: UrlId, date: new Date() });
                yield url.save();
                res.json(url);
            }
        }
        catch (err) {
            console.log(err);
            res.status(500).json('Server Error');
        }
    }
    else {
        res.status(400).json('Invalid Original Url');
    }
}));
exports.default = router;
