//var money = +prompt('Ваш бюджет на месяц'),
  //  time = prompt('Введите дату в формате YYYY-MM-DD');
   
var appData = {
    bujet : 1,
    data : 1,
    savings : false,
    expenses : {},
    optionalExpenses : {},
    income: []
    };

    for (i = 0; i < 2; i++){
        var a = prompt('Cтатья расходов', ''),
            b = +prompt('Сумма', '');
        if ((typeof(a) ==='string') && (a != '') &&( a != null) 
        && (a.length < 20) && (b != '') && (b !== null) && (!Number.isNaN(b))){
            appData.expenses[a] = b;
        }
        else{
            alert('Some mistakes were made, tra again pls...');
            i--;
        }
    
    }
   // appData.MoneyPerDay= appData.bujet / 30;
    //alert('Your daily bujet = ' + appData.MoneyPerDay)









/*    
var num = 1;

num++;
console.log(num);
x = ++nam;
console.log(x);
console.log(typeof(false));
let y = 1; 
let x = y = 2; 
alert(x);

var xx = 0 || "" || 2 || undefined || true || falsе;
console.log(xx);
xx = 0 || "" || 2 || undefined || true ;
console.log(xx);
xx = 0 || "" || 2 || undefined ;
console.log(xx);
xx = 0 || "" || 2 ;
console.log(xx);
var xx = 'A' > 'B' ;
console.log(xx);*/