import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Dummy user data for demonstration purposes
const users = [
  { id: 1, username: 'john', password: 'changeme' }
];

// Login endpoint
app.post('/auth/login', (req, res) => {
  const { username, password } = req.body;
  
  // Dummy authentication logic
  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    // Authentication successful
    res.json({ access_token: 'your_access_token_here' });
  } else {
    // Authentication failed
    res.status(401).json({ error: 'Invalid username or password' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
