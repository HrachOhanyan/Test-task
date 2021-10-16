import axios from "axios";

export function loadCategories() {
    return new Promise<{ data: any }>((resolve, reject) =>
        axios.get("https://api.thecatapi.com/v1/categories").then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error);
        })
    );
}
