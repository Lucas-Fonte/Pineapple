import Resource from '../models/Resource';

class ResourceController {
  async index(req, res) {
    const resources = await Resource.findAll({
      order: ['id']
    });

    return res.json(resources);
  }

  async store(req, res) {
    const { resource } = req.body;

    const resourceInput = await Resource.create({
      resource
    });

    return res.json(resourceInput);
  }
}

export default new ResourceController();
