import axios from "axios";

const instance = axios.create({
    baseURL: `http://localhost:3000`,
});

export const promptOpenAI = async (prompt: string) => {
    const { data } = await instance.post("/api/openai", { prompt });
    return data;
};
