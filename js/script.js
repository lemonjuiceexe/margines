// Fill the year in the footer
const yearElement = document.querySelector('.current-year');
yearElement.innerText = new Date().getFullYear();

// Animate on scroll
function observerCallback(entries){
    entries.forEach(entry => {
        console.log(entry.target);
        if(entry.isIntersecting){
            entry.target.classList.add("scrolled-into");
            return;
        }
        entry.target.classList.remove("scrolled-into");
    });
}
const observerLazy = new IntersectionObserver(observerCallback, {
    threshold: 0.7
});
const observerQuick = new IntersectionObserver(observerCallback, {
    threshold: 0
});

observerLazy.observe(document.querySelector(".main-header"));
observerLazy.observe(document.querySelector(".about-content"));
observerLazy.observe(document.querySelector(".for-writers-header"));
document.querySelectorAll(".common-mistakes .rule").forEach(el => observerLazy.observe(el));
document.querySelectorAll("section").forEach(el => observerQuick.observe(el));