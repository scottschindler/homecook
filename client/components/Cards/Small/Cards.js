import Card from "../Small/Card";
import { Pane, Text, Heading } from "evergreen-ui";

const Cards = () => {
  return (
    <div className="card">
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <style jsx>{`
        .card {
          display: flex;
          flex-wrap: wrap;

          margin: 5rem;
        }
        .card li {
          padding-left: 3rem;
          list-style-type: none;
        }
      `}</style>
    </div>
  );
};

export default Cards;
