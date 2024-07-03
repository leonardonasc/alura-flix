import { IoMdCloseCircleOutline } from "react-icons/io";

interface IModal {
  isOpen: boolean;
  setOpen: (isOpen: boolean) => void;
}

// fazer o put do modal 

export default function Modal({ isOpen, setOpen }: IModal) {
  if (!isOpen) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 bg-blue-950 bg-opacity-20">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg bg-blue-950 border-4 border-blue-400 w-5/6 md:w-2/4 h-fit">
          <div className="text-right">
            <button onClick={() => setOpen(!isOpen)} className="text-right">
              <IoMdCloseCircleOutline className="text-3xl " />
            </button>
          </div>
          <h1 className="uppercase text-center mb-5">Editar Card:</h1>
          <form className="flex flex-col gap-3">
            <div className="flex flex-col ">
              <label>Título</label>
              <input
                type="text"
                className="border-2 p-2 rounded-md bg-transparent border-blue-400"
                placeholder="Novo título"
              />
            </div>
            <div className="flex flex-col ">
              <label>Categorias</label>
              <select className="border-2 p-2 rounded-md bg-transparent border-blue-400">
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
            {/* imagem */}
            <div className="flex flex-col ">
              <label>Imagem</label>
              <input
                type="url"
                className="border-2 p-2 rounded-md bg-transparent border-blue-400"
                placeholder="url da imagem"
              />
            </div>
            <div className="flex flex-col ">
              <label>Video</label>
              <input
                type="url"
                className="border-2 p-2 rounded-md bg-transparent border-blue-400"
                placeholder="url do vídeo"
              />
            </div>
            <div className="flex flex-col ">
              <label>Descrição</label>
              <textarea
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
  } else {
    return null;
  }
}
