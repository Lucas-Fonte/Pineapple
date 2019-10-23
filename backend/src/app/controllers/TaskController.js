import Task from '../models/Task';
import Resource from '../models/Resource';
import Material from '../models/Material';

class TaskController {
  async index(req, res) {
    const { id } = req.query;

    if (id) {
      const task = await Task.findByPk(id, {
        include: [
          {
            model: Resource,
            as: 'resource'
          },
          {
            model: Material,
            as: 'material'
          }
        ]
      });
      res.json(task);
    }

    const tasks = await Task.findAll({
      order: ['id'],
      include: [
        {
          model: Resource,
          as: 'resource'
        },
        {
          model: Material,
          as: 'material'
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

    const task = await Task.create({
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
    });

    return res.json(task);
  }

  //   const resource = await Resource.findOne({
  //     where: {
  //       id: resource_id
  //     }
  //   });

  //   if (!resource) {
  //     return res.status(400).json({ error: 'Recurso não encontrado' });
  //   }

  //   const taskInput = await Task.create({
  //     task_owner,
  //     product,
  //     product_detail,
  //     task_action,
  //     task_start,
  //     task_end,
  //     task_resource,
  //     task_result,
  //     task_input,
  //     task_loss,
  //     task_output,
  //     resource_id,
  //     raw_material_id
  //   });

  //   return res.json(taskInput);
  // }
}

export default new TaskController();
