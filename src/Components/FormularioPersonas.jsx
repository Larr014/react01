import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const FormularioPersonas = (props) => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState("")
    const [email, setEmail] = useState("")
    const handleRegistro = ()=>{
        props.setPersonas([...props.personas,{
            'nombre':nombre,
            'apellido':apellido,
            'edad':edad,
            'email':email
        }])        
        
        
    }
    
  return (
    <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su nombre" onChange={(e)=>{setNombre(e.target.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="text" placeholder="Ingrese su apellido" onChange={(e)=>{setApellido(e.target.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad: </Form.Label>
                <Form.Control type="number" placeholder="Ingrese su edad" onChange={(e)=>{setEdad(e.target.value)}}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type="email" placeholder="Ingrese su correo" onChange={(e)=>{setEmail(e.target.value)}}/>
            </Form.Group>
            <Row>
                
                    <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
                
            </Row>
        </Form>



  )
}
