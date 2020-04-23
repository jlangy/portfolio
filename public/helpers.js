const wordsArray = text => text.split(' ').map(word => word.split(''));

const speedMutliplier = textPosition => {
  if(textPosition < CONTAINER_WIDTH*0.1){
    return 7
  }
  if(textPosition < CONTAINER_WIDTH*0.2){
    return 6
  }
  if(textPosition < CONTAINER_WIDTH*0.3){
    return 5
  }
  if(textPosition < CONTAINER_WIDTH*0.6){
    return 4
  }
  if(textPosition < CONTAINER_WIDTH*0.7){
    return 3
  }
  return 2;
}