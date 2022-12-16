import express from 'express';
import {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
} from '../controllers/paginasController.js';
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio 
//(req, res) => {//req - lo q enviamos : res - lo que express nos responde
//     res.render('inicio', {
//         pagina: 'Inicio'
//     });
// } se ha ido a paginasController
);
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);//comodin
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);
// router.get('/contacto', (req, res) => {
//     res.send('Contacto');
// });
export default router;