const button = document.querySelector("#btn");
const par = document.querySelector("#par");

const quotes = [ "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
" The way to get started is to quit talking and begin doing. -Walt Disney",
" If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt.",
"Life is what happens when you're busy making other plans. -John Lennon.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
" Whoever is happy will make others happy too. -Anne Frank",
" Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
"Only a life lived for others is a life worthwhile. -Albert Einstein"]

button.addEventListener("click",function(){

    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
})