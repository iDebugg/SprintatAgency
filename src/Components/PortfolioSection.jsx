import { useState } from "react";

const categories = {
  "App Development": [
    "/BeFunkydesign1.png",
    "/BeFunkydesign2.png",
    "/BeFunkydesign3.png",
    "/BeFunkydesign4.png",
  

  ],
  "Web Development": [
    "/web1.png",
    "/web2.png",
    "/web3.png",
    "/web4.png",
    "/web5.png",
  ],
  "Smart Contract": [
    "/smartt1.png",
    "/smarttt.png",
  ],
};

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("App Development");

  return (
    <section id="PortfolioSection" className="contact bg-gray-100 display: flex flex-col justify-center items-center pr-3 pl-3 sm:pr-4 sm:pl-4 md:pr-6 md:pl-6 lg:pr-8 lg:pl-8 pt-10 pb-20">
      <h2 className="text-[#373737] text-4xl font-bold text-center text-gray-800 mb-8">Our Portfolio</h2>

   
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
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

     
      <div className="max-h-[500px] overflow-y-auto rounded-md">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4"
          style={{
            gridAutoRows: "minmax(200px, auto)",
          }}
        >
          {categories[activeCategory].map((src, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={src}
                alt={`${activeCategory} ${index + 1}`}
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
