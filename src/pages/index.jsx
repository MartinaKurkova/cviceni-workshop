import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response = await fetch ("http://localhost:4000/api/workshops/0");
const data = await response.json();
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <p className="text">{data.data.title}</p> 
    <p>{data.data.description}</p>
    <p>{data.data.instructor.name}</p>
    <p>{data.data.venue.city}</p>
  </div>
);

