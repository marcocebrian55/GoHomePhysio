import React, { useEffect, useState } from "react"
import { useGlobalReducer } from '../hooks/useGlobalReducer';
import fabioImg from "../assets/img/fabio.jpg";
import header from "../assets/img/header.jpg";
import { Link } from "react-router-dom";

const faqs = [
	{
		q: "¿Qué duración tienen las sesiones?",
		a: "Las sesiones tienen una duración aproximada de 50 minutos. No siempre más es mejor."
	},
	{
		q: "¿Cuánto vale la sesión?",
		a: "¿Cuánto vale recuperar la libertad de caminar sin miedo o volver a dormir sin dolor? Eso no tiene precio. Sin embargo, el desplazamiento, nuestro compromiso contigo, el material que usamos y el seguimiento continuo, tiene una inversión de 60 euros por sesión. No pagas por 50 minutos de tiempo, pagas por un plan diseñado para que dejes de necesitarnos lo antes posible."
	},
	{
		q: "¿Cómo puedo pagar las sesiones?",
		a: "Las sesiones pueden abonarse por efectivo, transferencia bancaria o mediante enlaces de pago."
	},
	{
		q: "¿Si no es un masaje, qué vais a hacerme exactamente?",
		a: "Trabajamos con un enfoque basado en el ejercicio terapéutico, educación sobre tu dolor y técnicas manuales específicas para que tu cuerpo vuelva a ser funcional y tu relación con el problema cambie. El objetivo no es que te relajes, sino que te recuperes."
	},
	{
		q: "¿Tengo que preparar algo en casa o mover muebles?",
		a: "No necesitas un gimnasio ni una habitación vacía. Nos adaptamos al espacio que tengas; solo necesitamos que estés cómodo y que haya un mínimo de espacio para movernos alrededor de la camilla (si la usamos) o para realizar los ejercicios."
	},
	{
		q: "¿Tengo que disponer de algún material?",
		a: "No hace falta. Llevamos todo lo necesario: desde la camilla (si el caso lo requiere) hasta bandas elásticas, pesas y todo lo que se requiera. Tú solo tienes que poner las ganas y la voluntad."
	},
	{
		q: "A mi familiar le acaban de dar el alta, ¿debería empezar ya?",
		a: "Cuanto antes, mejor. Empezar la rehabilitación en los primeros días es clave para evitar que el miedo a caerse se convierta en una limitación permanente. En las operaciones, aunque estés con puntos o inmovilizado, la correcta activación y los ejercicios debidamente pautados en cada fase del proceso es fundamental para una recuperación mucho más eficaz y rápida."
	},
	{
		q: "¿Cuántas sesiones voy a necesitar para notar mejoría?",
		a: "Cada cuerpo es un mundo, pero nuestro enfoque es que seas independiente lo antes posible. No queremos que seas nuestro cliente para siempre, queremos que vuelvas a tu vida normal, mientras te guiamos por el proceso."
	},
	{
		q: "¿Tengo que hacer \"deberes\" entre sesión y sesión?",
		a: "Sí. Si queremos acabar con el problema de raíz, tu implicación es fundamental. Te enseñaremos ejercicios sencillos para que tu recuperación no se detenga cuando nosotros salgamos por la puerta."
	},
	{
		q: "Tengo un perro/gato, ¿es un problema?",
		a: "¡Al contrario!, amamos a los animales. Solo te pediremos que, si se ponen muy nerviosos o interrumpen la sesión, los mantengamos en otra habitación ese momento para aprovechar al máximo tu sesión."
	},
];

const FaqItem = ({ q, a }) => {
	const [open, setOpen] = useState(false);
	return (
		<div className={`faq__item${open ? " faq__item--open" : ""}`}>
			<button className="faq__question" onClick={() => setOpen(!open)}>
				<span>{q}</span>
				<span className="faq__arrow">{open ? "−" : "+"}</span>
			</button>
			{open && <p className="faq__answer">{a}</p>}
		</div>
	);
};

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
						<em>NO</em> solo damos masajes.
					</h1>
					<p className="hero__subtitle">
						Usamos las manos para tratar tu <strong>dolor</strong>, pero usamos el movimiento
						para solucionarlo <strong>definitivamente</strong>. Resolvemos tu dolor involucrándonos
						en tu <strong>problema</strong>, en tu contexto, en tu <strong>hogar</strong>.
					</p>
					<Link to="/reservar">
						<button className="hero__cta">Reservar cita ahora</button>
					</Link>
				</div>
			</section>

			{/* SERVICIOS */}
			<section className="services" id="servicios">
				<p className="services__label">¿Esto es para ti?</p>
				<h2 className="services__title">Trabajamos contigo si…</h2>
				<div className="services__grid services__grid--5">

					<div className="services__card">
						<div className="services__icon">🏥</div>
						<h3 className="services__card-title">Te acabas de operar</h3>
						<p className="services__card-desc">
							Y te niegas a esperar meses por unas sesiones de rehabilitación genéricas
							donde apenas te prestan atención, perdiendo tu tiempo o el de tus seres
							queridos que te tienen que llevar al centro.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">🧓</div>
						<h3 className="services__card-title">Un familiar ha caído o ha perdido fuerza</h3>
						<p className="services__card-desc">
							Ha salido del hospital y se encuentra más débil, ha perdido autonomía
							y se ha vuelto más dependiente. Necesita recuperar su funcionalidad
							cuanto antes, en su propio entorno.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">🫁</div>
						<h3 className="services__card-title">Sientes que te falta el aire</h3>
						<p className="services__card-desc">
							Tienes un problema respiratorio que nadie te ha explicado con claridad.
							Vives con una sensación de ahogo, tos y flemas que, día tras día,
							te quita las ganas de moverte.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">🏃</div>
						<h3 className="services__card-title">Tienes un dolor que no se resuelve</h3>
						<p className="services__card-desc">
							Y quieres prestar atención a lo que verdaderamente te importa.
							Resolver tu problema, sin estar pendiente del tráfico o de dónde aparcar.
						</p>
						<Link to="/reservar" className="services__card-link">Reservar cita →</Link>
					</div>

					<div className="services__card">
						<div className="services__icon">💬</div>
						<h3 className="services__card-title">Otro problema que crees que podemos resolver</h3>
						<p className="services__card-desc">
							Si no te ves en ninguno de los casos anteriores pero crees que podemos
							ayudarte, cuéntanoslo. Trabajamos con personas que no quieren parches,
							sino soluciones.
						</p>
						<Link to="/reservar" className="services__card-link">Cuéntanos tu caso →</Link>
					</div>

				</div>

				{/* Bloque negativo */}
				<div className="services__negative">
					<p className="services__negative-text">
						Sin embargo, si lo que quieres es un masaje puntual para que eliminemos
						el problema sin que tengas que mover un dedo… me temo que no te podemos ayudar.
					</p>
				</div>
			</section>

			{/* MINI ABOUT — Tu casa, tu clínica */}
			<section className="about" id="sobre-mi">
				<div className="about__image-wrapper">
					<img src={fabioImg} alt="Fabio Hernández Guedes" className="about__image" />
				</div>
				<div className="about__content">
					<p className="about__label">Quiénes somos</p>
					<h2 className="about__title">Tu casa,<br /><em>tu clínica.</em></h2>
					<p className="about__text">
						Tu sofá, tus escaleras, tu silla. Ahí es donde nace el problema
						y ahí es donde lo solucionamos. Tu entorno nos permite personalizar
						y ajustar cada detalle del tratamiento mientras te acompañamos
						en el proceso de recuperación.
					</p>
					<p className="about__text">
						No te damos una lista infinita de ejercicios que luego no sabes cómo hacer.
						Entender lo que te está pasando es el primer paso para saber cómo actuar.
						Además, podrás mantener contacto continuo para resolver cualquier duda
						entre sesiones. Buscamos resultados reales, no que te sientas mejor unos días.
					</p>
					<div className="about__actions">
						<Link to="/reservar" className="about__cta">Reservar mi sesión</Link>
						<Link to="/quienes-somos" className="about__link">Conoce mi historia →</Link>
					</div>
				</div>
			</section>

			{/* FAQ */}
			<section className="faq" id="faq">
				<p className="faq__label">Todo lo que necesitas saber</p>
				<h2 className="faq__title">Preguntas frecuentes</h2>
				<div className="faq__list">
					{faqs.map((item, i) => (
						<FaqItem key={i} q={item.q} a={item.a} />
					))}
				</div>
			</section>

			{/* TESTIMONIOS */}
			<section className="testimonials" id="testimonios">
				<p className="testimonials__label">Lo que dicen nuestros pacientes</p>
				<h2 className="testimonials__title">Testimonios</h2>
				<div className="testimonials__grid">
					{[
						{
							name: "Rosa",
							location: "Arucas",
							text: "Queremos agradecer de corazón el excelente trabajo de Fabio que trató a mi abuela tras su operación de prótesis de cadera. Desde el primer momento demostró una gran profesionalidad, pero sobre todo una calidad humana excepcional. Acudía a su domicilio y trabajaba con ella siempre con muchísimo respeto, paciencia y cariño, algo fundamental en su proceso de recuperación. Gracias a su dedicación y a su forma de tratarla, mi abuela avanzó muy rápido y hoy en día está genial de la cadera. Incluso el médico nos confirmó que la recuperación había sido muy buena y que el trabajo realizado había sido excelente. Sin duda, un profesional totalmente recomendable."
						},
						{
							name: "Pilar",
							location: "El Tablero",
							text: "Fabio me hizo 2 sesiones de fisioterapia, desde la primera noté una notable mejoría. Excelente profesional, lo recomiendo."
						},
						{
							name: "Agustín",
							location: "Arguineguín",
							text: "Lo contraté para mi padre de 83 años después de una operación traumatológica y se ha podido sacar de la cama y empezar la bipedestación. Ha sido un éxito. Recomendable."
						},
						{
							name: "Alba",
							location: "Las Palmas de Gran Canaria",
							text: "Maravilloso servicio, lo contraté por un problema de cervicales y me alivió muchísimo los mareos. Se lo agradezco mucho, respetuoso y muy profesional."
						},
					].map((t, i) => (
						<div className="testimonials__card testimonials__card--text" key={i}>
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