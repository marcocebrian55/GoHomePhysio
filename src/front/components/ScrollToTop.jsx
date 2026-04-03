import { useEffect } from "react";
import { useLocation } from "react-router-dom"; // El sensor de rutas
import PropTypes from "prop-types";

const ScrollToTop = ({ children }) => {
    // Usamos el hook useLocation para obtener la ruta actual automáticamente
    const { pathname } = useLocation();

    useEffect(() => {
        // Cada vez que el "pathname" (la URL) cambie, subimos al top
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};

export default ScrollToTop;

ScrollToTop.propTypes = {
    children: PropTypes.any
};