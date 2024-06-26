"use client";
import Image from "next/image";
import Card from 'react-bootstrap/Card';

export default function HomePage() {
  return (
    <main>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 text-center py-5">
              <h1 className="my-4">¿Qué hacemos?</h1>
              <h4 className="my-4"><strong>Reembolsamos gastos de salud de manera ágil y segura</strong></h4>
              <p>Reembolso Salud combina la innovación y flexibilidad con la solidez y experiencia, ofreciendo soluciones integrales y de alta calidad en la gestión de reembolsos de gastos médicos.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div class="row py-40" id="servicio">

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card border border-0 p-4">
              <img className="dimention" src="/img/gestion-agil.svg" alt="" />
              <h4 className="py-2">Gestión ágil</h4>
              <p>Proceso rápido y eficiente para solicitar reembolsos médicos, reduciendo tiempos y pasos requeridos.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card border border-0 p-4">
              <img className="dimention" src="/img/seguimiento-de-gestion.svg" alt="" />
              <h4 className="py-2">Seguimiento de gestiones</h4>
              <p>Monitoreo en detalle del progreso de sus solicitudes de reembolso, incluyendo documentos adjuntos y comunicaciones.</p>
            </div>
          </div>

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card border border-0 p-4">
              <img className="dimention" src="/img/notificacion-estado.svg" alt="" />
              <h4 className="py-2">Notificación de estado</h4>
              <p>Verifica fácilmente el estado de sus solicitudes y recibe notificaciones cuando tu gestión haya finalizado.</p>
            </div>
          </div>
        </div>
      </div>

      {/* inicio - seccion sistema de reembolso */}
      <section className="section-system">
        <div className="container py-40">
          <div className="row" id="nosotros">
            <div className="col-sm-12 col-md-12 my-auto">
              <h2 className="fs-1 mb-5 m-0">Nuestro <strong>Sistema de reembolso</strong></h2>
              <hr className="line-1"/>
              <p className="fs-6 lh-base mt-5">Nuestro sistema de gestión de reembolsos permite el acceso web a todas aquellas personas que <br></br> 
              deseen realizar algún tipo de solicitud, tanto de reembolsos médicos, sean estos ambulatorios, hospitalarios, 
              y/o dentales.</p>
            </div>
          </div>
          <div className="row justify-content-center py-4">
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Denuncio</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Consulta</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Asignación</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Auditoría</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Liquidación</h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 p-0">
              <div className="rectangle m-1">
                <img className="color-plus mx-3" src="/img/plus-large.svg" alt="" />
                <h5 className="p-0 my-auto color-text-1">Informes</h5>
              </div>
            </div>
            <div className="colsm-12 col md-12">
              <p className="fs-6 lh-base mt-5">El sistema de administración permite una configuración intuitiva y específica de 
              beneficios para cada cliente. Facilita la verificación rápida de condiciones y la corrección de discrepancias. 
              Además, agiliza la gestión de altas, bajas, modificaciones y la incorporación por lotes de beneficiarios y prestadores.</p>
            </div>
          </div>
        </div>
      </section>
      {/* fin - seccion sistema de reembolso */}

      {/* inicio - seccion de nuestra empresa */}
      <div className="container pt-5">
        <div className="row" id="nosotros">
          <div className="col-sm-12 col-md-6">
            <img src="/img/nuestro-trabajo.svg" alt="" />
          </div>
          <div className="col-sm-12 col-md-6 my-auto">
            <h2 className="fs-1 mb-5">Nuestro objetivo se cumple al <strong>más alto estándar</strong> de la industria</h2>
            <hr className="line-2"/>
            <p className="fs-6 lh-lg mt-5">Somos una empresa con enfoque dinámico y fresco en la gestión de servicios médicos, 
              ofreciendo soluciones ágiles y transparentes. Comprometidos con la excelencia en el servicio al cliente reflejada en la optimización de los procesos de 
              reembolso, garantizando una experiencia sin complicaciones para los usuarios. En colaboración con MPRO, una empresa 
              con más de 20 años de experiencia en el sector.</p>
          </div>
        </div>
      </div>
      {/* fin - seccion de nuestra empresa */}
      
      {/* inicio - seccion de contacto */}
  
      {/* fin - seccion de contacto */}
    </main>
    
  );
}
