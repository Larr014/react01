import React from 'react'
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import {FormularioPersonas} from './FormularioPersonas'

export const Section2 = () => {
    const [personas,setPersonas] = useState([])
    const [show, setShow] = useState(false);
    const [persona,setPersona] = useState();
    const [accion,setAccion] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleUpdate = ()=>{
      let ps = personas.filter(p=>p.id!==persona.id)
      setPersonas([...ps,persona])
      console.log(personas)
    }
    const handleDelete = ()=>{
      let ps = personas.filter(p=>p.id!==persona.id)
      setPersonas([...ps])
      
    }

    const modificar = (id,nombre,apellido,edad,email)=>{
      setAccion(false)
        setPersona({
          'id':id,
          'nombre':nombre,
          'apellido':apellido,
          'edad':edad,
          'email':email
        })
        handleShow()
        
    }
    const eliminar = ()=>{
      setAccion(true)
      handleShow()
    }


  return (
    <div className='row m-1' >
        <FormularioPersonas setPersonas={setPersonas} personas={personas} visible={true} persona=""/>
        
    <Table>
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Edad</th>
                <th>Correo</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            {personas.map(({id,nombre,apellido,edad,email})=>
                (
                <tr>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{edad}</td>
                    <td>{email}</td>
                    <td><Button variant="warning" onClick={()=>{modificar(id,nombre,apellido,edad,email)}}>Modificar</Button>
                        <Button variant="danger" onClick={eliminar}>Eliminar</Button>
                    </td>
                    
                </tr>
                )
            )}
        </tbody>
    </Table>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FormularioPersonas visible={false} persona={persona} setPersona={setPersona}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {
            !accion?
            <Button variant="warning" onClick={handleUpdate}>
            Modificar
          </Button>:
          <Button variant="danger" onClick={handleDelete}>
            Eliminar 
          </Button>

          }
          
        </Modal.Footer>
      </Modal>

    </div>
  )
}
