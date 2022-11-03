import "./style.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const card = (props) => {
  return (
    
     <Card className={props.state}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
         {props.body}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default card;
