require('dotenv').config();

const express = require('express');
const cors = require('cors');
const db = require('./models');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Node API Running 🚀');
});

// DB connection check
db.sequelize.authenticate()
  .then(() => console.log('Database connected ✅'))
  .catch(err => console.log('DB error ❌', err));

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});