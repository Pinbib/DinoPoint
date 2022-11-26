# DinoPoint[README.MD](https://github.com/Pinbib/DinoPoint/files/10096534/README.MD)
# DinoPoint?
DinoPoint is a system that adds new tags whose work is crookedly written in js.
DinoPoint also has a built-in RaptorPoint module that connects together with DinoPoint.

# How to connect?
In the HTML file, first we include your main js file and then we include new tags
## Example:
*<script type="module" src="yourFile.js"></script><script type="module" src="/DinoPoint/index.js"></script>*
# 
After you have connected the javaScript index.js file, you can use the tags that DinoPoint adds.
But for everything to work correctly, you need to import the module itself to your js file in this way:
*import dino from '/DinoPoint/All/collect.js';*
#### Now you can use everythinNow you can fully use the functions of DinoPoint 

# HTML
After all the above operations, go to your html file and write the closing tag ''xfj'' in the following way:
*<xfj></xfj>*
and then it is better to prescribe the weight of the html in this tag for correct work 
# Tag xfj
This tag has no attributes, it defines what DinoPoint should work with, and also after each ",?!."This tag has no attributes, it defines what DinoPoint should work with, and also after each ",?!." it adds a tag <wbr> 
# Tag setting
This tag removes all padding from the body tag
# Tag colorRed , colorBlue , colorYellow 
makes the text written in these tags of a certain color
# Tag colorHef
This tag sets the color of the text inside it to the color that was specified in the color attribute
#### Example
*<colorHef color="red">text</colorHef>*
# Tag imitate
following the name, this tag imitates the id tag which was specified in the href attribute
#### Example
*<div id="id1">There are two of us</div><imitate href="id1"></imitate>*
# Tag topic 
This tag sets the theme for all html, the color that was written in the color attribute will be the color of the text, and the color written in the background attribute will be the color of the background
It is advisable to write the color tag first
#### Example
*<topic color="white" background="black">*
# JavaScript
To access RaptorPoint, you need to register this command:
*dino.raptor.(function)*
Or you can import the module directly thus:
*import raptor from "/DinoPoint/All/file/js/raptorPoint2,0.js"*
And after that you can do it like this:
*raptor.(function)*
# RaptorPoint Documentation
https://github.com/Pinbib/raptorPoint.js
