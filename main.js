let second = document.querySelector("div.time.seconds span:first-of-type");
let minut = document.querySelector("div.time.minuts span:first-of-type");
let hour = document.querySelector("div.time.hours span:first-of-type");
let day = document.querySelector("div.time.days span:first-of-type");
let newYear = new Date('2022/01/01').getTime();
let intervatTime = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = newYear - dateNow ;

    second.innerHTML = Math.trunc((dateDiff % (1000*60)) / (1000)) > 9 ? `${Math.trunc((dateDiff % (1000*60)) / (1000))}` : `0${Math.trunc((dateDiff % (1000*60)) / (1000))}`;

    minut.innerHTML = Math.trunc((dateDiff % (1000*60*60))  / (1000 * 60)) > 9 ? `${Math.trunc((dateDiff % (1000*60*60))  / (1000 * 60))}` :`0${Math.trunc((dateDiff % (1000*60*60))  / (1000 * 60))}`;

    hour.innerHTML = Math.trunc((dateDiff % (1000*60*60*24)) / (1000*60*60)) > 9 ? Math.trunc((dateDiff % (1000*60*60*24)) / (1000*60*60)) : `0${Math.trunc((dateDiff % (1000*60*60*24)) / (1000*60*60))}`;

    day.innerHTML = Math.trunc(dateDiff / (1000*60*60*24)) > 9 ? `${Math.trunc(dateDiff / (1000*60*60*24))}` : `0${Math.trunc(dateDiff / (1000*60*60*24))}`; 

},1000);

let sectionskills = document.getElementById("our-skills");
let skills = document.querySelectorAll("div.box-skills div.skill");
let sectionStats = document.getElementById("stats");
let boxsStats = sectionStats.lastElementChild.children;
let spanStats = document.querySelectorAll("div.box-stats span:first-of-type");
let teams = document.querySelector(".Team-Members");

window.onscroll = function() {
    opacityContainer();
    chargeSkills();
    incrementStats();
}
function chargeSkills() {
    if( Math.ceil(window.scrollY) > sectionskills.offsetTop - 416 && Math.ceil(window.scrollY) < sectionskills.offsetTop - 400 ) {
        let inter = setInterval(() => {
            if(parseInt(skills[0].dataset.volum) < 80 ){
                skills[0].dataset.volum = `${parseInt(skills[0].dataset.volum) + 1}%`;
                skills[0].firstElementChild.style.width = skills[0].dataset.volum;
            }
            if(parseInt(skills[1].dataset.volum) < 70 ){
                skills[1].dataset.volum = `${parseInt(skills[1].dataset.volum) + 1}%`;
                skills[1].firstElementChild.style.width = skills[1].dataset.volum;
            }
            if(parseInt(skills[3].dataset.volum) < 80 ){
                skills[3].dataset.volum = `${parseInt(skills[3].dataset.volum) + 1}%`;
                skills[3].firstElementChild.style.width = skills[3].dataset.volum;
            }
            if(parseInt(skills[2].dataset.volum) < 85 ){
                skills[2].dataset.volum = `${parseInt(skills[2].dataset.volum) + 1}%`;
                skills[2].firstElementChild.style.width = skills[2].dataset.volum;
            }else {
                clearInterval(inter);
            }
        },20);
    }
}
function incrementStats() {
    if(Math.ceil(window.scrollY) > sectionStats.offsetTop - 400 && Math.ceil(window.scrollY) < sectionStats.offsetTop - 390) {
        for(let i = 0 ; i < boxsStats.length ; i ++) {
            boxsStats[i].classList.add('show');
        }
        let interv = setInterval(()=>{
        if(parseInt(spanStats[0].innerHTML) < 300 ){
            spanStats[0].innerHTML = `${parseInt(spanStats[0].innerHTML) + 1}`;
        }
        if(parseInt(spanStats[1].innerHTML) < 400) {
            spanStats[1].innerHTML = `${parseInt(spanStats[1].innerHTML) + 1}`;
        }
        if(parseInt(spanStats[2].innerHTML) < 12) {
            spanStats[2].innerHTML = `${parseInt(spanStats[2].innerHTML) + 1}`;
        }
        if(parseInt(spanStats[3].innerHTML) < 500) {
            spanStats[3].innerHTML = `${parseInt(spanStats[3].innerHTML) + 1}K`;
        }else {
            clearInterval(interv);
        }
        },1);
    }
}
function opacityContainer() {
    if( Math.ceil(window.scrollY) > teams.offsetTop - 49 && Math.ceil(window.scrollY) < teams.offsetTop - 29){
        for(let i=0; i < teams.lastElementChild.children.length ; i++){
            teams.lastElementChild.children[i].style.opacity = '1';
        }
    }
}