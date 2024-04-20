const title = document.querySelector('body')
const subtitle = document.querySelector('h1')
let random = Math.floor(Math.random()* 100)
title.style.background = 'black'
title.style.display = 'flex'
title.style.justifyContent = 'center'
title.style.marginTop = '250px'
title.style.fontSize = '50px'
title.style.fontFamily = 'nosifer'




subtitle.style.color = 'red';

subtitle.innerHTML = random;


