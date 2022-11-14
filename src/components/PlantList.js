import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, searchValue }) {

  const plantsToDisplay = plants.filter(plant => {
    if (plant.name.toLowerCase().includes(searchValue.toLowerCase()))
    return plant
  })

  const plantCards = plantsToDisplay.map(plant => {
    return (
      <PlantCard
        key={plant.id}
        plant={plant}
      />
    )
  })

  return (
    <ul className="cards">{plantCards}</ul>
  );
}

export default PlantList;
