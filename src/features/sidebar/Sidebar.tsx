import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";

import style from "./Sidebar.module.scss";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {sidebarCategories, incrementAsync} from "./sidebarSlice";
import {Category} from "../../common/Types";
import {CategoriesRoutes} from "../../App";

const Sidebar: React.FC = () => {
    const categories: Array<Category> = useAppSelector(sidebarCategories);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(incrementAsync());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={style.sidebar}>
            <h3>Test task</h3>
            <ul>
                {categories && categories.map((item: Category, index: number) => (
                    <li key={`${item.name}_${index}`}>
                        <NavLink activeClassName={style.selectedItem}
                            to={{
                            pathname: CategoriesRoutes.CategoryView(item.id),
                            state: {name: item.name}
                        }}>
                            {item?.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;