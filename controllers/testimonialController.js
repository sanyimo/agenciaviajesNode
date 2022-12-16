import { Testimonial } from '../models/Testimonial.js';

const guardarTestimonial = async (req, res) => {
    //validar
    const { nombre, correo, mensaje } = req.body;

    const errores = [];

    if (nombre.trim() === '') { 
        errores.push({ mensaje: 'El campo Nombre está vacío' });
    }
    if (correo.trim() === '') { 
        errores.push({ mensaje: 'El campo Correo está vacío' });
    }
    if (correo.trim() === '') { 
        errores.push({ mensaje: 'El campo Mensaje está vacío' });
    }
    
    // revisar por erroes
    if (errores.length > 0) {
        //consultar testimoniales existentes
        const testimoniales = await Testimonial.findAll();

        // muestra la vista con errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre, 
            correo, 
            mensaje,
            testimoniales
        });
    } else {
        // almacenalo en la BD
        try {
            await Testimonial.create({
                nombre, 
                correo,
                mensaje
            });

            res.redirect('/testimoniales');
        } catch (error) {
            console.log(error);
        }
    }

};

export {
    guardarTestimonial
}