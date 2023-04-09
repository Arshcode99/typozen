const Sentances = ["Lorem, ipsum dolor sit amet consectetur adipisicing elit. ", "Impedit sunt consequuntur recusandae, eos modi excepturi sequi? ", "At ratione quas molestiae voluptatum iusto dicta dignissimos eum temporibus modi et, voluptas similique!"];
const Textarea = document.getElementById('textarea');
const Speed = document.getElementById('speed');
const Accuracy = document.getElementById('correct');
const errors = document.getElementById('errors');
const ShowText = document.getElementById('txt');
const Button = document.getElementById('btn');
const BtnDone = document.getElementById('btndone');
const Success = document.getElementById('succ');
const Failure = document.getElementById('fail');


//Shuffle Sentances:
function ShaffSent(){
    let RandomSent = Math.floor(Math.random()*Sentances.length);
    ShowText.innerHTML = Sentances[RandomSent];
    let date = new Date();
    StartTime = date.getTime();
    BtnDone.style.display="block";
    Button.style.display="none";
}

function WordCounter(TextVal){
    let response = TextVal.split(" ").length;
    return response;
}

function CompareWords(pre, out){
    let word1 = pre.split(" ");
    let word2 = out.split(" ");
    let cnt = 0;

    word1.forEach(function(item, index) {
        if (item == word2[index]){
            cnt++;
        }
    })

    let ErrWords = (word1.length - cnt);
    return ( Accuracy.innerHTML = cnt, errors.innerHTML = ErrWords, ErrWords );

}

function EndGame(){
    let date = new Date();
    EndTime = date.getTime();
    let TotalTime = ((EndTime - StartTime) / 1000);


    let TotalTypedByUser = Textarea.value;
    let CountTotalTypedByUser = WordCounter(TotalTypedByUser);

    let SpeedScored = Math.round((CountTotalTypedByUser / TotalTime) * 60);

    Speed.innerHTML= SpeedScored + " WPM";
    const Err = CompareWords(Textarea.value, ShowText.innerHTML)
    if(Speed >= 60){
        Failure.style.display = "flex";
        Failure.innerHTML = 'Need Improvement';
    }
    else{
        Success.style.display = "flex";
        Success.innerHTML = 'Good';
    }
}

Button.addEventListener('click', ()=>{
    document.getElementById('form').style.display="flex";
    ShaffSent();
})
BtnDone.addEventListener('click', ()=>{
    EndGame();
})
