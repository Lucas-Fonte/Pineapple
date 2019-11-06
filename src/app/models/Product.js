import Sequelize, { Model } from 'sequelize';

class Product extends Model {
    static init(sequelize) {
        super.init(
            {
                product: Sequelize.STRING,
                product_detail: Sequelize.STRING,
                rating: Sequelize.INTEGER
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default Product;
