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
                disabled={!inputRef.current}
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
                                disabled={ !inputRef.current}
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
//
// import React, { useState } from 'react';
//
// function App() {
//     // Состояния
//     const [name, setName] = useState('');
//     const [namesList, setNamesList] = useState([]);
//
//     // Функция для добавления имени в список
//     const addName = () => {
//         if (name) {
//             setNamesList([...namesList, name]);
//             setName(''); // Очищаем поле ввода
//         }
//     };
//
//     // Функция для изменения имени
//     const changeName = (index) => {
//         if (name) {
//             const newNamesList = [...namesList];
//             newNamesList[index] = name;
//             setNamesList(newNamesList);
//         }
//     };
//
//     return (
//         <div>
//             <h1>Список имен</h1>
//
//             {/* Поле ввода и кнопка добавить */}
//             <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Введите имя"
//             />
//             <button
//                 onClick={addName}
//                 disabled={!name}
//             >
//                 Добавить
//             </button>
//
//             {/* Проверка на пустой список */}
//             {namesList.length === 0 ? (
//                 <p>Список пуст</p>
//             ) : (
//                 <ul>
//                     {namesList.map((item, index) => (
//                         <li key={index}>
//                             {item}
//                             <button
//                                 onClick={() => changeName(index)}
//                                 disabled={!name}
//                             >
//                                 Поменять
//                             </button>
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// }
//
// export default App;
