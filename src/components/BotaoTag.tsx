interface BotaoNome {
  nome: string;
  cor?: string;
}

export default function BotaoTag({ nome, cor }:BotaoNome) {
  return(
    <h1 className="w-1/3 mt-1 text-center rounded-xl p-4 font-bold md:w-1/2 lg:w-1/6" style={{backgroundColor: cor}}>{nome.toUpperCase()}</h1>
  )
}