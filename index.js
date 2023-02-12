// A function that multiplies two numbers.
function  multiply(first_num, second_num)
{
    return(first_num * second_num);
}

console.log(multiply(100, 13));

// String concatination.
let first_name = "Aduragbemi";
let last_name = "Oduntan";
let stuter_track = "Backend Development";
let skills = ["HTML", " CSS", " WordPress"];
let favourite_colour = "grey";
let country_independence = "1960";

let sentence = `My name is ${first_name + " " + last_name} a citizen of Nigeria an independent nation since ${country_independence}. I am currently enrolled in Stutern studying ${stuter_track}. At the moment I have a beginner knowledge of ${skills}, which I am studying to become proficient in.`;

console.log(sentence);