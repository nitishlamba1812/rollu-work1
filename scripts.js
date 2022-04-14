const arr = ['Rahul', 'Nitish', 'Vadhera', 'Amit', 'Jeetu', 'Paras', 'Lamba', 'Rahul', 'Nitish', 'Vadhera', 'Amit', 'Jeetu', 'Paras', 'Lamba'];
let counter = 0;

setTimeout(() =>{
    document.getElementsByClassName('window-two')[0].style.opacity = '1';
    let timer = setInterval(() =>{
        document.getElementsByClassName('input-text')[0].innerText = arr[counter];
        counter++;
        if(counter === arr.length) {
            clearInterval(timer);
            document.getElementsByClassName('window-three')[0].style.opacity = '1';
        }
    }, 100);
}, 1000);