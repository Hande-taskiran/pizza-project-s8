import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  text-align: center;
  background-color: #ce2829;
  margin-bottom: 2rem;
  padding: 4rem;
`;
const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
  font-family: "Quattrocento", serif;
  font-weight: bold;
`;
const FormSection = styled.section`
  width: 30%;
  margin: 0 auto;
  display: column;
  align-items: center;
`;

const PizzaSelections = styled.div`
  display: flex;
  justtify-content: space-between;
  gap: 50%;
`;
const PizzaTitle = styled.h2`
  font-size: 1.3rem;
  margin-bottom: 10px;
  text-align: left;
`;
const PizzaDescription = styled.p`
  color: #5f5f5f;
  margin-bottom: 10px;
  text-align: left;
`;
const Price = styled.div`
  font-size: 1.5rem;
  margin-bottom: 20px;
  text-align: left;
`;
export default function Order() {
  const [size, setSize] = useState("");
  const [dough, setDough] = useState("");
  const [extras, setExtras] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleChangeExtras = (event) => {
    const { value, checked } = event.target;
    setExtras((items) =>
      checked ? [...items, value] : items.filter((item) => item !== value)
    );
  };

  const calculateTotal = () => {
    const basePrice = 85.5;
    const extraPrice = extras.length * 5;
    return (basePrice + extraPrice) * quantity;
  };

  return (
    <>
      <Header>
        <Title>Teknolojik Yemekler</Title>
      </Header>
      <FormSection>
        <PizzaTitle>Position Absolute Acı Pizza</PizzaTitle>
        <PizzaDescription>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          malzemelerle kaplanmış ve odun ateşinde pişirilmiştir.
        </PizzaDescription>
        <Price>85.50₺</Price>
        <Form>
          <PizzaSelections>
            <FormGroup tag="fieldset">
              <label>Boyut Seç *</label>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" /> <Label check>Büyük</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Hamur Seç *</Label>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                placeholder="Hamur Kalınlığı"
              >
                <option>İnce Hamur</option>
                <option>Normal Hamur</option>
                <option>Kalın Hamur</option>
              </Input>
            </FormGroup>
          </PizzaSelections>
        </Form>
      </FormSection>
    </>
  );
}
