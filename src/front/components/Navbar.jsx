import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
export const Navbar = () => {

	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const isReservasPage = location.pathname === "/reservar";
	const isAboutPage = location.pathname === "/quienes-somos";
	const isHome = location.pathname === "/";

	return (
		<nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
			{/* El logo siempre nos devuelve a la Home */}
			<Link to="/" className="navbar__logo">
				✦ GoHome<span>Physio</span>
			</Link>

			<ul className="navbar__links">

				{!isHome ? (
					<>
						<li><Link to="/">Inicio</Link></li>
						{/* Aquí puedes añadir los otros links cuando los crees */}
						{/* <li><Link to="/conocenos">Conócenos</Link></li> */}
						{/* <li><Link to="/preguntas">Preguntas</Link></li> */}
						{/* <li><Link to="/blog">Blog</Link></li> */}
					</>
				) : (

					<>
						<li><a href="#inicio">Inicio</a></li>
						<li><a href="#servicios">Servicios</a></li>
						<li><a href="#sobre-mi">Sobre mí</a></li>
						<li><a href="#testimonios">Testimonios</a></li>
					</>
				)}
			</ul>


			{!isReservasPage && (
				<Link to="/reservar">
					<button className="navbar__cta">Reservar Cita</button>
				</Link>
			)}
		</nav>
	);
};

export default Navbar;