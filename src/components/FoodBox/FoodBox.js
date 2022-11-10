import { Button, Card } from "react-bootstrap"

// componente respomsável por um card 
function FoodBox({ food }) {
    return (  
        <Card style={{ width: '18rem' }}>
        <Card.Header>{food.name}</Card.Header>        
        <Card.Body>
          <Card.Img variant="top" src={ food.image} />
          <Card.Text>Calories:{food.calories}</Card.Text>
          <Card.Text>Servings:{food.servings}</Card.Text>
          <Card.Text>Total of calories:{food.calories * food.servings} kcal</Card.Text>
          <Button variant="danger">Excluir a refeição</Button>
        </Card.Body>
      </Card>
    )
}

export default FoodBox
