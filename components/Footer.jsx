import "./Footer.css";

export default function Header (){
    return(
        <div className="footer-section py-50">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-5">
                        <img className="logo-footer" src="/img/logo-rs-blanco.png" alt="ReembolSalud" />
                    </div>
                    <div className="col-sm-12 col-md-4 col-footer">
                        <ul>
                            <li className="mb-4">
                                <h5><strong>Contáctanos</strong></h5>
                            </li>
                            <li>
                                <p><strong>Escríbenos:</strong> contacto@reembolsalud.cl</p>
                            </li>
                            <li>
                                <p><strong>Llámanos:</strong> + 52 600 4444</p>
                            </li>
                            <li>
                                <p><strong>Visítanos:</strong> Alonso de Cordova #5870</p>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-md-3 col-footer">
                        <ul>
                            <li className="mb-4">
                                <h5><strong>Nostros</strong></h5>
                            </li>
                            <li>
                                <p>Home</p></li>
                            <li>
                                <p>Nosotros</p>
                                </li>
                            <li>
                                <p>Servicio</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
};