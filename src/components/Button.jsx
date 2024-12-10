import React from 'react';

const Button = ({ text, className }) => {
    return (
        <button className={`bg-[#E6A29F] hover:bg-[#D98E8B] text-gray-600 font-bold py-2 px-4 rounded ${className}`}>
            {text}
        </button>
    );
};

export default Button;