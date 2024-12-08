const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');
const posRoutes = require('./routes/posRoutes');
const detectPort = require('detect-port');

const app = express();

// Middleware
app.use(express.json());
app.use(session({
    secret: 'pos_system_secret',
    resave: false,
    saveUninitialized: true,
}));
app.use(express.static('public'));

// Routes
app.use('/auth', authRoutes);
app.use('/pos', posRoutes);

//
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, async () => {
    console.log(`Server running at http://localhost:${port}`);
    await fetchDataAndStore();  // Fetch and store Yelp data on server startup
});

