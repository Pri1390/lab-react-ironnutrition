import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import FoodList from "../FoodList/FoodList"

function AddFood ({foods, setFoods}) {
    const [form, setForm] = useState({
        name: "",
        calories: "",
        image: "",
        servings: ""
    })

    const handleChange = (e) =>{
        // evento que a cada mudança ele vai capturar o nome (name) do meu input
        // e através desse nome, ele captura o valor (value) deste input
        setForm({...form, [e.target.name]: e.target.value})       
    }
    const handleSubmit = (e) =>{
        e.preventDefault()

        setFoods([...foods, form])
    }

    return (  
        <Form onSubmit ={ handleSubmit }>
            <Form.Group className="mb-3">
                <Form.Label>Nome do prato</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter email"
                    name="name"
                    onChange={ handleChange }
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Imagem do prato</Form.Label>
                <Form.Control
                     type="text" 
                     placeholder="Enter email"
                     name="image"
                     onChange={ handleChange }
                  />
            </Form.Group>
            <Form.Group className="mb-3">
                     <Form.Label>Calorias do prato</Form.Label>
                      <Form.Control 
                      type="text" 
                      placeholder="Enter email"
                      name="calories"
                      onChange={ handleChange }
                 />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Quantidade de porções</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter email"
                    name="servings"
                    onChange={ handleChange }
                 />
            </Form.Group>
            <Button variant="primary" type="submit">
                Cadastrar
            </Button>
      </Form>
    )
}

export default AddFood