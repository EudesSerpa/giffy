import { ENDPOINT} from './settings';

export default function register({ username, password }) {
    return fetch(`${ENDPOINT}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(response => {
        if(!response.ok) throw new Error('Response is NOT ok');

        return true;
    })
}