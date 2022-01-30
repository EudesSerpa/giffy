import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data = [] } = apiResponse;

  if (Array.isArray(data)) {
    const gifs = data.map((image) => {
      const { images, title, id } = image;
      const { url } = images.downsized_medium;
      return { title, id, url };
    });

    return gifs;
  }

  return [];
};

export default function getGifs({
  limit = 15,
  keyword = "Pokemon",
  rating = "g",
  language = "en",
  page = 0,
} = {}) {
  const APIURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${
    page * limit
  }&rating=${rating}&lang=${language}`;

  return fetch(APIURL)
    .then((response) => response.json())
    .then(fromApiResponseToGifs);
}
