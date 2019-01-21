var money = prompt('Ваш бюджет на месяц'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    questionOne = prompt('Введите обязательную статью расходов в этом месяце')
    questionTwo = prompt('Во сколько обойдется?') ;
var appData ={
    bujet : money,
    data : time,
    savings : false,
    expenses: {
        questionOne : questionTwo
        },
    optionalExpenses : {

    },
    income:[]
    };