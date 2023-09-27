import '../../index.css';

export default function Concept(props) {
  return (
    <li className="concept">
      <img src={props.image} alt={props.tittle} />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </li>
  );
}
