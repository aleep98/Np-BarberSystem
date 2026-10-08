import mongoose from 'mongoose';


const serviceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true }
})

const Service = mongoose.model('Service', serviceSchema);

export { Service, serviceSchema };