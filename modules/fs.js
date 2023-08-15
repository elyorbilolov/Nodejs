/* jshint esversion: 6 */
// const fs = require("fs");
// const path = require("path");

// Papka yaratish
/* fs.mkdir(path.join(__dirname, "/papka"), {}, (err) => {
    if (err) throw err;
    console.log("Papka qushildi");
}); */

// File yaratish
/* fs.writeFile(
    path.join(__dirname, "/papka", "namuna.text"),
    "Nodejs orqali yaratildi",
    (err) => {
        if (err) throw err;
        console.log("File yaratildi");
    }
); */

// File ga so'z qo'shish
/* fs.appendFile(
    path.join(__dirname, "/papka", "namuna.text"),
    " Hello world",
    (err) => {
        if (err) throw err;
        console.log("File yaratildi");
    }
); */

// Faylni o'qish
/* fs.readFile(
    path.join(__dirname, "/papka", "namuna.text"),
    "utf8",
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
); */

// Fayl nomini o'zgartirish
/* fs.rename(
    path.join(__dirname, "/papka", "namuna.text"),
    path.join(__dirname, "/papka", "example.text"),
    (err) => {
        if (err) throw err;
    }
); */
