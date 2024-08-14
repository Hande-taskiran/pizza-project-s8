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
  font-size: 1.8rem;
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
  font-size: 1.1rem;
  margin-bottom: 10px;
  text-align: left;
`;
const PizzaDescription = styled.p`
  color: #5f5f5f;
  margin-bottom: 10px;
  text-align: left;
  font-size: 0.9rem;
`;
const Price = styled.div`
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`;
const ExtraSelections = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.4rem;
`;
const SelectionsTitle = styled.h3`
  font-size: 1.1rem;
  text-align: left;
  margin-top: 1.5rem;
`;
const CheckboxDescription = styled.p`
  color: #5f5f5f;
  text-align: left;
  font-size: 0.9rem;
`;
const OrderSummary = styled.div`
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #5f5f5f;
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const BottomGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;
const OrderButton = styled.button`
  width: 100%;
  background-color: #fdc913;
  color: black;
  padding: 15px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;
const CounterButton = styled.button`
  background-color: #fdc913;
  color: black;
  margin-top: 20px;
`;
export default function Order() {
  const [formData, setFormData] = useState("");
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleChangeExtras = (event) => {
    const { value, checked } = event.target;
    setExtras((items) =>
      checked ? [...items, value] : items.filter((item) => item !== value)
    );
  };
  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const extraPrice = extras.length * 5;
  const calculateTotal = () => {
    const basePrice = 85.5;
    return (basePrice + extraPrice) * quantity;
  };

  return (
    <>
      <Header>
        <Title>Teknolojik Yemekler</Title>
      </Header>
      <FormSection>
        <PizzaTitle>Position Absolute Acı Pizza</PizzaTitle>
        <Price>85.50₺</Price>
        <PizzaDescription>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          malzemelerle kaplanmış ve odun ateşinde pişirilmiştir.
        </PizzaDescription>
        <Form>
          <PizzaSelections>
            <FormGroup tag="fieldset">
              <SelectionsTitle>Boyut Seç *</SelectionsTitle>
              <FormGroup check>
                <Input name="radio1" type="radio" onChange={handleChange} />{" "}
                <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" onChange={handleChange} />{" "}
                <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check>
                <Input name="radio1" type="radio" onChange={handleChange} />{" "}
                <Label check>Büyük</Label>
              </FormGroup>
            </FormGroup>
            <FormGroup>
              <SelectionsTitle for="exampleSelect">Hamur Seç *</SelectionsTitle>
              <Input
                id="exampleSelect"
                name="select"
                type="select"
                placeholder="Hamur Kalınlığı"
                onChange={handleChange}
              >
                <option>İnce Hamur</option>
                <option>Normal Hamur</option>
                <option>Kalın Hamur</option>
              </Input>
            </FormGroup>
          </PizzaSelections>
          <SelectionsTitle>Ek Malzemeler</SelectionsTitle>
          <CheckboxDescription>
            En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
          </CheckboxDescription>
          <ExtraSelections>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Pepperoni</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Sosis</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Jambon</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Tavuk</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Soğan</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Domates</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Mısır</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Sucuk</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Jalepeno</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Sarımsak</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Biber</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Salam</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Ananas</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Füme Et</Label>
            </FormGroup>
            <FormGroup check>
              <Input type="checkbox" onChange={handleChangeExtras} />{" "}
              <Label check>Cheddar</Label>
            </FormGroup>
          </ExtraSelections>
          <FormGroup>
            <SelectionsTitle for="exampleText">Ad Soyad</SelectionsTitle>
            <Input
              id="exampleText"
              name="text"
              type="text"
              placeholder="Adınızı ve Soyadınızı yazınız"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <SelectionsTitle for="exampleText">Sipariş Notu</SelectionsTitle>
            <Input
              id="exampleText"
              name="text"
              type="textarea"
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              onChange={handleChange}
            />
          </FormGroup>
          <BottomGroup>
            <div>
              <CounterButton
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </CounterButton>
              <span>{quantity}</span>
              <CounterButton onClick={() => setQuantity(quantity + 1)}>
                +
              </CounterButton>
            </div>
            <OrderSummary>
              <SelectionsTitle>Sipariş Toplamı</SelectionsTitle>
              <SummaryItem>
                <span>Seçimler:</span>
                <span>{extraPrice}₺</span>
              </SummaryItem>
              <SummaryItem>
                <span>Toplam:</span>
                <span>{calculateTotal()}₺</span>
              </SummaryItem>
              <OrderButton>SİPARİŞ VER</OrderButton>
            </OrderSummary>
          </BottomGroup>
        </Form>
      </FormSection>
    </>
  );
}
