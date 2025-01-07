
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { use, useEffect, useState } from 'react';

import Form from 'react-bootstrap/Form';

import { mutate } from "swr"


import { ToastContainer, toast } from 'react-toastify';

interface DProps {
    showDelete: Boolean
    setShowDelete: (v: Boolean) => void
    blog: IBlog | null,
    setBlog: (v: IBlog | null) => void
}



function ModalDelete(props: DProps) {
    const { blog, setBlog, showDelete, setShowDelete } = props
    console.log("check blog delete:", blog)
    const [id, setId] = useState<number>()
    const [name, setName] = useState<string>('')
    const [grade, setGrade] = useState<string>()
    useEffect(() => {
        if (blog && blog.id) {
            setName(blog.name);
            setGrade(blog.grade);
            setId(blog.id)
        }

    }, [blog])
    console.log("check id", id)

    const handleDelete = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json,plain/text',
                'Content-Type': 'application/json',

            },

        };
        fetch(`http://localhost:3000/students/${id}`, requestOptions)
            .then(() => {
                toast.success('succeed delete')

                setShowDelete(false)
                mutate('http://localhost:3000/students')
            }

            )





    }


    return (
        <>

            <Modal
                show={showDelete}
                onHide={() => { setShowDelete(false) }}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure to delete this?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { setShowDelete(false) }}>
                        Back
                    </Button>
                    <Button variant="primary" onClick={() => {
                        handleDelete()
                    }}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalDelete;