"use client"
import { useState } from "react";
import { TodoItem } from "@/types/TodoItem";

const Page = () => {

  const [list, setList] = useState<TodoItem[]>([
    {label: 'Fazer trabalho escolar', checked: false},
    {label: 'Estudar', checked: true},
    {label: 'Fazer compras', checked: false}
  ]);

  return (
    <div className="w-screen h-screen flex flex-col justify-center
    items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <h1 className="text-4xl mt-5">Lista Tarefa</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-grayt-700">
        <input 
          type="text"
          placeholder="O que deseja fazer?"
          className="felx-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        />

        <button>Adicionar</button>
      </div>

      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item => (
          <li>{item.label} - <button className="hover:underline text-red-700 font-bold">[ deletar ]</button></li>
        ))}
      </ul>
    </div>
  )
}

export default Page;