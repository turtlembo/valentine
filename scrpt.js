const noButton = document.getElementById('no');
const noButton2 = document.getElementById('no2');
const yesButton = document.getElementById('yes');
const yesButton2 = document.getElementById('yes2');
const str1 = document.getElementById('str1');
const str2 = document.getElementById('str2');
const str3 = document.getElementById('str3');
  
noButton.addEventListener('click', ()=>{
    alert("Нажми на другую кнопку пж")
})
yesButton.addEventListener('click', ()=>{
    str1.classList.add("hidden");
    str2.classList.remove("hidden")
})
yesButton2.addEventListener('click', ()=>{
    str2.classList.add("hidden");
    str3.classList.remove("hidden")
})

noButton2.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Случайная позиция
    const randomLeft = Math.floor(Math.random() * 70) + 10; // от 10% до 80%
    const randomTop = Math.floor(Math.random() * 200) - 50; // от -50px до 150px
    
    noButton2.style.left = randomLeft + '%';
    noButton2.style.top = randomTop + 'px';
  });