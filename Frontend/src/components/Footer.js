import React from 'react'
import styled from "styled-components";



const Container = styled.div`
 
`;
const Footer1 = styled.div`
 
`;
const Title = styled.h1`
padding-left: 80px;
letter-spacing: -5px;
color: #aa3cf0;
font-size:45px;
`;
const Motto = styled.p`
padding-left: 80px;
font-size:20px;
 
`;
const Contacts = styled.div`
 
`;
const ContactItems = styled.div`
 
`;
const Footer2 = styled.div`
 
`;

const Footer = () => {
  return (
    <Container>
      <Footer1>
        <Title>StudentHub</Title>
        <Motto>We give the best and nothing less</Motto>
        <Contacts>
          <ContactItems></ContactItems>
          <ContactItems></ContactItems>
          <ContactItems></ContactItems>
        </Contacts>
      </Footer1>
      <Footer2>

      </Footer2>
    </Container>
  )
}

export default Footer