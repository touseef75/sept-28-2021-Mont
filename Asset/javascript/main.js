
let incre = document.getElementById("incre");
let dicre = document.getElementById("dicre");
 
let audio = document.getElementById("audio")


let dua = document.getElementById("dua");
let dua2 = document.getElementById("duaimg");
let meaning = document.getElementById("meaning");

let heading = document.getElementById("head");






let imgarr = [
    {
        head : "وضو شروع کرنے کی دعا",
        duas :  "َبِسْمِ اللّٰہِ الرَّحْمٰنِ الرَّحِیْمِ",
        meanings : "شروع کرتا ہوں اللہ کے نام سے جو بڑا مہربان <br> نہایت رحم والا ہے",
        img2 :  "../images/wazu.jpg",
        audios : "../audio/WazuSePehleKiDua.mp3",

    },
   {
       head : "نیند سے بیدار ہونے کی دعا",
        duas :  "الْحَمْدُ لِلّٰہِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا <br> وَإِلَيْهِ النُّشُورُ",
        meanings : "تمام تعریفیں اللہ عزوجل کے لئے جس نے ہمیں موت (نیند) کے بعد حیات (بیداری) عطا فرمائی <br> اور ہمیں اسی طرف لوٹنا ہے",
        img2 :  "../images/wakeup.gif",
        audios : "../audio/NeendSeUthneKiDua.mp3",

    },
     {
         head : "کھانے سے پہلے کی دعا",
         duas :  "بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ",
        meanings : "میں نے الله کے نام کے ساتھ الله کی برکت پر کھانا <br> شروع کیا",
        img2 :  "../images/eat.gif",
        audios : "../audio/KhaneSePehleKiDua.mp3",

    }
   
   
]


let num1 = 1;
incre.addEventListener("click",function(){
    if(num1 == 3){
        num1 = 0;
        heading.innerHTML = imgarr[num1].head;
    dua.innerHTML = imgarr[num1].duas;
    meaning.innerHTML = imgarr[num1].meanings;
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;

    

    
    }else{
        heading.innerHTML = imgarr[num1].head;
    dua.innerHTML = imgarr[num1].duas;
    meaning.innerHTML = imgarr[num1].meanings;
    dua2.src = imgarr[num1].img2;
    audio.src = imgarr[num1].audios;

    num1++;
    }
})


let change = document.getElementById("img2");


let num2 = 0;
let play = document.querySelector(".play");

play.addEventListener("click",function(){
    if(num2 == 0){
    audio.play();
    change.src = "../images/pause7.jpg";
    num2 = 1;
    }else{
        num2 = 0;
      change.src = "../images/play6.png";
    audio.pause();
    }

})
