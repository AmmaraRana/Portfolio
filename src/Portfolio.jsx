import React, { useState } from 'react';
import cooktogether from "../public/javaandroid.jpeg";
import ecom from "../public/ecommerceandroid.jpeg";
import port from "../public/portfolio.png";

const Portfolio = () => {
    const [clickedCard, setClickedCard] = useState(null);

    const cardItems = [
        {
            id: 1,
            logo: cooktogether,
            name: "Cook Together",
            description: "Developed a recipe-sharing app to connect food enthusiasts and enable collaborative cooking experiences."
        },
        {
            id: 2,
            logo: ecom,
            name: "eCommerce Store",
            description: "Built a full-featured eCommerce platform with a smooth user experience, integrating a MERN stack for backend and frontend functionalities."
        },
        {
            id: 3,
            logo: port,
            name: "Portfolio Website",
            description: "Discover my journey in Android development and web design through a showcase of my latest projects and skills."
        }
    ];

    const handleClick = (id) => {
        setClickedCard(id);
        setTimeout(() => setClickedCard(null), 300); // Reset the clicked card after 300ms
    };

    return (
        <>
            <hr />
            <div name="portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-8'>
                <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
                <span className='underline font-bold'>My Projects</span>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
                    {cardItems.map(({ id, logo, name, description }) => (
                        <div
                            key={id}
                            onClick={() => handleClick(id)}
                            className={`p-4 border rounded-lg shadow-md cursor-pointer transform transition duration-300 ${clickedCard === id ? 'scale-110' : ''}`}
                        >
                            <img src={logo} alt={name} className='w-full h-32 mb-2' />
                            <div>
                                <div className='text-xl font-semibold'>{name}</div>
                                <p className='mt-1'>{description}</p>
                            </div>
                            <div className='mt-2'>
                                <a href="https://github.com/AmmaraRana" target="_blank" rel="noopener noreferrer">
                                    <button className='bg-blue-500 text-white px-4 py-2 rounded'>
                                        Project Link
                                    </button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Portfolio;

