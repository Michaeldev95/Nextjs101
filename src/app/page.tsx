

import { Container } from "postcss"
import app1 from "../styles/app1.module.css"
import app2 from "../styles/app2.module.css"
import Link from 'next/link'
import Table from 'react-bootstrap/Table'


export default function Home() {
  return <div>
    <h1> This is the body</h1>

    <div className={app1['red']}
    ><Link href="/facebook" >Facebook</Link></div>
    <div className={app2['red']}><Link href="/youtube">Youtube</Link></div>


  </div>

}