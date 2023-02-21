// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cards.css"
// import {typtest1} from "./img/typtest1.png"
function Cards({img}) {
  return (
    <div className='card'>
    <Card className='card-style'>
      <Card.Img className='card-img' src={img} />
      <Card.Body>
        <Card.Title className='card-title'>Card Title</Card.Title>
        <Card.Text className='card-text'>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;