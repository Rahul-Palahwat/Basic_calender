const date = new Date();


const renderCalender = () => {
    date.setDate(1);


    const monthDays = document.querySelector('.days');

    // here 0 is for previous month lenght if we do 1 we will get first day of that month, so we did +1
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();

    const nextDays = 7 - lastDayIndex - 1;


    const event = [[16, 09, 2021,"Rahul Kumar--> Birthday , Vijay kumar--> Birthday"], [03, 00, 2022, "Vijay kumar --> clg going"], [09, 11, 2021, "whole society--> Christmas"]];

    const months = [
        "January",
        "February",
        "March",
        "Aprail",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date h2').innerHTML = date.getFullYear();

    document.querySelector('.date p').innerHTML = new Date().toDateString();

    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`
    }


    let index;
    for (let i = 1; i <= lastDay; i++) {
        if (i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
            let flag = 1;
            for (let x = 0; x < event.length; x++) {
                if (i === event[x][0] && date.getMonth() === event[x][1] && date.getFullYear() === event[x][2]) {
                    let str=String(event[x][3]);
                    // let v=typeof(str);
                    let count=(str.match(/-->/g)).length;
                    days += `<div class="today">${i}<button id="show">E${count}</button></div>`;
                    index = x;
                    flag = 0;
                    // console.log("Hello world!");
                }
            }
            if (flag) {
                days += `<div class="today">${i}</div>`;
            }
            // days += `<div class="today">${i}</div>`;
        }
        else {
            let flag = 1;
            for (let x = 0; x < event.length; x++) {
                if (i === event[x][0] && date.getMonth() === event[x][1] && date.getFullYear() === event[x][2]) {
                    let str=String(event[x][3]);
                    // let v=typeof(str);
                    let count=(str.match(/-->/g)).length;
                    days += `<div class="eventtoday">${i}<button id="show">E${count}</button></div>`;
                    index = x;
                    let flag = 0;
                    // console.log("Hello world!");
                }
            }
            if (flag) {
                days += `<div>${i}</div>`;
            }

        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`
        monthDays.innerHTML = days;
    }
    let ev = document.getElementById("show");
    ev.addEventListener('click', () => {
        window.alert(event[index][3]);
        // window.alert("Hello");
    })

}




document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalender();
});

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalender();
});

renderCalender();