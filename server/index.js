require("dotenv").config();
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const RootSchema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.h3mik.mongodb.net/?retryWrites=true&w=majority`
);

mongoose.connection.on("open", () => console.log("connection live"));

app.use(
  "/gql",
  graphqlHTTP({
    schema: RootSchema,
    graphiql: true,
  })
);

app.listen(4040, () => console.log("GQL server live"));
