

document.getElementsByClassName('btn')[0].addEventListener('click', function () {
    var nicknameVal = document.querySelector('.input');
    var nicknameRender = document.querySelector('.render_nickname');
    nicknameRender.innerHTML = nicknameVal.value + ' ' + '的文章' 

    var md_content = document.getElementById('text').value;
    var html_content = markdown.toHTML( md_content );
    console.log(html_content)
    console.log(typeof html_content)
    document.getElementById('tohtml').innerHTML = html_content
})

