import { render } from '@czechitas/render';
import { WorkshopIntro } from "../components/WorkshopIntro/index";
import { Venue } from "../components/Venue/index";
import { Instructor } from "../components/Instructor/index";
import { Price } from "../components/Price/index";
import '../global.css';
import './index.css';

const response = await fetch ("http://localhost:4000/api/workshops/0");
const data = await response.json();
console.log(data);

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <WorkshopIntro title={data.data.title} description={data.data.description}/>
    <Venue name={data.data.venue.name} street={data.data.venue.street} city={data.data.venue.city} instructions={data.data.venue.instructions} photo={data.data.venue.photo}/>
    <Instructor name={data.data.instructor.name} email={data.data.instructor.email} profession={data.data.instructor.profession} bio={data.data.instructor.bio} avatar={data.data.instructor.avatar}/>
    <Price price={data.data.price} date={data.data.date}/>
  </div>
);

