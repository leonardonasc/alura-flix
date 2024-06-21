"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function FooterMenu() {
  const pathname = usePathname();
  const itens = [
    {
      name: "HOME",
      url: "/",
      imageActive: "/home-azul.png",
      image: "home.png",
    },
    {
      name: "NOVO VÍDEO",
      url: "/criarvideo",
      imageActive: "/criar-video-azul.png",
      image: "/criar-video.png",
    },
  ];

  return (
    <>
      <div className="bg-gray-950 flex justify-evenly items-center gap-3 h-20 border-t-2 sm:border-t-0 md:border-b-2 border-blue-600 shadow-shadowD">
        {itens.map((item) =>
          pathname === item.url ? (
            <button
              key={item.name}
              className="uppercase border bg-blue-950 px-3 py-1 border-blue-600 rounded-3xl text-sm text-blue-600 font-bold flex items-center gap-2"
            >
              <img src={item.imageActive} className="w-8 h-8" />
              {item.name}
            </button>
          ) : (
            <Link href={item.url} key={item.name}>
              <img src={item.image} className="w-9 h-9" />
            </Link>
          )
        )}
      </div>
    </>
  );
}

// //       {pathname === "/" ? (
//   <div className="bg-gray-950 flex justify-evenly items-center gap-3 h-20 border-t-2 border-blue-600 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
//   <button className="uppercase bg-blue-950 px-3 py-1 border-blue-600 border rounded-3xl text-sm text-blue-600 font-bold flex items-center gap-2">
//     <img src="/home-azul.png" className="w-8 h-8" alt="home" /> {nome}
//   </button>

//   <Link href="/criarvideo">
//     <img src="/criar-video.png" className="w-9 h-9" alt="criar video" />
//   </Link>
// </div>
// ) : (
// <div className="bg-gray-950 flex justify-evenly flex-row-reverse items-center gap-3 h-20 border-t-2 border-blue-600 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
//   <button className="uppercase bg-blue-950 px-3 py-1 border-blue-600 border rounded-3xl text-sm text-blue-600 font-bold flex items-center gap-2">
//     <img src="/criar-video-azul.png" className="w-5 h-5" alt="criar video" /> {nome}
//   </button>

//   <Link href="/">
//     <img src="/home.png" className="w-9 h-9" alt="home" />
//   </Link>
// </div>
// )}
