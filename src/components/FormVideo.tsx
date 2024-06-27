
export default function FormVideo() {
  return (
    <div className="bg-neutral-900 h-screen">
      <div className="m-3 flex flex-col">
        <div className="">
          <h1 className="font-bold text-white text-center pt-14 pb-4 text-3xl">
            NOVO VÍDEO
          </h1>
          <h2 className="text-sm text-center uppercase">
            Complete o formulário para criar um novo card de vídeo
          </h2>
        </div>
        <form className="m-4">
          <div className="border-b-2 border-neutral-700 border-opacity-40 border-t-2 w-3/3 mb-8">
            <h1 className="text-left py-4 text-2xl font-bold">Criar Card</h1>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <label>Título</label>
            <input
              type="text"
              required
              className="border-neutral-800 border-2 p-3 rounded-md bg-neutral-900"
              placeholder="título do vídeo"
            />

            <label>Categorias </label>
            <select
              required
              className="border-neutral-800 border-2 p-3 rounded-md bg-neutral-900"
            >
              <option value="frontend">Front-end</option>
              <option value="backend">Back-end</option>
              <option value="mobile">Mobile</option>
            </select>
          </div>
          {/*  */}
          <div className="flex flex-col">
            <label>Imagem</label>
            <input
              type="url"
              required
              className="border-neutral-800 border-2 p-3 rounded-md bg-neutral-900"
              placeholder="url da imagem"
            />

            <label>Video</label>
            <input
              type="url"
              required
              className="border-neutral-800 border-2 p-3 rounded-md bg-neutral-900"
              placeholder="url do vídeo"
            />
          </div>
          {/*  */}
          <div className="flex flex-col pb-6">
            <label>Descrição</label>
            <textarea
              required
              className="border-neutral-800 border-2 p-3 rounded-md bg-neutral-900"
              placeholder="sobre o que é este vídeo?"
            ></textarea>
          </div>
          <div className="flex flex-col gap-3 items-center">
            <button type="submit" className="bg-none border-blue-700 border-2 w-2/3 p-3 rounded-lg">Salvar</button>
            <button type="reset" className="bg-none border-white border-2 w-2/3 p-3 rounded-lg">Limpar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
