import { useSelector } from "react-redux";
import React from "react";
import ListItem from "./ListItem";

export default function List({ type }) {
    const { filteredList } = useSelector((state) => state.facts);
    const { gallery } = useSelector((state) => state.images);
    const list = type === "facts" ? filteredList : gallery;

    return (
        <React.Fragment>
            <ul className={type + "_list"}>
                {list && list.map((o) => (
                    <ListItem key={o.id} element={o} className={type + "_list"} />
                ))}
            </ul>
        </React.Fragment>
    );
};