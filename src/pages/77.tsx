import { useEffect, useState } from "react";
import image from "../assets/77day.png";
import bg from "../assets/bg.jpeg";
import mail from "../assets/mail.png";

const VLPage = () => {
  const [offset, setOffset] = useState(0);
  //   const [isOpen, setIsOpen] = useState<boolean>(false);
  //   const [hearts, setHearts] = useState<
  //     { id: number; left: number; size: number }[]
  //   >([]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    // startHeartRain();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //   const startHeartRain = () => {
  //     let count = 0;
  //     const interval = setInterval(() => {
  //       setHearts((prev) => [
  //         ...prev,
  //         {
  //           id: Date.now() + count,
  //           left: Math.random() * 100, // random X position %
  //           size: Math.random() * 5 + 10, // size 20px - 40px
  //         },
  //       ]);
  //       count++;
  //       if (count > 100) clearInterval(interval); // stop after 20 hearts
  //     }, 300);
  //   };

  return (
    <div className="relative w-screen h-[200vh] overflow-hidden">
      {/* Background (slower) */}
      <img
        src={bg}
        alt="Background"
        className="fixed top-0 left-0 w-full h-screen object-cover -z-10"
        style={{ transform: `translateY(${offset * 0.5}px)` }}
      />

      {/* Foreground wrapper */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-center">
        <img
          src={image}
          alt="Main Asset"
          className="w-full h-auto object-bottom"
        />
      </div>

      {/* Overlay text */}
      <div className="absolute flex flex-col w-full bottom-1/3 z-10 items-center justify-center">
        <span className="text-2xl font-bold text-black text-center">
          七夕快乐！没对象也要快乐！
        </span>
        <span>test</span>
      </div>
      <div className="absolute flex flex-col w-full bottom-1/2 z-10 items-center justify-center ">
        {/* {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-red-500 animate-fall"
            style={{
              left: `${heart.left}%`,
              fontSize: `${heart.size}px`,
              top: "-40px",
            }}
          >
            🌸
          </div>
        ))} */}
      </div>

      {/* Overlay text (clickable to scroll back to top) */}
      <div
        onClick={scrollToTop}
        className="absolute bottom-5 right-5 bg-black/50 text-white p-2 rounded-lg cursor-pointer"
      >
        Overlay Text
      </div>

      {/* Scroll button (centered at top) */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
        <img
          onClick={scrollToBottom}
          src={mail}
          alt="Mail Icon"
          className=" object-bottom animate-float cursor-pointer"
        />
        <div className="mt-2 text-black font-bold animate-float"></div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-50px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
        }
        .animate-fall {
          animation: fall 3s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default VLPage;
