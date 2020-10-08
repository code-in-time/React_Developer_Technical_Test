import React from 'react';
import { useParams } from "react-router-dom";

const BreedImages = () => {

  // Get the  breed group from the url
  let { breedGroup } = useParams<{ breedGroup: string }>();

  return (
    <div>
    Breed Images {breedGroup}
    </div>
  );
};

export default BreedImages;