const express = require("express");

const app = express();

app.listen(3000);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const blogs = [
        { title: "The Rise of Vertical Farming: Cultivating the Future", 
            snippet: "Urban agriculture is taking on new heights—literally. Vertical farming is revolutionizing how we grow food in cities, maximizing space and minimizing environmental impact. But what are the real pros and cons of this innovative approach?" },
        {
            title: "Digital Detox: Reclaiming Your Time and Attention", 
            snippet: "In an age of constant connectivity, the idea of unplugging can seem daunting. Yet, a digital detox might be just what you need to boost productivity, improve relationships, and rediscover forgotten hobbies. Here's how to start..."
        },
        {
            title: "The Psychology of Color in Marketing: Beyond Aesthetics",
            snippet: "Colors aren't just about looking pretty—they can significantly influence consumer behavior. From building brand identity to driving conversions, understanding color psychology is crucial for effective marketing. Let's explore how different hues affect our decisions..."
        }
    ]
    res.render('index', { title: 'Home' , blogs});
});

app.get("/about", (req, res) => {
    res.render('about', { title: 'About' });
});

app.get("/blogs/create", (req, res) => {
    res.render('create', { title: 'Create a new blog' });
});

// 404 error
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});
