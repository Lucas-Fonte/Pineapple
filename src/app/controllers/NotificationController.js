import Notification from '../models/Notification';

class NotificationController {
    async index(req, res) {
        const notifications = await Notification.findAll();
        return res.json(notifications);
    }

    async store(req, res) {
        const { notification, seen } = await Notification.create(req.body);
        return res.json({ notification, seen });
    }
}

export default new NotificationController();
