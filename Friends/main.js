let friendsImages=[
   "Image Links"
];

const images=document.getElementsByTagName("img")
for(let i=0;i<images.length;i++){
    const randomImg=Math.floor(Math.random() * friendsImages.length);
    images[i].src=friendsImages[randomImg];
}
const headers=document.getElementsByTagName("h3");
for (let index = 0; index < images.length; index++) {
    headers[i].innerText="Friends For Life"
    
}
