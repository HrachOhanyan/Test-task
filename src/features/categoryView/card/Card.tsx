import React from 'react';

import {Image} from "../../../common/Types";

import style from "./Card.module.scss";

interface CardProps {
    item: Image;
}

const Card: React.FC<CardProps> = (props) => {
    const {item} = props;
    return (
        <div className={style.card}>
            <img src={item.url} style={item.height < item.width ? {height: "100%"} : {width: "100%"}} alt="..."/>
        </div>
    );
};

export default Card;