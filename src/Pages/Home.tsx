import React, { useEffect } from 'react';
import { connect } from 'react-redux'

const Home = (props: any) => {

  useEffect(() => {

    // Get the list of breed groups. Call the thunk


  },);

  return (
    <div>
      Home page {props.breeds}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  breeds: state.Breeds.allBreeds
});

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);