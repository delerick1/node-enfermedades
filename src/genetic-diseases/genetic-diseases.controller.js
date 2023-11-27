
const findAll = (req, res ) =>{ 
    const{ requestTime } = req;
    return res.status(200).json({
    message: ' method get - finAll',
    requestTime
})
}

const create = (req, res ) =>{ 
    const{ requestTime } = req;

    const disease = req.body;
    return res.status(201).json({
    message: ' method post - create',
    data: diseases,
    requestTime
})
}

const foundOne = (req, res ) =>{ 
    const{ requestTime } = req;

    const disease = req.params;
    return res.status(200).json({
    message:'method - get- foundone',
    id: req.params.id,
    requestTime
})
}

const update = (req, res ) =>{ 
    const{ requestTime } = req;

    const {id} = req.params;
    return res.status(200).json({
    message:'method - patch- update',
    id,
    requestTime
})
}
const deleteGeneric = (req, res ) =>{ 
    const{ requestTime } = req;

    const {id} = req.params;
    return res.status(200).json({
    message:'method - delete- delete',
    id,
    requestTime
})
}
module.exports = {
    foundOne,
    create,
    update,
    deleteGeneric,
    findAll

};
