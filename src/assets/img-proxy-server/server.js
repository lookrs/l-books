const express = require('express');
const request = require('request');
const cors = require('cors'); // 引入 cors 模块
const app = express();
// 使用 cors 中间件
app.use(cors());
app.use('/proxy', (req, res) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).send('Missing image URL');
  }

  request.get(url).pipe(res);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});
