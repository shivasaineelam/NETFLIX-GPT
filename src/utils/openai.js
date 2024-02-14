import OpenAI from "openai";
import { api_key } from "./Constants";

const openai = new OpenAI({
  apiKey: api_key,
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default openai;
