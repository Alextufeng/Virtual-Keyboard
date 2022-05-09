
document.addEventListener('DOMContentLoaded', ()=>{
    let body = document.querySelector('body');

    let container = document.createElement('div');
    container.className = 'container';
    body.append(container);

    let nightMode = document.createElement('div');
    nightMode.className = 'night_mode';
    let changeColor = document.createElement('div');
    changeColor.className = 'change_light_color';
    let keyboardWrapper = document.createElement('div');
    keyboardWrapper.className = 'keyboard_wrapper';
    let textArea = document.createElement('textarea');
    textArea.className = 'text';
    container.append(nightMode);
    container.append(changeColor);
    container.append(keyboardWrapper);
    container.append(textArea);
    

   /* function setFocus(){
        document.getElementsByClassName('text').focus();
   }
   setFocus()*/

    let toggleCircle = document.createElement('div');
    toggleCircle.className = 'toggle_circle';
    nightMode.append(toggleCircle);

    let colorsDiv = document.createElement('div');
    colorsDiv.className = 'colors';
    changeColor.append(colorsDiv);
    let colorsInput = document.createElement('input');
    colorsInput.className = 'colors_input';
    colorsInput.type = 'color';
    colorsDiv.append(colorsInput);

    let keyboardLights = document.createElement('div');
    keyboardLights.className = 'keyboard_lights';
    let keyboardKeys = document.createElement('div');
    keyboardKeys.className = 'keyboard_keys';
    keyboardWrapper.append(keyboardLights);
    keyboardWrapper.append(keyboardKeys);

    let keyboardRow1 = document.createElement('div');
    let keyboardRow2 = document.createElement('div');
    let keyboardRow3 = document.createElement('div');
    let keyboardRow4 = document.createElement('div');
    let keyboardRow5 = document.createElement('div');
    keyboardRow1.classList = 'row';
    keyboardRow2.classList = 'row';
    keyboardRow3.classList = 'row';
    keyboardRow4.classList = 'row';
    keyboardRow5.classList = 'row';
    keyboardKeys.append(keyboardRow1);
    keyboardKeys.append(keyboardRow2);
    keyboardKeys.append(keyboardRow3);
    keyboardKeys.append(keyboardRow4);
    keyboardKeys.append(keyboardRow5);
    
    let key1 = document.createElement('div');
    key1.innerHTML = '`';
    key1.classList = 'keys';
    let key2 = document.createElement('div');
    key2.innerHTML = '1';
    key2.classList = 'keys';
    let key3 = document.createElement('div');
    key3.innerHTML = '2';
    key3.classList = 'keys';
    let key4 = document.createElement('div');
    key4.innerHTML = '3';
    key4.classList = 'keys';
    let key5 = document.createElement('div');
    key5.innerHTML = '4';
    key5.classList = 'keys';
    let key6 = document.createElement('div');
    key6.innerHTML = '5';
    key6.classList = 'keys';
    let key7 = document.createElement('div');
    key7.innerHTML = '6';
    key7.classList = 'keys';
    let key8 = document.createElement('div');
    key8.innerHTML = '7';
    key8.classList = 'keys';
    let key9 = document.createElement('div');
    key9.innerHTML = '8';
    key9.classList = 'keys';
    let key10 = document.createElement('div');
    key10.innerHTML = '9';
    key10.classList = 'keys';
    let key11 = document.createElement('div');
    key11.innerHTML = '0';
    key11.classList = 'keys';
    let key12 = document.createElement('div');
    key12.innerHTML = '-';
    key12.classList = 'keys';
    let key13 = document.createElement('div');
    key13.innerHTML = '=';
    key13.classList = 'keys';
    let key14 = document.createElement('div');
    key14.innerHTML = '&#8701;Backspace';
    key14.classList = 'keys';
    key14.classList.add('backspace_key');
    keyboardRow1.append(key1);
    keyboardRow1.append(key2);
    keyboardRow1.append(key3);
    keyboardRow1.append(key4);
    keyboardRow1.append(key5);
    keyboardRow1.append(key6);
    keyboardRow1.append(key7);
    keyboardRow1.append(key8);
    keyboardRow1.append(key9);
    keyboardRow1.append(key10);
    keyboardRow1.append(key11);
    keyboardRow1.append(key12);
    keyboardRow1.append(key13);
    keyboardRow1.append(key14);
    
    let key15 = document.createElement('div');
    key15.innerHTML = 'Tab &#8633;';
    key15.classList = 'keys';
    key15.classList.add('tab_key');
    let key16 = document.createElement('div');
    key16.innerHTML = 'Q';
    key16.classList = 'keys';
    let key17 = document.createElement('div');
    key17.innerHTML = 'W';
    key17.classList = 'keys';
    let key18 = document.createElement('div');
    key18.innerHTML = 'E';
    key18.classList = 'keys';
    let key19 = document.createElement('div');
    key19.innerHTML = 'R';
    key19.classList = 'keys';
    let key20 = document.createElement('div');
    key20.innerHTML = 'T';
    key20.classList = 'keys';
    let key21 = document.createElement('div');
    key21.innerHTML = 'Y';
    key21.classList = 'keys';
    let key22 = document.createElement('div');
    key22.innerHTML = 'U';
    key22.classList = 'keys';
    let key23 = document.createElement('div');
    key23.innerHTML = 'I';
    key23.classList = 'keys';
    let key24 = document.createElement('div');
    key24.innerHTML = 'O';
    key24.classList = 'keys';
    let key25 = document.createElement('div');
    key25.innerHTML = 'P';
    key25.classList = 'keys';
    let key26 = document.createElement('div');
    key26.innerHTML = '[';
    key26.classList = 'keys';
    let key27 = document.createElement('div');
    key27.innerHTML = ']';
    key27.classList = 'keys';
    let key28 = document.createElement('div');
    key28.innerHTML = '\\';
    key28.classList = 'keys';
    key28.classList.add('back_slash_key');
    keyboardRow2.append(key15);
    keyboardRow2.append(key16);
    keyboardRow2.append(key17);
    keyboardRow2.append(key18);
    keyboardRow2.append(key19);
    keyboardRow2.append(key20);
    keyboardRow2.append(key21);
    keyboardRow2.append(key22);
    keyboardRow2.append(key23);
    keyboardRow2.append(key24);
    keyboardRow2.append(key25);
    keyboardRow2.append(key26);
    keyboardRow2.append(key27);
    keyboardRow2.append(key28);

    let key29 = document.createElement('div');
    key29.innerHTML = 'Caps Lock';
    key29.classList = 'keys';
    key29.classList.add('caps_lock_key');
    let key30 = document.createElement('div');
    key30.innerHTML = 'A';
    key30.classList = 'keys';
    let key31 = document.createElement('div');
    key31.innerHTML = 'S';
    key31.classList = 'keys';
    let key32 = document.createElement('div');
    key32.innerHTML = 'D';
    key32.classList = 'keys';
    let key33 = document.createElement('div');
    key33.innerHTML = 'F';
    key33.classList = 'keys';
    let key34 = document.createElement('div');
    key34.innerHTML = 'G';
    key34.classList = 'keys';
    let key35 = document.createElement('div');
    key35.innerHTML = 'H';
    key35.classList = 'keys';
    let key36 = document.createElement('div');
    key36.innerHTML = 'J';
    key36.classList = 'keys';
    let key37 = document.createElement('div');
    key37.innerHTML = 'K';
    key37.classList = 'keys';
    let key38 = document.createElement('div');
    key38.innerHTML = 'L';
    key38.classList = 'keys';
    let key39 = document.createElement('div');
    key39.innerHTML = ';';
    key39.classList = 'keys';
    let key40 = document.createElement('div');
    key40.innerHTML = '\'';
    key40.classList = 'keys';
    let key41 = document.createElement('div');
    key41.innerHTML = '&#8617; Enter';
    key41.classList = 'keys';
    key41.classList.add('enter_key');
    keyboardRow3.append(key29);
    keyboardRow3.append(key30);
    keyboardRow3.append(key31);
    keyboardRow3.append(key32);
    keyboardRow3.append(key33);
    keyboardRow3.append(key34);
    keyboardRow3.append(key35);
    keyboardRow3.append(key36);
    keyboardRow3.append(key37);
    keyboardRow3.append(key38);
    keyboardRow3.append(key39);
    keyboardRow3.append(key40);
    keyboardRow3.append(key41);
    
    let key42 = document.createElement('div');
    key42.innerHTML = '&#8679; Shift';
    key42.classList = 'keys';
    key42.classList.add('shift_left');
    let key43 = document.createElement('div');
    key43.innerHTML = 'Z';
    key43.classList = 'keys';
    let key44 = document.createElement('div');
    key44.innerHTML = 'X';
    key44.classList = 'keys';
    let key45 = document.createElement('div');
    key45.innerHTML = 'C';
    key45.classList = 'keys';
    let key46 = document.createElement('div');
    key46.innerHTML = 'V';
    key46.classList = 'keys';
    let key47 = document.createElement('div');
    key47.innerHTML = 'B';
    key47.classList = 'keys';
    let key48 = document.createElement('div');
    key48.innerHTML = 'N';
    key48.classList = 'keys';
    let key49 = document.createElement('div');
    key49.innerHTML = 'M';
    key49.classList = 'keys';
    let key50 = document.createElement('div');
    key50.innerHTML = ',';
    key50.classList = 'keys';
    let key51 = document.createElement('div');
    key51.innerHTML = '.';
    key51.classList = 'keys';
    let key52 = document.createElement('div');
    key52.innerHTML = '/';
    key52.classList = 'keys';
    key52.classList.add('slash_key');
    let key53 = document.createElement('div');
    key53.innerHTML = '&#9650;';
    key53.classList = 'keys';
    key53.classList.add('up_key');
    let key54 = document.createElement('div');
    key54.innerHTML = '&#8679; Shift';
    key54.classList = 'keys';
    key54.classList.add('shift_right');
    keyboardRow4.append(key42);
    keyboardRow4.append(key43);
    keyboardRow4.append(key44);
    keyboardRow4.append(key45);
    keyboardRow4.append(key46);
    keyboardRow4.append(key47);
    keyboardRow4.append(key48);
    keyboardRow4.append(key49);
    keyboardRow4.append(key50);
    keyboardRow4.append(key51);
    keyboardRow4.append(key52);
    keyboardRow4.append(key53);
    keyboardRow4.append(key54);

    let key55 = document.createElement('div');
    key55.innerHTML = 'Ctrl';
    key55.classList = 'keys';
    key55.classList.add('ctrl_left');
    let key56 = document.createElement('div');
    key56.innerHTML = 'Win';
    key56.classList = 'keys';
    key56.classList.add('win_key');
    let key57 = document.createElement('div');
    key57.innerHTML = 'Alt';
    key57.classList = 'keys';
    key57.classList.add('alt_left');
    let key58 = document.createElement('div');
    key58.innerHTML = ' ';
    key58.classList = 'keys';
    key58.classList.add('space_key');
    let key59 = document.createElement('div');
    key59.innerHTML = 'Alt';
    key59.classList = 'keys';
    key59.classList.add('alt_right');
    let key60 = document.createElement('div');
    key60.innerHTML = 'Ctrl';
    key60.classList = 'keys';
    key60.classList.add('ctrl_right');
    let key61 = document.createElement('div');
    key61.innerHTML = '&#9668;';
    key61.classList = 'keys';
    key61.classList.add('left_key');
    let key62 = document.createElement('div');
    key62.innerHTML = '&#9660;';
    key62.classList = 'keys';
    key62.classList.add('down_key');
    let key63 = document.createElement('div');
    key63.innerHTML = '&#9658;';
    key63.classList = 'keys';
    key63.classList.add('right_key');
    let key64 = document.createElement('div');
    key64.innerHTML = 'Fn';
    key64.classList = 'keys';
    key64.classList.add('func_key');
    keyboardRow5.append(key55);
    keyboardRow5.append(key56);
    keyboardRow5.append(key57);
    keyboardRow5.append(key58);
    keyboardRow5.append(key59);
    keyboardRow5.append(key60);
    keyboardRow5.append(key61);
    keyboardRow5.append(key62);
    keyboardRow5.append(key63);
    keyboardRow5.append(key64);

let keys = document.querySelectorAll('.keys');
let space_key = document.querySelector('.space_key');
let backspace_key = document.querySelector('.backspace_key');
let tab_key = document.querySelector('.tab_key');
let back_slash_key = document.querySelector('.back_slash_key');
let slash_key = document.querySelector('.slash_key');
let enter_key = document.querySelector('.enter_key');
let shift_left = document.querySelector('.shift_left');
let shift_right = document.querySelector('.shift_right');
let ctrl_left = document.querySelector('.ctrl_left');
let ctrl_right = document.querySelector('.ctrl_right');
let caps_lock_key = document.querySelector('.caps_lock_key');
let win_key = document.querySelector('.win_key');
let alt_right = document.querySelector('.alt_right');
let alt_left = document.querySelector('.alt_left');
let up_key = document.querySelector('.up_key');
let left_key = document.querySelector('.left_key');
let down_key = document.querySelector('.down_key');
let right_key = document.querySelector('.right_key');
//let func_key = document.querySelector('.func_key');


let text_input = document.querySelector('.text');
let night_mode = document.querySelector('.night_mode');
let toggle_circle = document.querySelector('.toggle_circle');
let change_color = document.querySelector('.change_light_color');
let colors_input = document.querySelector('.colors_input');
let keyboard_wrapper = document.querySelector('.keyboard_wrapper');
let keyboard_lights = document.querySelector('.keyboard_lights');
let keyboard_keys = document.querySelector('.keyboard_keys');

for (let i=0; i<keys.length; i++) {
    keys[i].setAttribute('keyName', keys[i].innerText);
    keys[i].setAttribute('lowerCaseName', keys[i].innerText.toLowerCase());
}

window.addEventListener('keydown', function(e){
    for (let i=0; i<keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyName') || e.key == keys[i].getAttribute('lowerCaseName')){
        keys[i].classList.add('active');
        keys[i].classList.remove('remove');
        }
    
        if (e.code == 'Space') {
            space_key.classList.add('active');
        }
        if (e.code == 'ShiftLeft') {
            shift_left.classList.add('active');
            //shift_right.classList.add('active');
        }
        if (e.code == 'ShiftRight') {
            shift_right.classList.add('active');
            //shift_left.classList.add('active');
        }
        if (e.code == 'Tab') {
            tab_key.classList.toggle('active');
        }
        if (e.code == 'Backspace') {
            backspace_key.classList.add('active');
        }
        if (e.code == 'Backslash') {
            back_slash_key.classList.add('active');
        }
        if (e.code == 'Slash') {
            slash_key.classList.add('active');
        }
        if (e.code == 'ControlLeft') {
            ctrl_left.classList.add('active');
        }
        if (e.code == 'AltLeft') {
            alt_left.classList.add('active');
        }
        if (e.code == 'AltRight') {
            alt_right.classList.add('active');
        }
        if (e.code == 'ControlRight') {
            ctrl_right.classList.add('active');
        }
        if (e.code == 'ArrowUp') {
            up_key.classList.add('active');
        }
        if (e.code == 'ArrowLeft') {
            left_key.classList.add('active');
        }
        if (e.code == 'ArrowDown') {
            down_key.classList.add('active');
        }
        if (e.code == 'ArrowRight') {
            right_key.classList.add('active');
        }
        if (e.code == 'NumpadEnter') {
            enter_key.classList.add('active');
        }
        if (e.code == 'MetaLeft') {
            win_key.classList.add('active');
        }
                
    }
        if (e.code == 'CapsLock') {
            caps_lock_key.classList.toggle('active');
        }
    
})

window.addEventListener('keyup', function(e){
    for (let i=0; i<keys.length; i++) {
        if (e.key == keys[i].getAttribute('keyName') || e.key == keys[i].getAttribute('lowerCaseName')){
        keys[i].classList.remove('active')
        keys[i].classList.add('remove')
        }
        setTimeout(()=>{
            keys[i].classList.remove('remove');
        },200)
    
        if (e.code == 'Space') {
            space_key.classList.remove('active');
            space_key.classList.add('remove');
        }
        if (e.code == 'ShiftLeft') {
            shift_left.classList.remove('active');
            shift_left.classList.remove('remove');
        }
        if (e.code == 'ShiftRight') {
            shift_right.classList.remove('active');
            shift_right.classList.remove('remove');
        }
        //if (e.code == 'Tab') {
           // tab_key.classList.remove('active');
            //tab_key.classList.remove('remove');
        //}
        if (e.code == 'Backspace') {
            backspace_key.classList.remove('active');
            backspace_key.classList.remove('remove');
        }
        if (e.code == 'Backslash') {
            back_slash_key.classList.remove('active');
            back_slash_key.classList.remove('remove');
        }
        if (e.code == 'Slash') {
            slash_key.classList.remove('active');
            slash_key.classList.remove('remove');
        }
        if (e.code == 'ControlLeft') {
            ctrl_left.classList.remove('active');
            ctrl_left.classList.remove('remove');
        }
        if (e.code == 'AltLeft') {
            alt_left.classList.remove('active');
            alt_left.classList.remove('remove');
        }
        if (e.code == 'AltRight') {
            alt_right.classList.remove('active');
            alt_right.classList.remove('remove');
        }
        if (e.code == 'ControlRight') {
            ctrl_right.classList.remove('active');
            ctrl_right.classList.remove('remove');
        }
        if (e.code == 'ArrowUp') {
            up_key.classList.remove('active');
            up_key.classList.remove('remove');
        }
        if (e.code == 'ArrowLeft') {
            left_key.classList.remove('active');
            left_key.classList.remove('remove');
        }
        if (e.code == 'ArrowDown') {
            down_key.classList.remove('active');
            down_key.classList.remove('remove');
        }
        if (e.code == 'ArrowRight') {
            right_key.classList.remove('active');
            right_key.classList.remove('remove');
        }
        if (e.code == 'NumpadEnter') {
            enter_key.classList.remove('active');
            enter_key.classList.remove('remove');
        }
        if (e.code == 'MetaLeft') {
            win_key.classList.remove('active');
            win_key.classList.remove('remove');
        }
    }
})

key1.addEventListener('click', function(){
    key1.classList.toggle('remove');
    textArea.innerHTML += key1.getAttribute('keyName');
})
key2.addEventListener('click', function(){
    key2.classList.toggle('remove');
    textArea.innerHTML += key2.getAttribute('keyName');
})
key3.addEventListener('click', function(){
    key3.classList.toggle('remove');
    textArea.innerHTML += key3.getAttribute('keyName');
})
key4.addEventListener('click', function(){
    key4.classList.toggle('remove');
    textArea.innerHTML += key4.getAttribute('keyName');
})
key5.addEventListener('click', function(){
    key5.classList.toggle('remove');
    textArea.innerHTML += key5.getAttribute('keyName');
})
key6.addEventListener('click', function(){
    key6.classList.toggle('remove');
    textArea.innerHTML += key6.getAttribute('keyName');
})
key7.addEventListener('click', function(){
    key7.classList.toggle('remove');
    textArea.innerHTML += key7.getAttribute('keyName');
})
key8.addEventListener('click', function(){
    key8.classList.toggle('remove');
    textArea.innerHTML += key8.getAttribute('keyName');
})
key9.addEventListener('click', function(){
    key9.classList.toggle('remove');
    textArea.innerHTML += key9.getAttribute('keyName');
})
key10.addEventListener('click', function(){
    key10.classList.toggle('remove');
    textArea.innerHTML += key10.getAttribute('keyName');
})
key11.addEventListener('click', function(){
    key11.classList.toggle('remove');
    textArea.innerHTML += key11.getAttribute('keyName');
})
key12.addEventListener('click', function(){
    key12.classList.toggle('remove');
    textArea.innerHTML += key12.getAttribute('keyName');
})
key13.addEventListener('click', function(){
    key13.classList.toggle('remove');
    textArea.innerHTML += key13.getAttribute('keyName');
})

key16.addEventListener('click', function(){
    key16.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
    textArea.innerHTML += key16.getAttribute('keyName');
    } else {
        textArea.innerHTML += key16.getAttribute('lowerCaseName');
    }
})
key17.addEventListener('click', function(){
    key17.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
    textArea.innerHTML += key17.getAttribute('keyName');
    } else {
        textArea.innerHTML += key17.getAttribute('lowerCaseName');
    }
})
key18.addEventListener('click', function(){
    key18.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key18.getAttribute('keyName');
        } else {
            textArea.innerHTML += key18.getAttribute('lowerCaseName');
        }
})
key19.addEventListener('click', function(){
    key19.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key19.getAttribute('keyName');
        } else {
            textArea.innerHTML += key19.getAttribute('lowerCaseName');
        }
})
key20.addEventListener('click', function(){
    key20.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key20.getAttribute('keyName');
        } else {
            textArea.innerHTML += key20.getAttribute('lowerCaseName');
        }
})
key21.addEventListener('click', function(){
    key21.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key21.getAttribute('keyName');
        } else {
            textArea.innerHTML += key21.getAttribute('lowerCaseName');
        }
})
key22.addEventListener('click', function(){
    key22.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key22.getAttribute('keyName');
        } else {
            textArea.innerHTML += key22.getAttribute('lowerCaseName');
        }
})
key23.addEventListener('click', function(){
    key23.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key23.getAttribute('keyName');
        } else {
            textArea.innerHTML += key23.getAttribute('lowerCaseName');
        }
})
key24.addEventListener('click', function(){
    key24.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key24.getAttribute('keyName');
        } else {
            textArea.innerHTML += key24.getAttribute('lowerCaseName');
        }
})
key25.addEventListener('click', function(){
    key25.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key25.getAttribute('keyName');
        } else {
            textArea.innerHTML += key25.getAttribute('lowerCaseName');
        }
})
key26.addEventListener('click', function(){
    key26.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key26.getAttribute('keyName');
        } else {
            textArea.innerHTML += key26.getAttribute('lowerCaseName');
        }
})
key27.addEventListener('click', function(){
    key27.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key27.getAttribute('keyName');
        } else {
            textArea.innerHTML += key27.getAttribute('lowerCaseName');
        }
})
key28.addEventListener('click', function(){
    key28.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key28.getAttribute('keyName');
        } else {
            textArea.innerHTML += key28.getAttribute('lowerCaseName');
        }
})

key30.addEventListener('click', function(){
    key30.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key30.getAttribute('keyName');
        } else {
            textArea.innerHTML += key30.getAttribute('lowerCaseName');
        }
})
key31.addEventListener('click', function(){
    key31.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key31.getAttribute('keyName');
        } else {
            textArea.innerHTML += key31.getAttribute('lowerCaseName');
        }
})
key32.addEventListener('click', function(){
    key32.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key32.getAttribute('keyName');
        } else {
            textArea.innerHTML += key32.getAttribute('lowerCaseName');
        }
})
key33.addEventListener('click', function(){
    key33.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key33.getAttribute('keyName');
        } else {
            textArea.innerHTML += key33.getAttribute('lowerCaseName');
        }
})
key34.addEventListener('click', function(){
    key34.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key34.getAttribute('keyName');
        } else {
            textArea.innerHTML += key34.getAttribute('lowerCaseName');
        }
})
key35.addEventListener('click', function(){
    key35.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key35.getAttribute('keyName');
        } else {
            textArea.innerHTML += key35.getAttribute('lowerCaseName');
        }
})
key36.addEventListener('click', function(){
    key36.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key36.getAttribute('keyName');
        } else {
            textArea.innerHTML += key36.getAttribute('lowerCaseName');
        }
})
key37.addEventListener('click', function(){
    key37.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key37.getAttribute('keyName');
        } else {
            textArea.innerHTML += key37.getAttribute('lowerCaseName');
        }
})
key38.addEventListener('click', function(){
    key38.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key38.getAttribute('keyName');
        } else {
            textArea.innerHTML += key38.getAttribute('lowerCaseName');
        }
})
key39.addEventListener('click', function(){
    key39.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key39.getAttribute('keyName');
        } else {
            textArea.innerHTML += key39.getAttribute('lowerCaseName');
        }
})
key40.addEventListener('click', function(){
    key40.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key40.getAttribute('keyName');
        } else {
            textArea.innerHTML += key40.getAttribute('lowerCaseName');
        }
})

key43.addEventListener('click', function(){
    key43.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key43.getAttribute('keyName');
        } else {
            textArea.innerHTML += key43.getAttribute('lowerCaseName');
        }
})
key44.addEventListener('click', function(){
    key44.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key44.getAttribute('keyName');
        } else {
            textArea.innerHTML += key44.getAttribute('lowerCaseName');
        }
})
key45.addEventListener('click', function(){
    key45.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key45.getAttribute('keyName');
        } else {
            textArea.innerHTML += key45.getAttribute('lowerCaseName');
        }
})
key46.addEventListener('click', function(){
    key46.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key46.getAttribute('keyName');
        } else {
            textArea.innerHTML += key46.getAttribute('lowerCaseName');
        }
})
key47.addEventListener('click', function(){
    key47.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key47.getAttribute('keyName');
        } else {
            textArea.innerHTML += key47.getAttribute('lowerCaseName');
        }
})
key48.addEventListener('click', function(){
    key48.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key48.getAttribute('keyName');
        } else {
            textArea.innerHTML += key48.getAttribute('lowerCaseName');
        }
})
key49.addEventListener('click', function(){
    key49.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key49.getAttribute('keyName');
        } else {
            textArea.innerHTML += key49.getAttribute('lowerCaseName');
        }
})
key50.addEventListener('click', function(){
    key50.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key50.getAttribute('keyName');
        } else {
            textArea.innerHTML += key50.getAttribute('lowerCaseName');
        }
})
key51.addEventListener('click', function(){
    key51.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key51.getAttribute('keyName');
        } else {
            textArea.innerHTML += key51.getAttribute('lowerCaseName');
        }
})
key52.addEventListener('click', function(){
    key52.classList.toggle('remove');
    if (caps_lock_key.classList.contains('active')) {
        textArea.innerHTML += key52.getAttribute('keyName');
        } else {
            textArea.innerHTML += key52.getAttribute('lowerCaseName');
        }
})
key53.addEventListener('click', function(){
    key53.classList.toggle('remove');
    textArea.innerHTML += key53.getAttribute('keyName');
})

key61.addEventListener('click', function(){
    key61.classList.toggle('remove');
    textArea.innerHTML += key61.getAttribute('keyName');
})
key62.addEventListener('click', function(){
    key62.classList.toggle('remove');
    textArea.innerHTML += key62.getAttribute('keyName');
})
key63.addEventListener('click', function(){
    key63.classList.toggle('remove');
    textArea.innerHTML += key63.getAttribute('keyName');
})

key29.addEventListener('click', function(){
    key29.classList.toggle('active');
    //textArea.innerHTML += key29.getAttribute('keyName');
})

key58.addEventListener('click', function(){
    key58.classList.toggle('remove');
    textArea.innerHTML += ' ';
})

key41.addEventListener('click', function(){
    key41.classList.toggle('remove');
    textArea.innerHTML += '\n';
})

//key14.addEventListener('click', function(){
  //  key14.classList.toggle('remove');
    //backspace
//})


night_mode.addEventListener('click', function(){
    toggle_circle.classList.toggle('active');
    body.classList.toggle('active');
    text_input.classList.toggle('active');
    keyboard_wrapper.classList.toggle('active');
    keyboard_keys.classList.toggle('active');
    keyboard_lights.classList.toggle('active');
    night_mode.classList.toggle('active');
    change_color.classList.toggle('active');
    for (let i = 0; i < keys.length; i++) {
       keys[i].classList.toggle('keys_night');
    }
})

colors_input.addEventListener('input', function(){
    for (let i=0; i<keys.length; i++) {
        keys[i].style.color = colors_input.value;
    }
    keyboard_lights.style.background = colors_input.value;
})

})  