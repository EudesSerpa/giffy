import { ENDPOINT } from "./settings";

export default async function deleteFav({ id, jwt }) {
  const response = await fetch(`${ENDPOINT}/favs/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error(response.error);

  const body = await response.json();
  const { data } = body;

  return data.map((fav) => fav.favId);
}
