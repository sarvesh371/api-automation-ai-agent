import { ChatOpenAI } from "@langchain/openai";

import dotenv from "dotenv";

dotenv.config();

const llm = new ChatOpenAI();

/**
 * AI-powered response validation.
 * @param {Object} testCase - Expected response structure.
 * @param {Object} response - Actual API response.
 * @returns {Promise<string>} - AI feedback on response correctness.
 */
export const validateResponse = async (testCase, response) => {
    const prompt = `
    You are an API testing assistant.
    Compare the actual API response with the expected response.
    Identify missing fields, incorrect types, or unexpected values.
    
    Expected Response:
    ${JSON.stringify(testCase, null, 2)}
    
    Actual Response:
    ${JSON.stringify(response, null, 2)}
    
    Provide a summary of differences and potential issues.
    `;

    try {
        const aiFeedback = await llm.invoke(prompt);
        return aiFeedback;
    } catch (error) {
        console.error("AI validation failed:", error);
        return "AI validation error.";
    }
};
