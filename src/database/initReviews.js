import { Review } from '../models/Review.js';

const initialReviews = [
    {
        description: 'Una obra maestra de los videojuegos, la historia es increíble.',
        rating: 5,
        tags: ['ObraMaestra', 'Historia'],
        userId: 1,
        gameId: 1 
    },
    {
        description: 'Excelente jugabilidad y diseño de mundo abierto, pero muy difícil.',
        rating: 4,
        tags: ['SoulsLike', 'Dificil'],
        userId: 2,
        gameId: 2
    },
    {
        description: 'Gráficos impresionantes y gran soundtrack, muy recomendado.',
        rating: 5,
        tags: ['Graficos', 'Soundtrack'],
        userId: 1,
        gameId: 2  
    }
];

export const loadInitialReviews = async () => {
    try {
        const count = await Review.count();
        if (count === 0) {
            await Review.bulkCreate(initialReviews);
            console.log('Reseñas iniciales cargadas con éxito.');
        } else {
            console.log('Ya existen reseñas en la base de datos.');
        }
    } catch (error) {
        console.error('Error al cargar reseñas iniciales:', error);
    }
};