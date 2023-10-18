import { useContext } from 'react';
import { TodoContext } from '../../TodoContext';

function About() {
    const { setOpenModal } = useContext(TodoContext)

    return (
            <p onClick={ () => {setOpenModal(state => !state )}}  className='relative left-[-154px] top-[-9px] font-bold text-xs cursor-pointer hover:underline'>Acerca de.
            </p>
    )
}

export { About };