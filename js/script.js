let pagers = document.querySelectorAll('.testimonials .pager a');
let testimonialsLists = document.querySelectorAll('.testimonials_list li');
let paginationUp = document.querySelector('.pagination .up');
let paginationDown = document.querySelector('.pagination .down');

/*
pagers를 클릭하면 할일
   모든 a에서 active를 제거하고, 클릭한 그 요소에 active 추가


for(let i = 0; i < pagers.length; i++){
  pagers[i].addEventListener('click',()=>{
    //모든 a에서 active 제거
    //pagers[i] 클래스명 추가
  })
}
대상.forEach(function(item,idx,all){
  item.addEventListener('click',()=>{});
})
*/
pagers.forEach((item,idx)=>{
  item.addEventListener('click',()=>{
     //모든 a에서 active 제거, 클릭한 그요소만 active 추가
  });
});