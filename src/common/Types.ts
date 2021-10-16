export interface Category {
    id: string;
    name: string;
}

export interface Image {
    breeds: Array<{}>;
    categories: Array<Category>;
    height: number;
    id: string;
    url: string;
    width: number;
}