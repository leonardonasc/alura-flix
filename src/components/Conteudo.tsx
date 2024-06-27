"use client";
import BotaoTag from "./BotaoTag";
import { useState, useEffect } from "react";

import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const URL_API = "http://localhost:4000/videos";

export default function Conteudo() {
  const [data, setData] = useState<any[]>([]);

  const fetchAllData = async () => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const deleteData = async (id: number) => {
    try {
      const response = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Não foi possível deletar o vídeo.");
      }

      fetchAllData();
    } catch (error) {
      console.log(error);
    }
  };

  const editData = async (id: number, novoTitulo: string) => { 
    try {
      const response = await fetch(`${URL_API}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ titulo: novoTitulo }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível editar o vídeo.");
      }

      fetchAllData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <section className="overflow-hidden">
      <section className="flex flex-col justify-evenly h-screen p-3 bg-zinc-900 items-center">
        <BotaoTag nome="Front End" cor="#86d0fe" />
        <div
          className="flex overflow-x-scroll lg:overflow-hidden p-3 gap-5 w-full justify-left lg:justify-center "
          id="scrollbar1"
        >
          {data.map((video) =>
            video.categoria === "Front End" ? (
              <li
                key={video.id}
                className="flex flex-col flex-shrink-0 border-2 rounded-md min-w-fit border-sky-400"
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title="Video do YouTube"
                  allowFullScreen
                  className="border-2 rounded-t-md border-sky-400 w-72 h-auto"
                />
                <div className="flex justify-center gap-5 p-2">
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => deleteData(video.id)}
                  >
                    <CiTrash />
                    Deletar
                  </button>
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => ""}
                  >
                    <CiEdit />
                    Editar
                  </button>
                </div>
              </li>
            ) : null
          )}
        </div>

        <BotaoTag nome="Back End" cor="#5ec376" />
        <BotaoTag nome="Mobile" cor="#f4bb26" />
      </section>
    </section>
  );
}
