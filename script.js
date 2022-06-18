// $ = tag(optional)
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const number = Number(prompt("몇 명이 참가하나요?"));
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");
let word; //currently displayed word ---
let newWord; //recently entered word ---

function clearBox() {
    $input.value = "";
    $input.focus();
}

function swapWord() {
    word = newWord;
    $word.innerText = word;
}

function nextUser() {
    let order = Number($order.innerText);
    if (order + 1 > number) {
        $order.innerText = 1;
    } else {
        $order.innerText = order + 1;
    }
}

function onClickButton() {
    console.log(newWord.length);
    // console.log("Click!");
    if (word === undefined) {
        swapWord();
        clearBox();
        //-------- after first --------
    } else if (word[word.length - 1] === newWord[0] && Number(newWord.length) === 3) {
        swapWord();
        nextUser();
        clearBox();
    } else { //if the words DON'T make a three letter chain ---
        alert("제대로 된 입력을 하시오!");
        clearBox();
    }
}

function oninput(event) {
    // console.log("Inputed ", event.target.value);
    newWord = event.target.value;

}
$input.addEventListener('keypress', function(e) {
    if (e.keyCode == 13) {
        onClickButton();
    }
});
$button.addEventListener("click", onClickButton);
$input.addEventListener("input", oninput);