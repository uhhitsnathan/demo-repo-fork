import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send("we love orange cats");
=======
    res.send("we love orange cat");
>>>>>>> 7528c079a44218ebc896b573ddebfd09ca251298
});

app.get('/route1', (req, res) => {
    res.send("we also love black cat, this is route 1");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});