import OpenAI from "openai";
import { DEEPSEEK_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: DEEPSEEK_KEY,
  dangerouslyAllowBrowser: true, // Only for frontend dev (not recommended in production)
});

export default openai;
