import React, { Component } from 'react';
import { Container, Row, Col, Media, Alert, Badge, Button, Breadcrumb, ButtonGroup, ButtonToolbar, Card, Carousel } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <Container>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
          <Breadcrumb.Item href="/">Info</Breadcrumb.Item>
          <Breadcrumb.Item active>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel1.jpeg" alt="Travel 1" />
            <Carousel.Caption>
              <h3>Diskon Hotel</h3>
              <p>diskon sampai 500 rb.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel2.png" alt="Travel 2" />
            <Carousel.Caption>
              <h3>Tiket Pesawat Murah</h3>
              <p>Travel jadi makin asik.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/travel3.jpeg" alt="Travel 3" />
            <Carousel.Caption>
              <h3>Diskon Kereta</h3>
              <p>Diskon sampai 35 rb.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate"
              />
              <Media.Body>
                <h5>Makanan Sate</h5>
                <p>
                  Sate adalah makanan yang dibuat dari daging
                </p>
              </Media.Body>
            </Media>
          </Col>
          <Col>
            <Media>
              <img
                width={64}
                height={64}
                className="mr-3"
                src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png"
                alt="Gambar Sate"
              />
              <Media.Body>
                <h5>Makanan Sate</h5>
                <p>
                  Sate adalah makanan yang dibuat dari daging
                </p>
              </Media.Body>
            </Media>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* variant itu sama dengan class */}
            <Alert variant="primary">User yang kamu masukkan salah</Alert>
          </Col>
          <Col>
            <h5>
              Example heading <Badge variant="secondary">New</Badge>
            </h5>
            <Button variant="primary">
              Profile <Badge variant="light">9</Badge>
            </Button>
          </Col>
          <Col>
            <Button variant="info">Kirim</Button>
            <br />
            <ButtonToolbar aria-label="Toolbar with button groups">
              <ButtonGroup className="mr-2" aria-label="First group">
                <Button>1</Button>
                <Button>2</Button>
                <Button>3</Button>
                <Button>4</Button>
              </ButtonGroup>

              <ButtonGroup className="mr-2" aria-label="Second group">
                <Button>5</Button>
                <Button>6</Button>
                <Button>7</Button>
              </ButtonGroup>

              <ButtonGroup aria-label="Third group">
                <Button>8</Button>
              </ButtonGroup>
            </ButtonToolbar>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Card style={{ width: '300px' }}>
              <Card.Img variant="top" src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
              <Card.Body>
                <Card.Title>Sate</Card.Title>
                <Card.Text>
                  Sate adalah makanan khas indonesia yang mendunia
                </Card.Text>
                <Button variant="primary">Visit indonesia</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            Kolom 2
          </Col>
          <Col>
            Kolom 3
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App;