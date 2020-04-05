const FONT_WIDTH = 12.0333;
const BASE_SPEED = .1;
const CONTAINER_WIDTH = 1000;


const setState = () => {
  return {
    wordsArray: [],
    gameTextContainer : document.getElementById('game-text'),
    gameText : `What's our go to market strategy? golden goose vec. Bleeding edge time vampire drink from the firehose, nor bottleneck mice and let's schedule a standup during the sprint to review our kpis yet tbrand terrorists. Please advise soonest after I ran into Helen at a restaurant, I realized she was just office pretty, but when does this sunset? . Prairie dogging let me know if you need me to crack any skulls. Shotgun approach. Nobody's fault it could have been managed better let's unpack that later today shall be a cloudy day, thanks to blue sky thinking, we can now deploy our new ui to the cloud and poop, but performance review low-hanging fruit staff engagement. One-sheet cross sabers, this is a no-brainer, synergize productive mindfulness going forward (let's not try to) boil the ocean (here/there/everywhere). Strategic high-level 30,000 ft view. First-order optimal strategies paddle on both sides, yet feature creep prethink, for tribal knowledge yet dear hiring manager:. Wiggle room. Peel the onion anti-pattern yet that jerk from finance really threw me under the bus. Race without a finish line quick win, but manage expectations but can you champion this put in in a deck for our standup today timeframe. The last person we talked to said this would be ready due diligence, yet are we in agreeance diversify kpis yet get six alpha pups in here for a focus group ensure to follow requirements when developing solutions level the playing field. Game-plan. Clear blue water. Are we in agreeance i dont care if you got some copy, why you dont use officeipsumcom or something like that ? blue sky thinking back to the drawing-board usabiltiy. Marketing computer development html roi feedback team website quarterly sales are at an all-time low but shelfware, yet that jerk from finance really threw me under the bus, and productize downselect, peel the onion. My supervisor didn't like the latest revision you gave me can you switch back to the first revision? market-facing. Bottleneck mice we want to see more charts. This proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables. Push back bottleneck mice. New economy turn the ship yet run it up the flag pole i’ve been doing some research this morning and we need to better for level the playing field, so define the underlying principles that drive decisions and strategy for your design language build on a culture of contribution and inclusion. Helicopter view feature creep i have a hard stop in an hour and half ensure to follow requirements when developing solutions or (let's not try to) boil the ocean (here/there/everywhere) so social currency. Can I just chime in on that one UI. Can we align on lunch orders gage [sic] where the industry is heading and give back to the community what we’ve learned UI. Programmatically create spaces to explore what’s next even dead cats bounce strategic fit. Productize dunder mifflin or blue money. We need to socialize the comms with the wider stakeholder community bleeding edge, so make it a priority. Eat our own dog food re-inventing the wheel do i have consent to record this meeting, quick-win, vertical integration, and high turnaround rate. Data-point golden goose. When does this sunset? . They have downloaded gmail and seems to be working for now this vendor is incompetent and come up with something buzzworthy player-coach, waste of resources. Idea shower time to open the kimono fire up your browser, nor draw a line in the sand. The horse is out of the barn draw a line in the sand, yet hard stop wheelhouse, so ladder up / ladder back to the strategy. We’re starting to formalize flexible opinions around our foundations incentivization, deploy we've bootstrapped the model even dead cats bounce this medium needs to be more dynamic. Window-licker moving the goalposts, so vertical integration window of opportunity ping me social currency but out of the loop. That ipo will be a game-changer beef up, viral engagement we need to aspirationalise our offerings. I just wanted to give you a heads-up screw the pooch. Technologically savvy customer centric, downselect nor powerPointless, so first-order optimal strategies. Streamline new economy canatics exploratory investigation data masking, or paddle on both sides, future-proof. It is all exactly as i said, but i don't like it that's mint, well done yet we need to make the new version clean and sexy. Sorry i didn't get your email move the needle canatics exploratory investigation data masking for golden goose, nor t-shaped individual deep dive or a loss a day will keep you focus. Move the needle who's responsible for the ask for this request? vertical integration this proposal is a win-win situation which will cause a stellar paradigm shift, and produce a multi-fold increase in deliverables. Quick win hammer out, so canatics exploratory investigation data masking corporate synergy. Criticality organic growth, so in an ideal world closing these latest prospects is like putting socks on an octopus, nor table the discussion , or red flag. Quantity where do we stand on the latest client ask marketing computer development html roi feedback team website. 360 degree content marketing pool. Canatics exploratory investigation data masking not enough bandwidth. Ping me let's unpack that later nor blue sky thinking, or organic growth, old boys club social currency Bob called an all-hands this afternoon. `,
    textPosition : 0,
    wordIndex: 0,
    letterIndex: 0,
    successfulWords: 0,
    time: Date.now(),
    mistakes: 0,
    totalLetters: 0,
    lastWordLetterIndex: 0,
    mistakesMap: {},
    gameOver: false,
  }
}

const resetDom = () => {
  document.getElementById('game-text').innerHTML = '';
  document.getElementById('game-text').style.color = 'rgb(255, 123, 71)';
  document.getElementById('successful-words').innerHTML = '0'
  document.getElementById('wpm').innerHTML = '0'
  document.getElementById('typing-errors').innerHTML = '0'
  document.getElementById('game-stats').innerHTML = ''
}

let state = {};

const generateGameLetters = () => {
  for(letter of state.gameText.split('')){
    const letterContainer = document.createElement("span");
    letterContainer.innerHTML = letter;
    state.gameTextContainer.appendChild(letterContainer);
  }
  state.gameTextContainer.style.right = state.gameText.length * FONT_WIDTH + "px";
}

const startGame = () => {
  state = setState();
  resetDom();
  state.wordsArray = wordsArray(state.gameText);
  generateGameLetters();
  state.gameTextContainer.style.right = -state.gameText.length*FONT_WIDTH + "px";
  document.addEventListener('keydown', handleKeyPress)
  moveText();
}

const updateWords = () => {
  const currentWord = state.wordsArray[state.wordIndex]
  if(state.letterIndex < currentWord.length - 1){
    Array.from(state.gameTextContainer.children)[state.totalLetters - 1].style.color = "rgb(0,255,0)";
    state.letterIndex++;
  } else {
    //Word finished. Need to remove letters, update textposition, update indices, add on a space to type before new word, 
    //update score stats, and flash green. A lot going on here
    const lettersToRemove = Array.from(state.gameTextContainer.children).slice(state.lastWordLetterIndex,state.totalLetters);
    if(state.wordIndex === state.wordsArray.length - 1){
      endGame();
    } else {
    state.lastWordLetterIndex += state.letterIndex;
    lettersToRemove.forEach(letter => letter.style.visibility = 'hidden')
    state.textPosition -= FONT_WIDTH * (state.letterIndex + 1);
    state.wordIndex ++;
    state.letterIndex = 0;
    state.wordsArray[state.wordIndex].unshift(' ');
    state.successfulWords += 1;
    document.getElementById('successful-words').innerHTML = state.successfulWords;
    document.getElementById('wpm').innerHTML = Math.round(state.successfulWords / ((Date.now() - state.time) / 60000));
    successFlash();
    }
  }
}

const endGame = () => {
  printGameStats();
  state.gameOver = true;
}

const handleKeyPress = event => {
  //Stopping focus changes on firefox apostrophe click
  event.preventDefault();
  const currentLetter = state.wordsArray[state.wordIndex][state.letterIndex];
  if(event.key === currentLetter.toLowerCase()){
    state.totalLetters += 1;
    updateWords();
  }
  else {
    state.mistakes += 1;
    state.mistakesMap[currentLetter] = state.mistakesMap[currentLetter] ? state.mistakesMap[currentLetter] + 1 : 1; 
    document.getElementById('typing-errors').innerHTML = state.mistakes
  }
}

const successFlash = () => {
  const borderArray = Array.from(document.getElementsByClassName('successFlash'));
  borderArray.forEach((el) => {
    el.style.animation = 'successFlash .3s'
  });
  setTimeout(() => {
    borderArray.forEach(el => {
      el.style.animation = ''
    })
  }, 300);
}

const moveText = () => {
  if(state.textPosition > CONTAINER_WIDTH){
    document.getElementById('game-text').style.color = 'red';
    endGame();
    return;
  }
  if(state.gameOver){
    return
  }
  const shiftAmount = BASE_SPEED * speedMutliplier(state.textPosition);
  state.textPosition += shiftAmount;
  const rightShift = state.gameTextContainer.style.right;
  const rightShiftNumeric = Number(rightShift.slice(0, rightShift.length - 2));
  state.gameTextContainer.style.right = (rightShiftNumeric + shiftAmount) + "px";
  requestAnimationFrame(moveText)
}

const printGameStats = () => {
  const container = document.getElementById('game-stats');
  container.append(document.createElement('h2').innerHTML = 'Missed Letter Stats')
  const stats = Object.entries(state.mistakesMap).sort((a,b) => {
    return b[1] - a[1];
  })
  for (stat of stats){
    const letterStatEl = document.createElement('li')
    letterStatEl.classList += 'game-stat'
    letterStatEl.innerHTML = `${stat[0]} : ${stat[1]}`
    container.append(letterStatEl)
  }
}
