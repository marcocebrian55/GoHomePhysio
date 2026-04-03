import React from "react";
import "../../front/index.css";

export const Reservar = () => {
    return (
        <div className="booking">
            {/* Hero Sección - Tu cita, en 2 minutos */}
            <section className="booking__hero text-center">
                <h1 className="booking__hero-title">
                    <em>Tu cita</em>, en 2 minutos
                </h1>
                <p className="booking__hero-subtitle">
                    Olvídate de formularios eternos. Nuestro asistente inteligente te guiará
                    en un proceso de reserva rápido, sencillo y sin complicaciones.
                </p>
            </section>

            {/* Sección Cómo Funciona - 3 pasos visuales */}
            <section className="booking__steps container-fluid">
                <div className="row text-center justify-content-center">
                    <div className="col-md-4 col-lg-3 booking__step">
                        <span className="booking__step-num">1</span>
                        <p className="booking__step-text">Háblanos de tu caso</p>
                    </div>
                    <div className="col-md-4 col-lg-3 booking__step">
                        <span className="booking__step-num">2</span>
                        <p className="booking__step-text">Elige tu horario</p>
                    </div>
                    <div className="col-md-4 col-lg-3 booking__step">
                        <span className="booking__step-num">3</span>
                        <p className="booking__step-text">Recibe confirmación en tu email</p>
                    </div>
                </div>
            </section>

            {/* Sección Chatbot - Centrado y Prominente */}
            <section className="booking__chatbot d-flex align-items-center justify-content-center">
                {/* Placeholder para el chatbot widget */}
                <div className="booking__chatbot-container rounded text-center">
                    {/* Aquí iría el script o widget del chatbot */}
                    <div className="booking__chatbot-placeholder rounded">
                        <span className="booking__chatbot-icon">🤖</span>
                        <p className="booking__chatbot-message">Hola, soy el asistente de Go Home Physio. ¿En qué puedo ayudarte?</p>
                    </div>
                </div>
            </section>

            {/* Sección CTA Alternativo - Trato Humano Directo */}
            <section className="booking__contact d-flex flex-column align-items-center text-center">
                <p className="booking__contact-label">¿Prefieres trato humano directo?</p>
                <p className="booking__contact-text">
                    Si tienes alguna pregunta o prefieres reservar por teléfono, contáctanos directamente:
                </p>
                <div className="booking__contact-details d-flex gap-4">

                    <div className="booking__contact-item">💬 <strong>WhatsApp:</strong> +34 900 123 456</div>
                    <div className="booking__contact-item">✉️ <strong>Email:</strong> hola@gohomephysio.es</div>
                </div>
            </section>
        </div>
    );
};

export default Reservar;
