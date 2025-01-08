const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Validate that userId is a number
  if (isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid user ID');
  }
  const user = users.find(user => user.id === parseInt(userId));
  if (!user) {
    return res.status(404).send('User not found');
  } else {
    return res.send(user);
  }
});
// ... other routes ...
app.listen(3000, () => console.log('Server listening on port 3000'));