import { ENDPOINT } from "./settings";

export default async function logout() {
  const response = await fetch(`${ENDPOINT}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) throw new Error("Something went wrong");

  return true;
}
