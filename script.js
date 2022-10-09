let menuButton=document.querySelector('#menuButton');
menuButton.addEventListener('click',()=>{
let menu=document.querySelector('.header ul');
    let btn=document.querySelector('.header button');
        if(btn.innerText==="CLOSE"){
                menu.style.display="none";
                btn.innerText="MENU";
            
        }
        else if(btn.innerText==="MENU"){
                menu.style.display="block";
                btn.innerText="CLOSE";
            
        }
});
 	
 

let leftBtn=document.querySelector('#left-btn');
let rightBtn=document.querySelector('#right-btn');
let images=document.querySelectorAll('.slider-images img');
let countSliders=0;

leftBtn.addEventListener('click',()=>{
 displayNone();
    countSliders--;
    if(countSliders<0){
        countSliders=2;
    }

    images[countSliders].style.display="block";
    console.log(images);

});

rightBtn.addEventListener('click',()=>{
   displayNone();
    countSliders++;
    if(countSliders>2){
        countSliders=0;
    }

    images[countSliders].style.display="block";
    
});

const displayNone=()=>{
     images.forEach((img)=>{
        img.style.display='none';
    });
}
let allButtons=document.querySelectorAll('.portfolio-categories button');
 for(let i=0;i<allButtons.length;i++){
    allButtons[i].addEventListener('click',()=>{
    allButtons[i].getAttribute('data-category');
    let psi=document.querySelectorAll('.portfolio-single-item')

    psi.forEach((item)=>{
        item.style.display="none";
    })

    if(allButtons[i].getAttribute('data-category')==="sve"){
          psi.forEach((item)=>{
            item.style.display='block';
            })
    }
    psi.forEach((item)=>{
     if(item.getAttribute('data-category').includes(allButtons[i]
        .getAttribute('data-category'))){
        item.style.display="block"
     }
     })


});

 }
 
    //Prvi modal
    let opetModalButton=document.querySelector('#openModal');
    let closeModalButton=document.querySelector('#closeModal');

    opetModalButton.addEventListener('click',()=>{
        let popup=document.querySelector('.popup-modal')
    let overlay=document.querySelector('.overlay');

    popup.style.display="block";
     overlay.style.display="block";
    });

    closeModalButton.addEventListener('click',()=>{
         let popup=document.querySelector('.popup-modal')
    let overlay=document.querySelector('.overlay');

    popup.style.display="none";
     overlay.style.display="none";
    });

        //drugi modal
     let openModalButton2=document.querySelector('#openModal2');
    let closeModalButton2=document.querySelector('#closeModal2');

    openModalButton2.addEventListener('click',()=>{
        let popup2=document.querySelector('.popup-modal2')
    let overlay=document.querySelector('.overlay');

    popup2.style.display="block";
     overlay.style.display="block";
    });

    closeModalButton2.addEventListener('click',()=>{
         let popup3=document.querySelector('.popup-modal2')
    let overlay=document.querySelector('.overlay');

    popup3.style.display="none";
     overlay.style.display="none";
    });
