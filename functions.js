function wrapPeriods(text){
    console.log(text.replace(/\.(?=[^\s])/g, ".\n \n"));
}
  