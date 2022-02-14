
const axios = require('axios');
const res = require('express/lib/response');
const { Promise } = require('mongoose');
class UtilError {

    async teste(endereco) {
        // enderecos.forEach(endereco => {
        // let c = new Promise(async function (resolve, reject) {
        await axios.get(`https://viacep.com.br/ws/${endereco.cep}/json`)
            .then(function (response) {
                let enderecoNovo = { ...endereco, localidade: response.data.localidade, logradouro: response.data.logradouro, bairro: response.data.bairro, uf: response.data.uf }
                console.log('aqui', enderecoNovo)
                //   tt.push(enderecoNovo)
                return 'tt'
            })
        // }
        // );
        // })
    }

    async badRequest(res, error) {
        let result = [];

        error.forEach(detail => {
            result.push({
                'description': detail.path[0],
                'name': detail.message
            })
        });

        return res.status(400).send(result);
    }

    notFound(res, error) {
        let result = {
            'description': "Not Found",
            'name': error
        };

        return res.status(404).send(result);
    }

    internalServer(res, error) {
        let result = {
            'description': "Internal Server",
            'name': error
        };

        return res.status(500).send(result);
    }

    error(description, name) {
        let result = {
            'description': description,
            'name': name
        }

        return result;
    }
}

module.exports = new UtilError();