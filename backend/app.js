const express = require('express');
const cors = require('cors');
const logger = require('./middlewares/loggerMiddleware');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Routes
app.use('/api', userRoutes);





module.exports = app;
