import app from "./app.js";
import {sequelize} from "./database/database.js";

import './models/User.js';
import './models/Game.js';
import './models/Review.js';

// 2. Importar la configuración de relaciones y los scripts de carga inicial
import { setupRelations } from './models/Relations.js';
import { loadInitialUsers } from './database/initUsers.js';
import { loadInitialGames } from './database/initGames.js';
import { loadInitialReviews } from './database/initReviews.js';


async function init() {

    try {
        setupRelations();

        await sequelize.authenticate()
            .then(() => {
                console.log("Database connected");
            })
            .catch((err) => {
                console.error("Unable to connect to the database:", err);
            });


        await sequelize.sync({ force: true }); 

        await loadInitialUsers();
        await loadInitialGames();
        await loadInitialReviews();
    

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });


    } catch (error) {
        console.log(error);
    }
}


init();