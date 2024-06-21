"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();
  const itens = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: "NOVO VÍDEO",
      url: "/criarvideo",
    },
  ];

  return (
    <>
      <header className="bg-gray-900 sm:bg-gray-1000 flex justify-between h-20 border-b-2 border-blue-600">
        <img
          src="/Logo.svg"
          alt="Logo"
          className="w-1/6 lg:w-1/12 inline-block ml-5"
        />
        <ul className="flex gap-4 items-center mr-5">
          {itens.map((item) =>
            pathname !== item.url ? (
              <li>
                <Link href={item.url} style={{ display: "contents" }}>
                  <button
                    key={item.name}
                    className="border-2 font-bold rounded-lg py-2 w-40"
                  >
                    {item.name}
                  </button>
                </Link>
              </li>
            ) : (
              <li>
                <Link href={item.url}>
                  <button
                    key={item.name}
                    className="border-2 border-blue-500 shadow-custom font-bold py-2 rounded-lg w-40 text-blue-500"
                    
                  >
                    {item.name}
                  </button>
                </Link>
              </li>
            )
          )}
        </ul>
      </header>
    </>
  );
}
