class UtilError {

    async badRequest(res, menssage) {
        return res.status(400).json({
            'message': 'Bad Request',
            'details': menssage
        });
    }

    async notFound(res, menssage) {
        return res.status(404).json({
            'message': 'Not Found',
            'details': menssage
        });
    }

    async internalServer(res, menssage) {
        return res.status(500).json({
            'message': 'Not Found',
            'details': menssage
        });
    }
}

module.exports = new UtilError();