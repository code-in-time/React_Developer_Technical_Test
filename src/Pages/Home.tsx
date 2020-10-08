import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { thunkGetAllBreeds } from '../redux/reducers/Breeds';

const Home = (props: any) => {

  useEffect(() => {

    // Get the list of breed groups. Call the thunk
    props.thunkGetAllBreeds();
  }, []);

  return (
    <div>
      Home page {}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  breeds: state.Breeds.allBreeds
});

const mapDispatchToProps = {
  thunkGetAllBreeds
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);