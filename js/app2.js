const search = document.querySelector('.search');
const input = document.querySelector('.input');
const news = document.querySelector('.news-list');
const apiKey = '3020db5daf77473dad1742f6293a3429';
const cat = document.querySelector('.cate')

search.addEventListener('submit', retrieve)
cat.addEventListener('click', retrieve)

function retrieve(e) {
    // if (input.value == "") {
    //     alert("Input field is empty")
    //     return
    // }

    e.preventDefault()

    if (news.hasChildNodes()) {
        const divs = document.querySelectorAll('#idcard')
        console.log(divs)
        divs.forEach((div) => {
            div.parentElement.removeChild(div);
        })
    }
    var topic;
    console.log(e.target.className.split(' ').pop());
    const para = e.target.className.split(' ').pop();
    if (para == 'search') {
        topic = input.value;
    }
    else {
        topic = para;
    }

    input.value = ''
    let url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`
    fetch(url).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data)
        data.articles.forEach(article => {
            let div = document.createElement('div');
            div.className = 'card sp'
            div.id = "idcard"
            div.style.width = '15rem'
            let img = document.createElement('img')
            img.className = "card-img-top"
            img.setAttribute('src', article.urlToImage)
            let div2 = document.createElement('div')
            div2.className = 'card-body'
            let h5 = document.createElement('h5')
            h5.className = 'card-title'
            h5.textContent = article.title
            let p = document.createElement('p')
            p.className = "card-text"
            p.textContent = article.description
            let a = document.createElement('a');
            a.style.textDecoration = 'none'
            a.setAttribute('href', article.url);
            a.setAttribute('target', '_blank');
            a.textContent = 'More';
            div.appendChild(img)
            div.appendChild(div2)
            div2.appendChild(h5)
            div2.appendChild(p)
            div2.appendChild(a)
            news.appendChild(div)
        })
    }).catch((error) => {
        console.log(error)
    })
}


// function retrieveb(e) {
//     e.preventDefault()

//     if (news.hasChildNodes()) {
//         const divs = document.querySelectorAll('#idcard')
//         console.log(divs)
//         divs.forEach((div) => {
//             div.parentElement.removeChild(div);
//         })
//     }

//     const topic = input.value;
//     input.value = "";
//     let url = `https://newsapi.org/v2/everything?q=${'business'}&apiKey=${apiKey}`
//     fetch(url).then((res) => {
//         return res.json();
//     }).then((data) => {
//         console.log(data)
//         data.articles.forEach(article => {
//             let div = document.createElement('div');
//             div.className = 'card sp'
//             div.id = "idcard"
//             div.style.width = '15rem'
//             let img = document.createElement('img')
//             img.className = "card-img-top"
//             img.setAttribute('src', article.urlToImage)
//             let div2 = document.createElement('div')
//             div2.className = 'card-body'
//             let h5 = document.createElement('h5')
//             h5.className = 'card-title'
//             h5.textContent = article.title
//             let p = document.createElement('p')
//             p.className = "card-text"
//             p.textContent = article.description
//             let a = document.createElement('a');
//             a.style.textDecoration = 'none'
//             a.setAttribute('href', article.url);
//             a.setAttribute('target', '_blank');
//             a.textContent = 'More';
//             div.appendChild(img)
//             div.appendChild(div2)
//             div2.appendChild(h5)
//             div2.appendChild(p)
//             div2.appendChild(a)
//             news.appendChild(div)
//         })
//     }).catch((error) => {
//         console.log(error)
//     })

// }

// bus.addEventListener('click', (e) => {
//     const apiKey = '3020db5daf77473dad1742f6293a3429';
//     let cat = 'business'
//     let url = `https://newsapi.org/v2/sources?category=${cat}apiKey=${apiKey}`
//     fetch(url).then((res) => {
//         return res.json()
//     }).then((data) => {
//         console.log(data)
//     })
// })