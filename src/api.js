import axios from "axios";

const instance = axios.create({
  baseURL: "https://naras-api.vercel.app/",
});

export async function fetchCountries() {
  try {
    const response = await instance.get("/all");
    console.log("api", response.data);
    return response.data;
  } catch (e) {
    return [];
  }
}

export async function fetchSearchResults(q) {
  try {
    const { data } = await instance.get(`/search?q=${q}`);
    return data;
  } catch (e) {
    return [];
  }
}
