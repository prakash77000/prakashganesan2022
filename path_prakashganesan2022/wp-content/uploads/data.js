var botName = "Prakash",
botAvatar = "",
conversationData = {"homepage": {1: { "statement": [ 
"Hello! My name is Prakash, I\'m the owner of this website and I\'d like to be your assistant here.", 
"I have just a few questions.", 
"What is your name?", 
], "input": {"name": "name", "consequence": 1.2}},1.2:{"statement": function(context) {return [ 
"Nice to meet you here, " + context.name  + "!", 
"As you can see, our website will be lauched very soon with brand new content such as projects, papers, exclusive videos and a shop.", 
"I know, you are very excited to see it, but I need a few days to finish it.", 
"Would you like to be first to see it?", 
];},"options": [{ "choice": "Tell me more","consequence": 1.4},{ 
"choice": "Nah! Don\'t care","consequence": 1.5}]},1.4: { "statement": [ 
"Cool! Please leave your email here and I will send you a message when it\'s ready.", 
], "email": {"email": "email", "consequence": 1.6}},1.5: {"statement": function(context) {return [ 
"Sad to hear that, " + context.name  + " :( See you next time… Refresh if you want to try again.", 
];}},1.6: { "statement": [ 
"Got it! Thank you and see you soon here!", 
"Have a great day!", 
]}}};