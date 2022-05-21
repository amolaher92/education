const funcations = {
  /**
   * @input amol aher || amol-aher
   * @output amolAher
   */
  camelCase(str){
    retrun str.split('-').map((word,index)=>{
      return index === 0 ? word : word[0].toUpperCase() + word.slice(1);
    }).join('')
  },
  
  /**
   * @input amol
   * @output Amol
   */
  capitalize(str){
    if(!str) return '';
    str = str.toString();
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
}
