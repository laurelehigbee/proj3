let express = require("express");
let app = new express();

let path = require("path");


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const knex = require("knex")({
    client: "mysql",
    connection: {
        host: "adoptiondatabase-instance-1.caayec2cyrg1.us-east-1.rds.amazonaws.com",
        user: "admin",
        password: "adminadmin",
        database: "adoption",
        port: 3306
    }
});

app.get("/", (req, res) => {
    knex.select().from("adoption").then(Animals => {
        res.render("displayanimals", { myanimals: Animals});
    });
});

app.listen(3000, () => console.log("Express App has started and server is listening!"));