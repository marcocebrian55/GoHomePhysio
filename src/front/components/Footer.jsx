import React from "react";

export const Footer = () => {
	return (
		<footer className="footer">

			{/* COLUMNAS PRINCIPALES */}
			<div className="footer__grid">

				{/* COLUMNA 1 — Marca */}
				<div className="footer__col">
					<p className="footer__logo">✦ GoHome <span>Physio</span></p>
					<p className="footer__desc">
						Fisioterapia especializada en respiratorio, rehabilitación y rendimiento deportivo.
						Tu salud, nuestra prioridad.
					</p>
					<div className="footer__socials">
						<a href="#" className="footer__social">ig</a>
						<a href="#" className="footer__social">fb</a>
						<a href="#" className="footer__social">in</a>
					</div>
				</div>

				{/* COLUMNA 2 — Enlaces */}
				<div className="footer__col">
					<p className="footer__col-title">Enlaces</p>
					<ul className="footer__links">
						<li><a href="#inicio">Inicio</a></li>
						<li><a href="#servicios">Servicios</a></li>
						<li><a href="/quienes-somos">Quiénes somos</a></li>
						<li><a href="/reservar">Reservar cita</a></li>
					</ul>
				</div>

				{/* COLUMNA 3 — Contacto */}
				<div className="footer__col">
					<p className="footer__col-title">Contacto</p>
					<ul className="footer__contact">
						<li>📞 +34 900 123 456</li>
						<li>✉️ hola@gohomephysio.es</li>
						<li>📍 Calle de la Salud, 10 — Madrid</li>
					</ul>
				</div>

			</div>

			{/* BARRA INFERIOR */}
			<div className="footer__bottom">
				<p>© 2024 GoHome Physio · Fabio Hernández Guedes. Todos los derechos reservados.</p>
				<div className="footer__legal">
					<a href="#">Política de privacidad</a>
					<a href="#">Aviso legal</a>
				</div>
			</div>

		</footer>
	);
};