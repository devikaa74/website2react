import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Review = () => {
  return (
    <div className='container mt-5'>
                {/* <h1> Customer Reviews</h1> */}

         <CardGroup className='mt-5'>
         <h1 style={{color:'#D9D9D9'}}>CUSTOMER REVIEWS</h1>
  
      <Card className='mt-5'>
        <Card.Img variant="top" src="https://media.istockphoto.com/photos/person-holding-a-picture-of-smiley-face-picture-id585068278?k=6&m=585068278&s=612x612&w=0&h=IVKk_ilyKFlIQ-MUuq209uqX5oL9IE2yMotsM0t8n3M=" />
        <Card.Body>
          <Card.Title>John Smith</Card.Title>
          <Card.Text>
          I've been grilling cheese since the ripe age of 8 years old and I can say the Melt at the spectrum delivers to my expectations matching their superb customer service creating a warm and savory experience for all whom should choose to dine.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="https://tse1.mm.bing.net/th?id=OIP.9oNoQxyRIO2buW6UnKIJrwHaE7&pid=Api&P=0&h=220" />
        <Card.Body>
          <Card.Title>William Davis</Card.Title>
          <Card.Text>
          Ommgg!! Super good melty deliciousness!! Irvine isn't that great when it comes to food for me. Everything just seems super generic sometimes..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 2 days ago</small>
        </Card.Footer>
      </Card>
      <Card className='mt-5'>
        <Card.Img variant="top" src="https://tse3.mm.bing.net/th?id=OIP.Z7d1i1eS51QchBuyvubJrwHaFS&pid=Api&P=0&h=220" />
        <Card.Body>
          <Card.Title>George Seb</Card.Title>
          <Card.Text>
          MELTBURGER is the best smash burger I've had in a long time.
          Definitely appreciate the flavors and that it stays warm and delicious when being delivered.
          Will definitely order again and again!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 5 days ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Review