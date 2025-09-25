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
 function showOnlyOneCrd(cardID){
    alllinks.forEach(link=>{
        const currentcard = link.querySelector('.course-card').id;
        if(currenrcard && currentcard.id==cardId){
            link.style.display='block';}
            else{
                link.style.display='none';
            }
         
    });
 }
 alllinks.forEach(link=>{
    link.addEventListener('click',(event)=>{
        event.preventDefault();
        const cardId=link.querySelector('.course-card').id;
        showOnlyOneCArd(cardId);
    });
 });
 function showAllCards(){
    alllinks.forEach(link=>{
        link.style.display='block';
    });
}

