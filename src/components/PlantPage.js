import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([]);
  const [searchValue, setSearchValue] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then(r => r.json())
    .then(plants => setPlants(plants))
  }, [])

  function handleFormSubmit(newPlant) {
    setPlants([
      ...plants,
      newPlant
    ])
  }

  return (
    <main>
      <NewPlantForm 
        onFormSubmit={handleFormSubmit}
      />
      <Search 
        onSearch={setSearchValue}
        searchValue={searchValue}
      />
      <PlantList 
        plants={plants}
        searchValue={searchValue}
      />
    </main>
  );
}

export default PlantPage;
