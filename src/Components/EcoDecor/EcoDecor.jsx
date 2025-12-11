import React, { useEffect, useState } from 'react';
import DecorCard from './DecorCard';

const EcoDecor = ({ onLoad }) => {
    const [firstSlice, setFirstSlice] = useState([]);
    const [secondSlice, setSecondSlice] = useState([]);
    const [expand, setExpand] = useState(false);
    useEffect(() => {
        fetch('../EcoDecor.json')
            .then(res => res.json())
            .then(data => {
                const decor1 = data.slice(0, 3);
                const decor2 = data.slice(3, 6);
                setSecondSlice(decor2);
                setFirstSlice(decor1);
                if (onLoad) {
                    onLoad();
                }
            });
    }, );
    return (
        <>
            <section className="py-16 px-4 bg-gradient-to-b from-white to-primary-lightest">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-primary text-3xl font-bold mb-4">Eco Decor Inspiration</h2>
                        <p className="text-gray-600 mx-auto">Get inspired by these beautiful plant styling ideas for every room</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            firstSlice.map((decor, index) => <DecorCard key={index} decor={decor}></DecorCard>)
                        }
                    </div>
                    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5 ${!expand ? 'hidden' : ''}`}>
                        {
                            secondSlice.map((decor, index) => <DecorCard key={index} decor={decor}></DecorCard>)
                        }
                    </div>

                    <div className="text-center mt-12">
                        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors text-lg font-medium" onClick={() => { setExpand(!expand) }}>{!expand ? 'View More Ideas' : 'Collapse'}</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default EcoDecor;