// MARQUEE
gsap.to(".row1", { x:"-50%", duration:22, repeat:-1, ease:"linear" });
gsap.to(".row2", { x:"50%", duration:26, repeat:-1, ease:"linear" });
gsap.to(".row3", { x:"-50%", duration:24, repeat:-1, ease:"linear" });
gsap.to(".row4", { x:"50%", duration:28, repeat:-1, ease:"linear" });

// SHIMMER LOOP
setInterval(()=>{
  gsap.fromTo(".shimmer",
    { x:"-120%" },
    { x:"120%", duration:1.6, ease:"power2.inOut" }
  );
},5000);

// CTA FIX
var animateButton = function(e){
  e.preventDefault();

  e.target.classList.remove('animate');
  void e.target.offsetWidth; // HARD RESET
  e.target.classList.add('animate');

  setTimeout(function(){
    e.target.classList.remove('animate');
  },700);
};

var bubblyButtons = document.querySelectorAll(".bubbly-button");

bubblyButtons.forEach(btn=>{
  btn.addEventListener("click", animateButton);
});
