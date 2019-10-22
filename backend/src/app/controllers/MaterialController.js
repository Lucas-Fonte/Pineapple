import Material from '../models/Material';

class MaterialController {
  async index(req, res) {
    const materials = await Material.findAll();

    return res.json(materials);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new MaterialController();
