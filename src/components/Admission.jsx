import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    class: '',
    school: '',
    mobile: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Admission Form</h2>
      <Form onSubmit={handleSubmit} className="shadow p-4 rounded bg-light">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formClass">
          <Form.Label>Class</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your class"
            name="class"
            value={formData.class}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSchool">
          <Form.Label>School</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your school name"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMobile">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter your mobile number"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Admission;