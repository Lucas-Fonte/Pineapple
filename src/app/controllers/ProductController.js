import Product from '../models/Product';

class ProductController {
    async index(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(req, res) {
        return res.json({ ok: true });
    }

    async update(req, res) {
        return res.json({ ok: true });
    }

    async delete(req, res) {
        return res.json({ ok: true });
    }
}

export default new ProductController();
