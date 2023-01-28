function wrapPeriods(text){
    return text.replace(/\.(?=[^\s])/g, ".\n \n");
  }
  