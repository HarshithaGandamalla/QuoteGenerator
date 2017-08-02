document.getElementById("button").addEventListener('click',generateQuote);

function generateQuote(){

    

    var array=[
               {quote: "Don\'t cry because it\'s over, smile because it happened.",
                author:"Dr. Seuss"},
               {quote:
                "I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.",
                author:"Marilyn Monroe"},{
                quote:"Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.",
                author:"Albert Einstein"},
                {quote:"Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.",
                author:"Bernard M. Baruch"}
              ];

    
   
var n=array.length;
var random_quote=Math.floor(Math.random()*n);

var old_quote=document.getElementById('quote');

    if(!old_quote)
        {
            
            old_quote=document.getElementById('newquote');

        }
    
var quote_author=document.createElement('blockquote');    
quote_author.id="newquote";
    
var paragraph=document.createElement('p');
var quote=document.createTextNode(array[random_quote].quote);
paragraph.appendChild(quote);
    
var author=document.createElement('footer');
var name=document.createTextNode(array[random_quote].author);
author.appendChild(name);
    
    
    
quote_author.appendChild(paragraph);
quote_author.appendChild(author);
    
old_quote.parentNode.replaceChild(quote_author,old_quote);
 
    
    
        
}


