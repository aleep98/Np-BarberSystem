import mongoose from 'mongoose';


const serviceSchema = new mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }
})

export const Service = mongoose.model('Service', serviceSchema);