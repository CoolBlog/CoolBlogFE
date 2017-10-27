

document.getElementsByClassName('btn')[0].addEventListener('click', function () {
    md_content = document.getElementById('text').value;
    html_content = markdown.toHTML( md_content );
    console.log(html_content)
    console.log(typeof html_content)
    document.getElementById('tohtml').innerHTML = html_content
})