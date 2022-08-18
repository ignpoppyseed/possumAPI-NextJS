const fs = require('fs');
import path from "path";

const POST_FOLDER_NAME = "images";
const POSTS_DIRECTORY = path.join(process.cwd(), "public", POST_FOLDER_NAME);

export default function handler(req, res) {
    
    const length = fs.readdirSync(POSTS_DIRECTORY).length
    var min = Math.ceil(length);
    var max = Math.floor(1);
    var num = Math.floor(Math.random() * (max - min + 1) + min);
    var respn1 = 'https://possums.cloverbrand.xyz/images/'+num+'.jpg'
    res.json({"url": respn1});
}