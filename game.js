const open_1 = document.getElementById('b_q1');
const modal_container_1 = document.getElementById("modal_container_1");
const close_1 = document.getElementById("close_1");
const start_timer_1 = document.getElementById("start_timer_1");

open_1.addEventListener('click', () => {modal_container_1.classList.add('show');
open_1.innerHTML = "<strike>1</strike>";
document.getElementById("countdown_1").textContent=0;
document.getElementById("question_points_1").textContent=100;
});


start_timer_1.addEventListener('click', () => {
var seconds= document.getElementById("countdown_1").textContent;
time_count_1=setInterval(function(){
seconds++;
document.getElementById("countdown_1").textContent=seconds;
}, 1000);
q1_points=setInterval(() => {pointsSubstraction("question_points_1")}, 10000);
});

close_1.addEventListener('click', () => {modal_container_1.classList.remove('show');
clearInterval(time_count_1);
document.getElementById("countdown_1").textContent=0;
clearInterval(q1_points);
});

const open_2 = document.getElementById('b_q2');
const modal_container_2 = document.getElementById("modal_container_2");
const close_2 = document.getElementById("close_2");

open_2.addEventListener('click', () => {modal_container_2.classList.add('show');
open_2.innerHTML = "<strike>2</strike>";
document.getElementById("question_points_2").textContent=100;
var seconds= document.getElementById("countdown_2").textContent;
time_count_2=setInterval(function(){
seconds++;
document.getElementById("countdown_2").textContent=seconds;
}, 1000);
q2_points=setInterval(() => {pointsSubstraction("question_points_2")}, 10000);
});

close_2.addEventListener('click', () => {modal_container_2.classList.remove('show');
clearInterval(time_count_2);
document.getElementById("countdown_2").textContent=0;
clearInterval(q2_points);
document.getElementById("question_points_2")=100;
});

const open_3 = document.getElementById('b_q3');
const modal_container_3 = document.getElementById("modal_container_3");
const close_3 = document.getElementById("close_3");

open_3.addEventListener('click', () => {modal_container_3.classList.add('show');
open_3.innerHTML = "<strike>3</strike>";
document.getElementById("question_points_3").textContent=100;
var seconds= document.getElementById("countdown_3").textContent;
time_count_3=setInterval(function(){
seconds++;
document.getElementById("countdown_3").textContent=seconds;
}, 1000);
q3_points=setInterval(() => {pointsSubstraction("question_points_3")}, 10000);
});

close_3.addEventListener('click', () => {modal_container_3.classList.remove('show');
clearInterval(time_count_3);
document.getElementById("countdown_3").textContent=0;
clearInterval(q3_points);
document.getElementById("question_points_3")=100;
});

const open_4 = document.getElementById('b_q4');
const modal_container_4 = document.getElementById("modal_container_4");
const close_4 = document.getElementById("close_4");

open_4.addEventListener('click', () => {modal_container_4.classList.add('show');
open_4.innerHTML = "<strike>4</strike>";
document.getElementById("question_points_4").textContent=100;
var seconds= document.getElementById("countdown_4").textContent;
time_count_4=setInterval(function(){
seconds++;
document.getElementById("countdown_4").textContent=seconds;
}, 1000);
q4_points=setInterval(() => {pointsSubstraction("question_points_4")}, 10000);
});


close_4.addEventListener('click', () => {modal_container_4.classList.remove('show');
clearInterval(time_count_4);
document.getElementById("countdown_4").textContent=0;
clearInterval(q4_points);
document.getElementById("question_points_4")=100;});

const open_5 = document.getElementById('b_q5');
const modal_container_5 = document.getElementById("modal_container_5");
const close_5 = document.getElementById("close_5");

open_5.addEventListener('click', () => {modal_container_5.classList.add('show');
open_5.innerHTML = "<strike>5</strike>";
document.getElementById("question_points_5").textContent=100;
var seconds= document.getElementById("countdown_5").textContent;
time_count_5=setInterval(function(){
seconds++;
document.getElementById("countdown_5").textContent=seconds;
}, 1000);
q5_points=setInterval(() => {pointsSubstraction("question_points_5")}, 10000);
});

close_5.addEventListener('click', () => {modal_container_5.classList.remove('show');
clearInterval(time_count_5);
document.getElementById("countdown_5").textContent=0;
clearInterval(q5_points);
document.getElementById("question_points_5")=100;
});

const open_6 = document.getElementById('b_q6');
const modal_container_6 = document.getElementById("modal_container_6");
const close_6 = document.getElementById("close_6");

open_6.addEventListener('click', () => {modal_container_6.classList.add('show');
open_6.innerHTML = "<strike>6</strike>";
document.getElementById("question_points_6").textContent=200;
var seconds= document.getElementById("countdown_6").textContent;
time_count_6=setInterval(function(){
seconds++;
document.getElementById("countdown_6").textContent=seconds;
}, 1000);
q6_points=setInterval(() => {pointsSubstraction("question_points_6")}, 10000);});

close_6.addEventListener('click', () => {modal_container_6.classList.remove('show');
clearInterval(time_count_6);
document.getElementById("countdown_6").textContent=0;
clearInterval(q6_points);
document.getElementById("question_points_6")=200;});

const open_7 = document.getElementById('b_q7');
const modal_container_7 = document.getElementById("modal_container_7");
const close_7 = document.getElementById("close_7");
const start_timer_7 = document.getElementById("start_timer_7");

open_7.addEventListener('click', () => {modal_container_7.classList.add('show');
open_7.innerHTML = "<strike>7</strike>";
document.getElementById("countdown_7").textContent=0;
document.getElementById("question_points_7").textContent=200;
});

start_timer_7.addEventListener('click', () => {
    document.getElementById("release_question_7").textContent="Write two contrast sentences with Although, Yet, Conversely, Rather than or Despite.";
    var seconds= document.getElementById("countdown_7").textContent;
    time_count_7=setInterval(function(){
    seconds++;
    document.getElementById("countdown_7").textContent=seconds;
    }, 1000);
    q7_points=setInterval(() => {pointsSubstraction("question_points_7")}, 10000);
});

close_7.addEventListener('click', () => {modal_container_7.classList.remove('show');
clearInterval(time_count_7);
document.getElementById("countdown_7").textContent=0;
clearInterval(q7_points);
document.getElementById("release_question_7").textContent = "";
document.getElementById("question_points_7")=200;});

const open_8 = document.getElementById('b_q8');
const modal_container_8 = document.getElementById("modal_container_8");
const close_8 = document.getElementById("close_8");
const start_timer_8 = document.getElementById("start_timer_8");

open_8.addEventListener('click', () => {modal_container_8.classList.add('show');
open_8.innerHTML = "<strike>8</strike>";
document.getElementById("countdown_8").textContent=0;
document.getElementById("question_points_8").textContent=200;
});


start_timer_8.addEventListener('click', () => {
    var seconds= document.getElementById("countdown_8").textContent;
    time_count_8=setInterval(function(){
    seconds++;
    document.getElementById("countdown_8").textContent=seconds;
    }, 1000);
    q8_points=setInterval(() => {pointsSubstraction("question_points_8")}, 10000);
});

close_8.addEventListener('click', () => {modal_container_8.classList.remove('show');
clearInterval(time_count_8);
document.getElementById("countdown_8").textContent=0;
clearInterval(q8_points);
document.getElementById("question_points_8")=200;});


const open_9 = document.getElementById('b_q9');
const modal_container_9 = document.getElementById("modal_container_9");
const close_9 = document.getElementById("close_9");

open_9.addEventListener('click', () => {modal_container_9.classList.add('show');
open_9.innerHTML = "<strike>9</strike>";
document.getElementById("question_points_9").textContent=200;
var seconds= document.getElementById("countdown_9").textContent;
time_count_9=setInterval(function(){
seconds++;
document.getElementById("countdown_9").textContent=seconds;
}, 1000);
q9_points=setInterval(() => {pointsSubstraction("question_points_9")}, 10000);});

close_9.addEventListener('click', () => {modal_container_9.classList.remove('show');
clearInterval(time_count_9);
document.getElementById("countdown_9").textContent=0;
clearInterval(q9_points);
document.getElementById("question_points_9")=200;});

const open_10 = document.getElementById('b_q10');
const modal_container_10 = document.getElementById("modal_container_10");
const close_10 = document.getElementById("close_10");

open_10.addEventListener('click', () => {modal_container_10.classList.add('show');
open_10.innerHTML = "<strike>10</strike>";
document.getElementById("question_points_10").textContent=200;
var seconds= document.getElementById("countdown_10").textContent;
time_count_10=setInterval(function(){
seconds++;
document.getElementById("countdown_10").textContent=seconds;
}, 1000);
q10_points=setInterval(() => {pointsSubstraction("question_points_10")}, 10000);});

close_10.addEventListener('click', () => {modal_container_10.classList.remove('show');
clearInterval(time_count_10);
document.getElementById("countdown_10").textContent=0;
clearInterval(q10_points);
document.getElementById("question_points_10")=200;});

const open_11 = document.getElementById('b_q11');
const modal_container_11 = document.getElementById("modal_container_11");
const close_11 = document.getElementById("close_11");

open_11.addEventListener('click', () => {modal_container_11.classList.add('show');
open_11.innerHTML = "<strike>11</strike>";
document.getElementById("question_points_11").textContent=300;
var seconds= document.getElementById("countdown_11").textContent;
time_count_11=setInterval(function(){
seconds++;
document.getElementById("countdown_11").textContent=seconds;
}, 1000);
q11_points=setInterval(() => {pointsSubstraction("question_points_11")}, 10000);});

close_11.addEventListener('click', () => {modal_container_11.classList.remove('show');
clearInterval(time_count_11);
document.getElementById("countdown_11").textContent=0;
clearInterval(q11_points);
document.getElementById("question_points_11")=300;});

const open_12 = document.getElementById('b_q12');
const modal_container_12 = document.getElementById("modal_container_12");
const close_12 = document.getElementById("close_12");
const start_timer_12 = document.getElementById("start_timer_12");

open_12.addEventListener('click', () => {modal_container_12.classList.add('show');
open_12.innerHTML = "<strike>12</strike>";
document.getElementById("countdown_12").textContent=0;
document.getElementById("question_points_12").textContent=300;
});

start_timer_12.addEventListener('click', () => {
    var seconds= document.getElementById("countdown_12").textContent;
    time_count_12=setInterval(function(){
    seconds++;
    document.getElementById("countdown_12").textContent=seconds;
    }, 1000);
    q12_points=setInterval(() => {pointsSubstraction("question_points_12")}, 10000);
});


close_12.addEventListener('click', () => {modal_container_12.classList.remove('show');
clearInterval(time_count_12);
document.getElementById("countdown_12").textContent=0;
clearInterval(q12_points);
document.getElementById("question_points_12")=300;});

const open_13 = document.getElementById('b_q13');
const modal_container_13 = document.getElementById("modal_container_13");
const close_13 = document.getElementById("close_13");

open_13.addEventListener('click', () => {modal_container_13.classList.add('show');
open_13.innerHTML = "<strike>13</strike>";
document.getElementById("question_points_13").textContent=300;
var seconds= document.getElementById("countdown_13").textContent;
time_count_13=setInterval(function(){
seconds++;
document.getElementById("countdown_13").textContent=seconds;
}, 1000);
q13_points=setInterval(() => {pointsSubstraction("question_points_13")}, 10000);});

close_13.addEventListener('click', () => {modal_container_13.classList.remove('show');
clearInterval(time_count_13);
document.getElementById("countdown_13").textContent=0;
clearInterval(q13_points);
document.getElementById("question_points_13")=300;});

const open_14 = document.getElementById('b_q14');
const modal_container_14 = document.getElementById("modal_container_14");
const close_14 = document.getElementById("close_14");

open_14.addEventListener('click', () => {modal_container_14.classList.add('show');
open_14.innerHTML = "<strike>14</strike>";
document.getElementById("question_points_14").textContent=300;
var seconds= document.getElementById("countdown_14").textContent;
time_count_14=setInterval(function(){
seconds++;
document.getElementById("countdown_14").textContent=seconds;
}, 1000);
q14_points=setInterval(() => {pointsSubstraction("question_points_14")}, 10000);});

close_14.addEventListener('click', () => {modal_container_14.classList.remove('show');
clearInterval(time_count_14);
document.getElementById("countdown_14").textContent=0;
clearInterval(q14_points);
document.getElementById("question_points_14")=300;});

const open_15 = document.getElementById('b_q15');
const modal_container_15 = document.getElementById("modal_container_15");
const close_15 = document.getElementById("close_15");

open_15.addEventListener('click', () => {modal_container_15.classList.add('show');
open_15.innerHTML = "<strike>15</strike>";
document.getElementById("question_points_15").textContent=300;
var seconds= document.getElementById("countdown_15").textContent;
time_count_15=setInterval(function(){
seconds++;
document.getElementById("countdown_15").textContent=seconds;
}, 1000);
q15_points=setInterval(() => {pointsSubstraction("question_points_15")}, 10000);});

close_15.addEventListener('click', () => {modal_container_15.classList.remove('show');
clearInterval(time_count_15);
document.getElementById("countdown_15").textContent=0;
clearInterval(q15_points);
document.getElementById("question_points_15")=300;});

const inc_1 = document.getElementById('button_up_1');
inc_1.addEventListener('click', function(){increment('chart_1')});
const dec_1 = document.getElementById('button_down_1');
dec_1.addEventListener('click', function(){substraction('chart_1')});

const inc_2 = document.getElementById('button_up_2');
inc_2.addEventListener('click', function(){increment('chart_2')});
const dec_2 = document.getElementById('button_down_2');
dec_2.addEventListener('click', function(){substraction('chart_2')});

const inc_3 = document.getElementById('button_up_3');
inc_3.addEventListener('click', function(){increment('chart_3')});
const dec_3 = document.getElementById('button_down_3');
dec_3.addEventListener('click', function(){substraction('chart_3')});

const inc_4 = document.getElementById('button_up_4');
inc_4.addEventListener('click', function(){increment('chart_4')});
const dec_4 = document.getElementById('button_down_4');
dec_4.addEventListener('click', function(){substraction('chart_4')});


const inc_5 = document.getElementById('button_up_5');
inc_5.addEventListener('click', function(){increment('chart_5')});
const dec_5 = document.getElementById('button_down_5');
dec_5.addEventListener('click', function(){substraction('chart_5')});

function increment(chart)
{
    var add=parseInt(document.getElementById(chart).textContent);
    add = add + 10;
    document.getElementById(chart).textContent=add;

}

function substraction(chart)
{
    var substract=parseInt(document.getElementById(chart).textContent)
    if(substract==0)
    {
        document.getElementById(chart).textContent=substract;
    }
    else{
    substract= substract - 10;
    document.getElementById(chart).textContent=substract;
    }
}


const modal_container_16 = document.getElementById("modal_container_16");
const close_16 = document.getElementById("close_16");
close_16.addEventListener('click', () => {modal_container_16.classList.remove('show');});

const modal_container_17 = document.getElementById("modal_container_17");
const close_17 = document.getElementById("close_17");
close_17.addEventListener('click', () => {modal_container_17.classList.remove('show');});

const modal_container_18 = document.getElementById("modal_container_18");
const close_18 = document.getElementById("close_18");
close_18.addEventListener('click', () => {modal_container_18.classList.remove('show');});

lev_1_1=setInterval(() => {congratsLevel1('chart_1', lev_1_1)}, 1000);
lev_2_1=setInterval(() => {congratsLevel2('chart_1', lev_2_1)}, 1000);
lev_3_1=setInterval(() => {congratsLevel3('chart_1', lev_3_1)}, 1000);

lev_1_2=setInterval(() => {congratsLevel1('chart_2', lev_1_2)}, 1000);
lev_2_2=setInterval(() => {congratsLevel2('chart_2', lev_2_2)}, 1000);
lev_3_2=setInterval(() => {congratsLevel3('chart_2', lev_3_2)}, 1000);

lev_1_3=setInterval(() => {congratsLevel1('chart_3', lev_1_3)}, 1000);
lev_2_3=setInterval(() => {congratsLevel2('chart_3', lev_2_3)}, 1000);
lev_3_3=setInterval(() => {congratsLevel3('chart_3', lev_3_3)}, 1000);

lev_1_4=setInterval(() => {congratsLevel1('chart_4', lev_1_4)}, 1000);
lev_2_4=setInterval(() => {congratsLevel2('chart_4', lev_2_4)}, 1000);
lev_3_4=setInterval(() => {congratsLevel3('chart_4', lev_3_4)}, 1000);

lev_1_5=setInterval(() => {congratsLevel1('chart_5', lev_1_5)}, 1000);
lev_2_5=setInterval(() => {congratsLevel2('chart_5', lev_2_5)}, 1000);
lev_3_5=setInterval(() => {congratsLevel3('chart_5', lev_3_5)}, 1000);


function congratsLevel1(chart, interval){
    var dato = parseInt(document.getElementById(chart).textContent);
    if(dato==200){
        modal_container_16.classList.add('show');
        clearInterval(interval);
    }
}

function congratsLevel2(chart, interval){
    var dato = parseInt(document.getElementById(chart).textContent);
    if(dato==350){
        modal_container_17.classList.add('show');
        clearInterval(interval);
    }
}

function congratsLevel3(chart, interval){
    var dato = parseInt(document.getElementById(chart).textContent);
    if(dato==500){
        modal_container_18.classList.add('show');
        clearInterval(interval);
    }
}



function pointsSubstraction(idSpan){
    var q= document.getElementById(idSpan).textContent
    if(q>50)
    {
    q= q-10;
    document.getElementById(idSpan).textContent=q;
    }
}


const check_1_1 = document.getElementById('checkbox_1_1');
check_1_1.addEventListener('change', () => {givePoints('show_time_1_1', 'show_points_1_1', 'countdown_1', 'question_points_1')});

const check_1_2 = document.getElementById('checkbox_1_2');
check_1_2.addEventListener('change', () => {givePoints('show_time_1_2', 'show_points_1_2', 'countdown_1', 'question_points_1')});

const check_1_3 = document.getElementById('checkbox_1_3');
check_1_3.addEventListener('change', () => {givePoints('show_time_1_3', 'show_points_1_3', 'countdown_1', 'question_points_1')});

const check_1_4 = document.getElementById('checkbox_1_4');
check_1_4.addEventListener('change', () => {givePoints('show_time_1_4', 'show_points_1_4', 'countdown_1', 'question_points_1')});

const check_1_5 = document.getElementById('checkbox_1_5');
check_1_5.addEventListener('change', () => {givePoints('show_time_1_5', 'show_points_1_5', 'countdown_1', 'question_points_1')});

const check_2_1 = document.getElementById('checkbox_2_1');
check_2_1.addEventListener('change', () => {givePoints('show_time_2_1', 'show_points_2_1', 'countdown_2', 'question_points_2')});

const check_2_2 = document.getElementById('checkbox_2_2');
check_2_2.addEventListener('change', () => {givePoints('show_time_2_2', 'show_points_2_2', 'countdown_2', 'question_points_2')});

const check_2_3 = document.getElementById('checkbox_2_3');
check_2_3.addEventListener('change', () => {givePoints('show_time_2_3', 'show_points_2_3', 'countdown_2', 'question_points_2')});

const check_2_4 = document.getElementById('checkbox_2_4');
check_2_4.addEventListener('change', () => {givePoints('show_time_2_4', 'show_points_2_4', 'countdown_2', 'question_points_2')});

const check_2_5 = document.getElementById('checkbox_2_5');
check_2_5.addEventListener('change', () => {givePoints('show_time_2_5', 'show_points_2_5', 'countdown_2', 'question_points_2')});

const check_3_1 = document.getElementById('checkbox_3_1');
check_3_1.addEventListener('change', () => {givePoints('show_time_3_1', 'show_points_3_1', 'countdown_3', 'question_points_3')});

const check_3_2 = document.getElementById('checkbox_3_2');
check_3_2.addEventListener('change', () => {givePoints('show_time_3_2', 'show_points_3_2', 'countdown_3', 'question_points_3')});

const check_3_3 = document.getElementById('checkbox_3_3');
check_3_3.addEventListener('change', () => {givePoints('show_time_3_3', 'show_points_3_3', 'countdown_3', 'question_points_3')});

const check_3_4 = document.getElementById('checkbox_3_4');
check_3_4.addEventListener('change', () => {givePoints('show_time_3_4', 'show_points_3_4', 'countdown_3', 'question_points_3')});

const check_3_5 = document.getElementById('checkbox_3_5');
check_3_5.addEventListener('change', () => {givePoints('show_time_3_5', 'show_points_3_5', 'countdown_3', 'question_points_3')});

const check_4_1 = document.getElementById('checkbox_4_1');
check_4_1.addEventListener('change', () => {givePoints('show_time_4_1', 'show_points_4_1', 'countdown_4', 'question_points_4')});

const check_4_2 = document.getElementById('checkbox_4_2');
check_4_2.addEventListener('change', () => {givePoints('show_time_4_2', 'show_points_4_2', 'countdown_4', 'question_points_4')});

const check_4_3 = document.getElementById('checkbox_4_3');
check_4_3.addEventListener('change', () => {givePoints('show_time_4_3', 'show_points_4_3', 'countdown_4', 'question_points_4')});

const check_4_4 = document.getElementById('checkbox_4_4');
check_4_4.addEventListener('change', () => {givePoints('show_time_4_4', 'show_points_4_4', 'countdown_4', 'question_points_4')});

const check_4_5 = document.getElementById('checkbox_4_5');
check_4_5.addEventListener('change', () => {givePoints('show_time_4_5', 'show_points_4_5', 'countdown_4', 'question_points_4')});

const check_5_1 = document.getElementById('checkbox_5_1');
check_5_1.addEventListener('change', () => {givePoints('show_time_5_1', 'show_points_5_1', 'countdown_5', 'question_points_5')});

const check_5_2 = document.getElementById('checkbox_5_2');
check_5_2.addEventListener('change', () => {givePoints('show_time_5_2', 'show_points_5_2', 'countdown_5', 'question_points_5')});

const check_5_3 = document.getElementById('checkbox_5_3');
check_5_3.addEventListener('change', () => {givePoints('show_time_5_3', 'show_points_5_3', 'countdown_5', 'question_points_5')});

const check_5_4 = document.getElementById('checkbox_5_4');
check_5_4.addEventListener('change', () => {givePoints('show_time_5_4', 'show_points_5_4', 'countdown_5', 'question_points_5')});

const check_5_5 = document.getElementById('checkbox_5_5');
check_5_5.addEventListener('change', () => {givePoints('show_time_5_5', 'show_points_5_5', 'countdown_5', 'question_points_5')});

const check_6_1 = document.getElementById('checkbox_6_1');
check_6_1.addEventListener('change', () => {givePoints('show_time_6_1', 'show_points_6_1', 'countdown_6', 'question_points_6')});

const check_6_2 = document.getElementById('checkbox_6_2');
check_6_2.addEventListener('change', () => {givePoints('show_time_6_2', 'show_points_6_2', 'countdown_6', 'question_points_6')});

const check_6_3 = document.getElementById('checkbox_6_3');
check_6_3.addEventListener('change', () => {givePoints('show_time_6_3', 'show_points_6_3', 'countdown_6', 'question_points_6')});

const check_6_4 = document.getElementById('checkbox_6_4');
check_6_4.addEventListener('change', () => {givePoints('show_time_6_4', 'show_points_6_4', 'countdown_6', 'question_points_6')});

const check_6_5 = document.getElementById('checkbox_6_5');
check_6_5.addEventListener('change', () => {givePoints('show_time_6_5', 'show_points_6_5', 'countdown_6', 'question_points_6')});

const check_7_1 = document.getElementById('checkbox_7_1');
check_7_1.addEventListener('change', () => {givePoints('show_time_7_1', 'show_points_7_1', 'countdown_7', 'question_points_7')});

const check_7_2 = document.getElementById('checkbox_7_2');
check_7_2.addEventListener('change', () => {givePoints('show_time_7_2', 'show_points_7_2', 'countdown_7', 'question_points_7')});

const check_7_3 = document.getElementById('checkbox_7_3');
check_7_3.addEventListener('change', () => {givePoints('show_time_7_3', 'show_points_7_3', 'countdown_7', 'question_points_7')});

const check_7_4 = document.getElementById('checkbox_7_4');
check_7_4.addEventListener('change', () => {givePoints('show_time_7_4', 'show_points_7_4', 'countdown_7', 'question_points_7')});

const check_7_5 = document.getElementById('checkbox_7_5');
check_7_5.addEventListener('change', () => {givePoints('show_time_7_5', 'show_points_7_5', 'countdown_7', 'question_points_7')});

const check_8_1 = document.getElementById('checkbox_8_1');
check_8_1.addEventListener('change', () => {givePoints('show_time_8_1', 'show_points_8_1', 'countdown_8', 'question_points_8')});

const check_8_2 = document.getElementById('checkbox_8_2');
check_8_2.addEventListener('change', () => {givePoints('show_time_8_2', 'show_points_8_2', 'countdown_8', 'question_points_8')});

const check_8_3 = document.getElementById('checkbox_8_3');
check_8_3.addEventListener('change', () => {givePoints('show_time_8_3', 'show_points_8_3', 'countdown_8', 'question_points_8')});

const check_8_4 = document.getElementById('checkbox_8_4');
check_8_4.addEventListener('change', () => {givePoints('show_time_8_4', 'show_points_8_4', 'countdown_8', 'question_points_8')});

const check_8_5 = document.getElementById('checkbox_8_5');
check_8_5.addEventListener('change', () => {givePoints('show_time_8_5', 'show_points_8_5', 'countdown_8', 'question_points_8')});

const check_9_1 = document.getElementById('checkbox_9_1');
check_9_1.addEventListener('change', () => {givePoints('show_time_9_1', 'show_points_9_1', 'countdown_9', 'question_points_9')});

const check_9_2 = document.getElementById('checkbox_9_2');
check_9_2.addEventListener('change', () => {givePoints('show_time_9_2', 'show_points_9_2', 'countdown_9', 'question_points_9')});

const check_9_3 = document.getElementById('checkbox_9_3');
check_9_3.addEventListener('change', () => {givePoints('show_time_9_3', 'show_points_9_3', 'countdown_9', 'question_points_9')});

const check_9_4 = document.getElementById('checkbox_9_4');
check_9_4.addEventListener('change', () => {givePoints('show_time_9_4', 'show_points_9_4', 'countdown_9', 'question_points_9')});

const check_9_5 = document.getElementById('checkbox_9_5');
check_9_5.addEventListener('change', () => {givePoints('show_time_9_5', 'show_points_9_5', 'countdown_9', 'question_points_9')});

const check_10_1 = document.getElementById('checkbox_10_1');
check_10_1.addEventListener('change', () => {givePoints('show_time_10_1', 'show_points_10_1', 'countdown_10', 'question_points_10')});

const check_10_2 = document.getElementById('checkbox_10_2');
check_10_2.addEventListener('change', () => {givePoints('show_time_10_2', 'show_points_10_2', 'countdown_10', 'question_points_10')});

const check_10_3 = document.getElementById('checkbox_10_3');
check_10_3.addEventListener('change', () => {givePoints('show_time_10_3', 'show_points_10_3', 'countdown_10', 'question_points_10')});

const check_10_4 = document.getElementById('checkbox_10_4');
check_10_4.addEventListener('change', () => {givePoints('show_time_10_4', 'show_points_10_4', 'countdown_10', 'question_points_10')});

const check_10_5 = document.getElementById('checkbox_10_5');
check_10_5.addEventListener('change', () => {givePoints('show_time_10_5', 'show_points_10_5', 'countdown_10', 'question_points_10')});

const check_11_1 = document.getElementById('checkbox_11_1');
check_11_1.addEventListener('change', () => {givePoints('show_time_11_1', 'show_points_11_1', 'countdown_11', 'question_points_11')});

const check_11_2 = document.getElementById('checkbox_11_2');
check_11_2.addEventListener('change', () => {givePoints('show_time_11_2', 'show_points_11_2', 'countdown_11', 'question_points_11')});

const check_11_3 = document.getElementById('checkbox_11_3');
check_11_3.addEventListener('change', () => {givePoints('show_time_11_3', 'show_points_11_3', 'countdown_11', 'question_points_11')});

const check_11_4 = document.getElementById('checkbox_11_4');
check_11_4.addEventListener('change', () => {givePoints('show_time_11_4', 'show_points_11_4', 'countdown_11', 'question_points_11')});

const check_11_5 = document.getElementById('checkbox_11_5');
check_11_5.addEventListener('change', () => {givePoints('show_time_11_5', 'show_points_11_5', 'countdown_11', 'question_points_11')});

const check_12_1 = document.getElementById('checkbox_12_1');
check_12_1.addEventListener('change', () => {givePoints('show_time_12_1', 'show_points_12_1', 'countdown_12', 'question_points_12')});

const check_12_2 = document.getElementById('checkbox_12_2');
check_12_2.addEventListener('change', () => {givePoints('show_time_12_2', 'show_points_12_2', 'countdown_12', 'question_points_12')});

const check_12_3 = document.getElementById('checkbox_12_3');
check_12_3.addEventListener('change', () => {givePoints('show_time_12_3', 'show_points_12_3', 'countdown_12', 'question_points_12')});

const check_12_4 = document.getElementById('checkbox_12_4');
check_12_4.addEventListener('change', () => {givePoints('show_time_12_4', 'show_points_12_4', 'countdown_12', 'question_points_12')});

const check_12_5 = document.getElementById('checkbox_12_5');
check_12_5.addEventListener('change', () => {givePoints('show_time_12_5', 'show_points_12_5', 'countdown_12', 'question_points_12')});

const check_13_1 = document.getElementById('checkbox_13_1');
check_13_1.addEventListener('change', () => {givePoints('show_time_13_1', 'show_points_13_1', 'countdown_13', 'question_points_13')});

const check_13_2 = document.getElementById('checkbox_13_2');
check_13_2.addEventListener('change', () => {givePoints('show_time_13_2', 'show_points_13_2', 'countdown_13', 'question_points_13')});

const check_13_3 = document.getElementById('checkbox_13_3');
check_13_3.addEventListener('change', () => {givePoints('show_time_13_3', 'show_points_13_3', 'countdown_13', 'question_points_13')});

const check_13_4 = document.getElementById('checkbox_13_4');
check_13_4.addEventListener('change', () => {givePoints('show_time_13_4', 'show_points_13_4', 'countdown_13', 'question_points_13')});

const check_13_5 = document.getElementById('checkbox_13_5');
check_13_5.addEventListener('change', () => {givePoints('show_time_13_5', 'show_points_13_5', 'countdown_13', 'question_points_13')});

const check_14_1 = document.getElementById('checkbox_14_1');
check_14_1.addEventListener('change', () => {givePoints('show_time_14_1', 'show_points_14_1', 'countdown_14', 'question_points_14')});

const check_14_2 = document.getElementById('checkbox_14_2');
check_14_2.addEventListener('change', () => {givePoints('show_time_14_2', 'show_points_14_2', 'countdown_14', 'question_points_14')});

const check_14_3 = document.getElementById('checkbox_14_3');
check_14_3.addEventListener('change', () => {givePoints('show_time_14_3', 'show_points_14_3', 'countdown_14', 'question_points_14')});

const check_14_4 = document.getElementById('checkbox_14_4');
check_14_4.addEventListener('change', () => {givePoints('show_time_14_4', 'show_points_14_4', 'countdown_14', 'question_points_14')});

const check_14_5 = document.getElementById('checkbox_14_5');
check_14_5.addEventListener('change', () => {givePoints('show_time_14_5', 'show_points_14_5', 'countdown_14', 'question_points_14')});

const check_15_1 = document.getElementById('checkbox_15_1');
check_15_1.addEventListener('change', () => {givePoints('show_time_15_1', 'show_points_15_1', 'countdown_15', 'question_points_15')});

const check_15_2 = document.getElementById('checkbox_15_2');
check_15_2.addEventListener('change', () => {givePoints('show_time_15_2', 'show_points_15_2', 'countdown_15', 'question_points_15')});

const check_15_3 = document.getElementById('checkbox_15_3');
check_15_3.addEventListener('change', () => {givePoints('show_time_15_3', 'show_points_15_3', 'countdown_15', 'question_points_15')});

const check_15_4 = document.getElementById('checkbox_15_4');
check_15_4.addEventListener('change', () => {givePoints('show_time_15_4', 'show_points_15_4', 'countdown_15', 'question_points_15')});

const check_15_5 = document.getElementById('checkbox_15_5');
check_15_5.addEventListener('change', () => {givePoints('show_time_15_5', 'show_points_15_5', 'countdown_15', 'question_points_15')});


function givePoints(show_time, show_points, count_time, count_points){
    var time = document.getElementById(count_time).textContent;
    var int_points = document.getElementById(count_points).textContent;
    document.getElementById(show_time).textContent = time;
    document.getElementById(show_points).textContent= int_points;


}



const winner_open = document.getElementById("winner");

winner_open.addEventListener('click', prize_winner)

function prize_winner(){
    var winner = prompt("Who is the winner? ");
    document.getElementById("name_winner").textContent = winner;
    modal_container_19.classList.add('show');


}

const closebutton_19= document.getElementById("close_19");
closebutton_19.addEventListener('click', () => {modal_container_19.classList.remove('show')});









