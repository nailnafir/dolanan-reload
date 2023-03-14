import axios from "axios";

export async function getFeaturedGame() {
    const ROOT_API = process.env.NEXT_PUBLIC_API;
    const API_VERSION = "api/v1";
    const URL_PATH = "players/landing";

    const response = await axios.get(`${ROOT_API}/${API_VERSION}/${URL_PATH}`);
    const result = response.data.data;

    return result;
}