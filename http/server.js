import express from 'express';

const app = express();

app.get("/cars", (req, resp) => {
    resp.send("hellow world");
});

app.post("/cars", (req, resp)=>{
    resp.send("this is MY POST handler");
});

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
});


