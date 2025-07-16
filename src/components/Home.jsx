import { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className='content-area'>
            <p className="datetime-display">Current Time: {dateTime}</p>
        </div>
    );
};

export default Home;