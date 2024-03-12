import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Qrcode.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Qrcode } from './Qrcode';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Kishore Jayen" work="Junior Web Developer"  image="Images/Image1.jpg"      experience="1yr"  achievement="National Certificate in Computer Technology"       skills={["Java", "HTML", "CSS" , "Javascript", "React JS"]} />
    <App name="Haarish" work="Bank Manager" image="Image/Image2.jpeg"       experience="3.5yr" skills={["Sales", "Customer-Relationship", "Analytics" , "Communication"]} />
    <App name="Silambarasan" work="Actor" image="Images/Image1.jpg"       experience="28yrs" skills={["Acting", "Dancing", "Singing" , "Fighting", "Director" , "Producer"]} />
   <Qrcode/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
