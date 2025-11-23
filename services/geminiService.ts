import { GoogleGenAI, Type } from "@google/genai";
import { AIResponse } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize client securely. In a real app, this should be proxied through a backend
// to avoid exposing the key, but for this demo/frontend-only task, we use env.
const ai = new GoogleGenAI({ apiKey });

export const generateMatchmakingSuggestion = async (
  skills: string,
  interests: string
): Promise<AIResponse> => {
  if (!apiKey) {
    // Return mock data if no key is present for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          projectIdea: "Hyperlocal Food Waste Tracker",
          teamStructure: ["Frontend Developer (React Native)", "Backend Engineer (Go)", "Community Manager"],
          reasoning: "Given your skills in coding and interest in sustainability, this project leverages geolocation to connect local restaurants with food banks."
        });
      }, 1500);
    });
  }

  try {
    const prompt = `
      User Skills: ${skills}
      User Interests: ${interests}

      Act as the ConnectHive AI Matchmaker. Based on the user's skills and interests, suggest:
      1. A creative, hyperlocal collaborative project idea they could build.
      2. The ideal 2-3 person team structure (roles) they need to recruit.
      3. A short sentence on why this fits them.

      Output JSON only.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            projectIdea: { type: Type.STRING },
            teamStructure: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            reasoning: { type: Type.STRING }
          },
          required: ["projectIdea", "teamStructure", "reasoning"]
        }
      }
    });

    const result = JSON.parse(response.text || '{}');
    return result as AIResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to contact the Hive Mind.");
  }
};
