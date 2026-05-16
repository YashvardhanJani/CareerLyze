"use server";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export async function generateRoadmap(data) {
  try {
    const { career, skills } = data;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
Generate a detailed career roadmap.

Target Career:
${career}

Current Skills:
${skills}

Return ONLY valid JSON.

Use this structure exactly:

{
  "career": "",
  "phases": [
    {
      "title": "",
      "skills": [],
      "tools": [],
      "milestone": ""
    }
  ]
}
`;

    const result = await model.generateContent(prompt);

    const response = result.response;

    const text = response.text();

    const cleanedText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const roadmap = JSON.parse(cleanedText);

    return roadmap;
  } catch (error) {
    console.error("Roadmap Error:", error);

    return {
      error: "Failed to generate roadmap",
    };
  }
}