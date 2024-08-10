import { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export default function Order() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    pizzaType: "Margherita",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="phone">Phone</Label>
        <Input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="address">Address</Label>
        <Input
          type="text"
          name="address"
          id="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="pizzaType">Pizza Type</Label>
        <Input
          type="select"
          name="pizzaType"
          id="pizzaType"
          value={formData.pizzaType}
          onChange={handleChange}
        >
          <option>Margherita</option>
          <option>Pepperoni</option>
          <option>Vegetarian</option>
        </Input>
      </FormGroup>
      <Button type="submit" color="primary">
        Submit
      </Button>
    </Form>
  );
}
