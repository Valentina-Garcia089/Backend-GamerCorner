import { Game } from '../models/Game.js';

const initialGames = [
    {
        title: 'The Witcher 3: Wild Hunt',
        developer: 'CD Projekt Red',
        year: 2015,
        image: 501,
        description: 'Un RPG de mundo abierto centrado en la historia.',
        tags: ["RPG", "Mundo Abierto", "Fantasía"]
    },
    {
        title: 'Elden Ring',
        developer: 'FromSoftware',
        year: 2022,
        image: 502,
        description: 'Un juego de acción y rol ambientado en un mundo de fantasía oscura.',
        tags: ["Souls-like", "Mundo Abierto", "Dificil"]
    }
];

export const loadInitialGames = async () => {
    try {
        const count = await Game.count();
        if (count === 0) {
            await Game.bulkCreate(initialGames);
            console.log("Juegos iniciales cargados con éxito.");
        } else {
            console.log("Ya existen juegos en la base de datos.");
        }
    } catch (error) {
        console.error("Error al cargar juegos iniciales:", error);
    }
};