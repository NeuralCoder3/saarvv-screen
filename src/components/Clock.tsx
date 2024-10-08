import React, { useEffect, useState } from 'react';

export interface ClockProps {
    width: string;
    height: string;
}

export const Clock = (
    { width, height }: ClockProps
) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // Calculate the rotation degrees for each hand
    const secondsDegrees = (time.getSeconds() / 60) * 360;
    const minutesDegrees = (time.getMinutes() / 60) * 360 + (time.getSeconds() / 60) * 6;
    const hoursDegrees = (time.getHours() / 12) * 360 + (time.getMinutes() / 60) * 30;

    // Function to render the 12 hour marks
    const renderHourMarks = () => {
        const marks = [];
        for (let i = 0; i < 12; i++) {
            const rotation = i * 30; // 360 degrees / 12 hours = 30 degrees per mark
            marks.push(
                <div
                    key={i}
                    className="absolute bg-white"
                    style={{
                        width: '2%',
                        height: '10.5%',
                        transform: `rotate(${rotation}deg) translate(0, -400%)`,
                        transformOrigin: 'center center',
                    }}
                ></div>
            );
        }
        return marks;
    };

    return (
        <div className="relative rounded-full bg-black flex justify-center items-center"
            style={{
                width: width,
                height: height,
            }}
        >
            {/* Hour Marks */}
            {renderHourMarks()}

            {/* Hour Hand */}
            <div
                className="absolute bg-white"
                style={{
                    width: '3%',
                    height: '25%',
                    transform: `rotate(${hoursDegrees}deg) translate(-0%, -50%)`,
                    transformOrigin: 'center center', 
                }}
            ></div>

            {/* Minute Hand */}
            <div
                className="absolute bg-white"
                style={{
                    width: '2%', 
                    height: '35%',
                    transform: `rotate(${minutesDegrees}deg) translate(-0%, -50%)`,
                    transformOrigin: 'center center', 
                }}
            ></div>

            {/* Second Hand */}
            <div
                className="absolute bg-white"
                style={{
                    width: '1%', 
                    height: '47%', 
                    transform: `rotate(${secondsDegrees}deg) translate(-0%, -50%)`,
                    transformOrigin: 'center center', 
                }}
            ></div>

            {/* Center Dot */}
            <div className="absolute rounded-full bg-white"
                style={{
                    width: '7%',
                    height: '7%',
                }}
            ></div>
        </div>
    );
};

