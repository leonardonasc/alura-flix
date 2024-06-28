export default function FormVideo() {
  return (
    <div className=" h-fit">
      <div className="m-3 flex flex-col md:items-center">
        <div>
          <h1 className="font-bold text-white text-center pt-14 pb-4 text-3xl">
            NOVO VÍDEO
          </h1>
          <h2 className="text-sm text-center uppercase">
            Complete o formulário para criar um novo card de vídeo
          </h2>
        </div>
        {/* form */}
        <form className="flex flex-col gap-3 md:w-1/2 ">
          <div className="border-b-2 border-neutral-700 border-opacity-40 border-t-2 w-3/3 mb-8 mt-4">
            <h1 className="text-left py-4 text-2xl font-bold">Criar Card</h1>
          </div>
          <div className="flex flex-col">
            {/* titulo */}
            <label>Título</label>
            <input
              type="text"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="Novo título"
            />
          </div>
          {/* categorias */}
          <div className="flex flex-col ">
            <label>Categorias</label>
            <select className="border-2 p-2 rounded-md bg-transparent border-neutral-700">
              <option value="frontend" className="bg-neutral-800">
                Front-end
              </option>
              <option value="backend" className="bg-neutral-800">
                Back-end
              </option>
              <option value="mobile" className="bg-neutral-800">
                Mobile
              </option>
            </select>
          </div>
          {/* imagem */}
          <div className="flex flex-col ">
            <label>Imagem</label>
            <input
              type="url"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="url da imagem"
            />
          </div>
          {/* video */}
          <div className="flex flex-col ">
            <label>Video</label>
            <input
              type="url"
              className="border-2 p-2 rounded-md bg-transparent border-neutral-700"
              placeholder="url do vídeo"
            />
          </div>
          {/* descricao */}
          <div className="flex flex-col ">
            <label>Descrição</label>
            <textarea
              className="border-2 p-2 rounded-xl bg-transparent border-neutral-700 h-20 mb-3 resize-none"
              placeholder="nova descrição"
              rows={4}
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
