import React from 'react';
import Map from '../components/Map';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function ContactPage() {

    return (
        <div className="min-h-screen bg-[#F0EEE2] flex flex-col items-center justify-center text-gray-600">
            <header className="mb-6 grid grid-cols-1 md:grid-cols-1 gap-4 items-center">
                <h1 className="text-5xl font-bold text-center md:text-left text-[#FEBF73] underline">
                    Contacto
                </h1>
            </header>
            <section className="mt-5 profile-details grid md:grid-cols-2 gap-5 items-center">
                <div className="flex justify-center">
                    <Map />
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="text-2xl font-bold mt-5 text-[#FEBF73]">Dónde encontrarme</h2>
                    <p>Calle: Carrer d'Eduardo Urgorri, 12</p>
                    <p>Ciudad: Palma</p>
                    <p>Código postal: 07009</p>
                    <p>País: España</p>
                    <h2 className="text-2xl font-bold mt-5 text-[#FEBF73]">Redes sociales</h2>
                    <ul className="list-disc list-inside">
                        <li><a href="https://github.com/paucarbonell" className="text-gray-600">GitHub</a></li>
                        <li><a href="https://www.twitter.com" className="text-gray-600">Twitter</a></li>
                        <li><a href="https://www.instagram.com" className="text-gray-600">Instagram</a></li>
                        <li><a href="https://www.linkedin.com" className="text-gray-600">LinkedIn</a></li>
                    </ul>
                </div>
            </section>
            <section className="mt-10 w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-[#FEBF73] text-center">Enviame un mensaje</h2>
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Tu nombre" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Tu email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-600 text-sm font-bold mb-2" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-600 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Tu mensaje" rows="4"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <Link to="/newsletterpage"><Button text="Enviar" /></Link>
                    </div>
                </form>
            </section>
            <div className="flex space-x-4 mt-8 mb-10">
                <Link to="/"><Button text="Inicio" /></Link>
                <Link to="/profilepage"><Button text="Perfil" /></Link>
                <Link to="/projectpage"><Button text="Proyectos" /></Link>
                <Link to="/contactpage"><Button text="Contacto" /></Link>
            </div>
        </div>
    );
}