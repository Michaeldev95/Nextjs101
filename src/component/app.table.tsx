import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal1 from '@/modals/modal1';
import React, { MouseEvent, useState } from 'react';
import { Modal } from 'react-bootstrap';

interface IProps {
    blogs: IBlog[]
}


function BasicTable(props: IProps) {

    const [showModal, setShowModal] = useState<Boolean>(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const { blogs } = props

    console.log("check props:", props)
    console.log("check blog:", blogs)
    return (

        <div>

            <div>
                <h2>Table</h2>
                <Button variant='danger' onClick={handleClick}> AddNew</Button>
            </div>


            <Table striped bordered hover>
                <tr>

                    <th>id</th>

                    <th>name</th>

                    <th>grade</th>
                    <th>Action</th>

                </tr>


                {blogs?.map(blog => {
                    return (
                        <tr key={blog.id}>

                            <td>{blog.id}</td>

                            <td>{blog.name}</td>

                            <td>{blog.grade}</td>

                            <td>
                                <Button variant="primary" className='mx-3'>Edit</Button>
                                <Button variant="primary" className='mx-3'>View</Button>
                                <Button variant="primary" className='mx-3'>Delete</Button>
                            </td>

                        </tr>)
                }

                )}
            </Table>
            <Modal1
                showModal={showModal}
                setShowModal={setShowModal}></Modal1>
        </div >

    );
}

export default BasicTable;