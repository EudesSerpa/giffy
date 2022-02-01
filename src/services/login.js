import { ENDPOINT } from "./settings";

export default async function login({ username, password }) {
  const response = await fetch(`${ENDPOINT}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  });
  if (!response.ok)
    throw new Error("Response is NOT ok");
  const body = await response.json();
  const { jwt } = body;
  return jwt;
}
