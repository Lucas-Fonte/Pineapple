import Resource from '../models/Resource';

class ResourceController {
  async index(req, res) {
    const { id } = req.query;

    if (id) {
      const resource = await Resource.findByPk(id);
      res.json(resource);
    }

    const resources = await Resource.findAll({
      order: ['id']
    });

    return res.json(resources);
  }

  async store(req, res) {
    const {
      resource_field,
      resource_tool,
      resource_cost,
      task_able_resource
    } = req.body;

    const resource = await Resource.create({
      resource_field,
      resource_tool,
      resource_cost,
      task_able_resource
    });

    return res.json(resource);
  }
}

export default new ResourceController();
