const express = require("express");
const path = require("path");
const blogs = require("../data/Blogs");

const router = express.Router();

router.get("/", (req, res) => {
	// res.sendFile(path.join(__dirname, "../Templates/index.html"));
	res.render("home");
});

router.get("/blog", (req, res) => {
	blogs.forEach((element) => {
		// console.log(element.title);
	});
	// res.sendFile(path.join(__dirname, "../Templates/blogHome.html"));
	res.render("blogHome", {
		blogs: blogs,
	});
});

router.get("/blogPage/:slug", (req, res) => {
	const myBlog = blogs.filter((e) => {
		return e.slug == req.params.slug;
	});
	// console.log(myBlog);
	// res.sendFile(path.join(__dirname, "../Templates/blogPage.html"));
	res.render("blogPage", {
		title: myBlog[0].title,
		content: myBlog[0].content,
	});
});

module.exports = router;
