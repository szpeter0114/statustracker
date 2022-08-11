
let items = document.querySelectorAll('.showable');
let btn = document.querySelector('#btn1');
let clickBtn = document.querySelector('#btn1').onclick = function() {
  
  items.forEach(toggleVisibility);
  function toggleVisibility(item){
    if(item.style.visibility === "hidden") {
      item.style.visibility = "visible";
      btn.innerHTML = "Hide";
    } else {
      item.style.visibility = "hidden";
      btn.innerHTML = "Show more";
    }
  } 
  

}


let date1 = new Date("2022-08-11T23:00:00Z");
document.getElementById('test1').innerHTML = date1.toISOString().slice(0,-8)+"Z";

let date2 = new Date("2022-08-11T22:11:00Z");
document.getElementById('test2').innerHTML = date2.toISOString().slice(0,-8)+"Z";

let date3 = new Date("2022-08-11T21:07:08Z");
document.getElementById('test3').innerHTML = date3.toISOString().slice(0,-8)+"Z";

let date4 = new Date("2022-08-11T20:22:02Z");
document.getElementById('test4').innerHTML = date4.toISOString().slice(0,-8)+"Z";

let date5 = new Date("2022-08-11T19:26:59Z");
document.getElementById('test5').innerHTML = date5.toISOString().slice(0,-8)+"Z";

let date6 = new Date("2022-08-11T18:00:00Z");
document.getElementById('test6').innerHTML = date6.toISOString().slice(0,-8)+"Z";

let date7 = new Date("2022-08-11T17:41:00Z");
document.getElementById('test7').innerHTML = date7.toISOString().slice(0,-8)+"Z";

let date8 = new Date("2022-08-11T16:04:50Z");
document.getElementById('test8').innerHTML = date8.toISOString().slice(0,-8)+"Z";

let date9 = new Date("2022-08-11T15:13:00Z");
document.getElementById('test9').innerHTML = date9.toISOString().slice(0,-8)+"Z";

let date10 = new Date("2022-08-11T14:11:49Z");
document.getElementById('test10').innerHTML = date10.toISOString().slice(0,-8)+"Z";

let date11 = new Date("2022-08-11T13:22:00Z");
document.getElementById('test11').innerHTML = date11.toISOString().slice(0,-8)+"Z";

let date12 = new Date("2022-08-11T12:05:00Z");
document.getElementById('test12').innerHTML = date12.toISOString().slice(0,-8)+"Z";

let date13 = new Date("2022-08-11T11:19:00Z");
document.getElementById('test13').innerHTML = date13.toISOString().slice(0,-8)+"Z";

let date14 = new Date("2022-08-11T10:00:59Z");
document.getElementById('test14').innerHTML = date14.toISOString().slice(0,-8)+"Z";

let date15 = new Date("2022-08-11T09:19:00Z");
document.getElementById('test15').innerHTML = date15.toISOString().slice(0,-8)+"Z";

let date16 = new Date("2022-08-11T08:35:00Z");
document.getElementById('test16').innerHTML = date16.toISOString().slice(0,-8)+"Z";

let date17 = new Date("2022-08-11T07:44:00Z");
document.getElementById('test17').innerHTML = date17.toISOString().slice(0,-8)+"Z";

let date18 = new Date("2022-08-11T06:51:00Z");
document.getElementById('test18').innerHTML = date18.toISOString().slice(0,-8)+"Z";

let date19 = new Date("2022-08-11T05:09:27Z");
document.getElementById('test19').innerHTML = date19.toISOString().slice(0,-8)+"Z";

let date20 = new Date("2022-08-11T04:00:00Z");
document.getElementById('test20').innerHTML = date20.toISOString().slice(0,-8)+"Z";

let date21 = new Date("2022-08-11T03:38:00Z");
document.getElementById('test21').innerHTML = date21.toISOString().slice(0,-8)+"Z";

let date22 = new Date("2022-08-11T02:29:00Z");
document.getElementById('test22').innerHTML = date22.toISOString().slice(0,-8)+"Z";

let date23 = new Date("2022-08-11T01:05:05Z");
document.getElementById('test23').innerHTML = date23.toISOString().slice(0,-8)+"Z";

let date24 = new Date("2022-08-11T00:14:01Z");
document.getElementById('test24').innerHTML = date24.toISOString().slice(0,-8)+"Z";




let dateArrays = [date1, date2, date3, date4, date5, date6, date7, date8, date9, date10, date11, date12, date13, date14, date15, date16, date17, date18, date19, date20, date21, date22, date23, date24];

let allItems = document.querySelectorAll('.timePass');

  allItems.forEach((item, index) =>{

  let sum = (date1.getUTCHours() - dateArrays[index].getUTCHours());
  let sum2 = (date1.getUTCMinutes() - dateArrays[index].getUTCMinutes());

  if (sum2 < 0) {
    sum = sum - 1
    sum2 = 60 + sum2
  }

    item.innerHTML = `(${sum}h  ${sum2}m ago)`;
  });
  
