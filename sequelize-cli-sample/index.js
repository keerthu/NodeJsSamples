const express = require("express");
const { sequelize, User, Post } = require("./models");
const user = require("./models/user");

const app = express();
app.use(express.json());

app.post("/users", async (req, res) => {
  const { name, nicNumber } = req.body;
  try {
    const user = await User.create({ name, nicNumber });
    return res.json(user);
  } catch (err) {
    console.log(err);
    return res.status(500).json(err);
  }
});

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    return res.json(users);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid },
      include: 'posts'
    });
    if (user != null) {
        return res.json(user);
    } else {
        res.status(404).send("User not found");
    }
    
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOne({
      where: { uuid }
    });
    await user.destroy();
    return res.json({message: 'User Deleted!'});
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.put("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const {name, nicNumber} = req.body;
  try {
    const user = await User.findOne({
      where: { uuid }
    });
    user.name = name;
    user.nicNumber = nicNumber;
    await user.save();

    return res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.post('/posts', async (req, res) => {
    const {userUuid, body} = req.body;
    try {
        const user = await User.findOne({ where: {uuid: userUuid}});
        const post = await Post.create({body, userId: user.id});

        return res.json(post)
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})

app.get("/posts", async (req, res) => {
  try {
    const post = await Post.findAll({include: 'user'});

    return res.json(post);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(5000, async () => {
  console.log("Server runs on port 5000...");
  await sequelize.authenticate();
  console.log("Database connected!");
});
