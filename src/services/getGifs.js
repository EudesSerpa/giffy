
const APIKEY = "xiwf6ZdXNwezA2F4qVqVeKD9Pc7SUK2t";

export default function getGifs({ keyword = 'One Piece'} = {}) {
    const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keyword}&limit=12&offset=0&rating=g&lang=en`;

    return fetch(APIURL)
        .then(response => response.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => {
                const { images, title, id } = image
                const { url } = images.downsized_medium

                return { title, id, url };
            });

            return gifs;
        });
}