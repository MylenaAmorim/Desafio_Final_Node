class Util {
    isDateBirthValid(data) {
        let hoje = new Date();
        let nascimento = new Date(data);

        let ano = hoje.getFullYear() - nascimento.getFullYear();

        let mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            ano--;
        }
        if (ano >= 18) {
           return true;
        } else {
           return false;
        }
    }

    formatDatePtToEn(data) {
        let dia = data.split("/")[0];
        let mes = data.split("/")[1];
        let ano = data.split("/")[2];

        return ano + '-' + ("0" + mes).slice(-2) + '-' + ("0" + dia).slice(-2);
    }

    async hideInfos(schema) {
        schema.set('toJSON', {
            transform: function (doc, ret, options) {
                if (doc.data_nascimento) ret.data_nascimento = doc.data_nascimento.split(" ")[0].split("-").reverse().join('/');
                delete ret.__v;
                delete ret.createdAt;
                delete ret.updatedAt;
                return ret;
            }
        });
    }

    formatCpfToView(text) {
        const badchars = /[^\d]/g
        const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/
        const cpf = new String(text).replace(badchars, "");
        return cpf.replace(mask, "$1.$2.$3-$4");
    }

    isValidCPF(cpf) {
        // Validar se é String
        if (typeof cpf !== 'string') return false

        // Tirar formatação
        cpf = cpf.replace(/[^\d]+/g, '')

        // Validar se tem tamanho 11 ou se é uma sequência de digitos repetidos
        if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false

        // String para Array
        cpf = cpf.split('')

        const validator = cpf
            // Pegar os últimos 2 digitos de validação
            .filter((digit, index, array) => index >= array.length - 2 && digit)
            // Transformar digitos em números
            .map(el => +el)

        const toValidate = pop => cpf
            // Pegar Array de items para validar
            .filter((digit, index, array) => index < array.length - pop && digit)
            // Transformar digitos em números
            .map(el => +el)

        const rest = (count, pop) => (toValidate(pop)
            // Calcular Soma dos digitos e multiplicar por 10
            .reduce((soma, el, i) => soma + el * (count - i), 0) * 10)
            // Pegar o resto por 11
            % 11
            // transformar de 10 para 0
            % 10

        return !(rest(10, 2) !== validator[0] || rest(11, 1) !== validator[1])
    }
}

module.exports = new Util();