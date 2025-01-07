'use client'
import app1 from "../styles/app1.module.css"
import app2 from "../styles/app2.module.css"
import Link from 'next/link'
import BasicTable from "@/component/app.table"
import useSWR from 'swr'
import type { Metadata } from 'next'



export default function Home() {


  const url = 'http://localhost:3000/students'
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
    <h1> This is the body</h1>

    <div className={app1['red']}
    ><Link href="/facebook" >Facebook</Link></div>
    <div className={app2['red']}><Link href="/youtube">Youtube</Link></div>
    <BasicTable blogs={data?.sort((a: any, b: any) => a._id - b._id)}></BasicTable>

  </div>

}

