var mongoose = require('mongoose');

const internSchema = new mongoose.Schema(
    {
        intername:{
            type: String,
        },
        fathername:{
            type: String,
            required: true,
        },
        designation:{
            type: String,
            required: true,
        },
        adharno:{
            type: String,
            required: true,
        },
        regNO:{
            type: String,
            required: true,
        },
        DOJ:{
            type: String,
            required: true,
        },
        DOR:{
            type: String,
            required: true,
        }
    },
    {
        timestamps: true
    })

    module.exports = mongoose.model('Intern', internSchema);

