// import OpenAI from "openai"

// const openai = new OpenAI({
//   apiKey: process.env.AI_API_KEY!,
//   baseURL: "https://openrouter.ai/api/v1",
// });

// export default openai;

import OpenAI from "openai";

const OpenAIClient = OpenAI as unknown as typeof import("openai").default;

const openai = new OpenAIClient({
  apiKey: process.env.AI_API_KEY!,
  baseURL: "https://openrouter.ai/api/v1",
});

export default openai;