import React from 'react'
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export const Section2 = () => {
  return (
    <div className='row m-1' >

        <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad: </Form.Label>
                <Form.Control type="number" placeholder="Ingrese su edad" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" />
            </Form.Group>
            <Row>
                
                    <Button className='col-md-2 offset-md-5 ' >Registrar</Button>
                
            </Row>
        </Form>
    </div>
  )
}
