// Import thư viện Express
const express = require('express');
const app = express();
const PORT = 3000;

// API đơn giản
app.get('/', (req, res) => {
    res.send('✅ Backend Server is running!');
});

// Lắng nghe trên cổng 3000
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}`);
});
