let topImgBtn = document.querySelector(".top-img");
let bottomImgBtn = document.querySelector(".bottom-img");
let btn = document.querySelector(".add");
let myInput = document.querySelector(".input");
let addList = document.querySelector(".add-list");
let list = document.querySelector(".lists");
let listOne = document.querySelectorAll("li");
let xbtn = document.querySelector(".x-btn");
let yellowDiv = document.querySelector('.yellow');
let container = document.querySelector('.todo-container');
let xbtn1 = document.querySelector('.x-btn-1');


xbtn1.addEventListener('click',(e) =>{
    if(myInput.value===''){
        console.log('hello')
    }
    else{
        myInput.value=''
    }
})
list.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove()
  }
});

btn.addEventListener("click", () => {
  if (myInput.value === "") {
    alert("Deyer daxil et");
  } else {
    list.style.display = "block";
    addList.style.display = "block";
    let value = myInput.value;
    list.innerHTML += `<li>${value} <button class="x-btn">X</button></li>`;
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "space-evenly";
    yellowDiv.style.width = '100%';
    container.style.width = '470px';
    myInput.style.width = '410px';
    list.style.fontSize = '20px';
    addList.style.borderRadius = '5px';
    addList.style.borderRadius = 'red';
    xbtn1.style.display = 'none';
    myInput.value = '';
    if (value.length > 40) {
      list.innerHTML += `<li>${value} <button class="x-btn">X</button></li>`;
      list.style.width = "40%";
    }
  }
});

if (
  bottomImgBtn.addEventListener("click", () => {
    topImgBtn.style.display = "block";
    bottomImgBtn.style.display = "none";
    let arr = [];
  const data = [...list.children];
  data.forEach(item =>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  list.innerHTML = '';
  arr.forEach(item =>{
    let li = `<li>${item}</li>`;
    list.innerHTML += li;
  })
  })
) {
}
if (
  topImgBtn.addEventListener("click", () => {
    bottomImgBtn.style.display = "block";
    topImgBtn.style.display = "none";
    let arr = [];
    const data = [...list.children];
    data.forEach(item =>{
      arr.push(item.innerHTML);
    })
    arr.sort();
    arr.reverse();
    list.innerHTML = '';
    arr.forEach(item =>{
      let li = `<li>${item}</li>`;
      list.innerHTML += li;
    })
  })
) {
}
