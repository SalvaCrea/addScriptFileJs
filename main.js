function addScript(pathScript){
    var s = document.createElement("script") ;
    s.type = "text/JavaScript" ;
    s.src = pathScript;
    s.async = false ;
    // puis on l’insère dans la balise <head> en haut de document
    var head = document.head || document.getElementsByTagName("head")[0] ;
    head.appendChild(s);
}
