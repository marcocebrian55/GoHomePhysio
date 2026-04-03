import React, { useEffect } from "react"
import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import { useGlobalReducer } from '../hooks/useGlobalReducer';
import fabioImg from "../assets/img/fabio.jpg";
import videoleaves from "../assets/img/leaves.mp4";
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
			if (error.message) throw new Error(
				`Could not fetch the message from the backend.
				Please check if the backend is running and the backend port is public.`
			);
		}

	}

	useEffect(() => {
		loadMessage()
	}, [])

	return (
		<div className="home">

			<section className="hero">
				<div className="hero__video-wrapper">
					<img
						src={header}
						alt="Go Home Physio"
						className="hero__video"
					/>
					<div className="hero__overlay" />
				</div>

				<div className="hero__content">
					<p className="hero__label">Fisioterapia Respiratoria · Rehabilitación · Deporte</p>
					<h1 className="hero__title">
						No todos los fisios son iguales.<br />

					</h1>
					<p className="hero__subtitle">
						Si quieres solucionar tu dolor de verdad, estás en el lugar correcto.
						Fisioterapia especializada a domicilio, con resultados reales.
					</p>
					<Link to="/reservar">
						<button className="hero__cta">Reservar cita ahora</button>
					</Link>
				</div>
			</section>

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

					<span className="stats__label">Especialidades: Respiratoria, Rehabilitación y Deportiva</span>
				</div>
				<div className="stats__divider" />
				<div className="stats__item">
					<span className="stats__num">5/5</span>
					<span className="stats__label">Valoración media de pacientes</span>
				</div>
			</section>


			<section className="services" id="servicios">
				<p className="services__label">Lo que ofrecemos</p>
				<h2 className="services__title">Nuestros servicios</h2>
				<div className="services__grid">

					<div className="services__card">
						<div className="services__icon">🫁</div>
						<h3 className="services__card-title">Fisioterapia Respiratoria</h3>
						<p className="services__card-desc">
							Tratamiento especializado para mejorar la función pulmonar.
							Ideal para pacientes con EPOC, asma o recuperación post-COVID.
						</p>
					</div>

					<div className="services__card">
						<div className="services__icon">🦴</div>
						<h3 className="services__card-title">Rehabilitación</h3>
						<p className="services__card-desc">
							Recuperación de lesiones musculares y articulares con técnicas
							avanzadas adaptadas a cada paciente.
						</p>
					</div>

					<div className="services__card">
						<div className="services__icon">🏃</div>
						<h3 className="services__card-title">Rendimiento Deportivo</h3>
						<p className="services__card-desc">
							Optimiza tu rendimiento y previene lesiones con planes
							personalizados según tu deporte y nivel.
						</p>
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
						Fisioterapeuta colegiado especializado en fisioterapia respiratoria,
						rehabilitación y rendimiento deportivo. Con más de 5 años de experiencia,
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

			<section className="testimonials" id="testimonios">
				<p className="testimonials__label">Lo que dicen nuestros pacientes</p>
				<h2 className="testimonials__title">Testimonios de nuestros pacientes</h2>



				<div className="testimonials__grid">
					{[
						{
							name: "Carmen P.",
							location: "Madrid",
							text: "Después de meses con problemas respiratorios, en pocas semanas de tratamiento noté una mejora increíble. Totalmente recomendable.",
							img: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=400&fit=crop"

						},
						{
							name: "Luis M.",
							location: "Barcelona",
							text: "Volví a correr después de mi lesión de rodilla gracias al plan de rehabilitación personalizado. Un profesional de 10.",
							img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=300&h=400&fit=crop"

						},
						{
							name: "Sofía R.",
							location: "Valencia",
							text: "El tratamiento post-COVID me devolvió la energía y la capacidad de respirar con normalidad. No podría estar más agradecida.",
							img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop"

						},
						{
							name: "Marcos T.",
							location: "Sevilla",
							text: "Como deportista amateur, el trabajo de prevención de lesiones ha sido clave en mi temporada. Resultados visibles desde el primer mes.",
							img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop"
						},
						{
							name: "Elena G.",
							location: "Bilbao",
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



			</section>


		</div>
	);
};

export default Home;