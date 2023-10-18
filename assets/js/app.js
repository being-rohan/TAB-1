const cl = console.log;



const allLis = [...document.querySelectorAll(".outTabHeader li")];
const tabpanel = [...document.querySelectorAll(".tabpanel")]
cl(allLis)

const ontabClickHandler =(eve) => {
    cl(eve.target.getAttribute('data-id'))
    let getId = eve.target.getAttribute('data-id')
    tabpanel.forEach(tab =>{
        tab.classList.remove('active')
    })
    let div = document.getElementById(getId)
    div.classList.add('active')

    allLis.forEach(li => {
        li .classList.remove('active')
    })

    eve.target.classList.add('active')
}

allLis.forEach(li =>{
    li.addEventListener('click', ontabClickHandler)
});


