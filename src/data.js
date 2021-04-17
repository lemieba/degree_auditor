const { countReset } = require('console');

fs = require('fs');
var courses_file_name = './audit/degree_data/courses.json';
var courses_json = JSON.parse(fs.readFileSync(courses_file_name).toString());
console.log(courses_json);

var course_dict = {};
courses_json.forEach(course => {
  course_dict[course.crs_id] = {
    "crs_id": course.crs_id,
    "dept": course.dept,
    "crs_num": course.crs_num,
    "crs_name": course.crs_name,
    "credits": course.credits,
    "nearest_prereq": course.nearest_prereq,
  };
});
console.log(courses_json)
// fs.writeFileSync('./audit/degree_data/cs_degree.json', JSON.stringify(degree));
fs.writeFileSync(courses_file_name, JSON.stringify(course_dict));
