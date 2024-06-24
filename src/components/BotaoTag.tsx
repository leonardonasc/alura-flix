interface BotaoNome {
  nome: string;
  cor?: string;
}

export default function BotaoTag({ nome, cor }:BotaoNome) {
  return(
    <h1 className=" text-center rounded-lg p-2 font-bold w-48" style={{backgroundColor: cor}}>{nome.toUpperCase()}</h1>
  )
}