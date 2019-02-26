

function recurseText(obj, keys){
    if (!obj) return 'Missing Text'
    let result = obj
    for (let index = 0; index < keys.length; index++) {
        const key = keys[index];
        result = result[key]
        if (typeof result === 'string') {
            return result
        } else if (typeof result === 'undefined') {
            return 'Missing Text'
        } else continue
    }
    return 'Unknown Text'
}

export {
    recurseText
}