//		TASK 1

//Access HTML element with id tag-line.
let tagLine = document.getElementById('tag-line');

//Access all headings that belong to div with the class name bg-main-content.
let headings = document.querySelectorAll('.bg-main-content .box h2');

//Create the variable collect and assign it with content of tag-line.
let collect = `
${tagLine.innerText}
----------------------------------------
`;

//Loop through the node list of headings and append the content of each heading to variable collect
for (let i = 0; i < headings.length; i++) {
	collect += `${headings[i].innerText}\n`;
}

//After the loop, use alert to print collect
alert(collect);


//		TASK 2

//Collect all divs with the class name "box" in node list.
let boxes = document.querySelectorAll('.bg-main-content .box');
console.log(boxes);

//Access 13th div with class name box that belongs to div with the class name bg-main-content.
let collectTodo = `
${headings[12].innerText}
----------------------------------------
`;

let getBox13 = boxes[12].innerText

//Create variable collect and assign it with the heading and body-text that belong to the 13th div in order to resemble the screenshot below.
console.log(getBox13);


alert(boxes[12].innerText);
