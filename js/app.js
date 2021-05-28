const search = document.querySelector('.search');
const input = document.querySelector('.input');
const news = document.querySelector('.news-list');

const bus = document.querySelector('.bus')

const retrieve = (e) => {
    if (input.value == "") {
        alert("Input field is empty")
        return
    }
    e.preventDefault()
    const apiKey = '3020db5daf77473dad1742f6293a3429';
    const topic = input.value;
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.className = "title"
            a.style.textDecoration = 'none'
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = article.title;
            li.appendChild(a);
            news.appendChild(li);
        })
    }).catch((error) => {
        console.log(error)
    })
}

search.addEventListener('submit', retrieve)

bus.addEventListener('click', (e) => {
    const apiKey = '3020db5daf77473dad1742f6293a3429';
    let cat = 'business'
    let url = `https://newsapi.org/v2/sources?category=${cat}apiKey=${apiKey}`
    fetch(url).then((res) => {
        return res.json()
    }).then((data) => {
        console.log(data)
    })
})