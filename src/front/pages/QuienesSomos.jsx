import React from "react";
import { Link } from "react-router-dom";
import fabioImg from "../assets/img/fabio.jpg";
import logob from "../assets/img/logoblanco.png";

export const QuienesSomos = () => {
    return (
        <div className="quienes">

            {/* HERO */}
            <section className="quienes__hero">
                <div className="quienes__hero-content">
                    <img src={logob} alt="Go Home Physio" className="quienes__hero-logo" />
                    <p className="quienes__label">Quiénes somos</p>
                    <h1 className="quienes__hero-title">
                        Fisioterapia con <em>propósito.</em>
                    </h1>
                    <p className="quienes__hero-sub">
                        No somos una clínica más. Somos el fisioterapeuta que va a tu casa,
                        conoce tu caso y trabaja contigo hasta que te muevas sin dolor.
                    </p>
                </div>
            </section>

            {/* FOTO + BIO */}
            <section className="quienes__bio">
                <div className="quienes__bio-image-wrapper">
                    <img src={fabioImg} alt="Fabio Hernández Guedes" className="quienes__bio-image" />
                    <div className="quienes__bio-tag">Fisioterapeuta colegiado</div>
                </div>
                <div className="quienes__bio-content">
                    <p className="quienes__label">El fisioterapeuta</p>
                    <h2 className="quienes__bio-title">Fabio <em>Hernández</em> Guedes</h2>
                    <p className="quienes__bio-text">
                        Graduado en Fisioterapia y especializado en fisioterapia traumatológica
                        deportiva, cardiorrespiratoria, geriátrica y laboral. Con más de 5 años
                        de experiencia tratando pacientes, he aprendido que el mejor tratamiento
                        es el que se adapta a ti, no al revés.
                    </p>
                    <p className="quienes__bio-text">
                        Decidí crear Go Home Physio porque creo que todo el mundo merece acceso
                        a una fisioterapia de calidad, sin desplazamientos, sin listas de espera
                        y sin tratamientos genéricos. Tu cuerpo es único y merece un plan único.
                    </p>

                    <div className="quienes__credentials">
                        <div className="quienes__credential">
                            <span className="quienes__credential-dot" />
                            Graduado en Fisioterapia — Universidad de Las Palmas de Gran Canaria
                        </div>
                        <div className="quienes__credential">
                            <span className="quienes__credential-dot" />
                            Especialización en Fisioterapia Cardiorrespiratoria
                        </div>
                        <div className="quienes__credential">
                            <span className="quienes__credential-dot" />
                            Especialización en Fisioterapia Traumatológica Deportiva
                        </div>
                        <div className="quienes__credential">
                            <span className="quienes__credential-dot" />
                            +5 años de experiencia clínica
                        </div>
                    </div>

                    <Link to="/reservar" className="quienes__cta">Reservar cita con Fabio</Link>
                </div>
            </section>

            {/* VALORES */}
            <section className="quienes__values">
                <p className="quienes__label" style={{ textAlign: "center" }}>Por qué elegirnos</p>
                <h2 className="quienes__values-title">Lo que nos diferencia</h2>
                <div className="quienes__values-grid">
                    <div className="quienes__value-card">
                        <span className="quienes__value-icon">🏠</span>
                        <h3 className="quienes__value-title">A domicilio</h3>
                        <p className="quienes__value-desc">
                            Vamos a donde estás tú. Sin desplazamientos, sin aparcamiento,
                            sin estrés. Tu recuperación empieza en casa.
                        </p>
                    </div>
                    <div className="quienes__value-card">
                        <span className="quienes__value-icon">🎯</span>
                        <h3 className="quienes__value-title">Tratamiento personalizado</h3>
                        <p className="quienes__value-desc">
                            Nada de protocolos genéricos. Cada sesión está diseñada
                            específicamente para ti, tu cuerpo y tus objetivos.
                        </p>
                    </div>
                    <div className="quienes__value-card">
                        <span className="quienes__value-icon">📋</span>
                        <h3 className="quienes__value-title">Seguimiento real</h3>
                        <p className="quienes__value-desc">
                            No desaparecemos entre sesiones. Seguimiento continuo
                            para asegurarnos de que avanzas en la dirección correcta.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA FINAL */}
            <section className="quienes__cta-section">
                <p className="quienes__label">¿Listo para empezar?</p>
                <h2 className="quienes__cta-title">
                    Tu primera sesión está <em>a un clic.</em>
                </h2>
                <p className="quienes__cta-sub">
                    Sin compromiso. Sin listas de espera. Solo tú, Fabio y un plan real para recuperarte.
                </p>
                <Link to="/reservar" className="quienes__cta">Reservar mi primera cita</Link>
            </section>

        </div>
    );
};
export default QuienesSomos;