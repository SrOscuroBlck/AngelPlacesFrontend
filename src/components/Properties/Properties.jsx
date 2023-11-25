import React from "react";
import PropertyCardContainer from "../../containers/PropertyCardContainer";
import "./Properties.css";
import { Icon } from "@iconify/react";

function Properties() {
  return (
    <section id="properties-section" className="p-10 h-full">
      <div className="flex" id="banner">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Our Properties
        </h2>
        <Icon icon="pepicons-print:line-x" id="banner-icon" />
      </div>
      {/* Scrollable list of property cards */}
      <div className="overflow-x-scroll whitespace-nowrap">
        <PropertyCardContainer />
        <PropertyCardContainer />
        <PropertyCardContainer />
        <PropertyCardContainer />
        <PropertyCardContainer />
      </div>

      {/* The quote section and the footer can be added below */}
      {/* ... */}
    </section>
  );
}

export default Properties;
