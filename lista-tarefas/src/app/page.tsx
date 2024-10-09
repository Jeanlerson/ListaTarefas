"use client"
import { useState } from "react";
import { TodoItem } from "@/types/TodoItem";

const Page = () => {

  const [itemInput, setItemInput] = useState('')
  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer trabalho escolar', checked: true}
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() !== '')
    setList([...list, { label: itemInput, checked: false }])
    setItemInput('')
  }

  const deleteItem = (index: number) => {
    setList(list.filter((item, key) => key !== index))
  }

  const toogleItem = (index: number) => {
    let newList = [...list];
    newList[index].checked = !newList[index].checked;
    //for(let i in newList) {
    //  if(index === parseInt(i)) {
    //    newList[i].checked = !newList[i].checked
    //  }
    //}

    setList(newList )
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center
    items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-4xl mt-5">Lista Tarefa</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-grayt-700">
        <input 
          type="text"
          placeholder="O que deseja fazer?"
          className="felx-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}>Adicionar</button>
      </div>

      <p className="my-4">{list.length} itens na lista</p>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map((item, index) => (
          <li key={index} className="flex mb-2">
            <input onClick={() => toogleItem(index)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3"/>
            {item.label} - <button onClick={() => deleteItem(index)} className="hover:underline text-red-700 font-bold ml-1">[ deletar ]</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Page;