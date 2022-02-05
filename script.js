
document.querySelector ('button').addEventListener ('click', function (){
    let user = document.querySelector ('input').value;// получаем значение из input
    let userClean = user.replace (/ +/g,' ').trim();// с помощью trim удаляем пробелы с начала и конца строки, с помощью регулярного выражения убираются лишние пробелы внутри строки
    let array = userClean.split(' ');//преобразовываем строку в массив
    let usersurname = array[0];// первый элемент массива
    usersurname = usersurname[0].toUpperCase()+usersurname.substr(1).toLowerCase();// чтобы первая буква была заглавной, а остальные прописные
    let username = array[1];// второй элемент массива
    username = username[0].toUpperCase()+username.substr(1).toLowerCase();// чтобы первая буква была заглавной, а остальные прописные
    let userpatroymic = array[2];// третий элемент массива
    userpatroymic = userpatroymic[0].toUpperCase()+userpatroymic.substr(1).toLowerCase();
    document.querySelector ('.surnamevalue').innerHTML = usersurname;// кладем имя в контейнер с именем
    document.querySelector ('.namevalue').innerHTML =  username;
    document.querySelector ('.patronymicvalue').innerHTML = userpatroymic;
})