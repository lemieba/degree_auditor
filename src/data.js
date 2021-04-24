// const { countReset } = require('console');

fs = require('fs');
var courses_file_name = './audit/degree_data/courses.json';
var courses_json = JSON.parse(fs.readFileSync(courses_file_name).toString());





/**
 * input
 * courses_json: 
 *    dict{1231: {
 *                crs_id: 1231,
 *                nearest_prereq
 *                ...
 *                term: 0,           
 *                }
 *          }
 * 
 * output:
 * courses_json:
 *    dict{1231: {
 *                crs_id: 1231,
 *                nearest_prereq
 *                dependents
 *                ...,
 *                term: 2
 *                min_term: 2,
 *                max_term: 4
 *     }  
 */
 for (const cid in courses_json) {
  if (Object.hasOwnProperty.call(courses_json, cid)) {
    const crs = courses_json[cid];
    crs['dependents'] = [];
    crs['min_term'] = 1;
    crs['max_term'] = 8;
  }
}



var visited = {};
function maxDepth(node) {
  if (visited[node.crs_id] === undefined) {
    var max_depth = 0;
    var curr_depth = 0;
    node.nearest_prereq.forEach(crs_id => {
      curr_depth = maxDepth(courses_json[crs_id]);
      if (curr_depth > max_depth) {
        max_depth = curr_depth;
      }
    });
    
    courses_json[node.crs_id].min_term = max_depth + 1;
    courses_json[node.crs_id].term = max_depth + 1;
    visited[node.crs_id] = max_depth + 1;
    return max_depth + 1;
  } else {
    return visited[node.crs_id];
  }
}
for (const cid in courses_json) {
  if (Object.hasOwnProperty.call(courses_json, cid)) {
    const crs = courses_json[cid];
    maxDepth(crs);
  }
}

// console.log(courses_json[18]);


// build dependents
var visited = {};

function DFS(node) {
  if (visited[node.crs_id] === undefined) {
    visited[node.crs_id] = true;
    node.nearest_prereq.forEach(child => {
      courses_json[child].dependents.push(node.crs_id);
      if (visited[child] === undefined) {
        DFS(courses_json[child]);
      }
    });
  }
}
for (const cid in courses_json) {
  if (Object.hasOwnProperty.call(courses_json, cid)) {
    const crs = courses_json[cid];
    DFS(crs);
  }
}
// console.log(courses_json[18]);
// console.log(courses_json[13]);
// console.log(courses_json[16]);


// max_term
var visited = {};
function reverseMaxDepth(node) {
  if (visited[node.crs_id] === undefined) {
    var max_depth = 0;
    var curr_depth = 0;
    node.dependents.forEach(crs_id => {
      curr_depth = reverseMaxDepth(courses_json[crs_id]);
      if (curr_depth > max_depth) {
        max_depth = curr_depth;
      }
    });
    
    courses_json[node.crs_id].max_term = 8 - max_depth ;
    visited[node.crs_id] = max_depth + 1;
    return max_depth + 1;
  } else {
    return visited[node.crs_id];
  }
}
for (const cid in courses_json) {
  if (Object.hasOwnProperty.call(courses_json, cid)) {
    const crs = courses_json[cid];
    reverseMaxDepth(crs);
  }
}

// fs.writeFileSync('./audit/degree_data/cs_degree.json', JSON.stringify(degree));
fs.writeFileSync(courses_file_name, JSON.stringify(courses_json));
 