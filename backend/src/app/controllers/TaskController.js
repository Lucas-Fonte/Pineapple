import Task from '../models/Task';
import Resource from '../models/Resource';
import Raw_Material from '../models/Raw_Material';

class TaskController {
  async index(req, res) {
    const tasks = await Task.findAll({
      order: ['id'],
      include: [
        {
          model: Resource,
          as: 'resource'
        },
        {
          model: Raw_Material,
          as: 'raw_material'
        }
      ]
    });

    return res.json(tasks);
  }

  async store(req, res) {
    const {
      task_owner,
      product,
      product_detail,
      resource_id,
      task_action,
      task_start,
      task_end,
      task_resource,
      task_result,
      task_input,
      task_loss,
      task_output,
      raw_material_id
    } = req.body;

    const resource = await Resource.findOne({
      where: {
        id: resource_id
      }
    });

    if (!resource) {
      return res.status(400).json({ error: 'Recurso não encontrado' });
    }

    const taskInput = await Task.create({
      task_owner,
      product,
      product_detail,
      task_action,
      task_start,
      task_end,
      task_resource,
      task_result,
      task_input,
      task_loss,
      task_output,
      resource_id,
      raw_material_id
    });

    return res.json(taskInput);
  }
}

export default new TaskController();
