import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  const { data } = apiResponse;
  const { images, title, id } = data;
  const { url } = images.downsized_medium;

  return { title, id, url };
};

export default async function getSingleGif({ id }) {
  const response = await fetch(`${API_URL}/gifs/${id}?api_key=${API_KEY}`);
  const apiResponse = await response.json();
  return fromApiResponseToGifs(apiResponse);
}
