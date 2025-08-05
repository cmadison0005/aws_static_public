import { useEffect, useState } from 'react';
import './Home.css';
import peachesPic from '../assets/peaches.jpg';
import artemisPic from '../assets/timmy.jpg';
import noodlePic from '../assets/noodle.jpg';

const Home = () => {
    const [dateTime, setDateTime] = useState(new Date().toLocaleString());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date().toLocaleString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="content-area">
            <div className="card-layout">
                <div className="card" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={peachesPic} alt="Card 1" />
                        </div>
                        <div className="card-back">
                            <h2>Queen Peaches</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={artemisPic} alt="Card 2" />
                        </div>
                        <div className="card-back">
                            <h2>Le Timmy</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>

                <div className="card" onClick={(e) => e.currentTarget.classList.toggle('flipped')}>
                    <div className="card-inner">
                        <div className="card-front">
                            <img src={noodlePic} alt="Card 3" />
                        </div>
                        <div className="card-back">
                            <h2>Noodle</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Home;