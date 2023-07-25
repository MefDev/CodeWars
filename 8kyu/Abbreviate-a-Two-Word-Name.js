function abbrevName(name){
    return name.split(" ").map((n)=>n[0][0]).join(".").toUpperCase()
 }