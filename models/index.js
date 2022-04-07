const User = require('./User');
const BodyBio = require('./BodyBio');
const Exercise = require('./Exercise');
const Workout = require('./Workout');

User.hasMany(BodyBio, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

BodyBio.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Exercise, {
    foreignKey: 'user_id',
});

Exercise.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Workout, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE',
});

Workout.belongsToMany(Exercise, {
    through: 'WorkoutSet',
});

Exercise.belongsToMany(Workout, {
    through: 'WorkoutSet',
});

module.exports = { User, BodyBio, Exercise, Workout}