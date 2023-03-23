const connection = require("./connection/connection");
connection();
const exp = require("express");
const usercreated = require("./CRUD/create");
const bodyParser = require("body-parser");

const cors = require("cors");
const userRead = require("./CRUD/Read");
const port = 8080;
const app = exp();

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.get("/user", (req, res) => {
  res.json({ name: "prince", age: 21 });
});







app.post("/signup", async (req, res) => {
  const { name, email, password, mno } = req.body;
  const data = { name, email, password, mno };
  const response = await usercreated(data);
  if (typeof response.index === "number") {
    res.status(400).send("Email already exist");
  } else {
    res.status(200).send("user created successfully");
  }
});


app.get('/',(req,res)=>{
  res.status(200).render('pages/basic');
})


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const response = await userRead(email);
  if (response.length !== 0) {
    if (response[0].password.toString() === password.toString()) {
      res
        .status(200)
        .sendFile(__dirname + "/components/Home.html", (err) =>
          res.status(400).send(err)
        );
    } else {
      res.status(400).send("Invalid Password !");
    }
  } else {
    res.status(404).send("User Doesn't exist");
  }
});



app.listen(port);
