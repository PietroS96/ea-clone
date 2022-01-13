let leftMenu = document.getElementById('show-menu');
let circleBtn = document.getElementById('circle-btn');
let menuCloser = document.getElementById('menu-closer')
let menu = 'close'
function aside (){
    if(menu == 'close'){
        leftMenu.style.left = 0;
        menu = 'open';
        leftMenu.style.boxShadow = '50px 4px 24px 100000rem #161616d8';
        leftMenu.style.transition = '0.8s'
        document.querySelector('header').style.position = 'fixed-top'
    
    }else{
        leftMenu.style.left = '-500px';
        menu = 'close'
        leftMenu.style.boxShadow = 'none'
    }
}

circleBtn.addEventListener('click', ()=>{
    aside()
})

menuCloser.addEventListener('click', ()=>{
    aside()
})

function showMenu() {
  document.getElementById("panel-active").classList.toggle("panel-hide");
}
