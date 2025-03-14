import React from 'react'
import { useState, useEffect } from 'react';

function RedAndBlack() {
    const [number, setIsNumber] = useState();
    const [color, setColor] = useState("white")

    useEffect(() => {
        if (number == 0) {
            setColor("white")
        } else if (number != null && number % 2 == 0) {
            setColor("yellow");
        } else if (number != null && number % 2 != 0) {
            setColor("red");
        } else {
            setColor("white");
        }
    }, [number]);

    return (
        <>
            <div className='div' style={{ backgroundColor: `${color}`, width: "600px", height: "600px" }}>
                <input
                    type="number"
                    name="inputField"
                    value={number}
                    onChange={(e) => {
                        const value = parseInt(e.target.value, 10);
                        if (value >= 0) {
                            setIsNumber(value);
                        }
                    }}
                    min={0}
                />
                <h2>{number}</h2>
                <div>RedAndBlack</div>
            </div>
        </>
    )
}

export default RedAndBlack