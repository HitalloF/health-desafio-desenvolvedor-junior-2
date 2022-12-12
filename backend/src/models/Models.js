const { Model, DataTypes} = require('sequelize');

class animais extends Model {
    static init(sequelize){
        super.init({
            name:DataTypes.STRING,
            idade:DataTypes.INTEGER,
            tipo:DataTypes.STRING,
            raca:DataTypes.STRING,
            dono_nome:DataTypes.STRING,
            dono_telefone:DataTypes.BIGINT,
        },{
            sequelize
        })
    }
}
module.exports = animais