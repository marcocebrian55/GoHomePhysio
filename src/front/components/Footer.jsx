import React from "react";
import { Link } from "react-router-dom";
import logob from "../assets/img/logoblanco.png";

export const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__grid">

				<div className="footer__col">
					<img src={logob} alt="Go Home Physio" className="footer__logo-img" />
					<p className="footer__desc">
						Fisioterapia especializada a domicilio en Gran Canaria.
						Traumatológica deportiva, cardiorrespiratoria, geriátrica y laboral.
					</p>
					<div className="footer__socials">
						<a href="https://instagram.com/gohomephysio" target="_blank" rel="noreferrer" className="footer__social">ig</a>
						<a href="https://linkedin.com/company/go-home-physio" target="_blank" rel="noreferrer" className="footer__social">in</a>
					</div>
				</div>

				<div className="footer__col">
					<p className="footer__col-title">Enlaces</p>
					<ul className="footer__links">
						<li><Link to="/">Inicio</Link></li>
						<li><Link to="/#servicios">Servicios</Link></li>
						<li><Link to="/quienes-somos">Quiénes somos</Link></li>
						<li><Link to="/reservar">Reservar cita</Link></li>
					</ul>
				</div>

				<div className="footer__col">
					<p className="footer__col-title">Contacto</p>
					<ul className="footer__contact">
						<li>📞 604 835 848</li>
						<li>✉️ gohomephysio@gmail.com</li>

					</ul>
				</div>

			</div>

			<div className="footer__bottom">
				<p>© 2024 Go Home Physio · Fabio Hernández Guedes. Todos los derechos reservados.</p>
				<div className="footer__legal">
					<a href="#">Política de privacidad</a>
					<a href="#">Aviso legal</a>
				</div>
			</div>
		</footer>
	);
};