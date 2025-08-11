import { useState } from "react";
import image1 from "../assets/1.jpg";
import image2 from "../assets/2.jpg";

const FunnyYesNo = () => {
  const [yesScale, setYesScale] = useState(1);
  const [showNo, setShowNo] = useState(true);
  const [qCount, setQCount] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);

  const qList = [
    "ไปเดินงานวัดกันมั้ย?",
    "ไปเถอะ หิวๆ",
    "ไม่ไปจริงๆหรอ",
    "ไปนะ",
    "ไปๆๆ",
    "",
  ];
  const gifList = [
    "https://media.giphy.com/media/NvbLKHpMzJmxKU7vNV/giphy.gif",
    "https://media.giphy.com/media/Cf4T1D2yhCGotOQscB/giphy.gif",
    "https://media.giphy.com/media/oWe817G10gRKmx84zB/giphy.gif",
    "https://media.giphy.com/media/rL0yRrsd5a5PSeUMe7/giphy.gif",
    "https://media.giphy.com/media/TzKPy0HX62yTUuFiUF/giphy.gif",
    "https://media.giphy.com/media/F6zFz1tFiq4oHLo51T/giphy.gif",
  ];

  const handleNoClick = () => {
    const newScale = yesScale + 0.3;
    setYesScale(newScale);
    if (newScale >= 2.5) {
      // Hide the "No" button when Yes is too big
      setShowNo(false);
    }
    if (qCount === 4) {
      setShowCongrats(true);
      setYesScale(1);
    }
    if (qCount < 5) {
      setQCount(qCount + 1);
    } else {
      setYesScale(1);
      setQCount(0);
      setShowNo(true);
    }
  };

  const handleYes = () => {
    if (qCount !== 5) {
      setYesScale(1);
      setQCount(5);
      setShowNo(false);
      setShowCongrats(true);
    } else {
      setYesScale(1);
      setQCount(0);
      setShowNo(true);
      setShowCongrats(false);
    }
  };

  // Confetti pieces generation
  const confettiCount = 30;
  const confettiArray = Array.from({ length: confettiCount });

  return (
    <>
      <style>{`
        /* Confetti styles */
        @keyframes confetti-fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        .confetti-piece {
          position: fixed;
          width: 8px;
          height: 8px;
          background-color: red;
          opacity: 0.9;
          top: 0;
          animation-name: confetti-fall;
          animation-timing-function: ease-out;
          animation-iteration-count: 1;
        }
      `}</style>

      <div className="flex flex-col items-center justify-center h-screen gap-8 bg-pink-100 px-4 relative overflow-hidden">
        {qCount !== 5 ? (
          <div style={{ width: "390px", height: "300px" }}>
            <img
              src={gifList[qCount]}
              alt="funny cat"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        ) : (
          <div className="relative w-[390px] h-[300px] mx-auto mb-4 ">
            <img
              src={gifList[qCount]}
              alt="funny cat"
              className="absolute  z-50"
              style={{
                width: "30%",
                height: "30%",
                objectFit: "contain",
                transform: "translate(65%, 50%)",
              }}
            />
            <img
              src={image1}
              alt="My Asset 2"
              className="absolute top-1/2 left-1/2 w-52 h-52 object-cover rounded-xl shadow-lg -rotate-6 z-20"
              style={{ transform: "translate(-20%, -60%)" }}
            />
            <img
              src={image2}
              alt="My Asset 1"
              className="absolute top-1/2 left-1/2 w-56 h-52 object-cover rounded-xl shadow-lg rotate-3 z-10"
              style={{ transform: "translate(-70%, -10%)" }}
            />
          </div>
        )}

        <h1 className="text-3xl font-bold text-pink-700">{qList[qCount]}</h1>

        <div className="flex gap-6">
          {/* Yes button */}
          <button
            style={{
              transform: `scale(${yesScale})`,
              transition: "transform 0.3s ease",
            }}
            onClick={handleYes}
            className="bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
          >
            ไป
          </button>

          {/* No button */}
          {showNo && (
            <button
              onClick={handleNoClick}
              className="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-transform"
            >
              ไม่ไป
            </button>
          )}
        </div>

        {/* Congratulation modal */}
        {showCongrats && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center z-50 p-4">
            <div className="bg-white rounded-xl p-8 max-w-sm w-full text-center shadow-lg relative">
              <h2 className="text-4xl font-extrabold mb-4 text-green-600">
                เยียมไปเลยย!
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                จะได้เจอพี่เเพร์เเล้ววว
              </p>
              <button
                onClick={() => setShowCongrats(false)}
                className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 focus:outline-none"
              >
                ไป
              </button>
            </div>

            {/* Confetti */}
            {confettiArray.map((_, i) => {
              // Randomize confetti properties
              const left = Math.random() * 100; // vw %
              const delay = Math.random() * 2; // seconds
              const duration = 3 + Math.random() * 2; // seconds
              const bgColors = [
                "#EF4444",
                "#F59E0B",
                "#10B981",
                "#3B82F6",
                "#8B5CF6",
                "#EC4899",
              ];
              const bgColor =
                bgColors[Math.floor(Math.random() * bgColors.length)];

              return (
                <span
                  key={i}
                  className="confetti-piece"
                  style={{
                    left: `${left}vw`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    backgroundColor: bgColor,
                    borderRadius: "2px",
                    width: "6px",
                    height: "12px",
                  }}
                />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default FunnyYesNo;
