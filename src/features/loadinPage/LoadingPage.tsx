import React from "react";

import style from './LoadingPage.module.scss';

const LoadingPage: React.FC = () => {
    return <div className={style.loadingPage}>
        <h2>Loading Page</h2>
        <p>Wait please</p>
    </div>;
};

export default LoadingPage;