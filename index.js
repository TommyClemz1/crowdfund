 const button = document.querySelector('.btn');

 button.addEventListener('click', function name() {
    // alert("Hello");
    
    const nav = document.querySelector('nav');

    

 if ( nav.style.display == 'block') {
         nav.style.display = 'none';
         button.src = './images/icon-hamburger.svg';

     }
    else{
        nav.style.display = 'block';
         button.src = './images/icon-close-menu.svg';
     }


 })
 const presentDate = new Date();
 console.log(presentDate);