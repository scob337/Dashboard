import { useNavigate } from "react-router-dom"

export default function LoadingPage() {
    const Navigate = useNavigate()
    setTimeout(() => {
        Navigate("/")
    }, 3000)
  return (
    <div className='w-full h-[90vh] flex items-center justify-center gap-5'>
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin"></div>
    </div>
  )
}
