import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.end("hello world!");
})

app.listen(5500, () => {
	console.log(`App listening on port 5500`);
});
