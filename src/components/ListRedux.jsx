import { useDispatch, useSelector } from "react-redux";

import { addElement, deleteElement, changeDisble } from "../redux/listSlice";

import { Tareas } from "./Tareas";

import { useState } from "react";

export const ListRedux = () => {
  const [inputText, setInputText] = useState("");
  const dipatch = useDispatch();
  const list = useSelector((state) => state.list);

  const addHandler = () => {
    dipatch(addElement({ text: inputText }));
    setInputText("");
  };

  const changeInput = (e) => {
    setInputText(e.target.value);
  };

  const deleteHandler = (i) => {
    dipatch(changeDisble({ id: i }));
    setTimeout(() => {
      dipatch(deleteElement({ id: i }));
    }, 3000);
  };

  return (
    <section>
      <h1 className=" text-3xl text-center">Usando redux</h1>
      <div className=" flex">
        <div className="mr-2 p-2">
          <label>
            Introduce una nueva tarea
            <input
              type="text"
              value={inputText}
              onChange={changeInput}
              className=" border-2 ml-2"
            />
          </label>
        </div>
        <button
          onClick={addHandler}
          className=" bg-gray-700 p-2 rounded-md text-white"
        >
          Agreagar
        </button>
      </div>
      <div>
      {list &&
          list.map((element) => {
            return (
              <Tareas
                key={element.id}
                text={element.text}
                deleteHandler={() => deleteHandler(element.id)}
                disable={element.disable}
              />
            );
          })}
      </div>
    </section>
  );
};
