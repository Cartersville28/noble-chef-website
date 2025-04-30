const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Home route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// API route
app.get('/api/message', (req, res) => {
  res.json({ message: 'Welcome from the backend!' });
});

// Contact form handler
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form Data:', name, email, message);
  res.status(200).json({ success: true, message: 'Message received' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

