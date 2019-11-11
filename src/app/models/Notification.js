import Sequelize, { Model } from 'sequelize';

class Notification extends Model {
    static init(sequelize) {
        super.init(
            {
                notification: Sequelize.TEXT,
                seen: Sequelize.BOOLEAN
            },
            {
                sequelize
            }
        );
        return this;
    }
}

export default Notification;
