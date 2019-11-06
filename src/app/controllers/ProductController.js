import Product from '../models/Product';

class ProductController {
    async index(req, res) {
        const products = await Product.findAll();
        return res.json(products);
    }

    async store(req, res) {
        if (req.body.rating > 5 || req.body.rating < 0) {
            return res.status(401).json({
                error: 'Ratings can only go beetween 0 a 5'
            });
        }

        const { id, product, product_detail, rating } = await Product.create(
            req.body
        );
        return res.json({ id, product, product_detail, rating });
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

        if (req.body.rating > 5 || req.body.rating < 0) {
            return res.status(401).json({
                error: 'Ratings can only go beetween 0 a 5'
            });
        }
        const {
            id,
            product,
            product_detail,
            rating,
            created_at
        } = await thisProduct.update(req.body);

        return res.json({
            id,
            product,
            product_detail,
            rating,
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
