import React from 'react';
import  { useState } from 'react';
import { useRef } from "react";

function InputPage() {

    const inputRef = useRef(null);
    const [namesList, setNamesList] = useState([]);

    const addName = () => {
        const name = inputRef.current.value;
        if (name) {
            setNamesList([...namesList, name]);
            inputRef.current.value = '';
        }
    };

    const changeName = (index) => {
        const name = inputRef.current.value;
        if (name) {
            const newNamesList = [...namesList];
            newNamesList[index] = name;
            setNamesList(newNamesList);
        }
    };

    return (
        <div>
            <h2>Список</h2>
            <input type="text" ref={inputRef} placeholder="Введите имя"/>
            <button
                onClick={addName}
                disabled={!inputRef.current || !inputRef.current.value}
            >Добавить</button>

            {namesList.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <ul>
                    {namesList.map((item, index) => (
                        <li key={index}>
                            {item}
                            <button
                                onClick={() => changeName(index)}
                                disabled={!inputRef.current || !inputRef.current.value}
                            >
                                Поменять
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default InputPage;