"use client";

import { useState } from "react";

const URL_API = "http://localhost:4000/videos";

export default function FormVideo() {
  const [formData, setFormData] = useState({
    titulo: "",
    categoria: "",
    imagem: "",
    url: "",
    descricao: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log("Video successfully uploaded!");
        setFormData({
          titulo: "",
          categoria: "",
          imagem: "",
          url: "",
          descricao: "",
        });
      } else {
        console.error("Failed to upload video");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="h-fit">
      <div className="m-3 flex flex-col md:items-center">
        {/* form */}
        <div>
          <h1 className="font-bold text-white text-center pt-14 pb-4 text-3xl">
            NOVO VÍDEO
          </h1>
          <h2 className="text-sm text-center uppercase">
            Complete o formulário para criar um novo card de vídeo
          </h2>
        </div>
        <form className="flex flex-col gap-3 md:w-1/2" onSubmit={handleSubmit}>
          <div className="border-b-2 border-neutral-700 border-opacity-40 border-t-2 w-full mb-8 mt-4">
            <h1 className="text-left py-4 text-2xl font-bold">Criar Card</h1>
          </div>
          <div className="flex flex-col">
          
            <label htmlFor="titulo">Título</label>
            <input
              type="text"
              name="titulo"
              id="titulo"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="Novo título"
              value={formData.titulo}
              onChange={handleChange}
              required
            />
          </div>
         
          <div className="flex flex-col">
            <label htmlFor="categoria">Categorias</label>
            <select
              name="categoria"
              id="categoria"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              value={formData.categoria}
              onChange={handleChange}
              required
            >
              <option value="" disabled selected>
                Selecione a categoria
              </option>
              <option value="frontend" className="bg-neutral-800">
                Front-End
              </option>
              <option value="backend" className="bg-neutral-800">
                Back-End
              </option>
              <option value="mobile" className="bg-neutral-800">
                Mobile
              </option>
            </select>
          </div>
       
          <div className="flex flex-col">
            <label htmlFor="imagem">Imagem</label>
            <input
              type="url"
              name="imagem"
              id="imagem"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="url da imagem"
              value={formData.imagem}
              onChange={handleChange}
              required
            />
          </div>
       
          <div className="flex flex-col">
            <label htmlFor="url">Vídeo</label>
            <input
              type="url"
              name="url"
              id="url"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="url do vídeo"
              value={formData.url}
              onChange={handleChange}
              required
            />
          </div>
        
          <div className="flex flex-col">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              name="descricao"
              id="descricao"
              className="border-2 p-2 rounded-xl bg-transparent border-neutral-700 h-20 mb-3 resize-none"
              placeholder="nova descrição"
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              required
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
              onClick={() =>
                setFormData({
                  titulo: "",
                  categoria: "",
                  imagem: "",
                  url: "",
                  descricao: "",
                })
              }
            >
              Limpar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
