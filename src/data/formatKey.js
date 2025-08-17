function formatKey(key){
    return key
    .replace(/([a-z])([A-Z])/g,'$1,$2')
    .replace(/^./,str=>
    str.toUpperCase());
}