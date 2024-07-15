import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
  video: any;
  updateVideo: (updatedVideo: any) => void;
}

export default function Modal({ isOpen, setOpen, video, updateVideo }: IModal) {
  const [titulo, setTitulo] = useState(video.titulo);
  const [categoria, setCategoria] = useState(video.categoria);
  const [imagem, setImagem] = useState(video.imagem);
  const [urlVideo, setUrlVideo] = useState(video.url);
  const [descricao, setDescricao] = useState(video.descricao);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://my-json-server.typicode.com/leonardonasc/alura-flix-api/videos/${video.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          titulo,
          categoria,
          imagem,
          url: urlVideo,
          descricao,
        }),
      });

      if (!response.ok) {
        throw new Error("Não foi possível editar o vídeo.");
      }

      updateVideo({
        id: video.id,
        titulo,
        categoria,
        imagem,
        url: urlVideo,
        descricao,
      });

      setOpen(false);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao editar o vídeo.");
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-950 bg-opacity-20">
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg bg-blue-950 border-4 border-blue-400 w-5/6 md:w-2/4 h-fit">
        <div className="text-right">
          <button onClick={() => setOpen(!isOpen)} className="text-right">
            <IoMdCloseCircleOutline className="text-3xl " />
          </button>
        </div>
        <h1 className="uppercase text-center mb-5">Editar Card:</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="flex flex-col ">
            <label>Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="border-2 p-2 rounded-md bg-transparent border-blue-400"
              placeholder="Novo título"
            />
          </div>
          <div className="flex flex-col ">
            <label>Categorias</label>
            <select
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              className="border-2 p-2 rounded-md bg-transparent border-blue-400"
            >
              <option value="frontend" className="bg-blue-950">
                Front-End
              </option>
              <option value="backend" className="bg-blue-950">
                Back-End
              </option>
              <option value="mobile" className="bg-blue-950">
                Mobile
              </option>
            </select>
          </div>
          <div className="flex flex-col ">
            <label>Imagem</label>
            <input
              type="url"
              value={imagem}
              onChange={(e) => setImagem(e.target.value)}
              className="border-2 p-2 rounded-md bg-transparent border-blue-400"
              placeholder="url da imagem"
            />
          </div>
          <div className="flex flex-col ">
            <label>Video</label>
            <input
              type="url"
              value={urlVideo}
              onChange={(e) => setUrlVideo(e.target.value)}
              className="border-2 p-2 rounded-md bg-transparent border-blue-400"
              placeholder="url do vídeo"
            />
          </div>
          <div className="flex flex-col ">
            <label>Descrição</label>
            <textarea
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              className="border-2 p-2 rounded-xl bg-transparent border-blue-400 h-20 mb-3 resize-none"
              placeholder="nova descrição"
              rows={9}
            />
          </div>
          <div className="flex items-center gap-4 flex-col">
            <button
              type="submit"
              className="bg-black border-blue-700 border-2 p-3 rounded-lg w-2/4"
            >
              Salvar
            </button>
            <button
              type="reset"
              className="bg-none border-white border-2 p-3 rounded-lg w-2/4"
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
