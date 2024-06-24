import mongoose from "mongoose";

const doctorSchema = new mongoose. Schema({
    name:{
        type: String,
        required: true

    },
    salary:{
        type: String,
        required: true
    },
    qualificaiton:{
        type: String,
        required: true
    },
    experienceInYears:{
        type: Number,
        default: 0
    },
    worksInhospitals:[
        {
            type: mongoose. Schem.Types.ObjectId,
            ref: "hospital"
        },
    ]
    }, {timestammongoose. Model
}, {timestamps: true})


export const Doctor  = mongoose.model('Doctor', doctorSchema)
