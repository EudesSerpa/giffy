import { ENDPOINT } from "./settings";

export default async function getFavs({ jwt }) {
  const response = await fetch(`${ENDPOINT}/favs`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    }
  });
  if (!response.ok)
    throw new Error("Response is NOT ok");
  const body = await response.json();
  const { favs } = body;
  return favs;
}
