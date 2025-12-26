const express = require("express");
const app = express();
const path = require("path");

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(
        path.join(__dirname, "index.html")
    );
});

app.get("/blogs.json", (req, res) => {
    res.sendFile(
        path.join(__dirname, "blogs.json")
    );
})

app.get("/blog.js", (req, res) => {
    res.sendFile(
        path.join(__dirname, "blog.js")
    );
})

app.get("/blog.css", (req, res) => {
    res.sendFile(
        path.join(__dirname, "blog.css")
    );
})

app.get("/blog/:blog", (req, res) => {
    res.sendFile(
        path.join(__dirname, "blogs", req.params.blog, "index.html")
    );
})

app.get("/blog/:blog/md", (req, res) => {
    res.sendFile(
        path.join(
            __dirname,
            "blogs",
            req.params.blog,
            "blog.md"
        )
    );
})

app.listen(PORT);