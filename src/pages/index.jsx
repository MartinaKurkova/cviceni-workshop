import { render } from '@czechitas/render';
import { WorkshopIntro } from '../components/WorkshopIntro';
import { Venue } from "../components/Venue";
import { Instructor } from '../components/Instructor';
import '../global.css';
import './index.css';

const response = await fetch('http://localhost:4000/api/workshops/0');
const json = await response.json();

const data = json.data;

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro title={data.title} description={data.description} />
    <Venue name={data.venue.name} city={data.venue.city} street={data.venue.street} />
    <Instructor name={data.instructor.name} bio={data.instructor.bio} />
  </div>
);

