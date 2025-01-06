'use client'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Form from 'react-bootstrap/Form';

import React from 'react';
import { mutate } from "swr"


import { ToastContainer, toast } from 'react-toastify';







interface IProps {

    showModal: Boolean,
    setShowModal: (v: Boolean) => void
}
interface User {


    name: string;
    grade: string;
}






function Modal1(props: IProps) {

    const { showModal, setShowModal } = props

    const AddNewUser = () => {





        const inputElement1 = document.getElementById("name") as HTMLInputElement;
        const inputElement2 = document.getElementById("grade") as HTMLInputElement;
        const newUser: User = {

            name: inputElement1.value,
            grade: inputElement2.value,
        };



        fetch("http://localhost:3000/students", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                setShowModal(false)
                console.log("check data:", data)
                toast.success('succeed')
                mutate('http://localhost:3000/students')




            })
            .catch((error) => {
                console.error("Error:", error);
            });

    }




    return (
        <>
            <h1>This is Modal1</h1>



            <Modal
                show={showModal}
                onHide={() => { setShowModal(false) }}
                backdrop="static"
                keyboard={false}
                size='lg'
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control id='name' type="name" placeholder="Enter name" />
                            <Form.Text className="text-muted">
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Grade</Form.Label>
                            <Form.Control id='grade' type="number" placeholder="Grade" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowModal(false) }}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => AddNewUser()}>Post</Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Modal1;