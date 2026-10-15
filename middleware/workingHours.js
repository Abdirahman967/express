// Custom middleware: the app is only available Monday to Friday, 9:00 to 17:00.

function isWorkingHours(date = new Date()) {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  const hour = date.getHours();

  const isWeekday = day >= 1 && day <= 5;
  const isOfficeHour = hour >= 9 && hour < 17;

  return isWeekday && isOfficeHour;
}

function workingHours(req, res, next) {
  if (isWorkingHours()) {
    return next(); // open: continue to the requested page
  }

  // closed: stop here and show the closed page
  res.status(503).render("closed", { title: "We're closed", active: "" });
}

module.exports = workingHours;
module.exports.isWorkingHours = isWorkingHours;
