import './styles.css';
import { useState, useRef, useEffect } from 'react';


interface CardProps {
    title: string;
    subtitle: string;
    titleTwo: string;
    subtitleTwo: string;
    titleThree: string;
    subtitleThree: string;
}

const TextOnlyCard = ({ title, subtitle, titleTwo, subtitleTwo, titleThree, subtitleThree }: CardProps) => {
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
            className='card quarter'
            ref={cardRef}
            onMouseOver={() => setHover(true)}
            onMouseMove={handleMouseMove}
            onMouseOut={() => setHover(false)}
        >
            <div className='cursorTwo' ref={cursorRef}></div>
           
            <div className='card-quarter-text-button'>
                <div className='card-text-container'>
                   <h3 className='title'>{title}</h3>
                   <h3 className='subtitle'>{subtitle}</h3>
                   <h3 className='title'>{titleTwo}</h3>
                   <h3 className='subtitle'>{subtitleTwo}</h3>
                   <h3 className='title'>{titleThree}</h3>
                   <h3 className='subtitle'>{subtitleThree}</h3>
                </div>
                
            </div>
        </div>
    );
}

export default TextOnlyCard;
