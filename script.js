const photos=["images/img-1.jpg","images/img-2.jpg","images/img-3.jpg","images/img-4.jpg"];
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const img = document.querySelector('img');

count =0;
const next=()=>{
    count++;

    if(count >=photos.length){
        count=0;
        img.src=photos[0];
    }
    else{
        img.src=photos[count];
    }
}

const prev=()=>{
    count--;

    if(count <0){
        count=photos.length-1;
        img.src=photos[count];
    }
    else{
        img.src=photos[count];
    }
}

nextBtn.addEventListener('click',next);
prevBtn.addEventListener('click',prev);