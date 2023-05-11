const profileName = document.querySelector('div');
const rolesArray = document.getElementsByClassName('css-901oao css-cens5h r-op4f77 r-q4m81j');
const rolesArray2 = document.getElementsByClassName('css-901oao css-cens5h r-jwli3a r-q4m81j');
const badge = document.createElement('h1');
const badge2 = document.createElement('div');
badge.textContent = `HEYYYY`;
let rolesArrayHtml = ""
alert(badge.textContent)
setTimeout(function () {
    // let rolesArrayHtml = ""
    // why doesn't this work?
    if (profileName)
        (profileName).insertAdjacentElement('afterend', badge);
    console.log(badge.textContent)
}, 10000)
setTimeout(function () {
    if (rolesArray) {
        for (let i = 0; i < rolesArray.length; i++) {
            rolesArrayHtml += `<div>${rolesArray[i].innerText}</div>`
        }
        badge2.innerHTML = `<div>${rolesArrayHtml}</div>`
    }
    if (rolesArray2) {
        for (let i = 0; i < rolesArray2.length; i++) {
            rolesArrayHtml += `<div>${rolesArray2[i].innerText}</div>`
        }
        badge2.innerHTML = `${rolesArrayHtml}`
    }
    (profileName).insertAdjacentElement('afterend', badge2);
    console.log(badge2.textContent)
}, 20000)

// const rolesArray = document.getElementsByClassName('css-901oao css-cens5h r-op4f77 r-q4m81j');
// const rolesArray2 = document.getElementsByClassName('css-901oao css-cens5h r-jwli3a r-q4m81j');
// if (rolesArray) {
//   for (let i = 0; i < rolesArray.length; i++) {
//     console.log(rolesArray[i].innerText)
//   }
// }
// if (rolesArray2) {
//   for (let i = 0; i < rolesArray2.length; i++) {
//     console.log(rolesArray2[i].innerText)
//   }
// }

let gridhtml = `    
<div class="gameGrid">
        <div class="gridCell">
            <div>1</div>
            <div>
                <button id="b1">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
                <button onclick="deadBtn(this)"><img src="dead.png" /></button>
            </div>
        </div>
        <div class="gridCell">
            <div>2</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>3</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>4</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>5</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>6</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>7</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>8</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>9</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>10</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>11</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>12</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>13</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>14</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>15</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
        <div class="gridCell">
            <div>16</div>
            <div>
                <button onclick="goodBtn(this)">G</button>
                <button onclick="evilBtn(this)">E</button>
                <button onclick="uknBtn(this)">U</button>
            </div>
        </div>
    </div>`

function goodBtn(element) {
    console.log(element, element.parentNode)
    element.parentNode.parentNode.classList.remove("red")
    element.parentNode.parentNode.classList.remove("grey")
    element.parentNode.parentNode.classList.toggle("green")
}
function evilBtn(element) {
    element.parentNode.parentNode.classList.remove("green")
    element.parentNode.parentNode.classList.remove("grey")
    element.parentNode.parentNode.classList.toggle("red")
}
function uknBtn(element) {
    element.parentNode.parentNode.classList.remove("green")
    element.parentNode.parentNode.classList.remove("red")
    element.parentNode.parentNode.classList.toggle("grey")
}
function deadBtn(element) {
    element.parentNode.parentNode.classList.toggle("dead")
}
const grid = document.createElement("div")
grid.innerHTML = `<div>${gridhtml}</div>`
//doubt
if (profileName)
    (profileName).insertAdjacentElement('afterend', grid);

const goodBtn1 = document.getElementById('b1')
goodBtn1.addEventListener('click', () => { goodBtn(goodBtn1) })