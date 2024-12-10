import React from 'react';
import '../css/profilepage.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    return (
        <div className="min-h-screen bg-[#F0EEE2] flex flex-col items-center justify-center text-gray-600">
            <header className="mb-6 grid grid-cols-1 md:grid-cols-1 gap-4 items-center">
                <h1 className="text-5xl font-bold text-center md:text-left text-[#FEBF73] underline">
                    About me
                </h1>
            </header>
            <section className="profile-details text-center">
                <h2 className="text-2xl font-bold mb-4 text-[#FEBF73]">¿Quien soy?</h2>
                <p>Hola! Me llamo Pau y soy un estudiante de grado superior de Desarrollo de aplicaciones web.</p>
            </section>

            <section className="mt-8 profile-details grid md:grid-cols-2 gap-5 items-top">
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold mb-4 text-[#FEBF73]">Fortalezas</h2>
                    <p>- Responsable</p>
                    <p>- Gran iniciativa</p>
                    <p>- Proactivo</p>
                    <p>- Émpatico</p>
                    <p>- Organizado</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold mb-4 text-[#FEBF73]">¿Con qué trabajo?</h2>
                    <p>- Java --> 100%</p>
                    <p>- JavaScript --> 100%</p>
                    <p>- PhP --> 100%</p>
                    <p>- Python --> 100%</p>
                    <p>- Ruby --> 100%</p>
                    <p>- COBOL --> 99%</p>
                    <p>- Ensamblador --> 100%</p>
                    <p>- Etc...</p>
                </div>
            </section>

            <div className="flex space-x-4 mt-8 mb-10">
                <Link to="/"><Button text="Inicio" /></Link>
                <Link to="/profilepage"><Button text="Perfil" /></Link>
                <Link to="/projectpage"><Button text="Proyectos" /></Link>
                <Link to="/contactpage"><Button text="Contacto" /></Link>
            </div>
        </div>
    );
};

export default ProfilePage;