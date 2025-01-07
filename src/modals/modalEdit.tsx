import { use, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { mutate } from "swr"


interface IProps {

    showModalEdit: Boolean,
    setShowModalEdit: (v: Boolean) => void
    blog: IBlog | null,
    setBlog: (v: IBlog | null) => void
}



function ModalEdit(props: IProps) {


    const { blog, setBlog, showModalEdit, setShowModalEdit } = props;
    console.log("check blog item:", blog)

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
    const editUser = () => {
        const requestOptions = {
            method: 'PUT',
            headers: {
                'Accept': 'application/json,plain/text',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name: name, grade: grade })
        };
        fetch(`http://localhost:3000/students/${id}`, requestOptions)
            .then(response => response.json())
            .then(data =>
                mutate('http://localhost:3000/students')
            )


    }


    return (
        <>


            <Modal show={showModalEdit} onHide={() => setShowModalEdit(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Name</Form.Label>
                            <Form.Control id='name' type='text' value={name} onChange={(e) => {
                                setName(e.target.value)
                            }} />
                            <Form.Text className="text-muted">
                                We'll never share your name with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" >
                            <Form.Label>Grade</Form.Label>
                            <Form.Control id='grade' type='text' value={grade} onChange={(e) => {
                                setGrade(e.target.value)
                            }} />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModalEdit(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        editUser()

                        setShowModalEdit(false)

                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalEdit;