function task1() {
    let a = 'aaa@bbb@ccc';
    alert(a.replace(/@/g, "!"));
};

function task2() {
    let a = '2025-12-31';
    alert(a.replace(/-/g, "/"));
};

function task3() {
  let a = 'Я учу javascript';
  alert(a.substr(2, 3) + a.substr(6, 10));
  alert(a.substring(2, 5) + a.substring(6, 16));
  alert(a.slice(2, 5) + a.slice(6, 16));
};

function task4() {
    let a = [4, 2, 5, 19, 13, 0, 10];
    let sum = 0;
    for (let i= 0; i < a.length; i++) {
        element = a[i] ** 3;
        sum = sum + element;
    };
    alert(Math.sqrt(sum));
};

function task5() {
    let a = 3;
    let b = 5;
    let c = Math.abs(a - b);
    alert(c);
    a = 6;
    b = 1;
    c = Math.abs(a - b);
    alert(c);
};

function task6() {
    let date = new Date();
    function getZero(num){
        if (num > 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    };
    alert(date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + getZero(date.getDate()) + '.' + getZero(date.getMonth() + 1) + '.' + date.getFullYear());
};

function task7() {
    const a = 'aa aba abba abbba abca abea';
    alert(a.replace(/ab{1,}a/g,'!'));
};

function task8(phone) {
    const regV = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    const isValid = regV.test(phone);
    alert(isValid);
};

function task9(email) {
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const isValid = re.test(String(email).toLowerCase());
    alert(isValid);
};

function task10(adress) {
    let array = adress.split('?');
    let parametr = array[1].split('#');
    const res = array[0].match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im);
    const domainName = res[0];
    const params = parametr[0] || '';
    const hash = parametr[1] || '';
    const restAddress = array[0].substring(domainName.length) || '';
    alert(`
        Доменное имя: ${domainName}
        Часть адреса без параметров: ${restAddress}
        Параметры: ${params}
        Хэш: ${hash}    
    `);
};