import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

export default function ButtonWrap({ boton1, page1, boton2, page2, boton3, page3, boton4, page4 }) {
    return (
        <div className="flex space-x-4 mt-8">
            <Link to={page1}><Button text={boton1} /></Link>
            <Link to={page2}><Button text={boton2} /></Link>
            <Link to={page3}><Button text={boton3} /></Link>
            <Link to={page4}><Button text={boton4} /></Link>
        </div>
    );
}