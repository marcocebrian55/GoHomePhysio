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
                        ¿Quiénes somos?<br />
                        <em>Con lo cómodo que es una clínica y voy de casa en casa…</em>
                    </h1>
                    <p className="quienes__hero-sub">
                        Pero en una clínica no tendrías experiencias increíbles como un paseo 
                        inesperado en una silla eléctrica y subir escaleras a una increíble 
                        velocidad de 5 km/h.
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
                        Bromas aparte, el "germen" de querer ofrecer un servicio a domicilio 
                        nace al ver que había muchas personas que vivían encerradas en sus casas 
                        sin que nadie les ofreciera otra alternativa que la de un centro de 
                        rehabilitación o fisioterapia.
                    </p>
                    <p className="quienes__bio-text">
                        Centros en los que los resultados distan mucho de las expectativas que 
                        uno tiene cuando piensa en recuperarse adecuadamente. Donde la atención 
                        y la personalización de un tratamiento es tarea imposible.
                    </p>
                    <p className="quienes__bio-text">
                        Soy Fabio Hernández y soy la persona detrás de este proyecto. No te voy 
                        a engañar diciendo que mi sueño siempre fue ser fisioterapeuta. La 
                        fisioterapia llegó a mi vida como alternativa al no alcanzar la nota para 
                        entrar en la carrera de medicina. Todo un drama.
                    </p>
                    <p className="quienes__bio-text">
                        Pero me decidí por fisioterapia porque me gustaba el deporte y quería 
                        algo relacionado con la salud. Durante la carrera, me planteé seriamente 
                        si era lo mío. No me siento identificado con la fisioterapia que me veía 
                        obligado a ejercer.
                    </p>
                    <p className="quienes__bio-text">
                        Por unas causas u otras, realicé algunas sesiones a domicilio y lo que 
                        descubrí fue revelador. No solo podía ayudar a personas que no podían 
                        desplazarse, sino que al trabajar en su entorno, todo lo que hacíamos 
                        en las sesiones tenía un sentido. Un porqué.
                    </p>
                    <p className="quienes__bio-text">
                        Me esperan con un café caliente o me bordan una toalla para cada vez 
                        que me lavo las manos… cosas que una clínica no pasa. Relaciones que 
                        se forjan bajo un mismo techo en el que fisio y paciente se unen para 
                        solucionar los problemas que le están impidiendo vivir su vida con calidad.
                    </p>
                    <p className="quienes__bio-text">
                        <strong>Por eso…prefiero el domicilio.</strong>
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