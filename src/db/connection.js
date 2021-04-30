const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/DynamicNodeSite", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
.then(() => console.log(`Connected to db successfully.`))
.catch((err) => console.log(`Could not connect to db`))