const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req:Request, res:any) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default router