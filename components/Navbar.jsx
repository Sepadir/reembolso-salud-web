"use client";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

export default function Navigationbar(){
    return(
        <div className="container">
            <Navbar expand="lg">
               
                <Navbar.Brand href="#">
                    <img alt="" src="/img/logo-reembolsalud.png" width="300" height="auto" className="d-inline-block align-top"/>{' '}
                </Navbar.Brand>
                
                <Navbar.Toggle aria-controls="navbarScroll" />
                
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <Nav.Link href="#action1">Home</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <Nav.Link href="#servicio">Servicio</Nav.Link>
                    <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                
                </Navbar.Collapse>
            </Navbar>
        </div>
        
        // <div className="container">
        //     <nav class="navbar d-flex justify-content-between p-3">
        //         <h1>Reembolso Salud</h1>

        //         <ul>
        //             <Link href="/">Home</Link>
        //             <Link href="/">Nosotros</Link>
        //             <Link href="/">Servicio</Link>
        //             <Link href="/">Contacto</Link>
        //         </ul>
        //     </nav>
        // </div>
    )
}