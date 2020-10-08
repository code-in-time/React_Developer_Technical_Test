import React, { useEffect } from 'react';
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

  return (
    <Template1 className="BreedImages">
      <div>
        Breed Images {breedGroup}
      </div>
    </Template1>
  );
};

const mapStateToProps = (state: any) => ({
  subBreedImages: state.Breeds.subBreedImages
});

const mapDispatchToProps = {
  thunkGetBreedSubImages
}

export default connect(mapStateToProps, mapDispatchToProps)(BreedImages);