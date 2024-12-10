import React from 'react';
import '../css/projectpage.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ProjectPage = () => {
    return (
        <div className="min-h-screen bg-[#F0EEE2] flex flex-col items-center justify-center text-gray-600">
            <header className="mb-6 grid grid-cols-1 md:grid-cols-1 gap-4 items-center">
                <h1 className="text-5xl font-bold text-center md:text-left text-[#FEBF73] underline">
                    Projects
                </h1>
            </header>
            <section className="project-details text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="project-image-placeholder">
                        <p className="mb-2">Proyecto Netflix</p>
                        <img src="/assets/img/img1.png" alt="Project 1" className="w-full h-48 object-cover project-image" />
                    </div>
                    <div className="project-image-placeholder">
                        <p className="mb-2">Proyecto meteorologia</p>
                        <img src="/assets/img/img3.png" alt="Project 3" className="w-full h-48 object-cover project-image" />
                    </div>
                    <div className="project-image-placeholder">
                        <p className="mb-2">Proyecto inmobiliaria</p>
                        <img src="/assets/img/img2.png" alt="Project 2" className="w-full h-48 object-cover project-image" />
                    </div>
                    <div className="project-image-placeholder">
                        <p className="mb-2">Proyecto criptobros</p>
                        <img src="/assets/img/img4.png" alt="Project 4" className="w-full h-48 object-cover project-image" />
                    </div>
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

export default ProjectPage;