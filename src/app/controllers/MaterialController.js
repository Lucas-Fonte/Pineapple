import Material from '../models/Material';

class MaterialController {
  async index(req, res) {
    const { id } = req.query;

    if (id) {
      const material = await Material.findByPk(id);
      res.json(material);
    }

    const materials = await Material.findAll();

    return res.json(materials);
  }

  async store(req, res) {
    return res.json({ ok: 'is this true?' });
  }
}

export default new MaterialController();
