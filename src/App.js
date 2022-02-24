
import './App.css';
import React from 'react';
import {  Col, Container, Row,Nav,NavLink, Navbar, NavbarBrand, NavbarToggler, NavItem,
  UncontrolledDropdown,DropdownToggle,
  DropdownMenu, DropdownItem, NavbarText, Collapse, Button,Table,Input,
  Card,CardBody, CardTitle,CardSubtitle, CardText,CardImg   } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nvidia from './Nvidia.png'
import FB from './FB.png'
import Twitter from './Twitter.png'
import Reddit from './Reddit.png'
import Insta from './Insta.png'
import phone from './Phone.png'
import about from './About.html'




function App() {
  return (
    <div className="App">
    <header>
      <Container>


            <Row>
            <Col className='.col-3' xs='3' > <img src={Nvidia} width='120' ></img>  </Col>
            <Col className='.col-6' xs='6'>


            <div>
            <Navbar
            color="light"
            expand="md"
            light
            >
            <NavbarBrand href="/">
            Home
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck(){}} />
            <Collapse navbar>
            <Nav
            className="me-auto"
            navbar
            >
            <NavItem>
              <NavLink href="/components/">
                About
                <a href={about}></a>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                
              </NavLink>
            </NavItem>
            <UncontrolledDropdown
              inNavbar
              nav
            >
              <DropdownToggle
                caret
                nav
              >
                Contact
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
               
                
                <a href='https://www.facebook.com/' >
                  <img src={FB} width='20' ></img>
                   &nbsp; FaceBook
                </a>
                </DropdownItem>
                <DropdownItem>
                  <a href='https://twitter.com/home'>
                    <img src={Twitter} width='20'></img>
                     &nbsp; Twitter</a>
                </DropdownItem>
                <DropdownItem>
                 
                <a href='https://www.reddit.com/'> 
                  <img src={Reddit} width='20'></img>
                  &nbsp; Reddit
                 </a>
                </DropdownItem>
                <DropdownItem>
                  <a href='https://www.instagram.com/'>
                  <img src={Insta} width ='20'></img>
                  &nbsp; Instagram
                  </a>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <img src={phone} width= '20'></img>
                 &nbsp; <a href="tel:+375 333432454" target="_blank">+375 3334 32454</a>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </Nav>
            <NavbarText>
            <div>
            <Button
                    color="danger"
                  >
                    Profile
                  </Button>
            </div>
            </NavbarText>
            </Collapse>
            </Navbar>
            </div>

            </Col>
            <Col className='.col-3' xs='3'>
            <div>
                  
            </div>
            </Col>
            </Row>
<br/>
            <div>
    <Container>
    <Row >
       <Col xs='3'><Input  bsSize="sm"
    type="search" placeholder='search'/></Col>
    <Col xs='3'> 
          <Button outline size="sm"> Search </Button>
    </Col>
     </Row>
    </Container>

   
  
</div>

<br/>

            <Row>
              <Col className='.col-6' xs='6'></Col>
<Container>
              <div>
  <Card className="blog-card">
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="50"
    />
    <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
      <Button>
        Read More
      </Button>
    </CardBody>
  </Card>
  <br/>
  <br/>
  <Card className="blog-card">
   
    <CardImg
      alt="Card image cap"
      bottom
      src="https://picsum.photos/318/180"
      />
       <CardBody>
      <CardTitle tag="h5">
        Card Title
      </CardTitle>
      <CardText>
        This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
      </CardText>
      <CardText>
        <small className="text-muted">
          Last updated 3 mins ago
        </small>
      </CardText>
      <Button>
        Read More
      </Button>
    </CardBody>
  </Card>
</div>
</Container>
</Row>

            <Row></Row>
      </Container>
    </header>
   
   <body>
  

  

   </body>





    <footer>
        <p>All rights reserver &copy; WarnerBros.Co</p>
    </footer>

    </div>
  );
}

export default App;
