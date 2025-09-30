esMayuscula=function(i){
    let esMayuscula=i.charCodeAt(0);
    if(esMayuscula>=65 && esMayuscula<=90){
        return true;
    }else{
        return false;
    }
}