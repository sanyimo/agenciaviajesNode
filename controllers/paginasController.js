import { Viaje } from "../models/Viaje.js";
import { Testimonial } from "../models/Testimonial.js";

const paginaInicio = async (req, res) => {
    const promiseDb = [];
    //ambas consultas arrancan al mismo tiempo
    promiseDb.push( Viaje.findAll({ limit: 3 }) );
    promiseDb.push( Testimonial.findAll({ limit: 3 }) );
    //consultar 3 viajes del modelo Viaje
    try {
        const resultado = await Promise.all(promiseDb);
        
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }
    
}

const paginaNosotros = (req, res) => { 
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {

    // Consultar BD 
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos viajes',
        viajes
    });
}

const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await Testimonial.findAll();

        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        }); 
    } catch (error) {
        console.log(error);
    }
    
}

// Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {

    const { slug } = req.params;

    try {
        const viaje = await Viaje.findOne( { where : { slug } });

        res.render('viaje', {
            pagina: 'Información viaje', 
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}