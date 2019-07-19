var personas = ["mara", "julian"];

function listasIguales(unArray, otroArray) {
    if (unArray.length != otroArray.length)
        return false;
    for (var i = 0; i < unArray.length; i++) {
        if (unArray[i] instanceof Array && otroArray[i] instanceof Array) {
            if (!arraysIguales(unArray[i], otroArray[i]))
              return false;
        }           
        else if (unArray[i] != otroArray[i])
          return false;   
    }       
    return true;
}