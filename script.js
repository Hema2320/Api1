const times = 1;

function display(){
    fetch(`https://picsum.photos/200/300?random=1`).then((response) => {   
      let item = document.createElement('div');
      item.classList.add('item');
      item.innerHTML = `<img class="hill" src="${response.url}" alt="hill" width="1300px" height="600px"/>`     
      document.body.appendChild(item);
    }) 
  }
  for (let i=0;i<times;i++){
      display()
  }
   