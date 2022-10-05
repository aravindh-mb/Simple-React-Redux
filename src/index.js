import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

      // selector
      const VADIVELU_COMEDY = "VADIVELU_COMEDY";
      const GOUNDAMANI_COMEDY ="GOUNDAMANI_COMEDY";

      // Action
      export const vadivelucomedy = ()=> ({type:VADIVELU_COMEDY})
      export const goundamanicomedy =()=>({type:GOUNDAMANI_COMEDY})

      // reducer 
      const comedyReducer =(state,actions) =>{
          switch(actions.type){
              case VADIVELU_COMEDY:
                  return state ="snake babu";
              case GOUNDAMANI_COMEDY:
                  return state ="arasiyalla ithellam satharnamappa";
              default:
                return state = "No comedy selected";
          }
      }
      
let store = createStore(comedyReducer);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
          <App  />
    </Provider>
  </React.StrictMode>
);
  
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
