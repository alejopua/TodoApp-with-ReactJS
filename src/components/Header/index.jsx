import { useContext } from "react"
import { TodoContext } from "../../TodoContext"

function Header() {
    const {tab, setTab} = useContext(TodoContext)
    return (
        <header className="w-full font-bold rounded-md border border-solid border-black mb-1 mt-1">
            <nav className="max-w-[60%] m-auto">
                <ul className="flex justify-around gap-x-8 [&>li]:py-1 [&>li]:cursor-pointer [&>li]:px-2">
                    <li 
                        className={tab === 'Day' ? 'selectHeader' : 'selectHeaderHover'}
                        onClick={() => setTab('Day')}
                    >Dia</li>
                    <li
                        className={tab === 'Week' ? 'selectHeader' : 'selectHeaderHover'}
                        onClick={() => setTab('Week')}
                    >Semana</li>
                    <li
                        className={tab === 'Month' ? 'selectHeader' : 'selectHeaderHover'}
                        onClick={() => setTab('Month')}
                    >Mes</li>
                    <li
                        className={tab === 'Year' ? 'selectHeader' : 'selectHeaderHover'}
                        onClick={() => setTab('Year')}
                    >Año</li>
                </ul>
            </nav>
        </header>
    )
}

export { Header }
