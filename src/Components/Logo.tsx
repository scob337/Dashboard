import LOGO from '../assets/bankdash.svg'

export default function Logo() {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center gap-1 items-center ">
    <img
      alt="Your Company"
      src={LOGO} 
    />
    <h2 className='font-[700] text-[#546099]  font-[Inter, sans-serif] text-[1.5625rem]'>
    Bankdash.
    </h2>
  </div>
  )
}
