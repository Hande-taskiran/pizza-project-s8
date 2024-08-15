import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  background-image: url("../Assets/Iteration-1-assets/home-banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Button = styled.button`
  background-color: #fdc913;
  color: black;
  margin-top: 20px;
  border-radius: 15px;
  cursor: pointer;
`;
const Paragraph = styled.p`
  font-size: 4rem;
  margin: 0;
  padding: 0;
`;
const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  padding: 0;
`;

export default function Home() {
  const history = useHistory();

  const handleClick = () => {
    history.push("/order");
  };

  return (
    <Div>
      <Title>Teknolojik Yemekler</Title>
      <Paragraph>KOD ACIKTIRIR</Paragraph>
      <Paragraph>PİZZA DOYURUR</Paragraph>
      <Button onClick={handleClick}>ACIKTIM</Button>
    </Div>
  );
}
