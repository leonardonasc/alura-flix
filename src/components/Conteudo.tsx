"use client";
import BotaoTag from "./BotaoTag";
import { useState, useEffect } from "react";

import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";

const URL_API = "http://localhost:4000/videos";

export default function Conteudo() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<any[]>([]);
  const fetchAllData = async () => {
    try {
      setLoading(true);

      const response = await fetch(URL_API);
      const data = await response.json();

      if (!data) throw "Problema na requisição";
      setData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <section className="overflow-hidden">
      <section className="flex flex-col justify-evenly h-screen p-3 bg-zinc-900 items-center">
        <BotaoTag nome="Front End" cor="#86d0fe" />
        <div className="flex overflow-x-scroll lg:overflow-hidden p-3 gap-5 w-full justify-left lg:justify-center " id="scrollbar1">
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
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="border-2 rounded-t-md border-sky-400 w-72 h-auto"
                    ></iframe>
                    <div className="flex justify-center gap-5 p-2">
                      <button className="flex gap-3 items-center">
                        <CiTrash />
                        Deletar
                      </button>
                      <button className="flex gap-3 items-center">
                        <CiEdit />
                        Editar
                      </button>
                    </div>
                  </li>
            ) : (
              ""
            )
          )}
        </div>

        <BotaoTag nome="Back End" cor="#5ec376" />

        <BotaoTag nome="Mobile" cor="#f4bb26" />
      </section>
    </section>
  );
}

// {loading? (
//   <p>Carregando...</p>
// ) : (
//   data &&
//   data.map((video) => (
//     <BotaoTag
//       key={video.id}
//       nome={video.categoria}
//       cor={video.cor}
//     />
//   ))
// )}
