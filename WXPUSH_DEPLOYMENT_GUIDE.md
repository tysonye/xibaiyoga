# Cloudflare Workers 部署 wxpush 详细指南

## 准备工作

### 1. 注册/登录 Cloudflare 账户
- 访问 [Cloudflare 官网](https://dash.cloudflare.com/) 注册或登录账户
- 确保账户已添加至少一个网站（可使用任意域名，无需实际拥有）

### 2. 准备微信公众号信息
需要以下微信公众号信息：
- **AppID**：微信公众号的 AppID
- **AppSecret**：微信公众号的 AppSecret
- **模板消息 ID**：用于发送预约通知的模板 ID
- **用户 OpenID**：接收通知的微信用户 OpenID

#### 如何获取微信公众号信息
1. 登录 [微信公众平台](https://mp.weixin.qq.com/)
2. **AppID** 和 **AppSecret**：开发 → 基本配置 → 开发者ID
3. **模板消息 ID**：功能 → 模板消息 → 添加模板 → 获取模板 ID
4. **用户 OpenID**：开发 → 开发者工具 → 网页调试工具 → 获取用户 OpenID

#### 推荐模板消息内容
```
{{first.DATA}}
预约人：{{keyword1.DATA}}
手机号：{{keyword2.DATA}}
课程类型：{{keyword3.DATA}}
预约日期：{{keyword4.DATA}}
{{remark.DATA}}
```

## 部署步骤

### 步骤 1：创建 Cloudflare Worker

1. 登录 Cloudflare 控制台
2. 点击左侧菜单 **Workers 和 Pages**
3. 点击 **创建应用程序** → **创建 Worker**
4. 为 Worker 命名（如：`xibaiyoga-wxpush`）
5. 点击 **部署**

### 步骤 2：编辑 Worker 代码

1. 部署完成后，点击 **编辑代码**
2. 删除默认代码，粘贴以下 wxpush 核心代码：

```javascript
// wxpush Cloudflare Worker 核心代码
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  try {
    const url = new URL(request.url);
    if (url.pathname !== '/wxsend') {
      return new Response('Not Found', { status: 404 });
    }

    let data;
    let token;

    // 处理 GET 请求
    if (request.method === 'GET') {
      token = url.searchParams.get('token');
      const title = url.searchParams.get('title');
      const content = url.searchParams.get('content');
      data = { title, content };
    }
    // 处理 POST 请求
    else if (request.method === 'POST') {
      // 从请求头获取 token
      token = request.headers.get('Authorization');
      if (token && token.startsWith('Bearer ')) {
        token = token.substring(7);
      }
      // 从 JSON 体获取数据
      data = await request.json();
    }
    else {
      return new Response('Method Not Allowed', { status: 405 });
    }

    // 验证 token
    const expectedToken = SECRETS.API_TOKEN;
    if (token !== expectedToken) {
      return new Response('Unauthorized', { status: 401 });
    }

    // 获取微信配置
    const appid = data.appid || SECRETS.WX_APPID;
    const secret = data.secret || SECRETS.WX_SECRET;
    const userid = data.userid || SECRETS.WX_USERID;
    const templateId = data.template_id || SECRETS.WX_TEMPLATE_ID;
    const baseUrl = data.base_url || SECRETS.WX_BASE_URL || '';

    // 获取 Access Token
    const accessToken = await getAccessToken(appid, secret);

    // 发送模板消息
    const result = await sendTemplateMessage(accessToken, userid, templateId, baseUrl, data.title, data.content);

    return new Response(JSON.stringify({ success: true, result }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}

// 获取微信 Access Token
async function getAccessToken(appid, secret) {
  const url = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`;
  const response = await fetch(url);
  const data = await response.json();
  if (data.errcode) {
    throw new Error(`获取 Access Token 失败: ${data.errmsg}`);
  }
  return data.access_token;
}

// 发送模板消息
async function sendTemplateMessage(accessToken, userid, templateId, baseUrl, title, content) {
  const url = `https://api.weixin.qq.com/cgi-bin/message/template/send?access_token=${accessToken}`;
  
  // 构建模板消息数据
  const message = {
    touser: userid,
    template_id: templateId,
    url: baseUrl,
    data: {
      first: {
        value: title,
        color: '#173177'
      },
      keyword1: {
        value: content,
        color: '#173177'
      },
      remark: {
        value: '请及时处理预约请求',
        color: '#173177'
      }
    }
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(message)
  });
  
  const result = await response.json();
  if (result.errcode && result.errcode !== 0) {
    throw new Error(`发送模板消息失败: ${result.errmsg}`);
  }
  return result;
}
```

3. 点击 **保存并部署**

### 步骤 3：设置环境变量

1. 返回 Worker 详情页
2. 点击 **设置** → **变量**
3. 点击 **添加变量**，添加以下环境变量：

| 变量名 | 类型 | 值 | 加密 |
|-------|------|-----|------|
| `API_TOKEN` | 文本 | 自定义安全令牌（如：`your_secure_token_123`） | ✅ 勾选 |
| `WX_APPID` | 文本 | 微信公众号 AppID | ✅ 勾选 |
| `WX_SECRET` | 文本 | 微信公众号 AppSecret | ✅ 勾选 |
| `WX_USERID` | 文本 | 接收通知的微信用户 OpenID | ✅ 勾选 |
| `WX_TEMPLATE_ID` | 文本 | 微信模板消息 ID | ✅ 勾选 |
| `WX_BASE_URL` | 文本 | 点击通知跳转的 URL（如：`https://xibai.xin`） | ✅ 勾选 |

4. 点击 **保存**

### 步骤 4：测试 Worker

1. 复制 Worker 访问地址（如：`https://xibaiyoga-wxpush.your-account.workers.dev`）
2. 使用浏览器或 Postman 测试：

#### GET 请求测试
```
https://xibaiyoga-wxpush.your-account.workers.dev/wxsend?token=your_secure_token_123&title=测试通知&content=这是一条测试通知
```

#### POST 请求测试
```
POST https://xibaiyoga-wxpush.your-account.workers.dev/wxsend
Authorization: your_secure_token_123
Content-Type: application/json

{
  "title": "测试通知",
  "content": "这是一条测试通知"
}
```

3. 检查微信是否收到通知

## 集成到预约表单

### 步骤 1：修改预约表单组件

修改 `BookingForm.tsx` 组件，添加 wxpush 调用逻辑：

```typescript
// BookingForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  if (!validateForm()) {
    return;
  }
  
  setIsSubmitting(true);
  
  try {
    // 收集表单数据
    const formData = {
      name: formData.name,
      phone: formData.phone,
      course: formData.course,
      date: formData.date
    };
    
    // 调用 wxpush API
    const wxpushUrl = 'https://xibaiyoga-wxpush.your-account.workers.dev/wxsend';
    const apiToken = 'your_secure_token_123';
    
    // 构建通知内容
    const title = '新的瑜伽课程预约';
    const content = `预约人：${formData.name}\n手机号：${formData.phone}\n课程：${formData.course}\n日期：${formData.date}`;
    
    // 发送 POST 请求
    const response = await fetch(wxpushUrl, {
      method: 'POST',
      headers: {
        'Authorization': apiToken,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    });
    
    const result = await response.json();
    if (!result.success) {
      console.error('微信通知发送失败:', result.error);
    }
    
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '', course: '', date: '' });
    setErrors({});
    
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  } catch (error) {
    console.error('提交失败:', error);
  } finally {
    setIsSubmitting(false);
  }
};
```

### 步骤 2：测试预约流程

1. 在本地运行网站：`npm run dev`
2. 访问 `http://localhost:3000`
3. 填写预约表单并提交
4. 检查微信是否收到预约通知

## 高级配置

### 支持多用户接收通知

修改环境变量 `WX_USERID`，使用 `|` 分隔多个 OpenID：
```
openid1|openid2|openid3
```

### 增强错误处理

在 Worker 代码中添加更详细的日志记录：

```javascript
// 在 handleRequest 函数中添加
console.log('请求详情:', {
  method: request.method,
  url: request.url,
  data: data,
  token: token ? '***' : '未提供'
});
```

### 监控与日志

1. 在 Cloudflare Worker 详情页，点击 **日志**
2. 查看实时请求日志和错误信息
3. 点击 **分析** 查看请求统计

## 常见问题排查

### 1. 无法获取 Access Token
- 检查 `WX_APPID` 和 `WX_SECRET` 是否正确
- 确认公众号已认证（服务号）
- 检查 IP 白名单设置（开发 → 基本配置 → IP 白名单）

### 2. 模板消息发送失败
- 检查 `WX_TEMPLATE_ID` 是否正确
- 确认模板消息字段与代码中的字段匹配
- 检查 `WX_USERID` 是否正确

### 3. Worker 返回 401 Unauthorized
- 检查请求中的 `token` 是否与 `API_TOKEN` 匹配
- 确认 `API_TOKEN` 已正确设置

### 4. 预约表单提交成功但未收到通知
- 检查浏览器控制台是否有错误
- 检查 Cloudflare Worker 日志
- 检查微信公众号模板消息发送记录

## 安全建议

1. **保护 API Token**：不要在前端代码中硬编码 API Token（建议使用后端代理）
2. **限制 IP 访问**：在 Cloudflare Worker 中添加 IP 白名单
3. **启用 HTTPS**：确保所有请求使用 HTTPS
4. **定期更换 Token**：定期更新 `API_TOKEN` 增强安全性
5. **监控请求量**：设置请求量告警，防止滥用

## 总结

通过以上步骤，您已成功部署了基于 Cloudflare Workers 的 wxpush 服务，并集成到了瑜伽网站的预约表单中。现在，当用户提交预约时，您将立即收到微信通知，提高了预约处理效率。

如需进一步定制或遇到问题，请参考：
- [Cloudflare Workers 文档](https://developers.cloudflare.com/workers/)
- [微信公众平台开发文档](https://developers.weixin.qq.com/doc/)
- [wxpush GitHub 仓库](https://github.com/frankiejun/wxpush)
