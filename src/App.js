import logo from './logo.svg';
import './App.css';

function App(props) {
  return (
 <div className='container'>
  <div className='header'>
    <img src={props.image} className='image'></img>
    <h2>Name: {props.name}</h2>
    <h2>Sector: {props.work}</h2>
    <h2>Experience: {props.experience}</h2>
    <h4>Achievement:{props.achievement}</h4>
    </div>
    <div className='footer'>
    <h2>Skills</h2>
 <ul>{props.skills.map((skill, index)=>(
  <li key = {index} >{skill}</li>
 ))}</ul>
    
  </div>
 </div>


  );
}

export default App;
