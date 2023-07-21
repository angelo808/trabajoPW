'use client'
import { useRouter } from 'next/navigation'
import Button from '../components/Button/Button.jsx'

export default function Home() {
  const router = useRouter()
  const empezar = () => {
      router.push('/LoginAlumno')
}
  return (
    <main className='empezar' >
      <Button value="Empezar" onClick={empezar}></Button>
    </main>
  )
}

