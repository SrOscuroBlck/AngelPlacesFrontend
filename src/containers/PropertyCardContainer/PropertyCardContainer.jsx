import React from "react";
import PropertyCard from "../../components/PropertyCard/PropertyCard";
import image from "../../assets/img/landing.png";

class PropertyCardContainer extends React.Component {
  render() {
    const { property } = this.props;
    return <PropertyCard property={property} />;
  }
}

PropertyCardContainer.defaultProps = {
  property: {
    id: 1,
    title: "Beautiful House in the Heart of the City",
    price: "$200/night",
    image: image,
    address: "123 Main St, Anytown USA",
    bedrooms: 4,
    bathrooms: 3,
    carSpaces: 2,
  },
};

export default PropertyCardContainer;