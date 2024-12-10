import React from 'react';
import '../css/newsletterpage.css';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const NewsletterPage = () => {
    return (
        <div className="min-h-screen bg-[#F0EEE2] flex flex-col items-center justify-center text-gray-600">
            <header className="mb-6 grid grid-cols-1 md:grid-cols-1 gap-4 items-center">
                <h1 className="text-5xl font-bold text-center md:text-left text-[#FEBF73] underline">
                    Boletín
                </h1>
            </header>
            <section className="newsletter-details text-center">
                <h2 className="text-2xl text-center font-bold mb-4 text-[#FEBF73]">¡Bienvenido a mi boletín!</h2>
                <p>Gracias por suscribirte a mi boletín. Aquí encontrarás las últimas actualizaciones y noticias sobre mis proyectos y actividades.</p>
                <p>¡Mantente atento para más contenido emocionante!</p>
                <div className="mt-6">
                    <h3 className="text-xl font-bold text-[#FEBF73]">Últimas Actualizaciones</h3>
                    <ul className="list-disc list-inside">
                        <li>El Proyecto Netflix ha sido completado con éxito.</li>
                        <li>He comenzado a trabajar en el Proyecto Instagram.</li>
                        <li>He añadido nuevas funciones a mi sitio web.</li>
                        <li>Próximos eventos y seminarios web.</li>
                    </ul>
                </div>
            </section>
            <div className="flex items-center justify-between mt-20">
                <Link to="/contactpage"><Button text="Volver atrás" /></Link>
            </div>
        </div>
    );
};

export default NewsletterPage;
