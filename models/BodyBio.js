const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BodyBio extends Model {}

BodyBio.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        phys: {
            type: DataTypes.BOOLEAN,
            allowNull: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        weight: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        neck: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        armRight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        armLeft: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        chest: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        waist: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        navel: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        hips: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        thighRight: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        thighLeft: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'BodyBio'
    }
);

module.exports = BodyBio;