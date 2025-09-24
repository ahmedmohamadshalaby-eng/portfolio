const alllinks= document.querySelectorAll('.course');
const allcoursecards= document.querySelectorAll('.course-card');
const resetbutton= document.getElementById('. reset-button');
alllinks.forEach(link=> {
    link.addEventListener('click',(event)=>{
        const cardid=link.querySelector('.course-card').id;
        showOnlyOneCrd(cardid);
    });
 
link.addEventListener('dbclick',()=>{
    window.location.href=link.href;
});
});


resetbutton.addEventListener('click',()=>{
    showAllCards();
});
 function showOnlyOneCrd(idshown){
    allcoursecards.forEach(card=>{
        if(card.id==idshown){
            card.parentElement.style.display='block';
            card.classList.add('active');}
            else{
                card.parentElement.style.display='none';
            }
         
    });
 }
 function showAllCards(){
    allcoursecards.forEach(card=>{
        card.parentElement.style.display='block';
        card.classList.remove('active');
    });
}

