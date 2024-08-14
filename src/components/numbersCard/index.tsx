import './styles.css';
import { useState, useRef, useEffect } from 'react';



interface CardProps {
    title: string;
    subtitle: string;
}

const NumbersCard = ({ title, subtitle }: CardProps) => {
    const [hover, setHover] = useState(false);
    const cardRef = useRef(null);
    const cursorRef = useRef(null);

    const handleMouseMove = (e) => {
        if (cardRef.current) {
            const rect = cardRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            setCursorPos({ x, y });
        }
    };

    const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const cardElement = cardRef.current;
        const cursorElement = cursorRef.current;

        if (cardElement && cursorElement) {
            if (hover) {
                cardElement.classList.add('hovering');
                cursorElement.style.transform = `translate(${cursorPos.x - 90}px, ${cursorPos.y - 100}px)`;
                cursorElement.style.display = 'block';
            } else {
                cardElement.classList.remove('hovering');
                cursorElement.style.display = 'none';
            }
        }
    }, [hover, cursorPos]);

    return (
        <div
            className='card quarter numbers'
            ref={cardRef}
            onMouseOver={() => setHover(true)}
            onMouseMove={handleMouseMove}
            onMouseOut={() => setHover(false)}
        >
            <div className='cursorTwo' ref={cursorRef}></div>
           
                <div className='card number'>
                    <h2>02</h2>
                    <p className='subtitle'>Years Experience</p>
                </div>

                <div className='card number'>  
                <h2>09</h2>
                <p className='subtitle'>Clients WorldWide</p>   
                    </div>

                    <div className='card number'>
                    <h2>25</h2>
                    <p className='subtitle'> Total Projects</p>
                    </div>
            
            
        </div>
    );
}

export default NumbersCard;
