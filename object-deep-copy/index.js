function deepCopy(source, result) {
    if (!result) result = {};
    for(var key in source) {
        if (!source.hasOwnProperty(key)) continue;
        if (source[key] !== null && typeof source[key] == 'object') {
            result[key] = source[key] instanceof Array ? [] : {};
            deepCopy(source[key], result[key]);
        } else {
            result[key] = source[key];
        }
    }
    return result;
}
