'use client'
import { useRouter } from 'next/navigation'



const Youtube=()=>{
    const router = useRouter()
    return <div>
        Welcome to Youtube
        <div>
            <button type="submit" onClick={() => router.push('/')}> Back to the homepage
            </button>
        </div>
    </div>
}

export default Youtube;