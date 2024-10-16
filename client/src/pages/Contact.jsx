import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.background};
  overflow-y: auto;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const SectionTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.primary};
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background-color: ${({ theme }) => theme.card_background};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const InfoItem = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.6;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 24px;
  background-color: ${({ theme }) => theme.card_background};
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 14px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const TextArea = styled.textarea`
  padding: 14px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.text_secondary + 20};
  border-radius: 8px;
  outline: none;
  resize: none;
  height: 150px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const Button = styled.button`
  padding: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: ${({ theme }) => theme.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can handle form submission logic here (e.g., send data to server)
  };

  return (
    <Container>
      <Wrapper>
        <SectionTitle>Contact Us</SectionTitle>

        <ContactInfo>
          <InfoItem>Email: contact@fitnesstrack.com</InfoItem>
          <InfoItem>Phone: +123 456 7890</InfoItem>
          <InfoItem>
            Address: 123 Fitness Avenue, Workout City, Fitland 10101
          </InfoItem>
        </ContactInfo>

        <ContactForm onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit">Send Message</Button>
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
