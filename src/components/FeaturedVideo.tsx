import BotaoTag from "./BotaoTag";

export default function FeaturedVideo() {
  return (
    <div
      className="flex w-full h-fit p-5 relative"
      style={{
        backgroundImage: `url("https://img.youtube.com/vi/2z6f8VN_Pro/maxresdefault.jpg")`,
        backgroundSize: "fit",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-blue-950 bg-opacity-50"></div>

      <div className="flex m-4 relative z-10 h-[50vh]">
        <div className="flex flex-col justify-center gap-4">
          <BotaoTag nome="mobile" cor="#f4bb26" />
          <div className="flex flex-col ga  p-4">
            <h1 className="text-3xl font-bold ">Featured Video</h1>
            <p className="text-sm w-2/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque consectetur, libero vel tempus gravida, velit nunc
              faucibus lectus, at aliquet felis nunc ut justo. Donec auctor,
              diam vel consectetur mattis, nisi lectus semper lectus, at tempor
              turpis velit non velit.
            </p>
          </div>
        </div>
        <div className="flex-col flex-shrink-0 border-2 rounded-md  border-yellow-400">
          <iframe
            width="800px"
            height="100%"
            src="https://www.youtube.com/embed/2z6f8VN_Pro?si=8PmlmBtcZX8hV9XK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </div>
   
  );
}
