//   const //
const button = document.querySelector('#browse')
const scrollOn = document.querySelector('#browse')
const champInfo = document.querySelector('#champinfodisplay')

// eventlisteners //

scrollOn.addEventListener('click', function(event){
    document.body.style.overflow ='visible'
})

button.addEventListener('click', function(event) {
    window.scrollTo({
        top: 985,
        left: 100,
        behavior: 'smooth'
      });
})

champInfo.addEventListener('click', function(event){
  console.log('info');
})



/*button.addEventListener('click', () =>{
  div.classList.toggle('show');
}); */




  // functions // 
  function displayMenu() {
    const toggle = document.querySelector('#champions');
    if (toggle.style.display === 'none') {
      toggle.style.display = 'block';
    } else {
      toggle.style.display = 'none';
    }
  }

  function displayChamp() {
    const championInfo = document.querySelector('#aatroxinfo');
    if (championInfo.style.display === 'none') {
      championInfo.style.display = 'block';
    } else {
      championInfo.style.display = 'none';
    }
  }

  