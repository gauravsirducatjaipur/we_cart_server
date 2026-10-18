const express = require("express");
const app = express();
const dns = require("node:dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const dotenv = require("dotenv");
const cors = require('cors')
dotenv.config();
const dbConnect = require("./dbconfig");
const PORT = process.env.PORT || 1300;

dbConnect();

app.use(cors())
app.use(express.json());
app.use("/api", require("./routes/userRoute"));


app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});