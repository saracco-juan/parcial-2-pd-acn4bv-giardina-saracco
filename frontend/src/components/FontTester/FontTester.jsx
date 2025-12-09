import React, { useState } from "react";

const FontTester = ({
  fontFamily = "Sansation, sans-serif",
  onFavoriteToggle,
  isFavorite = false,
  showFavoriteButton = true,
  showClearButton = true,
  placeholder = "Escriba aqui para probar la fuente.",
  defaultText = "AåBbCc\n#9½\nƒ%£©∑∅!",
  maxLength,
  description,
}) => {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState(defaultText);

  const handleClear = () => {
    setInputText("");
    setDisplayText(defaultText);
  };

  return (
    <section className="mb-12">
      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          setDisplayText(e.target.value || defaultText);
        }}
        className="bg-[#252841] border border-gray-600 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-3 placeholder-gray-500 mb-6"
        placeholder={placeholder}
        maxLength={maxLength}
      />

      <div className="bg-[#252841] rounded-3xl p-16 text-center relative">
        <div
          className="text-[#f9d423] text-7xl font-bold leading-tight mb-6 whitespace-normal w-full"
          style={{
            fontFamily: fontFamily,
            whiteSpace: "pre-line",
          }}
        >
          {displayText}
        </div>
        <div className="flex justify-center gap-3 mb-8">
          {showFavoriteButton && (
            <button
              className="w-10 h-10 bg-[#1a1d2e] rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
              onClick={onFavoriteToggle}
              disabled={!fontFamily}
            >
              <svg
                className={`w-5 h-5 transition-colors ${
                  isFavorite ? "text-[#f9d423] fill-current" : "text-white"
                }`}
                fill={isFavorite ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </button>
          )}
          {showClearButton && (
            <button
              onClick={handleClear}
              className="w-10 h-10 bg-[#1a1d2e] rounded-full flex items-center justify-center hover:bg-gray-900 transition-colors"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default FontTester;
