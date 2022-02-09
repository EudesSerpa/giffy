import { ENDPOINT } from "./settings";

export default async function addFav({ id }) {
  const response = await fetch(`${ENDPOINT}/favs/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  if (!response.ok) throw new Error(response.error);

  const body = await response.json();
  const { data } = body;

  return data.map((fav) => fav.favId);
}
