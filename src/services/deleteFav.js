import { ENDPOINT } from "./settings";

export default async function deleteFav({ id }) {
  const response = await fetch(`${ENDPOINT}/favs/${id}`, {
    method: "DELETE",
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
