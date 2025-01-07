'use client'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal1 from '@/modals/modal1';
import React, { MouseEvent, useState } from 'react';

import ModalEdit from '@/modals/modalEdit';
import ModalDelete from '@/modals/modalDelete';
import Link from 'next/link';

interface IProps {
    blogs: IBlog[]
}


function BasicTable(props: IProps) {


    const [blog, setBlog] = useState<IBlog | null>(null)
    const [showModal, setShowModal] = useState<Boolean>(false)
    const [showModalEdit, setShowModalEdit] = useState<Boolean>(false)
    const [showDelete, setShowDelete] = useState<Boolean>(false);

    const handleDelete = () => {
        setShowDelete(true)

    }

    const handleClick = () => {
        setShowModal(true)
    }

    const handleEdit = () => {
        setShowModalEdit(true)

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


                {blogs?.map(item => {
                    return (
                        <tr key={item.id}>

                            <td>{item.id}</td>

                            <td>{item.name}</td>

                            <td>{item.grade}</td>

                            <td>
                                <Button variant="primary" className='mx-3' onClick={() => {
                                    setBlog(item)
                                    handleEdit()
                                }


                                }>Edit</Button>
                                <Button variant="primary" className='mx-3'> <Link href={`/${item.id}`}>View</Link></Button>
                                <Button variant="primary" className='mx-3' onClick={() => {
                                    setBlog(item)
                                    handleDelete()
                                }}>Delete</Button>
                            </td>

                        </tr>)
                }

                )}
            </Table>
            <Modal1
                showModal={showModal}
                setShowModal={setShowModal}></Modal1>
            <ModalEdit
                blog={blog}
                setBlog={setBlog}
                showModalEdit={showModalEdit}
                setShowModalEdit={setShowModalEdit}
            ></ModalEdit>
            <ModalDelete
                blog={blog}
                setBlog={setBlog}
                showDelete={showDelete}
                setShowDelete={setShowDelete}
            >

            </ModalDelete>
        </div >

    );
}

export default BasicTable;