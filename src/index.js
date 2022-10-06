import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const initialValue ={
  img:"data:image/jpeg;base64,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",
  isSubscribbed:false,
}

      // selector
      const VADIVELU_COMEDY = "VADIVELU_COMEDY";
      const GOUNDAMANI_COMEDY ="GOUNDAMANI_COMEDY";
      const SUBSCRIBE_CHANNEL ="SUBSCRIBE_CHANNEL";
      // Action
      export const vadivelucomedy = ()=> ({type:VADIVELU_COMEDY})
      export const goundamanicomedy =()=>({type:GOUNDAMANI_COMEDY})
      export const isSubscribed =()=>({type:SUBSCRIBE_CHANNEL})
      // reducer 
      const comedyReducer =(state=initialValue,actions) =>{
          switch(actions.type){
              case SUBSCRIBE_CHANNEL:
                  return{
                    ...state,
                    isSubscribed:!state.isSubscribbed,
                  }
              case VADIVELU_COMEDY:
                  return{
                    ...state,
                    img:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAH0AewMBIgACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAAEBgMFBwIBCAD/xAA7EAACAQMDAQUFBQYGAwAAAAABAgMABBEFEiExBhNBUWEiMnGBkRQjobHRBxUzUnLBQkNTguHwRJLx/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EACYRAAICAQQBAwUBAAAAAAAAAAABAgMRBBIhMRMiQVEFFGFxgTL/2gAMAwEAAhEDEQA/AETAFeYFdFSOorwCqiR6I7UA8Y5oO8uowvBxCnP9Z/SpLyTu4gucM+efJR1/T50vXc5uJdq8IOgFX9NBRW9mTr78y8aO3nlvJdo92rKCPuYhtUk9PjU/Z7QbvUGC2kJfB9pzwq/En/7WgWPYW2SMNf3MsrYx3cHsL8M9T8sVpV1yfLMed0IdszWVXGXmZR6Z6VP+6tQayF4LC7NqQSJhAxXA6nOOg861bTuyOlvexW8NlAhkbG903n6tmtP+zGSL7LLAhtjHsMcpBDfLHkP+KXqH4WkdTYrekfI7hM++D86HdMcryK3TtBpOnx6pdJZrCYFcgIBnYR1HPrmlW/0OwmzvtIsn/Eg2n6irsNB5YqUX2Ilq4wltkjL2XHK8GpYLl43V1YrIvusOtMmpdmQu57Fycf5cnX5H9aV7uCSCRlkUq6nBBGCKpajTW6d+tcFuq2Ni9LGeyukvYd2Asq8SKPzHpRBXFLOmXJguY3ydudrfA1dnUY2OFjlPwU1lX1+rK9zb0moThib6Cq8oX7XK3uWkx+WK87+8P/hP9aR45Fl6ir5J/tLP7sEx/wBlSIt5J/DsJz8qdF2AjCqPgKPtyOOBV9aP8mPL6rZ8GVa2J4Qe/iaJyoAVuuOa57I6P+9dSAkz3EQ3SkH6D50/duez82s6ek9koa6gz7HjInkPUfrS92KuYtK0jUZ7yNlkhnCum3DZxgDB9c1e09cVYoy6RRuulOEpLtj3am1063LN3cFrCuSegUV+j7YWU0Ra1hleMdJHXaG+A6/lWZ6nqt7rNwJLlu6t1yYoFPHxA6n4mu4r+9FnFbQpbpFENolYZI/t+FWrNT5JYguEVIaRJZm+Rq1vtpfKqLpEjpdrIGDQxBgoHgcg1JP+1vXn0u7jk0m3i1hlEcN/Gm3Yp97Kt4+XOM+FIU15NI/3t1NJ8GIH0HFEGxhubZrtbeUqhCsWPj8fGqFr8j5LtcY1rETg6x2nRQ5uruQHklhv/WiLLtlqnfxwXUUU25gvtLsbn4fpVJKwXJT2OeApIxUf2yZWVjKWKnKlhkj5nmpjqbYf5kyXVXLuI62Wu2WoYUn7POf8qQ8H4HxobtLp63Ng8yqO+gGc+a+IpOdklwWBU/zL0+n/ADTJ2ZuZ7k/Yrm8txbuCnezsR3YIPPAJPljHiK0YfU1bU6r1/Sv9r45qdbKbs5ZNf6nFFz3YO5yPBR/3FaG0SL7qKPgKh0LR7fSbTbDuaVwDLI6lST5YPIFFyLWVGPHIds8y4A5B6CoCOaJkGKgPWuwgcl0Peo22NChOaKtwRinoFstID0rPv2g3jRa0VvFWOJoUCGBMAkDG5s+8fD08Mda0GDpSZ+1fTXn0+01CMErAxjlx4KxGD9Rj511mduSanieBItQs8m4i4uV/ljjwM+uTRssO5lM0d7tA4jjVFVflVx2EhjWwmmmXKIQg4zk9f71fvJZ43SWsox1yvSqH3E16UaUaItZYmxLpaHM0WqDz2LGfzYUQZtJWFokl1ru2OShjiAz547ymdW02d9ixAH1FSPp1msJlMS4z5UHnkMWniIcselOMRRakfVwn9iaHFlZk8R3A9GIFN148EYxbwqW8KDaK/kXKKig+BFD5pMjwRQuzafBDAZlgZsebmgxqc6qY7cLCnTC9frTNsmIa3u48BwRuHSlOdDb3pDAExvyPPBo67G+xdkEjVbeFILWOONdihc7fU8n8a5epIJ0uraK4jztlQOM+RrlxV4zH2CS0MRzRM3Gc0E1xEGIMi/WlsJDb3QqaGPFT92K7RMVZwA2dxDFVHbWRm0OSxjQs94rID/Lgbsn6D61doMVU67Ksd3EZCEjhheRnIzjpSr5uNbaGaaO+1Ji/2Xt+50eFY4ldyzOoY8E9AfwrudNZZHeaS3CYbAjbkHBwPrijOzUataR7VZU5KBhg7ScjP1q3v7IEAbeCOTWSm85NnbxgRrVb43Kp3YLk8kHH96ZL8CLTlTxUc59aP0xrXLJbRrsU7S6j3mx+VB6vmMlXA5AwaCT5yNiuBPeS6e9VY1VUz/jJWiZrW/JLCeJR4A4P5KDRTmNpQJU48Gq0gtE7sOmH9cUUZcAuHIvxrPs2XB3FehxS/qGntc6wYl43gNny45/KnGdBvNVF5Gsd+kzMUUrtLjwok8MGccovdGYfu5Lfu9htsQkZznA4PzFEP0qt0GR5J73Pu5Qj44qzfpWhVLdDJkaiCjY0gC8OIn/prOLq7n+0y/et7xrRr3+FJ8KzScZnk/rP50FgVJ9BhTXQWvHdY0LOwVRySaU9e7Yw24eDTx3knTf4CrVlsa1yV6qZ2vEUXWua7baRASzbpj7qClO1u5+0drqEFyx3OBsYDhM+H4UrXNzNdTNLcOXc+J8KvOz+uQ6TYzxSW3eO771bPoBzWZddKz9G3RpY0x/I5WRMOwPtDBQDjpmq3WO1dtJE1pvMVyp2NG3nXWlXD3NhDK59t0yfjVB2m0WS8ujdQKTIgUlRxv54/tSK5ezGWJrlDfp4jsbGELdw78bnUkEEmgNZ1iGV2R0QnzyMUmpZ6g7bTIFPAw8oBNQ3GlXwkIkliUDqTIMU3Yn7ivLL4LqXULccSXMQXwRBXVv2ktLPchl3KR7IUZpdPZy8YGQyLtH+LY5H1xUEWiF3yLmGVFPOzJOfKu2pEeSfwN1nctdwtPIMb3JT+nwoTWIhNFEpzjfk48cUbFH3SLGBgKMYom2sxdOSWKFB7JAyOfMUKTk8IOT2RyzrQ4e60/PGXdmPpRT9K7ihFvHsBzzknzqOTpWjBbY4Me2SnNtFfe/wpMeVZpP/AB5P6j+daXefwn+BrNbj+PJ/WfzpdjGVDfq3aW/1RmQuY4T0RfKqjFRFwnJqJ5mc+xwvnVJtyeWbS8dSxEmaUD2Ry1exjAyxOaGAxRNnFJcTJDCu6RzgD/vhRbcIQ7XKQ5dl5y2m7c8xSFD8+R+dXJw55GT+dLXZa7tV1G506Ji7bNzTeDkHBCjyGevjTTEnn1zSNrUh29MDt7vWuzDmLs8lm0FzKZZe/t+8ZCSM4Plx0NX17r2oSpG9xFo88bxlQ4tSCN3Oc546UFdCRQrwsVdehFUUvfh2PcjJ6nz/AApu9dEQhHto9ve1Wu3Ly2ywaekTkruSFsqOBwdxHhQVnZxWiKijp7THzNTojZy1dSdK7shpJnG8kkmhZ9SntZsQn2QPaGOtSO+FyTxVJY6lBqkjW0nd291uIhfokw8Fb+VvI9D0OOtdFPtEOUepDJDrYkQd7Hz6VMdQt5Bnfj40sMXjkaORWR1OGVhgg+Ir1ZW6E5FNV8l2Llo6pcov7qWNoHIcdKzi5RhcSey3vHwpqeTCHzNQ936Cpd2QI6Pb0yiCnPtHNdjjjpTJofYrUtSCy3I+xWx53SLl2Hov64pqfsj2dhsprZu9MscfePcd8TIg8W2jwHlt+tDlIF57ZmYq9ji/dnZw3xGJ74lEb+SIdcf1Y+lNWndjtHinaOZLm7dDy8pCoD5FR/c0R2z0iK60Y20YWLulHc7eApA4Hw8KGUkTFMy3RLx7TWraePr3gUjzB4I/GtYimBbGeo/Gsfto2hvE3rhkfkeRFaXZS/abRWQ/eYB+NRPsOr8l8txGfu34PrXN5LGSIlj49BVRHfRSfd3Hst0z0qO4aZfahuVI6e1QZHI9uGSPOcZz50JJKNpPTPShJpVjJaWQMfIdKAnvs5OcCpRDZ1q113ds6g8kYpMDGrTVLkyNtFd6BpZvLgSuPukPl1NMjwslefLLvWu+SPT7l/aee2USMepZOMn1xtoKG5QH2+KcFs4NT05rSSESNG+6LEnd84wfawcceYIqoHZVpZ9ttcP7IZpIHjzLGB1PskqR65HwqcJrIXllHgCkuYXChGWvO9T0+tF3nY+4Ve9sJlnH+m42N8vA/UVRyaXexuUktLtWHUd0xx+FQoJ9B+aS7RsGsavY6TGH1G5SJjysfV3+C9TVPbQXvaO7juhpv7tgU5jubhc3DjzUHhPiQTVhpOm2ulTd9bW1tLcH3ri6i72Vj57icj5Urdre2uttcTWNtLFaxhirPDHhz8yTigi4/wBFvJZ9qe1mm9mMafpca3V0nLjeSFJ8XbqzfjSrp3bme8lmi12bbFLju2jiG2L0I6kevNK0cAklwzEknknxqxk0iEPGNzc0bUfcBSeeCy1TSGku+9tdkhIBIVgDjzweaM0lprchHikCjzBGDQN9p0VtYwXEBKOrAHbxkUVo0SfbXBBJAznNJbGRfJeXbWtwn3wAfz6Gqiez/wBG7ZR5HFEy3LxXTRe8oPjXTxRsu7u1yaPsYUc1oEy0kzuBz1xVbIZpn7q0gdyf5FJpjlChWIUcdOKBuGfaT3jj/cajIMipi0K+mlBuFW2i6tJM4UAfDrVrBrel2Ei2UO9oQNpmA4z48eXrVBdMzsQT1oSSIK3FMxu4YpvHRtGhWMUlolzbSh1bn2aVO0Zt7LUzZXrT2c6ytJDfoSVZG5AYdVIORkVWfs61+707WILEfeW1y+woTjb6itP7W6ZbTRxPPGsmTsZWXg+VHhKH6AzmQLp9hcNp6XSXS6lG5Ja6ilEgYnrkgnHwNGxSqIwOf/WlbS9EGlXn2nR767sZPERuCrejAjBHxoq97ZTWd08F1pdhczJjfMFaPeSM52gnFLWx8oZyf//Z",
                  }
              case GOUNDAMANI_COMEDY:
                  return{
                    ...state,
                    img:"https://www.filmibeat.com/ph-big/2011/09/131599602333771.jpg",
                  }
              default:
                  return {
                    ...state
                  }
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
