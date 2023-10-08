import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import hero from "../images/HERO PAGE.png";
import G0 from "../images/Group 52824.png";
import G1 from "../images/Group 52824 (1).png";
import G2 from "../images/Group 52824 (2).png";
import Section2 from "../images/Ellipse 127.png";
import Section3 from "../images/Ellipse 128.png";
import Rectangle1 from "../images/Rectangle 1111099.png";
import Rectangle2 from "../images/Rectangle 1111100.png";
import Rectangle3 from "../images/Frame 1000014396.png";

import {BsHouseDoor,BsChatLeftDots} from "react-icons/bs"

import Footer from "../components/Footer";

const Container = styled.div``;
const HeroDiv = styled.div`
  padding-top: 80px;
  display: flex;
  height: 400px;
`;
const Text = styled.h1`
  padding-left: 100px;
  flex: 1;
  width: 70%;
`;
const Toptext = styled.h1`
  width: 80%;
  font-size: 45px;
  font-weight: 500;
`;
const Bottomtext = styled.p`
  font-weight: 400;
  font-size: 20px;
`;
const Button = styled.button`
  height: 50px;
  width: 200px;
  margin-right: 10px;
  border-radius: 10px;
  border: ${(props) => props.type === "filled" && "none"};
  border-color: #cb85f7;
  background-color: ${(props) =>
    props.type === "filled" ? "#ac3cf2" : "#fefefe"};
  color: ${(props) => (props.type === "filled" ? "#fefefe" : "#ac3cf2")};
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const HeroDiv2 = styled.div`
  text-align: center;
  padding-top: 300px;
`;
const Uptext = styled.h1`
  font-size: 50px;
`;
const Downtext = styled.p`
  font-size: 25px;
`;
const SectionDiv = styled.div`
  display: flex;
  height: 700px;
  align-items: center;
  justify-content: space-around;
`;
const Sec1 = styled.div`
  padding-top: 100px;
  background-color: #eff9f1;
  height: 350px;
  align-items: center;
  border-radius: 20px;
  width: 30%;
`;
const Sec2 = styled.div`
  padding-top: 100px;
  background-color: #fef9ec;
  width: 30%;
  align-items: center;
  border-radius: 20px;
  height: 350px;
`;
const Sec3 = styled.div`
  padding-top: 100px;
  background-color: #eff4fa;
  width: 30%;
  align-items: center;
  border-radius: 20px;
  height: 350px;
`;
const SectionUpText = styled.h1`
  font-weight: 500;
`;
const SectionDownText = styled.p``;
const HeroImage = styled.span``;

const HeroDiv3 = styled.div`
  display: flex;
  justify-content: space-around;
`;
const HeroDiv4 = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 100px;
`;

const ImageContainer2 = styled.div``;
const SectionDiv2 = styled.div`
  padding-top: 50px;
`;
const Section2UpText = styled.h1`
  letter-spacing: -1px;
`;
const Section3UpText = styled.h1`
  letter-spacing: 1px;
`;
const Section2DownText = styled.p``;
const Section3DownText = styled.p`
  width: 80%;
`;
const Line = styled.span`
  padding: 10px;
`;
const Section2Info = styled.div`
  height: 40px;
  width: 300px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.type === "purple" ? "#d59df8" : "#fcfafe"};
  align-items: center;
  display: flex;
`;
const Section2Button = styled.button`
  margin-top: 50px;
  background-color: #ac3cf2;
  color: white;
  height: 45px;
  width: 175px;
  border-radius: 10px;
  border: none;
`;
const ImageContainer3 = styled.div`
  width: 40%;
`;
const HeroDiv5 = styled.div`
  display: flex;
  padding-top: 100px;
  justify-content: space-around;
`;
const SectionDiv3 = styled.div`
  padding-top: 50px;
  width: 30%;
`;
const Img = styled.img`
  height: 400px;
  width: 600px;
`;
const HeroDiv6 = styled.div`
  padding: 100px 60px;
  position: relative;
`;
const ImageContainer4 = styled.div``;
const Img2 = styled.img``;
const Section4 = styled.div`
  top: 267px;
  left: 403px;
  position: absolute;
`;
const Section4Input = styled.div``;
const Input = styled.input`
  border: none;
  height: 45px;
  width: 550px;
  border-radius: 10px;
  background-color: #4a3246;
  color: white;
  font-size: 30px;
  letter-spacing: 3px;
`;
const Section4Button = styled.button`
  margin: 6px 110px;
  height: 55px;
  width: 335px;
  border-radius: 18px;
  border: none;
  background-color: #b544f4;
  color: white;
  font-size: 20px;
  font-weight: 500;
`;

const Landing = () => {
  return (
    <Container>
      <Navbar />
      <HeroDiv>
        <Text>
          <Toptext>
            Discover Boundless Connections,Empower Your Education Journey
          </Toptext>
          <Bottomtext>
            Connect with peers who share hunger for your knowledge, sparking
            engaging discussions and fostering lifelong friendships. Embrace a
            future where the pursuit of learning knows no limit
          </Bottomtext>
          <Button type="filled">Get Started</Button>
          <Button>Learn more</Button>
        </Text>
        <ImageContainer>
          <img src={hero} alt="" />
        </ImageContainer>
      </HeroDiv>
      <HeroDiv2>
        <Uptext>What StudentHub has to offer</Uptext>
        <Downtext>
          Take your time, connect with others and learn from anywhere
        </Downtext>
        <SectionDiv>
          <Sec1>
            <HeroImage>
              <img src={G0} alt="" />
            </HeroImage>
            <SectionUpText>Host online classes</SectionUpText>
            <SectionDownText>
              Host online classes Provide educational assistance online to
              students who want to learn about a specific topic through live
              classes and others.
            </SectionDownText>
          </Sec1>
          <Sec2>
            <HeroImage>
              <img src={G1} alt="" />
            </HeroImage>
            <SectionUpText>Get assistance</SectionUpText>
            <SectionDownText>
              Find, connect, and communicate with the ideal tutors for you. Meet
              those who share your interests, establish friendships, and succeed
              together.
            </SectionDownText>
          </Sec2>
          <Sec3>
            <HeroImage>
              <img src={G2} alt="" />
            </HeroImage>
            <SectionUpText>Practice test</SectionUpText>
            <SectionDownText>
              Practice test To effectively prepare for your exams, you have
              access to tests and quizzes. Gain access to materials so you may
              expand your understanding.
            </SectionDownText>
          </Sec3>
        </SectionDiv>
      </HeroDiv2>
      <HeroDiv3>
        <ImageContainer2>
          <img src={Section2} alt="" />
        </ImageContainer2>
        <SectionDiv2>
          <Section2UpText>What you can do as a Student</Section2UpText>
          <Section2DownText>
            Step by step instructions on how StudentHub works for Students
          </Section2DownText>
          <Section2Info type="purple">
           <BsHouseDoor/>
            <Section2DownText>Student's dashboard</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
            <BsChatLeftDots />
            <Section2DownText>Engage your learners</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
          <BsChatLeftDots />
            <Section2DownText>Create assignments</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
          <BsChatLeftDots />
            <Section2DownText>Host live classes</Section2DownText>
          </Section2Info>
          <Section2Button>Join as a student</Section2Button>
        </SectionDiv2>
      </HeroDiv3>
      <HeroDiv4>
        <SectionDiv2>
          <Section2UpText>What you can do as a Tutor</Section2UpText>
          <Section2DownText>
            Step by step instructions on how StudentHub works for Tutors
          </Section2DownText>
          <Section2Info type="purple">
            <BsHouseDoor />
            <Section2DownText>Tutor's dashboard</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
          <BsChatLeftDots />
            <Section2DownText>Host live classes</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
          <BsChatLeftDots />
            <Section2DownText>Engage your learners</Section2DownText>
          </Section2Info>
          <Line>|</Line>
          <Section2Info>
          <BsChatLeftDots />
            <Section2DownText>Create assignments</Section2DownText>
          </Section2Info>
          <Section2Button>Join as a Tutor</Section2Button>
        </SectionDiv2>
        <ImageContainer2>
          <img src={Section3} alt="" />
        </ImageContainer2>
      </HeroDiv4>
      <HeroDiv5>
        <ImageContainer3>
          <Img src={Rectangle1} alt="" />
        </ImageContainer3>
        <SectionDiv3>
          <Section3UpText>Memorize faster for free</Section3UpText>
          <Section3DownText>
            Research shows that testing yourself with flashcards is more
            effective than rereading your notes. From math to medicine to modern
            languages, Quizlet is used by students in over 100 different
            subjects.
          </Section3DownText>
          <Section2Button>Get started</Section2Button>
        </SectionDiv3>
      </HeroDiv5>
      <HeroDiv5>
        <SectionDiv3>
          <Section3UpText>Practice Tests</Section3UpText>
          <Section3DownText>
            Research shows that testing yourself with flashcards is more
            effective than rereading your notes. From math to medicine to modern
            languages, Quizlet is used by students in over 100 different
            subjects.
          </Section3DownText>
          <Section2Button>Get started</Section2Button>
        </SectionDiv3>
        <ImageContainer3>
          <Img src={Rectangle2} alt="" />
        </ImageContainer3>
      </HeroDiv5>
      <HeroDiv6>
        <ImageContainer4>
          <Img2 src={Rectangle3} alt="" />
        </ImageContainer4>
        <Section4>
          <Section4Input>
            <Input />
          </Section4Input>
          <Section4Button>Join StudentHub</Section4Button>
        </Section4>
      </HeroDiv6>
      <Footer />
    </Container>
  );
};

export default Landing;
