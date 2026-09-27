import { User } from '../models/User.js';

const initialUsers = [
    {
        username: 'johndoe',
        nickName: 'Johnny',
        bio: 'Gamer apasionado y crítico de RPGs',
        profileBackgroundId: 101,
        profileBgDescription: 'Fondo Cyberpunk',
        profileImageId: 1,
        profilePictureUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWe8SnRWFq1P5A_ypSsqBQ78XSB5sIwCChp5hm2Lrg0qJZHcBHHBRFH7x5&s=10'
    },
    {
        username: 'gamer_girl',
        nickName: 'Sarah',
        bio: 'Jugadora competitiva de shooters',
        profileBackgroundId: 102,
        profileBgDescription: 'Fondo Neón',
        profileImageId: 2,
        profilePictureUrl: 'https://sm.ign.com/ign_latam/screenshot/default/tifa_h9a5.jpg'
    }
];

export const loadInitialUsers = async () => {
    try {
        const count = await User.count();
        if (count === 0) {
            await User.bulkCreate(initialUsers);
            console.log('Usuarios iniciales cargados con éxito.');
        } else {
            console.log('Ya existen usuarios en la base de datos.');
        }
    } catch (error) {
        console.error('Error al cargar usuarios iniciales:', error);
    }
};