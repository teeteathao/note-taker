const express = require('express');

const notesHtml = require('./routes/htmlRoutes');
// const apiHtml = require('./routes/apiRoutes')

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
// app.use('/api', apiHtml);
app.use('/', notesHtml);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
