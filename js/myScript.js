function changeImg() {
    const mainImage = document.getElementById("img");
    const img2 = 'http://127.0.0.1:5500/imgs/cat1.jpg';
    const img1 = 'http://127.0.0.1:5500/imgs/cat2.jpg';

    if (mainImage.src === img1) {
        mainImage.src = img2;
        console.log(img2); 
    } 
    
    else {
        mainImage.src = img1;
        console.log(img1);
    }
}