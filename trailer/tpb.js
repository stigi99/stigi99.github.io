//Full list of quotes
var quotes = [
"Julian: That's not a new song bubbles",
"Ricky: Lucy, smokes, let's go\nLucy: Fuck you",
"There's two ways to look at it really, you either go to school to learn or you go to school to sell drugs and Ricky's here to sell drugs",
"Trevor, smokes, let's go.",
"J-Roc: Man I ain't changed since I started sellin' records, I'm keepin' it the fuck real yo",
"Trevor: But Julian this is a pirate's gun...\nBubbles: Well I guess that makes you long John dickweed",
"Lahey: Sorry Julian... it wasn't me... it was the liquor.",
"T: You're saying 'know what I'm saying' too many times. 80, 90 times, that's too many times, once or twice is cool, but 80 or 90 times maaann?",
"J-Roc: The day that J-Roc loses his flow is the day that hair on Jim Lahey's bald head grows",
"Randy:Cinnamon cocks!",
"Phil Collins: Boys I can't give ya a bam but I can give ya a-a green eggs and haaaaammmmm",
"Randy: Look, you guys have a good time frig dancing, and Barb, your scalloped potatoes are fucked",
"Fuck off, I got work to do.",
"Randy: I know what I want in life now, all I really wanna do is get high and mow lawns in the trailer park, and that's ok",
"Julian: Ray, what the fuck you doin man\nRay: Lost all the liquor money boys\nJulian: What?\nRay: That's the way she goes",
"J-Roc: There's 2 things mafukas gotta know about J-to the ROC - I spin more rhymes than a lazy susan, and I'm innocent until my guilt is proven. Peace, representin' Sunnyvale, straight the fuck up.",
"Lahey: Alright, let's get Ray some liquor and do this. Ray, whatta ya need, another 40?\nRay: Two Jimmy",
"Cyrus: My name is Cryus, CYRUS, and I don't give a fuck who you are\nRicky: Why don't you watch it there heavy metal dick",
"Phil Collins: What about you four eyes?\nBubbles: Did you just call me four eyes you big mustard tiger!",
"Julian: You're prostituting yourself out for cheeseburgers again, aren't ya?\nRandy: Man's gotta eat Julian",
"Ricky: It's not my fault that officers cock knuckles and dick lock here work with a drunk trailer park supervisor",
"J-Roc: Man cut... Ray truck driving passed out phantom 309 mothafucka",
"Lahey: I got $100 here for groceries, I got $1400 here for liquor, and I got $6000 for you to go and bail out a couple of shit puppets",
"BAAAAAAAMMMM",
"J-Roc: Randy, why don't you go on and eat a cheeseburger you basketball eatin', walrus ass muthafucka",
"Bubbles: Everybody CALM DOWN, for fuck's sake is this all about cheeseburgers?!",
"Bubbles: Mad MC skills leave you struck and I roll with my kitties and I'm hard as fuck",
"Ricky: J-Roc, I'm not a pessimist I'm an optometrist",
"Bubbles: I'm calling the cops in, the real cops Randy, not the crazy fake trailer park drunk fat gut crazy cops",
"Sebastian Bach: I was told that I wasn't supposed to swear in here tonight.. but I know, I just KNOW that there are some great FUCKING trains here in Bangor!",
"Ray: You think you've done ok for yourself don't ya? Gone from drunk male prostitute to associate trailer park supervisor.",
"Cryus: Old man gave me this when I was in grade 7.  Seen a lot of action, 9mm... Safety: ALWAYS off.",
"Lahey: Have a heart, this is where we live.\nRicky: Two things Lahey, put on some fucking pants and fuck off",
"J-Roc: I hear cola fizz and relish coagulatin with french fries and onion rings Randy, but you know what? I don't hear a heart muthafucka",
"Bible Pimp: Can you read my son?\nBubbles: Well that depends, can you go fuck yourself?",
"Bubbles: Lowest I've ever seen him. Drunk on swish, dancing around with an old fuckin dirty dog, eatin pizza crust off the fuckin ground",
"Jacob: How much can you bench press Julian?\nJulian: A lot Jacob.",
"J-Roc: So why don't you and that 15 cheeseburger eatin' rico suave looking muhfucka go on cause you ain't beatin nobody... peace",
"Randy: I'm not signing shit why don't you go back and pave your cave you fuckin caveman\nSam Losco: What the fuck did you call me?",
"Randy: Mr. Lahey, is this you talking or the liquor?\nLahey: Randy... I am the liquor",
"J-Roc: That's when I realized the airport has some unique opportunities\nT: That's right we had to seize the mothafucka\nJ-Roc: Carpe Dizzem",
"Ricky: Beauty is in the eye when you hold her",
"Ricky: Can you give me a bit of credjudice?",
"Ricky: Looks like a tropical earthquake blew through here",
"Ricky: I dont have enough people words to make it understand you the way it understands me",
"Ricky: It's clear to see who makes the pants here",
"Ricky: Make like a tree and fuck off",
"Ricky: Sweet empowered chicken things",
"Ricky: Jail is fun and the food and stuff is really good there.",
"Ricky: First up, drive doesn't work but third does. Neutral is park, reverse is second. If you want to use reverse, put it in drive.",
"Ray: The fucking way she goes boys.",
"Ricky: Nobody wants to admit they ate 9 cans of ravioli, but I did and I'm ashamed of myself.",
"Bubbles: Somethings fucky",
"Ricky: Open Liquor?! I live in my car: my car is my home... cops pull you over in your house, how can that be open liquor?",
"Julian: Trust me.. You fucked up!",
"Everyone sooner or later: Fuck off Cyrus!",
"Randy: Cops and dope don't mix, do they Mr. Lahey? \nLahey: Like shit and strawberry shortcake Randy.",
"Lahey: You might be able to fool the F.B.I. But you can't fool the F.B. ME",
"Lahey: You boys have loaded up a hair-trigger, double barrelled shitmachinegun, and the barrel’s pointing right at your own heads",
"Bubbles: How stoned are you, Ricky?\n Ricky: I don't know...40%?",
"Ricky: Well I was planning on taking the blame, ‘cause I mean there is a pretty good chance that I did it. Well, I mean I did do it. But Bubbles took the blame, so once someone takes the blame, whaddya do? I couldn't take it then, he had already taken it.",
"President of the International Association of Trailer Parks: The bottom line is, I ain't shook. Cause if the right hook comes out, crazy motherfuckers like you get knocked out. Don't be lookin me in the eyes boy. I ain't got no candy for you... Noo candy...",
"Ricky: Do you want to take it to Fucktown Lahey? Cause that's where this is headed: Downtown Fucktown!",
"Bubbles: Well hi there, Im bubbles, I steal shopping carts from one mall and sell them to another. So give me a fucking cheque please. I dont think thats gonna fucking happen",
"Mr. Lahey: Birds of a shitfeather flock together, Randy.",
"Mr. Lahey: Where ya stayin' Rick?\nRicky: At the fuck-off hotel Lahey",
"Ricky: I'm a better father than you will ever be Lucy....",
"Ricky: Smokes, let's go",
"Ricky: You know, your thoughts might be better than mine but I have thoughts going around in my head too about different thinkings and brain things that you can use... and doing different things... and I think I know what's best for my daughter. So fuck off and let me fix the brakes for my daughter and then I'll help you with the hash. You guys don't always know what's best. My fuckin' thoughts have feelings of their own too sometimes.",
"Ricky: Sparrows are stupid dad, they don't give a fuck about anything.",
"Bubbles: Does it really launch!? Does the tin man have a sheet metal cock?",
"Bubbles: &#9835 I got a gray kitty and a tabby too\nAnd an orange kitty who poos in my shoes\nGot mad MC skills That leave ya struck\nAnd I roll with my kitties and I'm hard as fuck\nDown with Plato and Socrates\nAnd I like to get down with my ladies\nSomethin somethin somethin\nSomethin somethin somethin \nUp in my shed, up in my shed &#9835",
"Bubbles: Look at this cocksucker right here. That's a good fucking kitty",
"Conky: Today's getaway has been brought to you by, the letter F... for fucked in the head, which you are, Ricky",
"Bubbles: Plato is the smartest man that ever lived. He said it’s okay to lie if it truly benefits the cause of the people. Cocksucker called it ‘The Noble Lie.",
"Bubbles: Boys, we are officially dealing with....a fucking samsquanch. Looks like a ten footer by the looks of that stuff.",
"Lahey: Look at me deputy ran, im mowing the air!",
"Ricky: Randy only fights with his pants off because he's worried that he'll ruin his tight pants so when the pants come off... look... the fuck.. out.",
"Ray: That's the way she goes, boys. Sometimes she goes, sometimes she doesn't cause that's the fuckin way she goes.",
"Bubbles: A dope trailer is no place for a kitty.",
"Ricky: What do you own space? NO, naysa does",
"Bubbles: OK everybody, before we get on to the main event we are going to see the long bodied alien match. In this corner in the shitty old corduroy pants with the translucent skin stretched over an alien frame, its Trevor the elongated skeleton.... get your fucking shirt off Trevor. And in this corner wearing the fucking same old workpants he has on everytime I see him its Jacob the twiggy alien man.... get your shirt off too Jacob. My god look at them they're both like fucking aliens.",
"Ricky: You know what Julian? I'm not the type of person to say itodaso. But I itodaso! I fuckin' a-todaso!",
"Ricky: Ones man garbage is another mans ungarbage",
"Ricky: The fastest way to make money is to rob a bank machine. It doesn't take a rocket appliance to figure that out!",
"Lahey: a shit apple doesn't fall far from a shit tree",
"Bubbles: Ray, pullin the copper wires out of your walls for liquor money is fucked",
"Ricky: Terry I am on fucking carts, I'm not in the food court, fuck...Terry I can't do that right now, I'm on carts, alright, fuck off",
"Lahey: We're sailing into a shit typhoon Randy, we'd better haul in the jib before it gets covered in shit",
"Ricky: The fake check trick works everytime I mean mall cops are really fuckin dumb compared to real cops, and worst case Ontario you just cancel the check....you never have to pay, its awesome.",
"Bubbles: Ricky! You're forcing Rita MacNeil and her band to harvest dope at gunpoint.",
"Ricky: Lucy is banging cops which is no big deal I guess. I don't run Lucy she's for to be her own woman",
"J-roc: I'd like to press charges on these two for car-jumpin-in-ery",
"Julian: It's not exactly robbing a bank, it's more like intercepting money transfers\nBubbles: Are the money transfers at the bank and we go in and take 'em?\nJulian: Yeah\nBubbles: That's robbin a bank.",
"Lahey: The winds of s*** are in the air.",
"Randy: Well sometimes life is hard, J-Roc.\nJ-Roc: Well Randy, sometimes....you're fat. You don't hear me talk about that, do you?",
"Lahey: Tick...tock. Tick...tock. shit clock's tickin' Rick.",
"Ricky: Its like getting 2 birds stoned at once",
"Sam Losco: 75 dollars...75 cents... I don't give a shit it's mine...I want it now. Or Plan B for you big guy.\nPhil Collins: Yeah well I hope plan B involves you brushing your cave teeth with a log!!!!" 
];

//Bad words that we want to censor
var naughtyWords = ["fuck","shit","cock","ass ","dick","mafukas"];

//current uncensored quote
var currentQuote = "";

//Returns the censored version of a string
function censor(text) {
  naughtyWords.forEach(function(w) {
    //I feel like there is a 1 line solution for these next five lines
    text = text.replace(new RegExp(w, 'ig'), function(match) {
      var censored = "";
      for (var i = 0; i < match.length; i++) censored += "*";
      return censored;
    });
    //----------------------------------------------------------------
  });
  return text;
}

//Retrieve a random uncensored quote
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

//Display a string in the quote display. 
// String is censored if check box is checked
function displayQuote(str) {
  currentQuote = str;
  if ($("#pg13check").is(":checked")) str = censor(str);
  //if (str.indexOf(":") != null) //TODO: Emphasize name of who's speaking
  $("#quote-box").html("<blockquote><p>" + str.replace(new RegExp("\n",'g'),"</p><p>") + "</p></blockquote>");
}

//Tweet the current quote 
//Will be censored if checkbox is checked
function tweetQuote() {
  var tweetMessage = currentQuote;
  if ($("#pg13check").is(":checked")) tweetMessage = censor(tweetMessage);
  tweetMessage.length = 140;
  var webIntent = "https://twitter.com/intent/tweet?url=https://bit.ly/1MHL0AW&text="+tweetMessage;
  window.open(webIntent);
}

//Prepare event handlers
$(document).ready(function() {

  $("#quote-button").click(function() {
    displayQuote(getRandomQuote());
  });

  $("#tweet-button").click(function() {
    tweetQuote();
  })

  $("#pg13check").change(function() {
    displayQuote(currentQuote);
  })

});