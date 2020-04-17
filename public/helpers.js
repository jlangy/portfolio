const wordsArray = text => text.split(' ').map(word => word.split(''));

const speedMutliplier = textPosition => {
  if(textPosition < CONTAINER_WIDTH / 4){
    return 6
  }
  if(textPosition < CONTAINER_WIDTH / 1.33){
    return 4
  }
  else{
    return 2
  }
}