import { useState, useEffect } from 'react';

function Clock() {
    const [hour, setHour] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
        setHour(new Date());
        }, 1000);

        return () => {
        clearInterval(timer);
        };
    }, []);

    return (
        <div className='flex flex-row items-center font-bold text-xs absolute top-[0.188rem] right-1'>
        <p className='m-0 pr-0.5'>{hour.toLocaleTimeString()}</p>
        {/* <p className='m-0 pr-0.5'>{hour.toLocaleDateString("en-GB")}</p> */}
        </div>
    );
}

export { Clock }