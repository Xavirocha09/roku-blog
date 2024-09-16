const moreBtn= document.getElementById('view-more-btn')
const heroTextContainer = document.getElementById('hero-text-container')
const textMoreContainer = document.getElementById('text-container')
const heroImg = document.getElementById(`hero-img`)

moreBtn.addEventListener('click', function(){
    if(moreBtn.innerHTML === `View More`){
    heroTextContainer.style.display = 'block'
    heroTextContainer.style.height = `auto`
    heroImg.style.display = `flex`
    heroTextContainer.style.background = `none`
    heroTextContainer.style.color = `black`
    heroTextContainer.style.marginBottom = `0px`
    textMoreContainer.style.display = 'block'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 10;
    moreBtn.innerHTML = `View Less`
    }
    else{
    heroTextContainer.style.display = 'flex'
    heroTextContainer.style.backgroundSize= `cover`
    heroImg.style.display = `none`
    heroTextContainer.style.removeProperty('height');
    heroTextContainer.style.removeProperty('background'); // Reset to original background (from CSS)
    // heroTextContainer.style.background = `url('/images/hero-img.png')`
    heroTextContainer.style.color = `white`
    heroTextContainer.style.marginBottom = `0px`
    textMoreContainer.style.display = 'none'
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 10; 
    moreBtn.innerHTML = `View More`
    }
}) ;