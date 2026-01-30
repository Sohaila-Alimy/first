const accesskey = "HD02RryKKOzflLbVxqlxzZot5x3roB9FJK1Bdxd_EFw";

const formElement = document.querySelector('form');
const inputData = document.getElementById('input-box');
const container = document.querySelector('.container');
const showmore  = document.getElementById('showmore-btn');

let inputdata1 = "";
let page = 1;

async function SearchImages(){
     inputdata1 = inputData.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputdata1}&client_id=${accesskey}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if(page === 1){
    container.innerHTML = "";
  }

  results.map((result) => {
    const imageContainer = document.createElement('div');
    imageContainer.classList.add('container-item');

    const image = document.createElement('img');
    image.src = result.urls.small;

    imageContainer.appendChild(image);
    container.appendChild(imageContainer);
  })

  page++;

  if(page > 1){
    showmore.style.display = 'inline';
  }



}


formElement.addEventListener('submit', (event) => {
    event.preventDefault();
    page = 1;
    SearchImages();
})


showmore.addEventListener('click' , () => {
   SearchImages();
})