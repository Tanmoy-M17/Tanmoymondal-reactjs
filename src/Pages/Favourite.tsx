import React from 'react'
import { useAppSelector } from '../Redux/App/hooks';

const Favourite = () => {
  var favoutite=useAppSelector(state=>state.app.favourites);
  console.log("faa",favoutite);
  return (
    <div>Favourite</div>
  )
}

export default Favourite
