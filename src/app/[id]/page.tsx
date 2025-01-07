'use client'
import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import { useEffect } from "react";
import useSWR from 'swr';
import { get } from "http";
import { useParams } from 'next/navigation'


type paramsType = {
    params: {
        id: string
    }
}

const Students = ({ params }: paramsType) => {





    // const [projectId, setprojectID] = useState('')
    // console.log("check project id:", projectId)

    // useEffect(() => {
    //     const getId = () => {
    //         const paramsId = params.id;
    //         setprojectID(paramsId)
    //         console.log("check setprojectID", paramsId)

    //     }
    //     getId

    // }, [params])

    const resolvedParams = React.use(params);

    const url = `http://localhost:3000/students/${resolvedParams.id}`
        ; // Your API endpoint

    const fetcher = (url: string) => fetch(url).then(res => res.json());[1, 3, 8]

    const { data, error, isLoading } = useSWR(url, fetcher, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false
    });[1, 3, 13]

    console.log('check data', data)


    if (error) return <div>Error fetching data</div>;

    if (isLoading) return <div>Loading...</div>;

    return <div>
        <h2>Tittle

        </h2>




        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th> Name</th>
                    <th>Grade</th>

                </tr>
            </thead>
            <tbody>


                <tr>

                    <td>{data?.id}</td>
                    <td>{data?.name}</td>
                    <td>{data?.grade}</td>

                </tr>



            </tbody>

        </Table>
        <div>   <Link href="/" > Back</Link></div>







    </div>


}
export default Students