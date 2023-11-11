import { useRef, useEffect } from "react";

export default function LandingPage() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  });

  return (
    <>
      <video className="video" loop autoPlay muted>
        <source src="./gradient-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* <video autoplay muted loop className={"video"}>
        <source src="./gradient-video.mp4" type="video/mp4" />
      </video> */}
      <div className="flex h-screen flex-col items-center  justify-center p-32">
        <h1 className="text-7xl font-black text-white">Pulse</h1>
        <button className="bg-primary mt-8 rounded-xl bg-white p-2 px-4 font-bold text-orange-500">
          Get started
        </button>
      </div>
    </>
  );
}
