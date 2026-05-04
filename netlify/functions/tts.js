exports.handler = async (event) => {
  const text = (event.queryStringParameters?.text || "").slice(0, 190).trim();

  if (!text) {
    return { statusCode: 400, body: "Missing text" };
  }

  const url = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=nl&q=${encodeURIComponent(text)}`;
  const response = await fetch(url, {
    headers: {
      "User-Agent": "Mozilla/5.0",
      "Accept": "audio/mpeg,audio/*;q=0.9,*/*;q=0.8"
    }
  });

  if (!response.ok) {
    return { statusCode: response.status, body: "TTS request failed" };
  }

  const audio = Buffer.from(await response.arrayBuffer());
  if (audio.length < 1000) {
    return { statusCode: 502, body: "TTS response was empty" };
  }

  return {
    statusCode: 200,
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=31536000, immutable"
    },
    body: audio.toString("base64"),
    isBase64Encoded: true
  };
};
