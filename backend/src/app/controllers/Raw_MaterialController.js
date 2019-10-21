import Raw_Material from '../models/Raw_Material';

class Raw_MaterialController {
  async index(req, res) {
    const tasks = await Raw_Material.findAll({
      order: ['id']
    });

    return res.json(tasks);
  }

  async store(req, res) {
    const { task, resource_id } = req.body;

    const taskInput = await Raw_Material.create({
      task,
      resource_id
    });

    return res.json(taskInput);
  }
}

export default new Raw_MaterialController();
