const express = require('express');
const { getUsers } = require('../controllers/userController');
const router = express.Router();

const sendJson = (req, res) => {
    // Example data to send as JSON
    const users = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" }
    ];
  
    // Send JSON response
    res.json({ success: true, data: users });
  };

  
router.get('/', getUsers);

router.get('/to', sendJson);



module.exports = router;
    