const mapObject = (object, callback) => {
    return Object.keys(object || {}).map(key => {return callback(key, object[key]);});
};

export default mapObject;