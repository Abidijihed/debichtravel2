import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import Rating from 'react-rating-stars-component';
import { useNavigate } from 'react-router-dom';
const Post = () => {
    const  navigate = useNavigate();
  return (
    <Container>
      <Row className="my-4">
        <Col xl="4">
          <h2 className="text-center">Hammamet</h2>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col xl="4">
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: "80%",
                left: "80%",
                width: '15%',
                height: '15%',
                backgroundColor: 'red', // #ff8000 with 80% opacity
                // borderTopLeftRadius: '25px',
                borderRadius: '60%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <p style={{ color: 'white', fontSize: '1.5rem' }}>-25%</p>
            </div>
            <img
              src="https://i.pinimg.com/564x/22/cc/47/22cc47c73975a284f0415d5729d149bc.jpg"
              alt="Hammamet"
              className="img-fluid"
              style={{ width: '500px',height:"500px", borderRadius: '25px' }}
            />
          </div>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="text-center" xl="4">
          <Button variant="warning" onClick={()=>navigate('/location')}>Reserve Now</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col  xl="4" style={{display:"flex"}}>
          <h4 style={{ color: '#ff8000' }}>Green Golf</h4>
          <Rating
            count={5}
            size={24}
            activeColor="#ffd700"
            value={4}
            edit={false}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
