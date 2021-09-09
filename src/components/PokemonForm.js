import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm( { addPokemon }) {

  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    frontUrl: "",
    backUrl: ""
  })

  const {name, hp, frontUrl, backUrl} = formData

  function handleFormChange(e){
    const key = e.target.name
    setFormData({
      ...formData,
      [key]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    const newPokemon = {
      name: name,
      hp: hp,
      sprites: {
        front: frontUrl,
        back: backUrl
      }
    }

    addPokemon(newPokemon)
    setFormData({
      name: "",
      hp: "",
      frontUrl: "",
      backUrl: ""
    })
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleFormChange} value={name} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleFormChange} value={hp}fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input
            onChange={handleFormChange} 
            value={frontUrl}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input
            onChange={handleFormChange} 
            value={backUrl}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
