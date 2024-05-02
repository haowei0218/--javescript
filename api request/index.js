const express = require("express");
const app = express();
const port = 4040;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world");
});

app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
