class Util {

    ocultarInformacoes(schema) {
        schema.set('toJSON', {
            transform: function (doc, ret, options) {
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
            }
        }); 
    }
}

module.exports = new Util();