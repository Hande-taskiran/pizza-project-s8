import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormGroup, Label, Input, FormFeedback } from "reactstrap";
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
const Breadcrumb = styled.nav`
  margin-top: 10px;
  font-size: 0.8rem;
  color: #faf7f2;
`;
const FormSection = styled.section`
  width: 30%;
  margin: 0 auto;
  display: column;
  align-items: center;
`;

const PizzaSelections = styled.div`
  display: flex;
  justify-content: space-between;
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
const Price = styled.p`
  font-size: 1.4rem;
  margin-bottom: 20px;
  text-align: left;
  font-weight: bold;
`;
const ExtraSelections = styled.section`
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
const OrderSummary = styled.section`
  margin-top: 20px;
  padding: 20px;
  border-radius: 4px;
  border: 1px solid #5f5f5f;
`;
const SummaryItem = styled.section`
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
`;
const CounterButton = styled.button`
  background-color: #fdc913;
  color: black;
  margin-top: 20px;
`;
const OrderBox = styled.div`
  width: 65%;
`;

export const errorMessages = {
  extras: "En az 4, en fazla 10 malzeme seçmelisiniz",
  adSoyad: "Adınızı doğru girmediniz",
};
export default function Order() {
  const [formData, setFormData] = useState({ adSoyad: "", note: "" });
  const [extras, setExtras] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState({
    extras: false,
    adSoyad: false,
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { value, checked, name, type } = event.target;
    if (type == "checkbox") {
      const updatedExtras = checked
        ? [...extras, value]
        : extras.filter((item) => item !== value);
      setExtras(updatedExtras);
      console.log("Updated Extras:", updatedExtras);

      if (updatedExtras.length >= 4 && updatedExtras.length <= 10) {
        setError({ ...error, extras: false });
      } else {
        setError({ ...error, extras: true });
      }
    } else {
      setFormData({ ...formData, extras, quantity, [name]: value });
      console.log("Form Data:", {
        ...formData,
        ...extras,
        ...quantity,
        [name]: value,
      });

      if (name == "adSoyad") {
        if (value.trim().length >= 3) {
          setError({ ...error, adSoyad: false });
        } else {
          setError({ ...error, adSoyad: true });
        }
      }
    }
  };

  useEffect(() => {
    if (
      extras.length >= 4 &&
      extras.length <= 10 &&
      formData.adSoyad.trim().length >= 3
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [extras, formData.adSoyad]);

  const extraPrice = extras.length * 5;
  const basePrice = 85.5;
  const calculateTotal = () => {
    return (basePrice + extraPrice) * quantity;
  };

  function handleSubmit(event) {
    event.preventDefault();

    //console.log("isValid:", isValid);
    if (!isValid) return;

    //console.log("history", history);
    axios
      .post("https://reqres.in/api/pizza", {
        ...formData,
        extras,
        quantity,
        total: calculateTotal(),
      })
      .then((res) => {
        console.log("Axios Response:", res.data);
        console.log("Form submitted successfully!");
        history.push("/order/success");
      })
      .catch((err) => {
        console.log("Axios Error:", err);
      });
  }

  return (
    <>
      <Header>
        <Title>Teknolojik Yemekler</Title>
        <Breadcrumb>
          Anasayfa {">"} Seçenekler {">"} Sipariş Oluştur
        </Breadcrumb>
      </Header>
      <FormSection>
        <PizzaTitle>Position Absolute Acı Pizza</PizzaTitle>
        <Price>{basePrice}₺</Price>
        <PizzaDescription>
          Frontend Dev olarak hala position:absolute kullanıyorsan bu çok acı
          pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli
          malzemelerle kaplanmış ve odun ateşinde pişirilmiştir.
        </PizzaDescription>
        <Form onSubmit={handleSubmit}>
          <PizzaSelections>
            <FormGroup tag="fieldset">
              <SelectionsTitle>Boyut Seç *</SelectionsTitle>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  value="küçük"
                  onChange={handleChange}
                />{" "}
                <Label check>Küçük</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  value="orta"
                  onChange={handleChange}
                />{" "}
                <Label check>Orta</Label>
              </FormGroup>
              <FormGroup check>
                <Input
                  name="radio1"
                  type="radio"
                  value="büyük"
                  onChange={handleChange}
                />{" "}
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
                <option value="ince">İnce Hamur</option>
                <option value="normal">Normal Hamur</option>
                <option value="kalın">Kalın Hamur</option>
              </Input>
            </FormGroup>
          </PizzaSelections>
          <SelectionsTitle>Ek Malzemeler</SelectionsTitle>
          <CheckboxDescription>
            En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺
          </CheckboxDescription>
          <ExtraSelections>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Pepperoni"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="pepperoni-input"
              />{" "}
              <Label check>Pepperoni</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sosis"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="sosis-input"
              />{" "}
              <Label check>Sosis</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Jambon"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="jambon-input"
              />{" "}
              <Label check>Jambon</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Tavuk"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="tavuk-input"
              />{" "}
              <Label check>Tavuk</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Soğan"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="soğan-input"
              />{" "}
              <Label check>Soğan</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Domates"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="domates-input"
              />{" "}
              <Label check>Domates</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Mısır"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="mısır-input"
              />{" "}
              <Label check>Mısır</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sucuk"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="sucuk-input"
              />{" "}
              <Label check>Sucuk</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Jalepeno"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="jalepeno-input"
              />{" "}
              <Label check>Jalepeno</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Sarımsak"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="sarımsak-input"
              />{" "}
              <Label check>Sarımsak</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Biber"
                onChange={handleChange}
                invalid={error.extras}
              />{" "}
              <Label check>Biber</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Salam"
                onChange={handleChange}
                invalid={error.extras}
              />{" "}
              <Label check>Salam</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Ananas"
                onChange={handleChange}
                invalid={error.extras}
              />{" "}
              <Label check>Ananas</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Füme Et"
                onChange={handleChange}
                invalid={error.extras}
              />{" "}
              <Label check>Füme Et</Label>
            </FormGroup>
            <FormGroup check>
              <Input
                type="checkbox"
                value="Cheddar"
                onChange={handleChange}
                invalid={error.extras}
                data-cy="cheddar-input"
              />{" "}
              <Label check>Cheddar</Label>
            </FormGroup>
            {error.extras && (
              <FormFeedback>{errorMessages.extras}</FormFeedback>
            )}
          </ExtraSelections>
          <FormGroup>
            <SelectionsTitle for="exampleText">Ad Soyad</SelectionsTitle>
            <Input
              id="exampleText"
              name="adSoyad"
              type="text"
              placeholder="Adınızı ve Soyadınızı yazınız"
              value={formData.adSoyad}
              onChange={handleChange}
              invalid={error.adSoyad}
              data-cy="ad-input"
            />

            {error.adSoyad && (
              <FormFeedback>{errorMessages.adSoyad}</FormFeedback>
            )}
          </FormGroup>
          <FormGroup>
            <SelectionsTitle for="exampleText">Sipariş Notu</SelectionsTitle>
            <Input
              id="exampleText"
              name="note"
              type="textarea"
              rows="3"
              placeholder="Siparişinize eklemek istediğiniz bir not var mı?"
              value={formData.note}
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
            <OrderBox>
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
              </OrderSummary>
              <OrderButton data-cy="submit" type="submit" disabled={!isValid}>
                SİPARİŞ VER
              </OrderButton>
            </OrderBox>
          </BottomGroup>
        </Form>
      </FormSection>
    </>
  );
}
