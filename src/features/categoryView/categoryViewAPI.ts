import axios from "axios";

export function getCategory(id: string) {
    return new Promise<{ data: any }>((resolve, reject) =>
        axios.get(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error);
        })
    );
}
