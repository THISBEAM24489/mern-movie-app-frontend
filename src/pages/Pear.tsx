import { useState } from "react";

const FunnyYesNo = () => {
  const [yesScale, setYesScale] = useState(1);
  const [showNo, setShowNo] = useState(true);
  const [qCount, setQCount] = useState(0);
  const qList = [
    "ไปเที่ยวกันมั้ย? 🐱",
    "ไปเถอะ หิวๆ",
    "ไม่ไปจริงๆหรอ",
    "ไปนะ",
    "ไป",
    "เย้",
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
    if (qCount < 5) {
      setQCount(qCount + 1);
    } else {
      setYesScale(1);
      setQCount(0);
      setShowNo(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-pink-100">
      <div style={{ width: "390px", height: "300px" }}>
        <img
          src={gifList[qCount]}
          alt="funny cat"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </div>
      <h1 className="text-3xl font-bold text-pink-700">{qList[qCount]}</h1>

      <div className="flex gap-6">
        {/* Yes button */}
        <button
          style={{
            transform: `scale(${yesScale})`,
            transition: "transform 0.3s ease",
          }}
          onClick={handleNoClick}
          className="bg-green-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-green-600"
        >
          {" "}
          ❌ YES
        </button>

        {/* No button */}
        {showNo && (
          <button
            onClick={handleNoClick}
            className="bg-red-500 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-red-600 transition-transform"
          >
            ❌ NO
          </button>
        )}
      </div>
    </div>
  );
};

export default FunnyYesNo;
