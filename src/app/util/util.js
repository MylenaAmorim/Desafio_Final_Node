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
        if (typeof cpf !== 'string' || cpf.length !== 14) return false

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


    isValidCnpj(value) {
        if (!value) return false
      
        // Aceita receber o valor como string, número ou array com todos os dígitos
        const isString = typeof value === 'string'
        const validTypes = isString || Number.isInteger(value) || Array.isArray(value)
      
        // Elimina valor em formato inválido
        if (!validTypes) return false
      
        // Filtro inicial para entradas do tipo string
        if (isString) {
          // Limita ao máximo de 18 caracteres, para CNPJ formatado
          if (value.length > 18) return false
      
          // Teste Regex para veificar se é uma string apenas dígitos válida
          const digitsOnly = /^\d{14}$/.test(value)
          // Teste Regex para verificar se é uma string formatada válida
          const validFormat = /^\d{2}.\d{3}.\d{3}\/\d{4}-\d{2}$/.test(value)
      
          // Se o formato é válido, usa um truque para seguir o fluxo da validação
          if (digitsOnly || validFormat) true
          // Se não, retorna inválido
          else return false
        }
      
        // Guarda um array com todos os dígitos do valor
        const match = value.toString().match(/\d/g)
        const numbers = Array.isArray(match) ? match.map(Number) : []
      
        // Valida a quantidade de dígitos
        if (numbers.length !== 14) return false
        
        // Elimina inválidos com todos os dígitos iguais
        const items = [...new Set(numbers)]
        if (items.length === 1) return false
      
        // Cálculo validador
        const calc = (x) => {
          const slice = numbers.slice(0, x)
          let factor = x - 7
          let sum = 0
      
          for (let i = x; i >= 1; i--) {
            const n = slice[x - i]
            sum += n * factor--
            if (factor < 2) factor = 9
          }
      
          const result = 11 - (sum % 11)
      
          return result > 9 ? 0 : result
        }
      
        // Separa os 2 últimos dígitos de verificadores
        const digits = numbers.slice(12)
        
        // Valida 1o. dígito verificador
        const digit0 = calc(12)
        if (digit0 !== digits[0]) return false
      
        // Valida 2o. dígito verificador
        const digit1 = calc(13)
        return digit1 === digits[1]
      }
}

module.exports = new Util();