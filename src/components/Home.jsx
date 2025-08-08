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
            <div className='text-layout'>
                <div className='text-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu varius turpis, ac pretium ipsum. Sed tincidunt orci et lorem vehicula, ac porta nisi condimentum. Pellentesque mattis at lectus ac aliquet. Vivamus venenatis convallis aliquet. Suspendisse potenti. Vestibulum metus lectus, accumsan ac est non, porta efficitur enim. Suspendisse faucibus ornare quam, eu congue odio interdum id. Cras vel justo interdum, dignissim lacus eu, ornare ipsum. Pellentesque hendrerit est est, vel pellentesque diam porttitor ac. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris et porttitor massa. Maecenas sed mattis justo, ac viverra augue. Praesent vel ipsum luctus, ultricies lorem et, auctor mi. Sed pellentesque, dui sed semper euismod, est elit lobortis magna, non gravida felis dolor porta mi. Aliquam placerat pretium commodo. Quisque tempus vel nisi ac ultrices.</p>
                    <p>Quisque suscipit orci tempus neque dictum, nec posuere diam congue. Etiam laoreet nulla vulputate risus vehicula semper. In sapien ligula, tincidunt molestie mi finibus, vehicula posuere urna. Maecenas commodo vehicula blandit. In placerat tortor interdum elementum aliquam. Vestibulum ut molestie tellus. Nulla luctus, dolor sed eleifend congue, orci elit fringilla mauris, ut consectetur erat magna quis lorem. Sed non sodales elit, ac bibendum lacus. Cras eu sodales diam. Etiam in justo sed est vulputate rhoncus. Fusce nulla elit, facilisis facilisis congue ac, ornare id lorem. Donec id tellus pretium, varius leo sed, sodales quam. Phasellus finibus magna enim, id maximus felis vulputate non.</p>
                    <p>Ut ornare aliquam elit sed ultrices. Aliquam a eleifend dolor, eget laoreet ipsum. Nunc non turpis rhoncus nisi elementum condimentum. Praesent elementum velit ut fermentum ultricies. Ut mattis ornare justo at faucibus. Morbi malesuada augue a hendrerit euismod. Nam bibendum lectus in ultrices consectetur.</p>
                    <p>Sed rhoncus diam a sollicitudin posuere. Ut feugiat elit quis consectetur bibendum. Nam scelerisque ex non leo aliquam, eu luctus mi laoreet. Pellentesque justo lorem, accumsan in mauris eget, facilisis facilisis lacus. Mauris quis nunc dolor. Pellentesque mattis, massa id interdum volutpat, elit mauris ultrices nisi, eget viverra diam magna et urna. Sed rutrum, quam vel lobortis venenatis, sapien sem venenatis tortor, vel varius eros elit id ante. Nam vel laoreet nisl. Sed ac blandit eros. Suspendisse volutpat est et diam condimentum accumsan.</p>
                    <p>Suspendisse fringilla ligula non massa bibendum porta. Donec semper sodales dui, sed lobortis nulla malesuada vitae. Vestibulum elit ligula, consequat sed vehicula eu, vulputate vehicula nisi. Donec hendrerit, urna ut eleifend sodales, ligula massa luctus lacus, auctor pretium nunc dui et tortor. Proin aliquet varius nunc. Aliquam vulputate cursus elementum. Quisque eu orci mi. Fusce sed nisl consequat, venenatis urna non, auctor diam. Nunc viverra ex id ante ultricies fringilla.</p>                    
                </div>
            </div>
        </div>

    );
};

export default Home;