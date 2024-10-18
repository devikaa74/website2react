import React from 'react';
import { Carousel, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ImageSlider = () => {
  const cardData = [
    {
      img: "https://c.recipeland.com/images/r/20873/1167b0d62114aa73bc34_1024.jpg",
      title: "Grilled Cheese Burger",
      text: "Rs.150"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.urx4j5R-6uX1lxHrGlewiwHaGq&pid=Api&P=0&h=220",
      title: "Potato Burger",
      text: "Rs.90"
    },
    {
      img: "https://i1.wp.com/www.teacher-chef.com/wp-content/uploads/2012/06/6-14-black-bean-burger-side1.jpg?fit=3243%2C2162&ssl=1",
      title: "Black Bean",
      text: "Rs.120"
    },
    {
      img: "https://recipes.net/wp-content/uploads/2021/10/the-best-grilled-bbq-burger-recipe.jpg",
      title: "BBQ Grilled ",
      text: "Rs.190"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.EJYmtKuRIwefDMoQmYdoNgHaE8&pid=Api&P=0&h=220",
      title: "Brisket Burger",
      text: "Rs.230"
    },
    {
      img: "https://tse2.mm.bing.net/th?id=OIP.WDCRTfi8NdHddKFQ0XGVoQHaFj&pid=Api&P=0&h=220",
      title: "Pork Belly & Beef",
      text: "Rs.200"
    },
    {
      img: "https://www.foodandwine.com/thmb/pwFie7NRkq4SXMDJU6QKnUKlaoI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Ultimate-Veggie-Burgers-FT-Recipe-0821-5d7532c53a924a7298d2175cf1d4219f.jpg",
      title: "Veg Burger",
      text: "Rs.120"
    },
    {
      img: "https://theflavorbells.com/wp-content/uploads/2020/07/soya-chunks-patty-feature.jpg",
      title: "Soy Bean Burger",
      text: "Rs.170"
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.C-TEMT3fQFMrDOqFgzf_4QHaHa&pid=Api&P=0&h=220",
      title: "Mushroom Veggie Burger",
      text: "Rs.180"
    },
    // Add more card data as needed
  ];

  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const cardChunks = chunkArray(cardData, 3); // Group cards in chunks of 3

  return (
    <div className='image-slider-container mt-5'>
      <div className='mt-5'>
        <h1 className='text-warning'>OUR POPULAR MENU</h1>
      </div>
      <Carousel>
        {cardChunks.map((chunk, index) => (
          <Carousel.Item key={index}>
            <Row>
              {chunk.map((card, i) => (
                <Col key={i}>
                  <Card className='ms-2' style={{ width: '18rem', margin: '0 auto' }}>
                    <Card.Img className='card-img-top' variant="top" src={card.img} />
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>
                        {card.text}
                      </Card.Text>
                      <Button variant="primary">BUY NOW</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
