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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const modificar = ()=>{
        handleShow()
    }
    const eliminar = ()=>{
        alert("ELiminando")
    }


  return (
    <div className='row m-1' >
        <FormularioPersonas setPersonas={setPersonas} personas={personas}/>
        
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
            {personas.map(({nombre,apellido,edad,email})=>
                (
                <tr>
                    <td>x</td>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{edad}</td>
                    <td>{email}</td>
                    <td><Button variant="warning" onClick={modificar}>Modificar</Button>
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
            <FormularioPersonas/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}
