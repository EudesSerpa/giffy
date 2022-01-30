import { API_KEY, API_URL } from "./settings";

const fromApiResponseToGifs = (apiResponse) => {
  return apiResponse.data;
};

export default function getTrendingTerms() {
  const APIURL = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(APIURL)
    .then((response) => response.json())
    .then(fromApiResponseToGifs);
}
