import React from "react";
import product1 from "../assets/image 13.png"; // First product image
import product2 from "../assets/image 14.png"; // Second product image

const whatsappNumber = "919876543210"; // 👈 Replace with your WhatsApp number

const products = [
  {
    id: 1,
    name: "Wood Pressed Mustard Oil (5L)",
    image: product1,
    reviews: 5,
    description: [
      "Wood-Pressed & Nutrient-Rich.",
      "Rich in MUFA, PUFA, Omega 3 & 6",
      "Acts as Natural Sunscreen & Anti-Aging Aid",
    ],
    price: 1699,
    originalPrice:2199,
  },
  {
    id: 2,
    name: "Wood-Pressed Mustard Oil (1L)",
    image: product2,
    reviews: 5,
    description: [
      "Wood-Pressed & Nutrient-Rich.",
      "Rich in MUFA, PUFA, Omega 3 & 6",
      "Acts as Natural Sunscreen & Anti-Aging Aid",
    ],
    price: 349,
    originalPrice: 449,
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="bg-[#5E7141] py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h2
            className="text-2xl md:text-3xl font-bold text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Product
          </h2>
          <button className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#5E7141] transition">
          <a href="https://www.instagram.com/pashupati_food_agro/">  Follow on Instagram</a>
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl hover:shadow-2xl transition duration-300 p-6 md:p-8 rounded-lg"
            >
              {/* Image */}
              <div className="w-full h-64 md:h-72 overflow-hidden rounded-xl mb-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                {/* Review Stars */}
                <div className="flex items-center text-sm text-yellow-500 mb-4">
                  <span className="mr-2 text-green-600 font-medium">Review</span>
                  {"★".repeat(product.reviews)}
                </div>

                {/* Description */}
                <p className="font-semibold text-gray-700 mb-2">Description:</p>
                <ul className="list-disc list-inside text-gray-600 mb-4 text-sm space-y-1">
                  {product.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-green-600 text-lg font-medium">
                    ₹{product.price}
                  </span>
                  <span className="text-gray-400 line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bulk Order Button */}
        <div id="bulk-order" className="flex justify-center">
          <a
            href={`https://wa.me/${9208468980}?text=Hi, I want to place a bulk order`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:scale-105 transition animate-pulse"
          >
            Book Bulk Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
