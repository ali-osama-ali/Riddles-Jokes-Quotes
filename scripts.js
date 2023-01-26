const memes = ["./imgs/meme0.jpg", "./imgs/meme1.jpg", "./imgs/meme2.jpg", "./imgs/meme3.jpg", "./imgs/meme4.jpg"] ;
const jokes = [];
const quotes = [] ;
const riddels = [] ;
const riddels_answers = [] ;
const riddle = document.getElementById("riddle") ;
let riddleAnswerBtn = document.getElementById("riddle-answer-button");
let riddleAnswerIndex ;
//----------------------------------------------------------------------------------------------
// jokes values 
jokes[0] = "Two bytes meet.  The first byte asks, 'Are you ill?' The second byte replies, 'No, just feeling a bit off.'" ;
jokes[1] = "There are only 10 kinds of people in this world: those who know binary and those who don’t." ;
jokes[2] = "A programmer walks to the butcher shop and buys a kilo of meat.  An hour later he comes back upset that the butcher shortchanged him by 24 grams." ;
jokes[3] = "Programming is 10% science, 20% ingenuity, and 70% getting the ingenuity to work with the science." ;
jokes[4] = "There are three kinds of lies: Lies, damned lies, and benchmarks." ;

// quotes values
quotes[0] = "“ Code is like humor. When you have to explain it, it is bad.”  Cory House";
quotes[1] = "“Fix the cause, not the symptom.”  Steve Maguire";
quotes[2] = "“Simplicity is the soul of efficiency.”  Austin Freeman";
quotes[3] = "“The best way to learn is to learn.”"
quotes[4] = "“First, solve the problem. Then, write the code.”  John Johnson"

//riddles values
riddels[0] = "What time is it when an elephant sits on a fence?" ;
riddels[1] = "What gets wet while drying?" ;
riddels[2] = "What is the difference between a jeweler and a jailer?" ;
riddels[3] = "What can go up a chimney down, but can't go down a chimney up?" ;
riddels[4] = "What can you hold in your right hand, but never in your left hand?" ;
//riddles answers
riddels_answers[0] = "Answer : Time to fix the fence." ;
riddels_answers[1] = "Answer : A towel" ;
riddels_answers[2] = "Answer : A jeweler sells watches and a jailer watches cells." ;
riddels_answers[3] = "Answer : An umbrella" ;
riddels_answers[4] = "Answer : Your left hand" ;
//-----------------------------------------------------------------------------------------------------

function getRandomNumber()
{
    return Math.floor(Math.random() * 5);
}

// Clear the outputs of all sections(meme , joke , quote , riddle).
function clearOutput() 
{
    let allParagraphs = document.querySelectorAll("p") ;
    for(let i of allParagraphs)
    {
        i.innerHTML = "" ; 
    }
    let meme = document.getElementById("meme") ; 
    meme.removeAttribute("src") ; 
}

function showMeme()
{
    let random = getRandomNumber() ;
    clearOutput();
    let memeImgTag = document.getElementById("meme") ;
    memeImgTag.style.width = "400px" ;
    memeImgTag.src = memes[random] ;
}

function showJoke()
{
    let random = getRandomNumber() ;
    clearOutput() ;
    const jokeParagraph = document.getElementById("joke") ; 
    jokeParagraph.textContent = jokes[random]; 
}

function showQuote()
{
    let random = getRandomNumber() ;
    clearOutput() ;
    const quoteParagraph = document.getElementById("quote") ; 
    quoteParagraph.textContent = jokes[random]; 
}

function showRiddle()
{
    let random = getRandomNumber() ;
    riddleAnswerIndex = random ;
    clearOutput() ;
    // riddle is already declared in the begining of the script
    riddle.textContent = riddels[random]; 
}

function showRiddleAnswer()
{
    let riddleAnswerParagraph = document.getElementById("riddleAnswer") ;

    // The riddle answer will appear only when there is a riddle shown and the riddle answer button clicked once.
    if(riddle.textContent != "" && riddleAnswerParagraph.textContent == "")
    {
        riddleAnswerParagraph.textContent = riddels_answers[riddleAnswerIndex] ; 
    }
    else if(riddleAnswerParagraph.textContent!= "")
    {
        alert("Answer is already shown.") ;
    }
    else if(riddle.textContent == "")
    {
        alert("No Riddle Answer!!!") ;
    }
}
