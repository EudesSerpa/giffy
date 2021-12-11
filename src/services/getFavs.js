import { ENDPOINT} from './settings';

export default function getFavs({ jwt }) {
    return fetch(`${ENDPOINT}/favs`, {
        method: 'GET',
        headers: {
            "Authorization": jwt,
            "Content-Type": "application/json",
        }
    }).then(response => {
        if(!response.ok) throw new Error('Response is NOT ok');

        return response.json();
    }).then(response => {
        const { favs } = response;

        return favs;
    })
}