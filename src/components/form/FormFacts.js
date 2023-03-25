import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from 'nanoid';
import { Text, Input } from "./Parts";
import { inputValue, filtered } from "../../store/toolkit";

export default function FormFacts (data) {
    const tooltipeRef = useRef();
    const dispatch = useDispatch();

    const { type } = data;
    let amount;
    const handleInput = (event) => {
        event.preventDefault();
        if (event.target.value < 1 || event.target.value > 5) {
            tooltipeRef.current.style["visibility"] = "visible";
            amount = 0;
            } else {
            tooltipeRef.current.style["visibility"] = "hidden";
            amount = event.target.value;
        }
        dispatch(inputValue(amount));
        dispatch(filtered(amount));
    };

    return (
        <React.Fragment>
            <div>
                <form className={type + "_forms"}>
                    <Input key={nanoid()} onChange={handleInput} name="facts" type="number" max={5} min={1} placeholder={"Введите число от 1 до 5"}></Input>
                </form>
                <Text ref={tooltipeRef} key={nanoid()} className={data.type + "_form_tooltipe tooltipe"} text={"*Выберите число от 1 до 5"}/>
            </div>
        </React.Fragment>
    );
};