const express = require("express");
const app = express();
const model = require("./Mongoose");

app.get("/", (req, res) => {
  res.send("hello");
});
//create route
app.get("/create", async (req, res) => {
  let user = await model.create({
    name: "daniyal",
    email: "daniyal@gmail.com",
  });
  res.send(user);
});

//edit route
app.get("/edit", async (req, res) => {
  let userEdited = await model.findOneAndUpdate(
    { name: "daniyalihsan" },
    { email:"daniyal786@gmail.com" },
    { new: true }
  );
  res.send(userEdited);
});

//delete route
app.get("/delete", async (req, res) => {
    let userDeleted = await model.findOneAndDelete({ name: "daniyalihsan" });
    res.send(userDeleted);
  });
app.listen(8080);
