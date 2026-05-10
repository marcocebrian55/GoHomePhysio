import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton";

export const Layout = () => {
    return (
        <ScrollToTop>
            <Navbar />
            <Outlet />
            <Footer />
            <WhatsAppButton 
                number="34604835848"
                message="Hola Fabio, me gustaría reservar una cita"
            />
        </ScrollToTop>
    )
}