const title = document.getElementById('title')
const date = document.getElementById('date')
const time = document.getElementById('time')
const content= document.getElementById('content')
const btnsend = document.getElementById('send')
const btndelete = document.getElementById('del')
const post = document.getElementById('post')

const postcontent = []

btnsend.addEventListener('click',function(){
    postcontent.push({
        title:title.value,
        date:date.value,
        time:time.value,
        content:content.value
    })

    let demostr = ''

    postcontent.forEach(function (item) {
        demostr = demostr + `
            <div class="item">
                    <hr>
                    <p>標題：${item.title}</p>
                    <p>時間：${item.date} ${item.time}</p>
                    <p>內容：${item.content}</p>
            </div>
        `
    })
    post.innerHTML = demostr
})


btndelete.addEventListener('click',function(){
    postcontent.pop()

    let demostr = ''

    postcontent.forEach(function (item) {
        demostr = demostr + `
            <div class="item">
                    <hr>
                    <p>標題：${item.title}</p>
                    <p>時間：${item.date} ${item.time}</p>
                    <p>內容：${item.content}</p>
            </div>
        `
    })
    post.innerHTML = demostr
})







