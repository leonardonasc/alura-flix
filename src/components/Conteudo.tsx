"use client";
import BotaoTag from "./BotaoTag";
import { useState, useEffect } from "react";
import { CiEdit, CiTrash } from "react-icons/ci";
import Modal from "./Modal";

const URL_API = "https://my-json-server.typicode.com/leonardonasc/alura-flix-api/videos";

interface Video {
  id: number;
  titulo: string;
  categoria: string;
  imagem: string;
  url: string;
  descricao: string;
}

export default function Conteudo() {
  const [data, setData] = useState<Video[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const fetchAllData = async () => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (video: Video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const deleteData = async (id: number) => {
    try {
      setData((prevData) => prevData.filter((video) => video.id !== id));
      const response = await fetch(`${URL_API}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Não foi possível deletar o vídeo.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateVideo = (updatedVideo: Video) => {
    setData((prevData) =>
      prevData.map((video) =>
        video.id === updatedVideo.id ? updatedVideo : video
      )
    );
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  const renderVideos = (categoria: string, borderColor: string) => (
    <ul className="flex overflow-x-scroll lg:overflow-hidden overflow-y-hidden p-3 gap-5 w-full justify-left lg:justify-center">
      {data.map((video) =>
        video.categoria === categoria ? (
          <li key={video.id} className={`flex flex-col flex-shrink-0 border-2 rounded-md min-w-fit ${borderColor}`}>
            <iframe
              width="100%"
              height="315"
              src={video.url}
              title="Video do YouTube"
              allowFullScreen
              className={`border-2 rounded-t-md ${borderColor} w-72 h-auto`}
            />
            <div className="flex justify-center gap-5 p-2 h-fit">
              <button className="flex gap-3 items-center" onClick={() => deleteData(video.id)}>
                <CiTrash />
                Deletar
              </button>
              <button className="flex gap-3 items-center" onClick={() => handleEdit(video)}>
                <CiEdit />
                Editar
              </button>
            </div>
          </li>
        ) : null
      )}
    </ul>
  );

  return (
    <section className="overflow-hidden min-h-screen">
      <section className="flex flex-col h-fit gap-4 p-3 bg-zinc-900 items-center min-h-screen">
        <BotaoTag nome="Front End" cor="#86d0fe" />
        {renderVideos("frontend", "border-sky-400")}
        <BotaoTag nome="Back End" cor="#5ec376" />
        {renderVideos("backend", "border-green-300")}
        <BotaoTag nome="mobile" cor="#f4bb26" />
        {renderVideos("mobile", "border-yellow-400")}
      </section>
      {selectedVideo && (
        <Modal isOpen={open} setOpen={setOpen} video={selectedVideo} updateVideo={updateVideo} />
      )}
    </section>
  );
}
