import React, { useEffect } from "react"
import { useGlobalReducer } from '../hooks/useGlobalReducer';
import fabioImg from "../assets/img/fabio.jpg";
import header from "../assets/img/header.jpg";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer()

	const loadMessage = async () => {
		try {
			const backendUrl = import.meta.env.VITE_BACKEND_URL
			if (!backendUrl) throw new Error("VITE_BACKEND_URL is not defined in .env file")
			const response = await fetch(backendUrl + "/api/hello")
			const data = await response.json()
			if (response.ok) dispatch({ type: "set_hello", payload: data.message })
			return data
		} catch (error) {
			if (error.message) throw new Error(`Could not fetch the message from the backend.`)
		}
	}

	useEffect(() => { loadMessage() }, [])

	return (
		<div className="home">

			{/* HERO */}
			<section className="hero">
				<div className="hero__video-wrapper">
					<img src={header} alt="Go Home Physio" className="hero__video" />
					<div className="hero__overlay" />
				</div>
				<div className="hero__content">
					<p className="hero__label">Fisioterapia Traumatológica · Cardiorrespiratoria · Geriátrica · Laboral</p>
					<h1 className="hero__title">
						El alivio que necesitas,<br />
						<em>donde lo necesitas.</em>
					</h1>
					<p className="hero__subtitle">
						Fisioterapia especializada a domicilio. Tanto si practicas deporte,
						como si no, mereces moverte sin dolor.
					</p>
					<Link to="/reservar">
						<button className="hero__cta">Reservar cita ahora</button>
					</Link>
				</div>
			</section>

			{/* STATS */}
			<section className="stats">
				<div className="stats__item">
					<span className="stats__num">+5</span>
					<span className="stats__label">Años de experiencia</span>
				</div>
				<div className="stats__divider" />
				<div className="stats__item">
					<span className="stats__num">+300</span>
					<span className="stats__label">Pacientes atendidos</span>
				</div>
				<div className="stats__divider" />
				<div className="stats__item">
					<span className="stats__num">4</span>
					<span className="stats__label">Especialidades de fisioterapia</span>
				</div>
				<div className="stats__divider" />
				<div className="stats__item">
					<span className="stats__num">5/5</span>
					<span className="stats__label">Valoración media de pacientes</span>
				</div>
			</section>

			{/* SERVICIOS */}
			<section className="services" id="servicios">
				<p className="services__label">Lo que ofrecemos</p>
				<h2 className="services__title">Nuestros servicios</h2>
				<div className="services__grid">

					<div className="services__card">
						<div className="services__icon">🏃</div>
						<h3 className="services__card-title">Fisioterapia Traumatológica Deportiva</h3>
						<p className="services__card-desc">
							Tanto si practicas deporte como si no, mereces moverte sin dolor.
							Tratamiento de lesiones musculares y articulares adaptado a ti.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">🫁</div>
						<h3 className="services__card-title">Fisioterapia Cardiorrespiratoria</h3>
						<p className="services__card-desc">
							Si padeces algún problema respiratorio, podemos ayudarte a mejorar
							tu calidad de vida con tratamiento especializado a domicilio.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">🧓</div>
						<h3 className="services__card-title">Fisioterapia Geriátrica</h3>
						<p className="services__card-desc">
							Diseñamos programas de ejercicios para mantener y mejorar
							la funcionalidad de los mayores, adaptados a cada persona.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">💼</div>
						<h3 className="services__card-title">Fisioterapia Laboral</h3>
						<p className="services__card-desc">
							Talleres preventivos y sesiones de fisioterapia para mejorar
							la salud de tus empleados y reducir el absentismo laboral.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

				</div>
			</section>

			{/* MINI ABOUT */}
			<section className="about" id="sobre-mi">
				<div className="about__image-wrapper">
					<img src={fabioImg} alt="Fabio Hernández Guedes" className="about__image" />
				</div>
				<div className="about__content">
					<p className="about__label">Quiénes somos</p>
					<h2 className="about__title">Hola, soy <em>Fabio</em></h2>
					<p className="about__text">
						Fisioterapeuta colegiado especializado en fisioterapia traumatológica deportiva,
						cardiorrespiratoria, geriátrica y laboral. Con más de 5 años de experiencia,
						mi misión es simple: que recuperes tu calidad de vida sin que tengas que
						moverte de casa.
					</p>
					<p className="about__text">
						No ofrezco masajes genéricos. Cada sesión está diseñada específicamente
						para ti, tu cuerpo y tus objetivos. Si buscas resultados reales,
						estás en el lugar correcto.
					</p>
					<div className="about__actions">
						<Link to="/reservar" className="about__cta">Reservar mi sesión</Link>
						<Link to="/quienes-somos" className="about__link">Conoce mi historia →</Link>
					</div>
				</div>
			</section>

			{/* TESTIMONIOS */}
			<section className="testimonials" id="testimonios">
				<p className="testimonials__label">Lo que dicen nuestros pacientes</p>
				<h2 className="testimonials__title">Testimonios</h2>
				<div className="testimonials__grid">
					{[
						{
							name: "Carmen P.", location: "Gran Canaria",
							text: "Después de meses con problemas respiratorios, en pocas semanas de tratamiento noté una mejora increíble. Totalmente recomendable.",
							img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=400&fit=crop"
						},
						{
							name: "Luis M.", location: "Gran Canaria",
							text: "Volví a correr después de mi lesión de rodilla gracias al plan de rehabilitación personalizado. Un profesional de 10.",
							img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&h=400&fit=crop"
						},
						{
							name: "Sofía R.", location: "Gran Canaria",
							text: "El tratamiento post-COVID me devolvió la energía y la capacidad de respirar con normalidad. No podría estar más agradecida.",
							img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop"
						},
						{
							name: "Marcos T.", location: "Gran Canaria",
							text: "Como deportista amateur, el trabajo de prevención de lesiones ha sido clave en mi temporada. Resultados visibles desde el primer mes.",
							img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop"
						},
						{
							name: "Elena G.", location: "Gran Canaria",
							text: "Trato cercano, profesional y muy efectivo. Me explicó cada paso del tratamiento y los resultados fueron mejores de lo esperado.",
							img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&h=400&fit=crop"
						},
					].map((t, i) => (
						<div className="testimonials__card" key={i}>
							<div className="testimonials__img-wrapper">
								<img src={t.img} alt={t.name} className="testimonials__img" />
							</div>
							<div className="testimonials__body">
								<div className="testimonials__stars">★★★★★</div>
								<p className="testimonials__text">"{t.text}"</p>
								<div className="testimonials__author">
									<p className="testimonials__name">{t.name}</p>
									<p className="testimonials__location">{t.location}</p>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* CTA debajo de testimonios */}
				<div className="testimonials__cta-wrapper">
					<Link to="/reservar">
						<button className="testimonials__cta">Quiero reservar mi cita</button>
					</Link>
				</div>
			</section>

		</div>
	);
};

export default Home;