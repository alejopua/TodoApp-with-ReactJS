import { useContext } from "react"
import { TodoContext } from "../../TodoContext"

function FormModal() {
    const { setOpenModal } = useContext(TodoContext)
    return (
        <div className="m-5 flex items-center justify-center">
            <div className="w-96 h-[660px] p-4 bg-[#acd9e6] flex flex-col items-start gap-5 rounded-md border-2 border-solid border-black shadow-[4px_4px_black] ">
                <button onClick={() => (setOpenModal(state => !state))} className="w-[58px] h-[30px] relative top-[-6px] left-[295px] mb-0 rounded-md border-2 border-solid border-black bg-[#f5f5dc] shadow-[4px_4px_black] font-semibold text-[17px] text-[#323232] cursor-pointer active:shadow-[0px_0px_black] active:translate-x-[3px] active:translate-y-[3px]">Closet</button>
                <div className="text-[#323232] font-black text-xl">Thank you for using TodoApp,<br /><span className="text-[#666] font-semibold text-[17px]">This app was built ReactJS</span></div>
            </div>
        </div>
    )
}

export { FormModal }