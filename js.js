var money ,time; 

function start(){
money = +prompt('Ваш бюджет на месяц'),
time = prompt('Введите дату в формате YYYY-MM-DD');

while (Number.isNaN(money) || money == ''|| money == null){
    money = +prompt('Ваш бюджет на месяц');
}
}

start();
var appData = {
    bujet : money,
    data : time,
    savings : true,
    expenses : {},
    optionalExpenses : {},
    income: []
    };

    



function ChooseExp(){
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

}
ChooseExp();
    appData.MoneyPerDay= (appData.bujet / 30).toFixed();
    alert('Your daily bujet = ' + appData.MoneyPerDay);

function CheckSavings(){
    if (appData.savings == true){
        appData.MonthIncome= prompt('Сумма накоплений')/100 * prompt('Процент')/12;
        alert('Месячный доход = ' + appData.MonthIncome);
    }
}
CheckSavings();
