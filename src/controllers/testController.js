import axios from "axios";
import { validateResponse } from "../services/aiAssertions.js";

export const executeTest = async (req, res, next) => {
    const { method, url, headers, body, expectedResponse } = req.body;

    try {
        const response = await axios({ method, url, headers, data: body });

        // AI-Powered Response Validation
        const aiFeedback = await validateResponse(expectedResponse, response.data);

        res.json({
            status: response.status,
            data: response.data,
            aiFeedback,
        });
    } catch (error) {
        next(error);
    }
};
