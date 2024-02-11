import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaUsers, FaBus, FaPhoneVolume } from 'react-icons/fa';
import './Search.css';
import axios from 'axios';

const tunisianCities = [
  'Tunis',
  'Ariana',
  'Ben Arous',
  'Manouba',
  'Bizerte',
  'Béja',
  'Jendouba',
  'Le Kef',
  'Siliana',
  'Nabeul',
  'Zaghouan',
  'Sousse',
  'Monastir',
  'Mahdia',
  'Sfax',
  'Kairouan',
  'Kasserine',
  'Sidi Bouzid',
  'Gabès',
  'Medenine',
  'Tataouine',
  'Gafsa',
  'Tozeur',
  'Kebili',
  'Hammamet',
  // Add more cities as needed
];

export default function SearchForm() {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    nbPersonnes: '',
    typeBus: '',
    dateDepart: '',
    dateRetour: '',
    phone: '',
    heureDepart: '',
  });

  const handleChange = (field, value) => {
    setFormData(prevData => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleReserverClick = () => {
    axios.post('http://localhost:5600/api/sendmail',{formData})
    .then((res)=>{console.log(res)})
    console.log('Form Data:', formData);
    // Perform any other actions you need with the form data
  };

  return (
    <Container>
      <Row>
        <Col xs lg="5" className='mydestination'>
          <Row>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaMapMarkerAlt className="icon" />
                Depart
              </label>
              <select
                style={{ width: '150px' }}
                onChange={(e) => handleChange('departure', e.target.value)}
              >
                {tunisianCities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Col>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaMapMarkerAlt className="icon" />
                Destination
              </label>
              <select
                style={{ width: '150px' }}
                onChange={(e) => handleChange('destination', e.target.value)}
              >
                {tunisianCities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </Col>
          </Row>
          <Row>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaUsers className="icon" />
                NB personnes
              </label>
              <input
                type="number"
                placeholder="NB personnes"
                style={{ width: '150px' }}
                onChange={(e) => handleChange('nbPersonnes', e.target.value)}
              />
            </Col>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaBus className="icon" />
                Type de bus
              </label>
              <select
                style={{ width: '150px' }}
                onChange={(e) => handleChange('typeBus', e.target.value)}
              >
                <option value="mini-bus">Grand Bus</option>
                <option value="grand-bus">Mini Bus</option>
              </select>
            </Col>
          </Row>
          <Row>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaCalendarAlt className="icon" />
                Date depart
              </label>
              <input
                type="date"
                style={{ width: '150px' }}
                onChange={(e) => handleChange('dateDepart', e.target.value)}
              />
            </Col>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaCalendarAlt className="icon" />
                Date retour
              </label>
              <input
                type="date"
                style={{ width: '150px' }}
                onChange={(e) => handleChange('dateRetour', e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaPhoneVolume className="icon" />
                Phone
              </label>
              <input
                type="number"
                style={{ width: '150px' }}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </Col>
            <Col xs lg="4" className='inputs'>
              <label>
                <FaClock className="icon" />
                Heure depart
              </label><br />
              <input
                type="time"
                style={{ width: '150px' }}
                onChange={(e) => handleChange('heureDepart', e.target.value)}
              />
            </Col>
          </Row>
          <Row>
            <Col xs lg="2">
              <button onClick={handleReserverClick}>Reserver</button>
            </Col>
          </Row>
        </Col>
        <Col xs lg="5" className='inputs'>
          test
        </Col>
      </Row>
    </Container>
  );
}
