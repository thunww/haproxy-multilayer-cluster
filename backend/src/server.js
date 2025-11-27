const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth.route");

const promBundle = require("express-prom-bundle");
const metricsMiddleware = promBundle({
  includeMethod: true,
  includePath: true,
  metricsPath: "/metrics",
  promClient: {
    collectDefaultMetrics: {},
  },
});

const app = express();
app.use(cors());
app.use(express.json());

app.use(metricsMiddleware);

app.use("/api", authRoute);

app.get("/api/health", (req, res) => res.send("OK"));

app.listen(5000, () => console.log("BE running on 5000"));
