const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        // _id: {
        //     type: String,
        //     required: true
        // },
        name: {
            type: String,
            required: true
        },
        userName: {
            type: String,
            required: true
        }
        // created: {
        //     type: Date,
        //     default: Date.now
        // },
        // propiedadFlexible: {
        //     type: mongoose.Schema.Types.Mixed
        // },
        // profilePicture: Buffer,
        // built: Boolean //en el body iria como built: true o false
    },
    {
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('user', userSchema)