const btn = document.querySelector('.btn');
const content = document.querySelector('.content');
const url = `https://api.chucknorris.io/jokes/random`

btn.addEventListener('click',async()=>{
    try{
        const text = await fetch(url);
        const response = await text.json();
        const {value} = response;
        content.textContent =value;
    }catch(error){
        console.log(new Error(error))
    }
})