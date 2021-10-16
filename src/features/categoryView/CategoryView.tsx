import React, {useEffect, useState} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {getCategory} from "./categoryViewAPI";
import style from "./CategoryView.module.scss";
import {Image} from "../../common/Types";
import Card from "./card/Card";

const CategoryView = () => {
    const params:any = useParams();
    const id: string = params && params.id;
    const [data, setData] = useState<Array<Image>>([]);

    const loadCategory = async () => {
        const response = await getCategory(id);
        const data = response && response.data;
        return data ? data : [];
    };

    const onLoadMore = () => {
        loadCategory().then((response) => setData([...data, ...response])).catch((error) => console.log(String(error)));
    };

    useEffect(() => {
        loadCategory().then((response) => setData(response)).catch((error) => console.log(String(error)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const location:any = useLocation();
    const name: any = location && location.state && location.state.name;

    return (
        <div>
            <h2 className={style.title}>
                {name}
            </h2>
            <div className={style.container}>
                {data.map((item: Image, index) => (
                    <Card key={index} item={item}/>
                ))}
            </div>
            <div className={style.loadMoreBox}>
                <button onClick={() => onLoadMore()}>
                    Load more
                </button>
            </div>
        </div>
    );
};

export default CategoryView;