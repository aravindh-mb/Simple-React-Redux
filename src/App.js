import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {vadivelucomedy,goundamanicomedy} from './index.js';

const App = () => {
  const comedies = useSelector(state =>state)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
       <p>{comedies}</p>
       <button onClick={()=> dispatch(vadivelucomedy())}>vadivelu comedy</button>
       <button onClick={()=> dispatch(goundamanicomedy())}>goundamani comedy</button>
       
    </React.Fragment>
  )
}

export default App