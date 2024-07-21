import React from 'react';
import node from "../public/nodejslogo.png";
import figma from "../public/figmalogos.jpeg";
import firebase from "../public/firebaselogos.png";
import mongodb from "../public/mongodblogos.png";
import android from "../public/androidlogos.png";
import react from "../public/reactlogos.png";

const Expertise = () => {
    const cardItems = [
        { id: 1, logo: android, name: "Android" },
        { id: 2, logo: firebase, name: "Database" },
        { id: 3, logo: figma, name: "Figma UI" },
        { id: 4, logo: react, name: "React" },
        { id: 5, logo: mongodb, name: "MongoDB" },
        { id: 6, logo: node, name: "Node JS" }
    ];

    return (
        <>
            <hr />
            <div name="expertise" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-8'>
                <h1 className='text-3xl font-bold mb-5 text-center'>Expertise</h1>
                <div className='grid grid-cols-2 md:grid-cols-5 gap-4 mt-4 justify-items-center'>
                    {cardItems.map(({ id, logo, name }) => (
                        <div
                            key={id}
                            className='flex flex-col items-center justify-center relative'
                            style={{ width: '140px', height: '140px' }}
                        >
                            {/* Outer Circle with Shadow */}
                            <div className='flex flex-col items-center justify-center w-full h-full rounded-full shadow-lg p-2'>
                                {/* Inner Circle for Image */}
                                <div className='flex items-center justify-center rounded-full border-2 border-gray-300 w-3/4 h-3/4 overflow-hidden'>
                                    <img
                                        src={logo}
                                        alt={name}
                                        className='rounded-full object-cover w-full h-full'
                                    />
                                </div>
                                {/* Text below the Image */}
                                <div className='mt-2 text-center text-sm font-semibold'>
                                    {name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Expertise;

