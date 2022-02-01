import { ENDPOINT } from "./settings";

export default async function addFav({ id, jwt }) {
  const response = await fetch(`${ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ jwt })
  });
  if (!response.ok)
    throw new Error("Response is NOT ok");
  const body = await response.json();
  const { favs } = body;
  return favs;
}
