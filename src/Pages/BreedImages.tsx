import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { thunkGetBreedSubImages } from '../redux/reducers/Breeds';
import Template1 from '../Template/Template1';

const BreedImages = (props: any) => {

  // Get the  breed group from the url
  let { breedGroup } = useParams<{ breedGroup: string }>();

  useEffect(() => {
    // Get the list of breed groups. Call the thunk
    props.thunkGetBreedSubImages(breedGroup);
  }, []);

  const generateSubBreeds = (allBreeds: any) => {
    const subBreeds = allBreeds[breedGroup];
    if (subBreeds === undefined || subBreeds.length === 0) {
      return '';
    }
    // const data = subBreeds.map((item: any) => (<span className="text-color-brown">{item}</span>))

    const data = subBreeds.map((item: any, index: number) => (
      <>
        {/* TODO remove last comma */}
        <span className="text-color-brown">{item}</span> <span>, </span>
     
      </>
    ))

    return <p>Sub breads: {data}</p>
  }

  return (
    <Template1 className="BreedImages">
      
      <h2 className="text-capital">{breedGroup}</h2>

      {generateSubBreeds(props.allBreeds)}

      <div>
        Breed Images {breedGroup}
      </div>
    </Template1>
  );
};

const mapStateToProps = (state: any) => ({
  allBreeds: state.Breeds.allBreeds,
  subBreedImages: state.Breeds.subBreedImages
});

const mapDispatchToProps = {
  thunkGetBreedSubImages
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedImages);