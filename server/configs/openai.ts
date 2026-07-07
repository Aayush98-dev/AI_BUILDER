// import OpenAI = require("openai");

// const openai = new OpenAI({
//   apiKey: process.env.AI_API_KEY,
//   baseURL: "https://openrouter.ai/api/v1"
// });

// export default openai;

import OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.AI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

export default openai;