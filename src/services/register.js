import { ENDPOINT } from "./settings";

export default async function register({ username, password }) {
  const response = await fetch(`${ENDPOINT}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  if (!response.ok)
    throw new Error("Response is NOT ok");
  return true;
}
