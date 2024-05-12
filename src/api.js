import axios from "axios";

const instance = axios.create({
  baseURL: "https://naras-api.vercel.app/",
});

export async function fetchCountries() {
  try {
    const { data } = await instance.get("/all");
    return data;
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

export async function fetchCountry(code) {
  try {
    const { data } = await instance.get(`/code/${code}`);
    return data;
  } catch (e) {
    return null;
  }
}
