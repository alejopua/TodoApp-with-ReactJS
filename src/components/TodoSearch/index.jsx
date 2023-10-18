import { useContext } from "react"
import { TodoContext } from "../../TodoContext"

function TodoSearch() {
  const { searchValue, setSearchValue } = useContext(TodoContext)

  return (
    <div style={{width: '-webkit-fill-available'}} className='relative'>
      <input 
        className='box-border w-full rounded h-[2.5rem] border-2 border-solid border-[#323232] bg-white text-[0.94rem] font-semibold text-black py-[0.31rem] pl-[2.25rem] pr-[0.63rem] outline-none input' 
        type="text" 
        placeholder="Search..." 
        value={searchValue}
        onChange={
          (e) => {
            setSearchValue(e.target.value)
          }
        }
      />

      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute text-black w-[1.25rem] h-[1.25rem] left-[0.75rem] top-2/4 translate-y-[-50%]">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    </div>
    
  )
}

export { TodoSearch }