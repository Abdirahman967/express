# Express Checkpoint – Working Hours Web App

A three-page Express app (Home, Our Services, Contact Us) that is only available
Monday to Friday, 9:00–17:00.

## Run
```bash
npm install
npm start
```
Open http://localhost:3000

## Structure
```
app.js                      Express server and routes
middleware/workingHours.js  Custom middleware that checks the request time
views/                      EJS templates (shared header/footer with nav bar)
public/css/style.css        Styles
```

## How the time check works
`middleware/workingHours.js` runs before every route. If the current day is
Monday–Friday and the hour is between 9:00 and 16:59, it calls `next()` and the
page loads. Otherwise it stops the request and renders a "We're closed" page.
The time used is the server's local time.
