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
    alllinks.forEach(link=>{
        const cardId = link.querySelector('.course-card').id;
        if(card.Id==idshown){
            link.classList.add('active');}
            else{
                link.classList.remove('active');
            }
         
    });
 }
 function showAllCards(){
    alllinks.forEach(link=>{
        link.classList.add('active');
    });
}

