const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const credencial = sequelize.define('credencial', {
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    store: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

module.exports = credencial;