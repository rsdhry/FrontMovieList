import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/avangers.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Avangers</Card.Text>
         <Card.Text>Bagus 3.6/4.0</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/batman.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Batman Returns</Card.Text>
         <Card.Text>Bagus 3.8/4.0</Card.Text>
         </div>

       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/battleship.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>War On The Water</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>
       
         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/bumblebee.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>BumbleBee Story</Card.Text>
         <Card.Text>Keren 4.0/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/captainamerica.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>The Captain of America</Card.Text>
         <Card.Text>Keren 3.9/4.0</Card.Text>
         </div>

       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/harrypotter.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Harry Potter - Story of Magic</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/hulk.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Hulk - Big Green Man</Card.Text>
         <Card.Text>Bagus 3.6/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/ironman.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Ironman</Card.Text>
         <Card.Text>Keren 3.9/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/ironman2.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Ironman 2</Card.Text>
         <Card.Text>Bagus 3.7/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/jumanji.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Jumanji is The Secret Game</Card.Text>
         <Card.Text>Keren 4.0/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/shark.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Monster in The Water</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/spiderman.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Spiderman</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/superman.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Superman Returns</Card.Text>
         <Card.Text>Keren 4.0/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/thor.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>THOR</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/transformers.jpeg" alt="card image"  height="400px"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Transformers - Dark of The Moon</Card.Text>
         <Card.Text>Bagus 3.5/4.0</Card.Text>
         </div>

       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
