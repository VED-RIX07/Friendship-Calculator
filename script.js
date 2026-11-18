let person1 = document.querySelector("#person_1");
let person2 = document.querySelector("#person_2");
let lookBtn = document.querySelector(".resultbtn");
let result = document.querySelector(".score");



lookBtn.addEventListener('click',(b)=>{
    b.preventDefault()
    calculate()
})

function calculate(){
    let user1 = person1.value;
    let user2 = person2.value;
    if (user1 === "" || user2 === "") {
        result.innerText = "Please enter both names!";
        return;
    }
    let score = (user1.length * user2.length * 7)%101;
    result.innerText = `${user1}  and  ${user2}  friendhip score is ${score}%`
}