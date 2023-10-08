import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.h1`
  padding-left: 100px;
  letter-spacing: -5px;
  color: #aa3cf0;
`;
const NavItems = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-around;
  padding: 50px 0px;
  align-items: center;
`;
const Items = styled.p`
  font-weight: 600;
  color: ${(props) => props.color === "red" && "#9735d5"};
`;

const Button = styled.button`
  background-color: #ac3cf2;
  color: white;
  width: 120px;
  height: 40px;
  border: 10px;
  border-radius: 10px;
`;
const Navbar = () => {
  return (
    <Container>
      <Title>Student Hub</Title>
      <NavItems>
        <Items>Home</Items>
        <Items>About us</Items>
        <Items>Community</Items>
        <Items>Contact us</Items>
        <Items color="red">Login</Items>
        <Items>
          <Button>Sign up</Button>
        </Items>
      </NavItems>
    </Container>
  );
};

export default Navbar;
