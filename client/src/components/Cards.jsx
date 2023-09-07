// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../styles/cards.css"

function Cards({img,title,text}) {
  return (
    <div className='card'>
    <Card className='card-style'>
      <Card.Img className='card-img' src={img} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Text className='card-text'>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;