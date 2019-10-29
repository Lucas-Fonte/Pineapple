import Project from '../models/Project';
import Task from '../models/Task';
import Resource from '../models/Resource';
import Material from '../models/Material';

class ProjectController {
  async index(req, res) {
    const projects = await Project.findAll();

    const projectWithTasks = await Promise.all(
      projects.map(async project => ({
        project,
        tasks: await Task.findAll({
          where: {
            task_owner: project.product_owner,
            product: project.product,
            product_detail: project.product_detail
          },
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
        })
      }))
    );
    return res.json(projectWithTasks);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new ProjectController();
