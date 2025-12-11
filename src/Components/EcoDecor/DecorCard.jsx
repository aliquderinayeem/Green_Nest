import React from 'react';

const DecorCard = ({decor}) => {
    const {title,image,description}=decor;
    return (
        <div className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer h-80">
            <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end">
                <div className="p-6 text-white w-full">
                    <h4 className="text-xl font-semibold mb-2">{title}</h4>
                    <p className="text-white/90 text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default DecorCard;