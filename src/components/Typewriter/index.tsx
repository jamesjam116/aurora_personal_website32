import React, { useState, useEffect } from 'react';

const Typewriter = (props: { text: string }) => {
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setDisplayText(prevText => prevText + props.text[currentIndex]);
            currentIndex++;
            if (currentIndex === props.text.length) clearInterval(intervalId);
        }, 100);

        //return () => clearInterval(intervalId);
    }, [props.text]);

    return (
        <span>{displayText.substring(0, 8)} &nbsp;
            <span className='text-[#50BEC2]'>{displayText.substring(9, 19)}</span><br />

        </span>
    );
}

export default Typewriter;
