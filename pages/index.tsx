import React, { useState } from "react";
import Image from "next/image";
import { HERO_BG, FILTERS, PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/common/Pill";

const HomePage: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center text-white rounded-lg shadow-lg"
        style={{
          backgroundImage: `url(${HERO_BG.src})`,
        }}
      >
        <div className="text-center bg-purple-800 bg-opacity-70 p-8 rounded-xl">
          <h1 className="text-[64px] md:text-[48px] font-extrabold mb-4">
            Discover Your Dream Place!
          </h1>
          <p className="text-[20px] md:text-lg">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900">Filter by:</h2>
        <div className="flex flex-wrap gap-3">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() =>
                setSelectedFilter((prev) => (prev === filter ? null : filter))
              }
              className={`transition duration-300 ${selectedFilter === filter ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-800'}`}
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-900">Featured Listings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PROPERTYLISTINGSAMPLE.map((property) => (
            <div
              key={property.name}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <Image
                src={property.image}
                alt={property.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="text-lg font-semibold mb-2 text-gray-800">{property.name}</h3>
                <p className="text-gray-500">{property.price}</p>
                <p className="text-yellow-100 mt-1">⭐ {property.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HomePage;