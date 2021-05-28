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
    const response = fetch(`${url}`);
    const data = response.json()
    const art = data.articles
    const ans = art.map((article) => {
        let div = document.createElement('div');
        div.className = 'card'
        div.style.width = '15rem'
        let img = document.createElement('img')
        img.className = "card-img-top"
        img.setAttribute('src', article.urlToImage)
        let div2 = documnet.createElement('div')
        div2.className = 'card-body'
        let h5 = document.createElement('h5')
        h5.className = 'card-title'
        h5.textContent = article.title
        let p = document.createElement('p')
        p.className = "card-text"
        p.textContent = article.description
        div.appendChild(img)
        div.appendChild(div2)
        div2.appendChild(h5)
        div2.appendChild(p)
        news.appendChild(div)
    })

    news.innerHTML = ans.join("");
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