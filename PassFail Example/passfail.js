/*
	Pass/Fail Demonstration 
	May 14, 2018
	Sylvia Froese
*/

function load()
{
	// Event listener for the main form submission
	let submit = document.getElementById("submit");
	submit.addEventListener("click", checkData);

	// Event listener for the clear button
	let clear = document.getElementById("clearbutton");
	clear.addEventListener("click", clearButton);

	if (localStorage.getItem("marksData"))
	{
		// populate the data from local storage into the table
		document.getElementById("list").innerHTML = localStorage.getItem("marksData");

		// display the clear button, as data does exist
		document.getElementById("clearbutton").style.display = "block";
	}

}

function checkData()
{
	// validate the data
	// retrieve the values from the DOM
	let name = document.getElementById("name").value;
	let mark = document.getElementById("mark").value;

	// Javascript will treat an empty string as 0, so we must parse first
	mark = parseFloat(mark);
	if (name != "" && isNaN(mark) == false)
	{
		displayData(name, mark);
	}

	resetFields();
}

function displayData(name,mark)
{
	// Declare variables
	let passfail;
	let tbody = document.getElementsByTagName("tbody")[0];

	// Check to see if the mark is a pass or a fail
	if (mark >= 50)
	{
		passfail = "Pass";
	}
	else
	{
		passfail = "Fail";
	}
	

	// Create the elements using DOM methods
	// Advantages:
	//     Much cleaner code than building a large string
	//	   Adding and removing child nodes has no effect on
	//     on sibling nodes

	//  Build the row and its tds
	let newTr = document.createElement("tr");
	let newNameTd = document.createElement("td");
	let newMarkTd = document.createElement("td");
	let newPFTd = document.createElement("td");

	// add the data to the new elements and append to the tr
	newNameTd.innerHTML = name;
	newMarkTd.innerHTML = mark;
	newPFTd.innerHTML = passfail;
	newTr.appendChild(newNameTd);
	newTr.appendChild(newMarkTd);
	newTr.appendChild(newPFTd);

	// append the new tr to the tbody
	tbody.appendChild(newTr);

	clearbutton.style.display = "block";

	saveListData();
}

// saves the data in table to local storage
function saveListData()
{
	let tableData = document.getElementById("list").innerHTML;

	localStorage.setItem("marksData", tableData);
}

//	Clears the data in the form and hides the clear button
function clearButton()
{
	let tbody = document.getElementsByTagName("tbody")[0];
	while (tbody.firstChild) 
	{
		tbody.removeChild(tbody.firstChild);
	}

	// hide the clear button
	clearbutton.style.display = "none";
	resetFields();

	saveListData();
}

//	Resets the form's inputs
function resetFields()
{
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
}

document.addEventListener("DOMContentLoaded", load);












