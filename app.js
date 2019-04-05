function imageGallery(){
   const highlight = document.querySelector('.gallery-highlight');
   const previews = document.querySelectorAll('.tea-preview img');
   
   previews.forEach(preview => 
     preview.addEventListener('click', function (){
       const smallSrc = preview.src;
       //const smallSrc = this.src;   the same thing
       const bigSrc = smallSrc.replace ("small", "big");
       highlight.src = bigSrc;
       previews.forEach(preview => preview.classList.remove('tea-active'));
       preview.classList.add('tea-active');
     })
)};


imageGallery();