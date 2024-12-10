import React from 'react';
import { Link } from 'react-router-dom';
import '../css/landingpage.css';
import Button from '../components/Button';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-[#F0EEE2] flex flex-col items-center justify-center">
            <header className="mb-2 grid grid-cols-1 md:grid-cols-2 gap-1 items-center">
                <div className="flex justify-center">
                    <img src="/favicon.ico" alt="profile-pic" className="w-32 h-32 rounded-full mt-2" />
                </div>
                <h1 className="text-5xl font-bold text-center md:text-left justify-left">
                    <span className="text-gray-600">Welcome to my</span> <span className="text-[#FEBF73] underline">Portfolio</span>
                </h1>
            </header>
            <div className="flex space-x-4 mt-8">
                <Link to="/"><Button text="Inicio" /></Link>
                <Link to="/profilepage"><Button text="Perfil" /></Link>
                <Link to="/projectpage"><Button text="Proyectos" /></Link>
                <Link to="/contactpage"><Button text="Contacto" /></Link>
            </div>
        </div>
    );
};

export default LandingPage;
