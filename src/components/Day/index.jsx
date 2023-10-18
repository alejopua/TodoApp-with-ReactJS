import { useContext } from "react"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { TodoContext } from "../../TodoContext"
import { getNameDay } from "../../helpers/getNameDay"
import { getDate } from "../../helpers/getDate"

function Day() {
    const { dateM, setDateM } = useContext(TodoContext)

    const manipulateDate = (date, days) => {
        let newDate = new Date(dateM)
        newDate.setDate(date.getDate() + days)
        return newDate
    }

    const handleChange = (days) => {
        setDateM(manipulateDate(dateM, days))
    }


    return (
        <section className="flex flex-row justify-center items-center gap-7 my-3">
            <p 
                onClick={() => handleChange(-1)} 
                className="cursor-pointer"
            ><IoIosArrowBack size={30} /></p>
            <div className="flex flex-col items-center justify-center">
                <h4 className="text-lg font-bold">{getNameDay(dateM)}</h4>
                <p className="text-sm font-semibold text-neutral-700">{getDate(dateM)}</p>
            </div>
            <p 
                onClick={() => handleChange(1)}
                className="cursor-pointer"><IoIosArrowForward size={30} /></p>
        </section>
    )
}

export { Day }