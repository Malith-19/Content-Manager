import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Homepage from './pages/Home';
import Settings from './pages/Settings';

export default function App(){
  return(
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage isSlides={true} />}/>
      <Route path="settings" element={<Settings/>} />
    </Routes>
   </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
