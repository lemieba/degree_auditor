// fs = require('fs');
//
// var m = JSON.parse(fs.readFileSync('degrees.json').toString());
// var degrees = [
//   {
//     name: "Computer Science",
//     type: "Bachelor of Science",
//     courses:[
//       {
//         dept:
//         crs_id:
//         crs_name:
//         credits:
//       }
//     ],
//     options: [
//       {
//         name:
//         options:
//       }
//     ]
//   },
// ]

const fs = require('fs');

var courses = [
  ["CORE", "100", "New Student Orientation Seminar", 1],
  ["CORE", "150", "Composition I", 3],
  ["CORE", "160", "Composition II", 3],
  ["CORE", "120", "Critical Thinking", 2],
  ["CORE", "201", "Introduction to Business and Entrepreneurship", 3],
  ["CORE", "260", "Humanities", 3],
  ["CORE", "360", "The World and Its Peoples", 4],
  ["MATH", "120", "Calculus I", 4],
  ["MATH", "125", "Discrete Mathematics", 4],
  ["MATH", "240", "Linear Algebra", 4],
  ["NSCI", "360", "Statistics", 4],
  ["CSCI", "110/110L", "Introduction to Computer Science I & Lab", 4],
  ["CSCI", "120/120L", "Introduction to Computer Science II & Lab", 4],
  ["CSCI", "201", "Sophomore Seminar", 0.5],
  ["CSCI", "202", "Sophomore Seminar", 0.5],
  ["CSCI", "230/230L", "Introduction to Computer Architecture & Lab", 4],
  ["CSCI", "241", "Data Structures and Algorithms", 4],
  ["CSCI", "261", "Operating Systems", 4],
  ["CSCI", "301", "Junior Seminar", 0.5],
  ["CSCI", "302", "Junior Seminar", 0.5],
  ["CSCI", "410", "Senior Seminar", 2]
];
var options = [
  ["A-Cultural Exposure",  [["Art", "291", "", 0], ["Art", "292", "", 0], ["English", "275", "", 0], ["History", "180", "", 0], ["History", "270", "", 0], ["Music", "200", "", 0],  ["Music", "206", "", 0]]],
  ["C-The Arts",  [["CORE", "220", "", 0], ["Music", "207", "", 0], ["Music", "208", "", 0], ["Music", "205", "", 0], ["Art", "207", "", 0], ["Art", "208", "", 0]]],
  ["D-The Science", [["CORE", "240", "", 0], ["BIOL", "101/101L", "", 0], ["CHEM", "113/103", "", 0], ["PHY", "130/130L", "", 0]]],
  ["E-Social Science", [["ECON", "230", "", 0], ["ECON", "240", "", 0], ["HIS", "160", "", 0], ["PSCI", "122", "", 0], ["PSY", "180", "", 0], ["SOC", "100", "", 0]]],
  ["language 01", [["SPAN", "101", "Elementary I", 4], ["FREN", "101", "Elementary I", 4]]],
  ["language 02", [["SPAN", "102", "Elementary II", 4], ["FREN", "102", "Elementary II", 4]]],
  ["language 03", [["SPAN", "200", "Intermediate", 4], ["FREN", "200", "Intermediate", 4]]],
  ["Programming Language or Database", [["CSCI", "282", "Programming Languages", 4], ["CSCI", "312", "Database", 4]]],
  ["Major Required Electives(6-8)", [["CSCI", "", "", 0], ["CSCI", "", "", 0], ["CSCI", "", "", 0]]]
];

var degree = {
  name: "Computer Science",
  type: "Bachelor of Science Dual degree",
  courses: [],
  options: []
}

//         dept:
//         crs_id:
//         crs_name:
//         credits:

// option {
//   name:
//   course_options:
// }
for (var i = 0; i < courses.length; i++) {
  course = {}
  course["dept"] = courses[i][0]
  course["crs_id"] = courses[i][1]
  course["crs_name"] = courses[i][2]
  course["credits"] = courses[i][3]
  degree["courses"].push(course)
}

for (var i = 0; i < options.length; i++) {

  var option = {
    name: options[i][0],
    course_options: []
  }
  for (var j = 0; j < options[i][1].length; j++) {
    course = {
      dept:  options[i][1][j][0],
      crs_id:  options[i][1][j][1],
      crs_name: options[i][1][j][2],
      credits: options[i][1][j][3]
  };
    option["course_options"].push(course);
  }
  degree["options"].push(option)
}
console.log(degree);

var jsonContent = JSON.stringify(degree);

// console.log(degree);

fs.writeFile("bs_computerscience_joint.json", jsonContent, 'utf8', function(err) {
  if (err) {
    console.log("An error occured while writing JSON object to file");
    return console.log(err);
  }
  console.log("JSON file has been saved.");
});
