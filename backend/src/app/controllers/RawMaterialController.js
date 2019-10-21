import RawMaterial from '../models/RawMaterial';

class RawMaterialController {
  async index(req, res) {
    const raw_materials = await RawMaterial.findAll();

    return res.json(raw_materials);
  }

  async store(req, res) {
    return res.json({ ok: true });
  }
}

export default new RawMaterialController();
