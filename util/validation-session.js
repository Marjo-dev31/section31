
function getSessionErrorData(req, defaultValues) {
    let sessionInputData = req.session.inputData;

if (!sessionInputData) {
    sessionInputData = {
    hasError: false,   
    ...defaultValues,
    };
};

req.session.inputData = null;
return sessionInputData;
};


function flashErrorToSession (req, data, action) {
    req.session.inputData = {
      hasError: true,
      ...data
    };

    req.session.save(action); /*save action = enregistre l action (save session) avant le redirect*/
};

module.exports = {
    getSessionErrorData: getSessionErrorData,
    flashErrorToSession: flashErrorToSession,
};