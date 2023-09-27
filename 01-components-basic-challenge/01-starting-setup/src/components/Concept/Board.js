import '../../index.css';
import Concept from './Concept';

export default function Board(props) {
  return (
    <ul id="concepts">
      <Concept
        title={props.concepts[0].title}
        image={props.concepts[0].image}
        description={props.concepts[0].description}
      />
      <Concept
        title={props.concepts[1].title}
        image={props.concepts[1].image}
        description={props.concepts[1].description}
      />
      <Concept
        title={props.concepts[2].title}
        image={props.concepts[2].image}
        description={props.concepts[2].description}
      />
    </ul>
  );
}
