const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        mongoose.connect(process.env.DB_CNN);

        console.log('base de datos online')

    } catch (error) {
        console.log(error);

        throw new Error('Error a la hora de iniciar la base de datos');

    }
}

module.exports = {
    dbConnection
};