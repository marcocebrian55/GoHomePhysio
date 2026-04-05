import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import logo from "../assets/img/logotiponegroizq.png";
export const Navbar = () => {

	const [scrolled, setScrolled] = useState(false);
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

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
			<Link to="/" className="navbar__logo-link">
				<img src={logo} alt="Go Home Physio Logo" className="navbar__logo-img" />
			</Link>

			{/* Links — se ocultan/muestran según menuOpen */}
			<ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
				{!isHome ? (
					<>
						<li><Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link></li>
						<li><Link to="/quienes-somos" onClick={() => setMenuOpen(false)}>Quiénes somos</Link></li>
					</>
				) : (
					<>
						<li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
						<li><a href="#servicios" onClick={() => setMenuOpen(false)}>Servicios</a></li>
						<li><a href="#sobre-mi" onClick={() => setMenuOpen(false)}>Sobre mí</a></li>
						<li><a href="#testimonios" onClick={() => setMenuOpen(false)}>Testimonios</a></li>
					</>
				)}
			</ul>

			<div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
				{!isReservasPage && (
					<Link to="/reservar">
						<button className="navbar__cta">Reservar Cita</button>
					</Link>
				)}

				{/* Hamburguesa */}
				<button
					className="navbar__hamburger"
					onClick={() => setMenuOpen(!menuOpen)}
					aria-label="Menú"
				>
					<span style={{ transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
					<span style={{ opacity: menuOpen ? 0 : 1 }} />
					<span style={{ transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
				</button>
			</div>
		</nav>
	);
};

export default Navbar;