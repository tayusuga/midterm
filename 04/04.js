function xor(fact1,fact2){
    var result;
    result = fact1 || fact2;
    return result;
}

function xor(fact1,fact2){
    var result;
    result = !(fact1 && fact2);
    return result;
}


function xor(fact1,fact2){
    var result;
    result = (fact1 && !fact2) || (!fact1 && fact2)
    return result;
}
