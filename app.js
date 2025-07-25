const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// 中间件：解析JSON请求体
app.use(express.json());

// 中间件：解析URL编码的请求体
app.use(express.urlencoded({ extended: true }));

// GET请求 - 获取欢迎信息
app.get('/', (req, res) => {
  res.json({
    message: '欢迎使用Express服务！',
    timestamp: new Date().toISOString(),
    status: 'success'
  });
});

// GET请求 - 获取用户信息
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com' },
    { id: 2, name: '李四', email: 'lisi@example.com' },
    { id: 3, name: '王五', email: 'wangwu@example.com' }
  ];
  
  res.json({
    message: '获取用户列表成功',
    data: users,
    count: users.length
  });
});

// POST请求 - 创建新用户
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  
  // 简单的验证
  if (!name || !email) {
    return res.status(400).json({
      message: '姓名和邮箱是必填项',
      status: 'error'
    });
  }
  
  // 模拟创建新用户
  const newUser = {
    id: Date.now(), // 使用时间戳作为简单ID
    name,
    email,
    createdAt: new Date().toISOString()
  };
  
  res.status(201).json({
    message: '用户创建成功',
    data: newUser,
    status: 'success'
  });
});

// POST请求 - 提交表单数据
app.post('/api/submit', (req, res) => {
  const { title, content } = req.body;
  
  if (!title || !content) {
    return res.status(400).json({
      message: '标题和内容都是必填项',
      status: 'error'
    });
  }
  
  const submission = {
    id: Date.now(),
    title,
    content,
    submittedAt: new Date().toISOString()
  };
  
  res.status(201).json({
    message: '数据提交成功',
    data: submission,
    status: 'success'
  });
});

// 404处理
app.use('*', (req, res) => {
  res.status(404).json({
    message: '请求的路径不存在',
    status: 'error'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`服务器运行在 http://localhost:${PORT}`);
  console.log(`GET 端点:`);
  console.log(`  - http://localhost:${PORT}/ (欢迎页面)`);
  console.log(`  - http://localhost:${PORT}/api/users (获取用户列表)`);
  console.log(`POST 端点:`);
  console.log(`  - http://localhost:${PORT}/api/users (创建新用户)`);
  console.log(`  - http://localhost:${PORT}/api/submit (提交表单数据)`);
}); 