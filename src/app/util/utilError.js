class UtilError {

    badRequest(res, menssage) {
        return res.status(400).json({
            'message': 'Bad Request',
            'details': menssage
        });
    }

    notFound(res, menssage) {
        return res.status(404).json({
            'message': 'Not Found',
            'details': menssage
        });
    }

    internalServer(res, menssage) {
        return res.status(500).json({
            'message': 'Not Found',
            'details': menssage
        });
    }
}

module.exports = new UtilError();