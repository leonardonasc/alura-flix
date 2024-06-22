import BotaoTag from "./BotaoTag";

export default function Conteudo() {
  return (
    <section className="overflow-hidden">
      <section className="flex flex-col items-center justify-around h-screen bg-zinc-900">
        <BotaoTag nome="Front End" cor="#86d0fe" />
 
        <BotaoTag nome="Back End" cor="#5ec376" />
    
        <BotaoTag nome="Mobile" cor="#f4bb26" />
   
      </section>
    </section>
  );
}
