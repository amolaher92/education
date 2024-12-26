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
  },
  
  /**
   * @input DOM event
   * @output to show element select-option value which index selected
   */
  selectChangeEventGetOptionsValue(event){
    let index,value;
    index = event.target.options.selectedIndex;
    if(index > -1){
      value = event.target.options[index].value;
    }
    return value;
  },
  
  /**
   * @input amol aher
   * @output amol-aher
   */
  createSlugForHypen(str){
    return str.toLowerCase().replace(/&/g,'and').replace(/ /g, '-').replace(/[^\w-]+/g, ''),
  },
  
  /**
   * @input ['A','B','C','D','E',A','B','C']
   * @output ['A','B','C','D','E']
   * @param Array
   * @var arr
   */
  getUniqueCharacter(arr){
    let uniqueChar = arr.filter((c,index)=>{
        return arr.indexOf(c) === index;
    });    
  },
  
  getUniqueCharacterUsingFilterAndInclude(arr){
    let uniqueChar = [];
    arr.forEach((c)=>{
      if(!uniqueChar.include(c)) uniqueChar.push(c)
    });
    return uniqueChar;
  },
  
  getUniqueCharUsingSet(arr){
    let uniqueChar = [...new Set(arr)];
    return uniqueChar;
  },
  
   /**
   * @input ['A','B','C','D','E',A','B','C']
   * @output ['A','B','C']
   * @param Array
   * @var arr
   */
  getDuplicateCharacter(arr){
    let duplicateCharacters = arr.filter((c,index)=>{
        return arr.indexOf(c) !== index;
    });
  },
  
}


const capitalizeWordFirstLetter = (string) => {
    return string
      .split(" ")
      .map((word, index) => {
        return word[0].charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
