import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {vadivelucomedy,goundamanicomedy,isSubscribed} from './index.js';

const App = () => {
  const comedies = useSelector(state =>state)
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <p>{comedies.isSubscribed?'true':'false'}</p>
       <img  src={comedies.img} alt={"img"} />
       <button disabled={!comedies.isSubscribed} onClick={()=> dispatch(vadivelucomedy())}>vadivelu comedy</button>
       <button disabled={!comedies.isSubscribed} onClick={()=> dispatch(goundamanicomedy())}>goundamani comedy</button>
       <button disabled={!comedies.isSubscribed} onClick={dispatch(isSubscribed())}>{comedies.isSubscribed ? "Subscribe":"Unsubscribe"}</button>

    </React.Fragment>
  )
}

export default App 