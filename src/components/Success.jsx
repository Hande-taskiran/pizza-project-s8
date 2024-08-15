import styled from "styled-components";

const Div = styled.div`
  background: #ce2829;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Paragraph = styled.p`
  font-size: 4rem;
  margin: 0;
  padding: 0;
  text-align: center;
`;
const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 4rem;
  padding: 0px;
`;
export default function Success() {
  return (
    <Div>
      <Title>Teknolojik Yemekler</Title>
      <Paragraph>TEBRİKLER!</Paragraph>
      <Paragraph>SİPARİŞİNİZ ALINDI!</Paragraph>
    </Div>
  );
}
