const express = require('express');
const app = express();
const ejsMate = require("ejs-mate");
const path = require('path');

const port = 5000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine("ejs", ejsMate);
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', (req, res) => {
    res.render("components/index", {
        title: 'BR Studio – Capture Moments',
        description: 'Wedding and event photography with best-in-class services.',
        canonical: 'https://br-studio.onrender.com/',
        ogImage: 'https://yourdomain.com/images/ogimage.jpg'
    });
});

app.get('/packages', (req, res) => {
    res.render("components/packages", {
        title: 'Packages & Offers – BR Studio',
        description: 'Explore our exclusive photography packages and limited-time offers for weddings, baby shoots, and events.',
        canonical: 'https://br-studio.onrender.com/packages',
        ogImage: 'https://yourdomain.com/images/packages-og.jpg'
    });
});

app.get('/contacts', (req, res) => {
    res.render("components/contacts", {
        title: 'Contacts - BR Studio',
        description: 'Get in touch with us for bookings and inquiries.',
        canonical: 'https://br-studio.onrender.com/contacts',
        ogImage: 'https://yourdomain.com/images/contact-og.jpg'
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
