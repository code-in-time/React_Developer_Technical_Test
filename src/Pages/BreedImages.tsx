import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";

import { thunkGetBreedSubImages } from '../redux/reducers/Breeds';

const BreedImages = (props: any) => {

  // Get the  breed group from the url
  let { breedGroup } = useParams<{ breedGroup: string }>();

  useEffect(() => {
    // Get the list of breed groups. Call the thunk
    props.thunkGetBreedSubImages(breedGroup);
  }, []);

  return (
    <div>
    Breed Images {breedGroup}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  subBreedImages: state.Breeds.subBreedImages
});

const mapDispatchToProps = {
  thunkGetBreedSubImages
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedImages);