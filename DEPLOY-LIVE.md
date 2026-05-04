# 今天上线版发布说明

今天上线请使用轻量完整功能版：`publish-live` + `netlify/functions/tts.js`。

这个版本不上传几百 MB 本地音频，而是通过 Netlify Function 代理荷兰语发音：

- App 文件在 `publish-live`
- 发音接口在 `netlify/functions/tts.js`
- Netlify 配置在 `netlify.toml`

## 重要

不要只把 `publish-live` 拖到 Netlify Drop。拖拽静态文件夹通常只发布静态文件，发音接口可能不会一起上线。

要让发音正常，请用下面任一方式：

1. GitHub 连接 Netlify：上传整个项目根目录，让 Netlify 按 `netlify.toml` 发布。
2. Netlify CLI：在项目根目录运行部署，让 Netlify 同时上传 `publish-live` 和 `netlify/functions`。

上线后，安卓手机访问你的 HTTPS 地址，发音会优先请求：

`/.netlify/functions/tts`

这样手机不需要荷兰语语音包，也不用直接访问 Google Translate。
