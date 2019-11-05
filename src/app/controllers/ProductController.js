import Product from '../models/Product';

class ProductController {
    async index(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(req, res) {
        const { id, product, product_detail } = await Product.create(req.body);
        return res.json({ id, product, product_detail });
    }

    async update(req, res) {
        const thisProduct = await Product.findOne({
            where: { id: req.query.id }
        });

        if (!thisProduct) {
            return res.status(401).json({
                error: 'Product does not exist'
            });
        }
        const {
            id,
            product,
            product_detail,
            created_at
        } = await thisProduct.update(req.body);

        return res.json({
            id,
            product,
            product_detail,
            created_at
        });
    }

    async delete(req, res) {
        const product = await Product.findByPk(req.query.id);

        if (!product) {
            return res.status(401).json({
                error: 'Product does not exist'
            });
        }
        await product.destroy();
        return res.json({ product });
    }
}

export default new ProductController();
