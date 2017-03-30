function deepCopy(source, result) {
    if (!result) result = {};
    if (typeof source != 'object'|| source instanceof Array || source === null) return result;
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
