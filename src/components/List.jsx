import { Tareas } from "./Tareas";
import { useState } from "react";

export const ListWork = () => {
  const [listElement, setListElement] = useState([]);
  const [inputText, setInputText] = useState("");
  const [idEl, setidEl] = useState(1);

  const addHandler = () => {
    setListElement([
      ...listElement,
      {
        text: inputText,
        id: idEl,
        diabele: false,
      },
    ]);
    setInputText("");
    setidEl(idEl + 1);
  };

  const changeInput = (e) => {
    setInputText(e.target.value);
  };

  const deleteHandler = (i) => {

    const list = [...listElement]
    const element = list.find(a => a.id === i)

    element.disable=true

    setListElement(list)

    setTimeout(
      () => setListElement(listElement.filter((a) => a.id !== i && a.disable === false)),
      3000
    );
  };
  return (
    <section>
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
      {listElement &&
        listElement.map((element) => {
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
