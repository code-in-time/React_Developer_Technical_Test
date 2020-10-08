import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { thunkGetAllBreeds } from '../redux/reducers/Breeds';
import Template1 from '../Template/Template1';

const Home = (props: any) => {

  useEffect(() => {

    // Get the list of breed groups. Call the thunk
    props.thunkGetAllBreeds();
  }, []);

  /**
   * 
   * @param breeds Render the rows for the table
   */
  const renderTableRows = (breeds: any) => {

    const rows = [];

    for (const item in breeds) {
      rows.push(
        <tr>
          <td>{item}</td>
          <td>{breeds[item].length}</td>
          <td><Link to={`/breedImages/${item}`}>View</Link></td>
        </tr>
      )
    }

    return rows;

  }

  return (
    <Template1 className="Home">
      <div>
        <input type="text" placeholder="start typing to filter breeds" />

        <table>
          <thead>
            <tr className="headRow">
              <th>Breed group</th>
              <th>Number of breeds</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows(props.breeds)}
          </tbody>
        </table>

      </div>
    </Template1>
  );
};

const mapStateToProps = (state: any) => ({
  breeds: state.Breeds.allBreeds
});

const mapDispatchToProps = {
  thunkGetAllBreeds
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);