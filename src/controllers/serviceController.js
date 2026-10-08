import { Service } from "../models/service.js";

class ServiceController {
    static async createService(req, res) {
        try {
            const { name, price, duration } = req.body;
            const service = new Service({ name, price, duration });
            await service.save();
            res.status(201).json(service);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao criar o serviço' });
        }
    }

    static async getAllServices(req, res) {
        try {
            const services = await Service.find();
            res.status(200).json(services);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar os serviços' });
        }
    }
}

export default ServiceController;