import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = {
  "App Development": [
    "/BeFunkydesign1.png",
    "/BeFunkydesign2.png",
    "/BeFunkydesign3.png",
    "/BeFunkydesign4.png",
  ],
  "Web Development": [
    "/web1.jpg",
    "/web2.jpg",
    "/web3.jpg",
    "/web4.jpg",
    "/web5.jpg",
  ],
  "Smart Contract": ["/smartt1.jpg", "/smarttt.jpg"],
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("App Development");
  const [imagesToDisplay, setImagesToDisplay] = useState(categories["App Development"]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleCategoryChange = (category) => {
    if (category === activeCategory) return;

    setActiveCategory(category);
    setLoading(true);

    // Preload images
    const newImages = categories[category];
    const imagePromises = newImages.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      });
    });

    Promise.all(imagePromises).then(() => {
      setImagesToDisplay(newImages);
      setLoading(false);
    });
  };

  return (
    <section
      id="PortfolioSection"
      className="about bg-gray-100 relative flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:px-20 pt-10"
    >
      <div
        className={`${
          selectedImage ? "blur-sm pointer-events-none select-none" : ""
        } transition duration-300 w-full`}
      >
        <h2 className="text-[#373737] text-4xl font-bold text-center mb-8">
          Our Portfolio
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#DAFB18] text-gray-700"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Loading Indicator */}
        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-[#DAFB18] rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="max-h-[500px] overflow-y-auto rounded-md">
            <div
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
              style={{ gridAutoRows: "minmax(200px, auto)" }}
            >
              {imagesToDisplay.map((src, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-lg shadow hover:shadow-lg transition cursor-pointer"
                  onClick={() => setSelectedImage(src)}
                >
                  <img
                    src={src}
                    loading="lazy"
                    alt={`${activeCategory} ${index + 1}`}
                    className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            className="fixed inset-0 z-50 bg-black bg-opacity-80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              key="image"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="max-w-6xl max-h-full overflow-auto bg-white rounded-lg shadow-lg relative"
            >
              <button
                className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-80"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <img
                src={selectedImage}
                alt="Full View"
                className="w-full h-auto rounded-b-lg"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
