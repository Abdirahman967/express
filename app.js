const express = require("express");
const path = require("path");
const workingHours = require("./middleware/workingHours");

const app = express();
const PORT = process.env.PORT || 3000;

// Template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static files (CSS) are served before the time check,
// so the "closed" page is still styled outside working hours.
app.use(express.static(path.join(__dirname, "public")));

// Custom middleware: only allow requests Mon–Fri, 9:00–17:00
app.use(workingHours);

// Routes
app.get("/", (req, res) => {
  res.render("home", { title: "Home", active: "home" });
});

app.get("/services", (req, res) => {
  res.render("services", { title: "Our Services", active: "services" });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Us", active: "contact" });
});

// 404 for anything else
app.use((req, res) => {
  res.status(404).render("404", { title: "Page not found", active: "" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
