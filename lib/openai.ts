import OpenAI from 'openai';

// 模型常量
export const TTS_MODEL: string = 'tts-1';

// 检查环境变量
if (!process.env.OPENAI_API_KEY) {
  throw new Error('OPENAI_API_KEY 环境变量未设置');
}
const apiKey: string = process.env.OPENAI_API_KEY;
const baseURL: string | undefined = process.env.OPENAI_BASE_URL;

// 只有在实际调用API时才检查API密钥
export const openai: OpenAI = new OpenAI({
  apiKey,
  baseURL, // 添加基础URL配置
  timeout: 60 * 1000, // 60秒超时
  maxRetries: 3, // 最多重试3次
});
