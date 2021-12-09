const ENDPOINT = 'http://localhost:8000';

export default function login({ username, password }) {
    return fetch(`${ENDPOINT}/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(response => {
        if(!response.ok) throw new Error('Response is NOT ok');

        return response.json();
    }).then(response => {
        const { jwt } = response;

        return jwt;
    })
}