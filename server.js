const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything in the /public folder as static files
app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`HangulGo is running at http://localhost:${PORT}`);
});
