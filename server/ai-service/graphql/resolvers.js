const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

dotenv.config();

const resolvers = {
    Query: {
        analyzeSentiment: async (_, { reviews }, { user, genAI }) => {
            // if (!user) {
            //     throw new Error("Unauthorized access. Please log in.");
            // }
            if (reviews.length === 0){
                return "No reviews";
            }
            const response = await genAI.models.generateContent({
                model: "gemini-2.0-flash",
                contents: `
                    Analyze the sentiment of the following reviews and provide a short summary.
                    Provide only a paragraph summarizing the sentiment of the reviews with no other characters or text.
                    ${reviews.join('\n')}
                `
            });
            return response.text;
        }
    }
}

module.exports = { resolvers };