let myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer=document.getElementById('emojiContainer');
const pushBtn= document.getElementById('push-btn');
const emojiInput = document.getElementById('emoji-input');
const unshiftBtn= document.getElementById('unshift-btn');


function renderArr(){
    emojiContainer.innerHTML='';
    for ( let i = 0 ; i < myEmojis.length; i++){
    //console.log (myEmojis[i]);
   // emojiContainer.innerHTML += `<span> ${myEmojis[i]} </span>`
        let emoji = document.createElement("span");
        emoji.textContent= myEmojis[i];
        emojiContainer.appendChild(emoji);

    }
}

pushBtn.addEventListener('click', function (){
    if (emojiInput.value!='' && emojiInput.value!=' ' ){
   // console.log(emojiInput.value);
    myEmojis.push(emojiInput.value);
    console.log(myEmojis);
    emojiInput.value='';
    renderArr();
    }
})

unshiftBtn.addEventListener('click', function() {

    if (emojiInput.value!='' && emojiInput.value!=' ' ){
        // console.log(emojiInput.value);
         myEmojis.unshift(emojiInput.value);
         console.log(myEmojis);
         emojiInput.value='';
         renderArr();
         }
     })
