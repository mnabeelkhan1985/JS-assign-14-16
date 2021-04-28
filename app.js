var strings=[];
var boolean=[];
var numbers=[];
var eduInPak=["SSC","HSC","BCS","BS","B.COM","MS","M.Phil","PhD"];
document.write("<h1>Qualificaions</h1><br/>")
document.write("<ol><h1><li>",eduInPak[0],"</li>","<li>",eduInPak[1],"</li>","<li>",eduInPak[2],"</li>","<li>",eduInPak[3],"</li>","<li>",eduInPak[4],"</li>","<li>",eduInPak[5],"</li>","<li>",eduInPak[6],"</li>","<li>",eduInPak[7],"</li>");
var studentNames=["Michael","John","Tony"];
var studentMarks=[320,230,480];
var percent=(studentMarks[0]/500)*100;
document.write("<br/>Score of  ",studentNames[0],"  is  ",studentMarks[0],".Percentage:",percent,"%")
var percent=(studentMarks[1]/500)*100;
document.write("<br/>Score of  ",studentNames[1],"  is  ",studentMarks[1],".Percentage:",percent,"%")
var percent=(studentMarks[2]/500)*100;
document.write("<br/>Score of  ",studentNames[2],"  is  ",studentMarks[2],".Percentage:",percent,"%")
var colorNames=["Red","Green","Blue"];
document.write("<br/>initial array is  ",colorNames);
var color=prompt("Enter the color you want to add at the begining of array");
colorNames.unshift(color);
document.write("<br/>After adding at begining Now the array becomes<br/>",colorNames);
color=prompt("Enter the color you want to add at the end of array")
colorNames.push(color);
document.write("<br/>After adding to end Now the array becomes<br/>",colorNames);
color=prompt("Enter the two more colors you want to add at the begining of array color1");
colorNames.unshift(color);
color=prompt("Enter color 2");
colorNames.unshift(color);
document.write("<br/>After adding two colors at begining Now the array becomes<br/>",colorNames);
colorNames.shift();
document.write("<br/>After deleting first color Now the array becomes<br/>",colorNames);
colorNames.pop();
document.write("<br/>After deleting last color Now the array becomes<br/>",colorNames);
var index=+prompt("At which index no. you want to add the color?")
color=prompt("Enter the color your want to add at index",index)
colorNames[index]=color;
document.write("<br/>After updating color in the index no array becomes<br/>",colorNames);

