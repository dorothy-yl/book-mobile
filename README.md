# Express 服务

一个简单的Express服务，包含GET和POST请求端点。

## 安装

```bash
npm install
```

## 运行

### 生产环境
```bash
npm start
```

### 开发环境（自动重启）
```bash
npm run dev
```

## API 端点

### GET 请求

1. **欢迎页面**
   - URL: `GET /`
   - 返回欢迎信息和当前时间戳

2. **获取用户列表**
   - URL: `GET /api/users`
   - 返回用户列表数据

### POST 请求

1. **创建新用户**
   - URL: `POST /api/users`
   - 请求体格式：
   ```json
   {
     "name": "用户名",
     "email": "user@example.com"
   }
   ```

2. **提交表单数据**
   - URL: `POST /api/submit`
   - 请求体格式：
   ```json
   {
     "title": "标题",
     "content": "内容"
   }
   ```

## 测试示例

### 使用curl测试GET请求
```bash
# 测试欢迎页面
curl http://localhost:3000/

# 测试获取用户列表
curl http://localhost:3000/api/users
```

### 使用curl测试POST请求
```bash
# 测试创建用户
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name": "测试用户", "email": "test@example.com"}'

# 测试提交表单
curl -X POST http://localhost:3000/api/submit \
  -H "Content-Type: application/json" \
  -d '{"title": "测试标题", "content": "测试内容"}'
```

## 端口

默认端口：3000

可以通过环境变量 `PORT` 修改端口：
```bash
PORT=8080 npm start
``` 