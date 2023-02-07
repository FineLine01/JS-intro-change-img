function changeImg() {
    const mainImage = document.getElementById("img");
    const img1 = 'imgs/cat2.jpg';
    const img2 = 'imgs/cat1.jpg';

    if (mainImage.src === img1) {
        mainImage.src = img2;
        console.log(img2); 
    } 
    
    else {
        mainImage.src = img1;
        console.log(img1);
    }
}