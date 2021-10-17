import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';

import {getCategory} from "./categoryViewAPI";
import style from "./CategoryView.module.scss";
import {Image, ProcessState} from "../../common/Types";
import Card from "./card/Card";

const CategoryView = () => {
    const params:any = useParams();
    const id: string = params && params.id;
    const [data, setData] = useState<Array<Image>>([]);

    const [processState, setProcessState] = useState<ProcessState>(ProcessState.None);

    const loadCategory = async () => {
        const response = await getCategory(id);
        const data = response && response.data;
        return data ? data : [];
    };

    const onLoadMore = () => {
        loadCategory().then((response) => setData([...data, ...response])).catch((error) => console.log(String(error)));
    };

    useEffect(() => {
        setProcessState(ProcessState.Loading);
        loadCategory().then((response) => {
            setProcessState(ProcessState.Sucsess);
            setData(response);
        }).catch((error) => {
            setProcessState(ProcessState.Error);
            console.log(String(error))
        });
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
                {processState === ProcessState.Loading ? <div className={style.loading}>Loading...</div> :
                    data.map((item: Image, index) => (
                    <Card key={index} item={item}/>
                ))}
            </div>
            <div className={style.loadMoreBox}>
                {!(processState === ProcessState.Loading) && <button onClick={() => onLoadMore()}>
                    Load more
                </button>
                }
            </div>
        </div>
    );
};

export default CategoryView;