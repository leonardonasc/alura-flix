"use client";
import BotaoTag from "./BotaoTag";
import { useState, useEffect } from "react";
import { CiEdit } from "react-icons/ci";
import { CiTrash } from "react-icons/ci";
import Modal from "./Modal";

const URL_API = "http://localhost:4000/videos";

export default function Conteudo() {
  const [data, setData] = useState<any[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [selectedVideo, setSelectedVideo] = useState<any | null>(null);

  const fetchAllData = async () => {
    try {
      const response = await fetch(URL_API);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (video: any) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const deleteData = async (id: any) => {
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

  const updateVideo = (updatedVideo: any) => {
    setData((prevData) =>
      prevData.map((video) => (video.id === updatedVideo.id ? updatedVideo : video))
    );
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <section className="overflow-hidden min-h-screen">
      <section className="flex flex-col h-fit gap-4 p-3 bg-zinc-900 items-center min-h-screen">
        <BotaoTag nome="Front End" cor="#86d0fe" />
        <div
          className="flex overflow-x-scroll lg:overflow-hidden overflow-y-hidden p-3 gap-5 w-full justify-left lg:justify-center"
          id="scrollbar1"
        >
          {data.map((video) =>
            video.categoria === "frontend" ? (
              <li
                key={video.id}
                className="flex flex-col flex-shrink-0 border-2 rounded-md min-w-fit border-sky-400 "
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title="Video do YouTube"
                  allowFullScreen
                  className="border-2 rounded-t-md border-sky-400 w-72 h-auto"
                />
                <div className="flex justify-center gap-5 p-2 h-fit">
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => deleteData(video.id)}
                  >
                    <CiTrash />
                    Deletar
                  </button>
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => handleEdit(video)}
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

        <div
          className="flex overflow-x-scroll lg:overflow-hidden overflow-y-hidden p-3 gap-5 w-full justify-left lg:justify-center"
          id="scrollbar1"
        >
          {data.map((video) =>
            video.categoria === "backend" ? (
              <li
                key={video.id}
                className="flex flex-col flex-shrink-0 border-2 rounded-md min-w-fit border-green-300"
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title="Video do YouTube"
                  allowFullScreen
                  className="border-2 rounded-t-md border-green-400 w-72 h-auto"
                />
                <div className="flex justify-center gap-5 p-2 h-fit">
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => deleteData(video.id)}
                  >
                    <CiTrash />
                    Deletar
                  </button>
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => handleEdit(video)}
                  >
                    <CiEdit />
                    Editar
                  </button>
                </div>
              </li>
            ) : null
          )}
        </div>

        <BotaoTag nome="mobile" cor="#f4bb26" />
        <div
          className="flex overflow-x-scroll lg:overflow-hidden overflow-y-hidden p-3 gap-5 w-full justify-left lg:justify-center"
          id="scrollbar1"
        >
          {data.map((video) =>
            video.categoria === "mobile" ? (
              <li
                key={video.id}
                className="flex flex-col flex-shrink-0 border-2 rounded-md min-w-fit border-yellow-400 "
              >
                <iframe
                  width="100%"
                  height="315"
                  src={video.url}
                  title="Video do YouTube"
                  allowFullScreen
                  className="border-2 rounded-t-md border-yellow-400 w-72 h-auto"
                />
                <div className="flex justify-center gap-5 p-2 h-fit">
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => deleteData(video.id)}
                  >
                    <CiTrash />
                    Deletar
                  </button>
                  <button
                    className="flex gap-3 items-center"
                    onClick={() => handleEdit(video)}
                  >
                    <CiEdit />
                    Editar
                  </button>
                </div>
              </li>
            ) : null
          )}
        </div>
      </section>
      {selectedVideo && (
        <Modal
          isOpen={open}
          setOpen={setOpen}
          video={selectedVideo}
          updateVideo={updateVideo}
        />
      )}
    </section>
  );
}
