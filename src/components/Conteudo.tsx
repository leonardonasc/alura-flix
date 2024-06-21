import BotaoTag from "./BotaoTag";

export default function Conteudo() {
  return (
    <section className="overflow-hidden">
      <section className="flex flex-col items-center justify-around h-screen bg-zinc-900">
        <BotaoTag nome="Front End" cor="#86d0fe" />
        <iframe
        className="m-2"
          width="300"
          height="167"
          src="https://www.youtube.com/embed/pIvHp7sk2UA?si=nz3IWYgRWXzOC295"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <BotaoTag nome="Back End" cor="#5ec376" />
        <iframe
        className="m-2"
          width="300"
          height="167"
          src="https://www.youtube.com/embed/pIvHp7sk2UA?si=nz3IWYgRWXzOC295"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <BotaoTag nome="Mobile" cor="#f4bb26" />
        <iframe
        className="m-2"
          width="300"
          height="167"
          src="https://www.youtube.com/embed/pIvHp7sk2UA?si=nz3IWYgRWXzOC295"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          
        ></iframe>
      </section>
    </section>
  );
}
