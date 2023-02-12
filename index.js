const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer=document.getElementById('emojiContainer');

for ( let i = 0 ; i < myEmojis.length; i++){
    //console.log (myEmojis[i]);
   // emojiContainer.innerHTML += `<span> ${myEmojis[i]} </span>`

    let emoji = document.createElement("span");
    emoji.textContent= myEmojis[i]
    emojiContainer.appendChild(emoji)


}
