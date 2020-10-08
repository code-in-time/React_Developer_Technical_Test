import cloneDeep from "lodash/cloneDeep";
const axios = require('axios');

// widgets.js

// Actions
const ACTION_SAVE_ALL_BREEDS = 'ACTION_SAVE_ALL_BREEDS';
const ACTION_SAVE_SUBBREED_IMAGES = 'ACTION_SAVE_SUBBREED_IMAGES';

const initState = {
  allBreeds: ['a', 'a'],
  subBreedImages: {
    breed1: ['img1', 'img2'],
    breed2: ['img1', 'img2'],
    breed3: ['img1', 'img2'],
  },
  APILoading: {
    allBreeds: false,
    getImages: false
  }
}


// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    
      case ACTION_SAVE_ALL_BREEDS:
        state = cloneDeep(state);
        state.allBreeds = action.payload.allBreeds;
        return state;

      case ACTION_SAVE_SUBBREED_IMAGES:
        state = cloneDeep(state);
        // Cache the image searches
        state.subBreedImages[action.payload.breedName] = action.payload.subBreedImages
        return state;

    default: return state;
  }
}


/**
 * This is used to save the result of the API to the reducer
 * @param {object} allBreeds 
 */
export const actionCreator_SAVE_ALL_BREEDS = allBreeds => {
  return {
    type: ACTION_SAVE_ALL_BREEDS,
    payload: { allBreeds }
  };
}

/**
 * This is used to save the result of the API to the reducer
 * @param {object} images 
 */
 export const actionCreator_SAVE_SUBBREED_IMAGES = (subBreedImages, breedName) => {
  return {
    type: ACTION_SAVE_SUBBREED_IMAGES,
    payload: { subBreedImages, breedName }
  };
}

// Thunks

export const thunkGetAllBreeds = () => {
  return (dispatch) => {
    // Make a request
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(function (response) {
        const data = response.data.message;
        dispatch(actionCreator_SAVE_ALL_BREEDS(data))
        // Save the breeds
        console.log('response', data)
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
      })

  }
}

export const thunkGetBreedSubImages = (breedName) => {
  return (dispatch, state) => {

      const subBreedImagesData = state().Breeds.subBreedImages;
      
      // Check if this breed images have been cached
      if (subBreedImagesData[breedName]) {
        // Images are cached
        return
      }

    // Images are not cached
    // Make a request
    axios.get('https://dog.ceo/api/breed/hound/images/random/3')
      .then(function (response) {
        const subBreedImages = response.data.message;
        dispatch(actionCreator_SAVE_SUBBREED_IMAGES(subBreedImages, breedName))
        // Save the breeds
        console.log('response', response)
      })
      .catch(function (error) {
        // handle error
        console.log('error', error);
      })

  }
}

