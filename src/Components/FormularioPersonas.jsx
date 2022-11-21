import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';
export const FormularioPersonas = (props) => {
    const [nombre, setNombre] = useState(props.persona.nombre)
    const [apellido, setApellido] = useState(props.persona.apellido)
    const [edad, setEdad] = useState(props.persona.edad)
    const [email, setEmail] = useState(props.persona.email)

    const handleRegistro = ()=>{
        props.setPersonas([...props.personas,{
            'id': uuid(),
            'nombre':nombre,
            'apellido':apellido,
            'edad':edad,
            'email':email
        }])        
        
    }
    
    const handleUpdate = (campo,valor)=>{
        
        
        props.setPersona({...props.persona,[campo]:valor})
         
    }
  return (
    <Form>
            <Form.Group>
                <Form.Label>Nombre: </Form.Label>
                <Form.Control type="text" name="nombre" placeholder="Ingrese su nombre" onChange={(e)=>{setNombre(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={nombre}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Apellido: </Form.Label>
                <Form.Control type="text" name="apellido" placeholder="Ingrese su apellido" onChange={(e)=>{setApellido(e.target.value); handleUpdate(e.target.name,e.target.value)}}  value={apellido}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Edad: </Form.Label>
                <Form.Control type="number" name="edad" placeholder="Ingrese su edad" onChange={(e)=>{setEdad(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={edad}/>
            </Form.Group>
            <Form.Group>
                <Form.Label>Correo: </Form.Label>
                <Form.Control type="email" name="email" placeholder="Ingrese su correo" onChange={(e)=>{setEmail(e.target.value); handleUpdate(e.target.name,e.target.value)}} value={email}/>
            </Form.Group>
            <Row>
                                    
                    { props.visible &&
                        <Button className='col-md-2 offset-md-5 ' onClick={handleRegistro}>Registrar</Button>
                    }
            </Row>
        </Form>



  )
}
