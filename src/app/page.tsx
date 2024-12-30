


import Link from 'next/link'
 
export default function Home() {
  return <div> <h1> WELCOME TO NEXTJS 101</h1>

        <div   style={{
          color: "red",
          cursor: "pointer"
        }}><Link href="/facebook" >Facebook</Link></div>
        <div><Link href="/youtube">Youtube</Link></div>
  </div>
  
}