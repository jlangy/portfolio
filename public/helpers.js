const wordsArray = text => text.split(' ').map(word => word.split(''));

const speedMutliplier = textPosition => {
  if(textPosition < CONTAINER_WIDTH*0.1){
    return 5.5
  }
  if(textPosition < CONTAINER_WIDTH*0.2){
    return 5
  }
  if(textPosition < CONTAINER_WIDTH*0.3){
    return 4.5
  }
  if(textPosition < CONTAINER_WIDTH*0.4){
    return 4
  }
  if(textPosition < CONTAINER_WIDTH*0.5){
    return 3.5
  }
  if(textPosition < CONTAINER_WIDTH*0.6){
    return 3
  }
  if(textPosition < CONTAINER_WIDTH*0.7){
    return 2.5
  }
  if(textPosition < CONTAINER_WIDTH*0.8){
    return 2
  }
  if(textPosition < CONTAINER_WIDTH*0.9){
    return 1.5
  }
  return 1;
}