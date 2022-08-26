//const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

//localStorage.setItem("emojis", JSON.stringify(myEmojis))
let emojiStorage = JSON.parse(localStorage.getItem("emojis"))
console.log(emojiStorage)

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < emojiStorage.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = emojiStorage[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        emojiStorage.push(emojiInput.value)
        localStorage.setItem("emojis", JSON.stringify(emojiStorage))
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        emojiStorage.unshift(emojiInput.value)
        localStorage.setItem("emojis", JSON.stringify(emojiStorage))
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    emojiStorage.pop()
    localStorage.setItem("emojis", JSON.stringify(emojiStorage))
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    emojiStorage.shift()
    localStorage.setItem("emojis", JSON.stringify(emojiStorage))
    renderEmojis()
})

