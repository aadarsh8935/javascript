let head = document.getElementById('head1')
console.log(head);
head.textContent = "From js"
head.style.backgroundColor = "lightblue"
head.style.padding = "20px"
let head2 = document.getElementById('head2')
head2.innerHTML = "<i> Tea break </i>"

let list = document.getElementsByTagName('li')
console.log(list);

list[2].textContent = "by array"