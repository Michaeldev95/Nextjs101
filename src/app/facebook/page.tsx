'use client'
import { useRouter } from 'next/navigation'
import Button from 'react-bootstrap/Button';

// or less ideally




const Facebook=()=>{
    const router = useRouter()
    return <div>
        Welcome to Meta
        <div>
            <Button type="button" variant="success" onClick={() => router.push('/')}> Back to the homepage
            </Button>
        </div>
    </div>
}

export default Facebook;