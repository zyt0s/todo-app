import { useState } from "react";

import TodoItem from "./TodoItem.jsx";

export default function TodoContainer(){
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const addItem = () => {
    if(input.trim() === "") return;
    
    setItems([...items, input]);
    setInput("");

    console.log(items);
  }

  const removeItem = (item) => {
    setItems(items.filter((_, index) => index !== item));
  }

  return(
    <>
      <div className="w-1/4 flex flex-col justify-center p-10 border-2">
        <h1 className="text-4xl border-2 p-4 text-center">TODO-List</h1>
        <div className="mt-2">
          <input className="border-2 w-1/2 h-10 text-2xl" 
            type="text" 
            placeholder="new TODO"
            value={input}
            onChange={(e) => setInput(e.target.value)}/>
          <button 
            className="border-2 w-1/2 h-10 text-2xl"
            onClick={addItem}
          >Create</button>
        </div>
        <div>
          {items.map((item, index) => (
          <TodoItem key={index} title={item} onDelete={() => removeItem(index)} />
          ))}
        </div>
      </div>
    </>
  );
}
