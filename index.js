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
let changeBtn = document.querySelector('.success')
let okeybtn = document.querySelector('.okey1')
let deletebtn = document.querySelector('.all')



list.style.backgroundColor = 'white';
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
    changeBtn.style.display = 'block';
    okeybtn.addEventListener('click',() =>{
      changeBtn.style.display = 'none';
      e.target.parentElement.remove();
      container.style.width = '410px';
      myInput.style.width = '78%';
      xbtn1.style.width ='12%';
      changeBtn.style.width = '90%';
      addList.style.border = 'none';
    })
  }
 })

btn.addEventListener("click", (e) =>{
  if (myInput.value === "") {
    alert("Deyer daxil et");
  } else {
    list.style.display = "block";
    addList.style.display = "block";
    list.style.border = '2px solid gray';
    list.style.borderRadius = '10px';
    let value = myInput.value;
    list.innerHTML += `<li style="padding-top:8px; width:80%;">${value} <button class="x-btn">X</button></li>`;
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "space-evenly";
    // yellowDiv.style.width = '100%';
    // container.style.width = '480px';
    // myInput.style.width = '78%';
    xbtn1.style.width ='12%';
    changeBtn.style.width = '95%';
    myInput.value = '';
    if (value.length > 20) {
      list.style.width = "95%";
    }
  }
});

  bottomImgBtn.addEventListener("click", () => {
    let arr = [];
  const data = [...list?.children];
    // data.shift();
  data.forEach(item =>{
    arr.push(item.innerHTML);
  })
  arr.sort();
  list.innerHTML = '';
  arr.forEach(item =>{
    let li = `<li style="margin-bottom:0px;">${item}</li>`;
    list.innerHTML += li;
  })
  })
 


  topImgBtn.addEventListener("click", () => {
    let arr = [];
    const data = [...list.children];
    data.forEach(item =>{
      arr.push(item.innerHTML);
    })
    arr.sort();
    arr.reverse();
    list.innerHTML = '';
    arr.forEach(item =>{
      let li = `<li style="margin-bottom:0px;" >${item}</li>`;
      list.innerHTML += li;
        })
  });
  topImgBtn.addEventListener("click", () => {
    bottomImgBtn.style.display = "block";
    topImgBtn.style.display = "none";
    let arr = [];
    list.push(arr);
    arr.forEach((item) => {
        item.sort();
        item.reverse();
    });
});
if (
  bottomImgBtn.addEventListener("click", () => {
      topImgBtn.style.display = "block";
      bottomImgBtn.style.display = "none";
  })
) {
}
 

