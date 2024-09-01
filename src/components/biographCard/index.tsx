
import { useState, useRef, useEffect } from 'react';
import DetailIcon from '../../assets/Detail Icon.svg'
import './styles.css'

const BiographCard = () => {
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
            className='card bio'
            ref={cardRef}
            onMouseOver={() => setHover(true)}
            onMouseMove={handleMouseMove}
            onMouseOut={() => setHover(false)}
        >
            <div className='cursorTwo' ref={cursorRef}></div>
            <div className='iconContact'>

            <img src={DetailIcon} />

            </div>
            
                <div className='card-text-container biocontent'>
                    <h2 className='subheaderBio'> Diogo MalMa</h2>
                    <p className='paragraph'>I am a San francisco-based product designer with a focus on web design, illustration, a visual development. I have a diverse range of experience having worked across various fields and industries.</p>
                </div>
            
        </div>
    );
}

export default BiographCard;
