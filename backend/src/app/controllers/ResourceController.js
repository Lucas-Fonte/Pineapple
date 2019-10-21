import Resource from '../models/Resource';

class ResourceController {
  async index(req, res) {
    const resources = await Resource.findAll({
      order: ['id']
    });

    return res.json(resources);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new ResourceController();
