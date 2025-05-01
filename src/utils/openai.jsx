import OpenAI from "openai";
import { OPENAI_KEY } from "./constant";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true, // Only for frontend dev (not recommended in production)
});

export default openai;
