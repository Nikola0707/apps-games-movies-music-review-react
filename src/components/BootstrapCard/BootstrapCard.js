import react from 'react'
import { Card, Button } from 'react-bootstrap'
import Rating from '../Rating'
const BootstrapCard = (props) => {
    return (

        <Card>
            <Card.Img variant="top" src={props.src} />
            <Card.Body>
                <Card.Text>
                    <Rating />
                </Card.Text>
                <Card.Title><p className="card-title">{props.title}</p></Card.Title>
            </Card.Body>
        </Card>
    )
}

export default BootstrapCard