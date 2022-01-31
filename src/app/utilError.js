class UtilError {

    badRequest400(res, menssage) {
        return res.status(400).json({
            'message': 'Bad Request',
            'details': [{ 'message': menssage }]
        });
    }

    notFound404(res, menssage) {
        return res.status(404).json({
            'message': 'Not Found',
            'details': [{ 'message': menssage }]
        });
    }
}

module.exports = new UtilError();