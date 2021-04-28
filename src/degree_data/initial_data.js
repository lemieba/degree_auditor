
const initial_data = {
    courses: {
        "1": {
            "crs_id": "1",
            "dept": "CORE",
            "crs_num": "100",
            "crs_name": "New Student Orientation Seminar",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                4
            ],
            "min_term": 1,
            "max_term": 7
        },
        "2": {
            "crs_id": "2",
            "dept": "CORE",
            "crs_num": "150",
            "crs_name": "Composition I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                3
            ],
            "min_term": 1,
            "max_term": 7
        },
        "3": {
            "crs_id": "3",
            "dept": "CORE",
            "crs_num": "160",
            "crs_name": "Composition II",
            "credits": 3,
            "nearest_prereq": [
                2
            ],
            "term": 2,
            "dependents": [],
            "min_term": 2,
            "max_term": 8
        },
        "4": {
            "crs_id": "4",
            "dept": "CORE",
            "crs_num": "120",
            "crs_name": "Critical Thinking",
            "credits": 2,
            "nearest_prereq": [
                1
            ],
            "term": 2,
            "dependents": [],
            "min_term": 2,
            "max_term": 8
        },
        "5": {
            "crs_id": "5",
            "dept": "CORE",
            "crs_num": "201",
            "crs_name": "Introduction to Business and Entrepreneurship",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "6": {
            "crs_id": "6",
            "dept": "CORE",
            "crs_num": "260",
            "crs_name": "Humanities",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "7": {
            "crs_id": "7",
            "dept": "CORE",
            "crs_num": "360",
            "crs_name": "The World and Its Peoples",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "8": {
            "crs_id": "8",
            "dept": "MATH",
            "crs_num": "120",
            "crs_name": "Calculus I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "9": {
            "crs_id": "9",
            "dept": "MATH",
            "crs_num": "125",
            "crs_name": "Discrete Mathematics",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                10,
                11
            ],
            "min_term": 1,
            "max_term": 7
        },
        "10": {
            "crs_id": "10",
            "dept": "MATH",
            "crs_num": "240",
            "crs_name": "Linear Algebra",
            "credits": 4,
            "nearest_prereq": [
                9
            ],
            "term": 2,
            "dependents": [],
            "min_term": 2,
            "max_term": 8
        },
        "11": {
            "crs_id": "11",
            "dept": "NSCI",
            "crs_num": "360",
            "crs_name": "Statistics",
            "credits": 4,
            "nearest_prereq": [
                9
            ],
            "term": 2,
            "dependents": [],
            "min_term": 2,
            "max_term": 8
        },
        "12": {
            "crs_id": "12",
            "dept": "CSCI",
            "crs_num": "110/110L",
            "crs_name": "Introduction to Computer Science I & Lab",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                13
            ],
            "min_term": 1,
            "max_term": 4
        },
        "13": {
            "crs_id": "13",
            "dept": "CSCI",
            "crs_num": "120/120L",
            "crs_name": "Introduction to Computer Science II & Lab",
            "credits": 4,
            "nearest_prereq": [
                12
            ],
            "term": 2,
            "dependents": [
                16
            ],
            "min_term": 2,
            "max_term": 5
        },
        "14": {
            "crs_id": "14",
            "dept": "CSCI",
            "crs_num": "201",
            "crs_name": "Sophomore Seminar",
            "credits": 0.5,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                15
            ],
            "min_term": 1,
            "max_term": 4
        },
        "15": {
            "crs_id": "15",
            "dept": "CSCI",
            "crs_num": "202",
            "crs_name": "Sophomore Seminar",
            "credits": 0.5,
            "nearest_prereq": [
                14
            ],
            "term": 2,
            "dependents": [
                19
            ],
            "min_term": 2,
            "max_term": 5
        },
        "16": {
            "crs_id": "16",
            "dept": "CSCI",
            "crs_num": "230/230L",
            "crs_name": "Introduction to Computer Architecture & Lab",
            "credits": 4,
            "nearest_prereq": [
                13
            ],
            "term": 3,
            "dependents": [
                17
            ],
            "min_term": 3,
            "max_term": 6
        },
        "17": {
            "crs_id": "17",
            "dept": "CSCI",
            "crs_num": "241",
            "crs_name": "Data Structures and Algorithms",
            "credits": 4,
            "nearest_prereq": [
                16
            ],
            "term": 4,
            "dependents": [
                18
            ],
            "min_term": 4,
            "max_term": 7
        },
        "18": {
            "crs_id": "18",
            "dept": "CSCI",
            "crs_num": "261",
            "crs_name": "Operating Systems",
            "credits": 4,
            "nearest_prereq": [
                17
            ],
            "term": 5,
            "dependents": [],
            "min_term": 5,
            "max_term": 8
        },
        "19": {
            "crs_id": "19",
            "dept": "CSCI",
            "crs_num": "301",
            "crs_name": "Junior Seminar",
            "credits": 0.5,
            "nearest_prereq": [
                15
            ],
            "term": 3,
            "dependents": [
                20
            ],
            "min_term": 3,
            "max_term": 6
        },
        "20": {
            "crs_id": "20",
            "dept": "CSCI",
            "crs_num": "302",
            "crs_name": "Junior Seminar",
            "credits": 0.5,
            "nearest_prereq": [
                19
            ],
            "term": 4,
            "dependents": [
                21
            ],
            "min_term": 4,
            "max_term": 7
        },
        "21": {
            "crs_id": "21",
            "dept": "CSCI",
            "crs_num": "410",
            "crs_name": "Senior Seminar",
            "credits": 2,
            "nearest_prereq": [
                20
            ],
            "term": 5,
            "dependents": [],
            "min_term": 5,
            "max_term": 8
        },
        "22": {
            "crs_id": "22",
            "dept": "Art",
            "crs_num": "291",
            "crs_name": "African American Art",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "23": {
            "crs_id": "23",
            "dept": "Art",
            "crs_num": "292",
            "crs_name": "African Art",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "24": {
            "crs_id": "24",
            "dept": "English",
            "crs_num": "275",
            "crs_name": "African American Literature",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "25": {
            "crs_id": "25",
            "dept": "History",
            "crs_num": "180",
            "crs_name": "African History",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "26": {
            "crs_id": "26",
            "dept": "History",
            "crs_num": "270",
            "crs_name": "African American History",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "27": {
            "crs_id": "27",
            "dept": "Music",
            "crs_num": "200",
            "crs_name": "World Music",
            "credits": 2,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "28": {
            "crs_id": "28",
            "dept": "Music",
            "crs_num": "206",
            "crs_name": "Crosscurrents in African and African American Music",
            "credits": 2,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "29": {
            "crs_id": "29",
            "dept": "CORE",
            "crs_num": "220",
            "crs_name": "Creative Arts",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "30": {
            "crs_id": "30",
            "dept": "Music",
            "crs_num": "207",
            "crs_name": "20th Century Music",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "31": {
            "crs_id": "31",
            "dept": "Music",
            "crs_num": "208",
            "crs_name": "History of Jazz",
            "credits": 2,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "32": {
            "crs_id": "32",
            "dept": "Music",
            "crs_num": "205",
            "crs_name": "Music in America",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "33": {
            "crs_id": "33",
            "dept": "Art",
            "crs_num": "207",
            "crs_name": "Arts and Ideas I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "34": {
            "crs_id": "34",
            "dept": "Art",
            "crs_num": "208",
            "crs_name": "Arts and Ideas II",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "35": {
            "crs_id": "35",
            "dept": "CORE",
            "crs_num": "240",
            "crs_name": "Natural Science",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "36": {
            "crs_id": "36",
            "dept": "BIOL",
            "crs_num": "101/101L",
            "crs_name": "General Biology/ General Biology Lab",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "37": {
            "crs_id": "37",
            "dept": "CHEM",
            "crs_num": "113/103",
            "crs_name": "Gen. Chem. I/Experiments in Gen Chem.",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "38": {
            "crs_id": "38",
            "dept": "PHY",
            "crs_num": "130/130L",
            "crs_name": "University Physics and Experiment in Physics",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "39": {
            "crs_id": "39",
            "dept": "ECON",
            "crs_num": "230",
            "crs_name": "Principles of Microeconomics",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "40": {
            "crs_id": "40",
            "dept": "ECON",
            "crs_num": "240",
            "crs_name": "Principles of Macroeconomics",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "41": {
            "crs_id": "41",
            "dept": "HIS",
            "crs_num": "160",
            "crs_name": "United States History",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "42": {
            "crs_id": "42",
            "dept": "PSCI",
            "crs_num": "122",
            "crs_name": "American Political Systems",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "43": {
            "crs_id": "43",
            "dept": "PSY",
            "crs_num": "180",
            "crs_name": "General Psychology",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "44": {
            "crs_id": "44",
            "dept": "SOC",
            "crs_num": "100",
            "crs_name": "Introduction to Sociology",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "45": {
            "crs_id": "45",
            "dept": "SPAN",
            "crs_num": "101",
            "crs_name": "Elementary I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [
                47
            ],
            "min_term": 1,
            "max_term": 6
        },
        "46": {
            "crs_id": "46",
            "dept": "FREN",
            "crs_num": "101",
            "crs_name": "Elementary I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "47": {
            "crs_id": "47",
            "dept": "SPAN",
            "crs_num": "102",
            "crs_name": "Elementary II",
            "credits": 4,
            "nearest_prereq": [
                45
            ],
            "term": 2,
            "dependents": [
                49
            ],
            "min_term": 2,
            "max_term": 7
        },
        "48": {
            "crs_id": "48",
            "dept": "FREN",
            "crs_num": "102",
            "crs_name": "Elementary II",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "49": {
            "crs_id": "49",
            "dept": "SPAN",
            "crs_num": "200",
            "crs_name": "Intermediate",
            "credits": 4,
            "nearest_prereq": [
                47
            ],
            "term": 3,
            "dependents": [],
            "min_term": 3,
            "max_term": 8
        },
        "50": {
            "crs_id": "50",
            "dept": "FREN",
            "crs_num": "200",
            "crs_name": "Intermediate",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "51": {
            "crs_id": "51",
            "dept": "CSCI",
            "crs_num": "282",
            "crs_name": "Programming Languages",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "52": {
            "crs_id": "52",
            "dept": "CSCI",
            "crs_num": "312",
            "crs_name": "Database",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "53": {
            "crs_id": "53",
            "dept": "BAD ",
            "crs_num": "110",
            "crs_name": "Buisness Information Systems ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "54": {
            "crs_id": "54",
            "dept": "MFL",
            "crs_num": "101",
            "crs_name": "Elementary Foreign Language I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "55": {
            "crs_id": "55",
            "dept": "MATH",
            "crs_num": "101",
            "crs_name": "College Algebra",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "56": {
            "crs_id": "56",
            "dept": "BAD",
            "crs_num": "200",
            "crs_name": "Applied Calculus ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "57": {
            "crs_id": "57",
            "dept": "MGT",
            "crs_num": "280",
            "crs_name": "Management Principles & Prac.",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "58": {
            "crs_id": "58",
            "dept": "MFL",
            "crs_num": "102",
            "crs_name": "Elementary Foreign Language II",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "59": {
            "crs_id": "59",
            "dept": "BAD",
            "crs_num": "250",
            "crs_name": "Buisness Communication",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "60": {
            "crs_id": "60",
            "dept": "ACC",
            "crs_num": "230",
            "crs_name": "Principles of Accounting",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "61": {
            "crs_id": "61",
            "dept": "ECON",
            "crs_num": "230",
            "crs_name": "Principles of Microeconomics ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "62": {
            "crs_id": "62",
            "dept": "LANG",
            "crs_num": "200",
            "crs_name": "Intermediate",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "63": {
            "crs_id": "63",
            "dept": "CORE ",
            "crs_num": "220",
            "crs_name": "Creative Arts ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "64": {
            "crs_id": "64",
            "dept": "ECON",
            "crs_num": "240",
            "crs_name": "Principles of Macroeconomics ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "65": {
            "crs_id": "65",
            "dept": "BAD",
            "crs_num": "399",
            "crs_name": "Intership Seminar",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "66": {
            "crs_id": "66",
            "dept": "BAD",
            "crs_num": "260",
            "crs_name": "Applied Statistics",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "67": {
            "crs_id": "67",
            "dept": "ACC",
            "crs_num": "240",
            "crs_name": "Managerial Accounting ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "68": {
            "crs_id": "68",
            "dept": "BAD",
            "crs_num": "320",
            "crs_name": "Marketing",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "69": {
            "crs_id": "69",
            "dept": "BAD",
            "crs_num": "220",
            "crs_name": "Buisness Law and Ethics",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "70": {
            "crs_id": "70",
            "dept": "CORE ",
            "crs_num": "230",
            "crs_name": "Natural Science ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "71": {
            "crs_id": "71",
            "dept": "MGT",
            "crs_num": "330",
            "crs_name": "Production & Operation Manage",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "72": {
            "crs_id": "72",
            "dept": "FIN",
            "crs_num": "320",
            "crs_name": "Buisness Finance ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "73": {
            "crs_id": "73",
            "dept": "CORE ",
            "crs_num": "260",
            "crs_name": "Humanities ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "74": {
            "crs_id": "74",
            "dept": "CORE",
            "crs_num": "360",
            "crs_name": "World and Its Peoples ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "75": {
            "crs_id": "75",
            "dept": "BAD",
            "crs_num": "490",
            "crs_name": "Buisness Policy",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "76": {
            "crs_id": "76",
            "dept": "MATH",
            "crs_num": "121",
            "crs_name": "Biocalculus",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "77": {
            "crs_id": "77",
            "dept": "MATH",
            "crs_num": "130",
            "crs_name": "Caculus II",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "78": {
            "crs_id": "78",
            "dept": "MFL",
            "crs_num": "200",
            "crs_name": "Intermediate Foreign Language ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "79": {
            "crs_id": "79",
            "dept": "MATH",
            "crs_num": "210",
            "crs_name": "Calculus III",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "80": {
            "crs_id": "80",
            "dept": "MATH",
            "crs_num": "240",
            "crs_name": "Linear Algebra ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "81": {
            "crs_id": "81",
            "dept": "MATH",
            "crs_num": "220",
            "crs_name": "Introduction to HIgher Algebra ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "82": {
            "crs_id": "82",
            "dept": "MATH",
            "crs_num": "320",
            "crs_name": "Algebraic Structure ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "83": {
            "crs_id": "83",
            "dept": "MATH",
            "crs_num": "353",
            "crs_name": "Real Analysis",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "84": {
            "crs_id": "84",
            "dept": "MATH",
            "crs_num": "395",
            "crs_name": "Senior Seminar",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "85": {
            "crs_id": "85",
            "dept": "NSCI",
            "crs_num": "360",
            "crs_name": "Statistics ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "86": {
            "crs_id": "86",
            "dept": "MATH",
            "crs_num": "270",
            "crs_name": "Ordinary Differential Equation ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "87": {
            "crs_id": "87",
            "dept": "PSY",
            "crs_num": "180",
            "crs_name": "Genral Psychology",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "88": {
            "crs_id": "88",
            "dept": "PSY ",
            "crs_num": "262",
            "crs_name": "Learning & Coginition",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "89": {
            "crs_id": "89",
            "dept": "HSS",
            "crs_num": "280",
            "crs_name": "Methods/Stats for Soc Rsrch",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "90": {
            "crs_id": "90",
            "dept": "PSY",
            "crs_num": "310",
            "crs_name": "Exp./Quasi-EXp Research Design ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "91": {
            "crs_id": "91",
            "dept": "PSY",
            "crs_num": "481",
            "crs_name": "Senior Seminar ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "92": {
            "crs_id": "92",
            "dept": "CHEM ",
            "crs_num": "113",
            "crs_name": "General Chemistry I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "93": {
            "crs_id": "93",
            "dept": "CHEM ",
            "crs_num": "103",
            "crs_name": "Experiments in Gen.Chemistry ",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "94": {
            "crs_id": "94",
            "dept": "BIOL ",
            "crs_num": "101",
            "crs_name": "General Biology I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "95": {
            "crs_id": "95",
            "dept": "BIOL ",
            "crs_num": "101L",
            "crs_name": "General Biology I Lab",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "96": {
            "crs_id": "96",
            "dept": "MATH",
            "crs_num": "101",
            "crs_name": "College Algebra",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "97": {
            "crs_id": "97",
            "dept": "CHEM ",
            "crs_num": "341",
            "crs_name": "Physical Chemistry and Lab I",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "98": {
            "crs_id": "98",
            "dept": "CHEM ",
            "crs_num": "114",
            "crs_name": "General Chemistry II",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "99": {
            "crs_id": "99",
            "dept": "CHEM ",
            "crs_num": "104",
            "crs_name": "Experiments in General Chem II",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "100": {
            "crs_id": "100",
            "dept": "BIOL ",
            "crs_num": "102",
            "crs_name": "General Biology II",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "101": {
            "crs_id": "101",
            "dept": "BIOL ",
            "crs_num": "102L",
            "crs_name": "General Biology II Lab",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "102": {
            "crs_id": "102",
            "dept": "MATH",
            "crs_num": "110",
            "crs_name": "Precalculus",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "103": {
            "crs_id": "103",
            "dept": "CHEM ",
            "crs_num": "233",
            "crs_name": "Organic Chemistry I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "104": {
            "crs_id": "104",
            "dept": "CHEM ",
            "crs_num": "203",
            "crs_name": "Experimental Organic Chem I",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "105": {
            "crs_id": "105",
            "dept": "MATH ",
            "crs_num": "121",
            "crs_name": "Biomathematics I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "106": {
            "crs_id": "106",
            "dept": "BIOL ",
            "crs_num": "360",
            "crs_name": "Molecular Cell Biology ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "107": {
            "crs_id": "107",
            "dept": "BIOL ",
            "crs_num": "360L",
            "crs_name": "Molecular Cell Biology Lab",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "108": {
            "crs_id": "108",
            "dept": "NSCI",
            "crs_num": "290",
            "crs_name": "Undergraduate Research ",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "109": {
            "crs_id": "109",
            "dept": "CHEM ",
            "crs_num": "234",
            "crs_name": "Organic Chemistry II",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "110": {
            "crs_id": "110",
            "dept": "CHEM ",
            "crs_num": "204",
            "crs_name": "Experimental Organic Chem II",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "111": {
            "crs_id": "111",
            "dept": "CSCI",
            "crs_num": "110",
            "crs_name": "Intro to Computer Science I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "112": {
            "crs_id": "112",
            "dept": "LANG",
            "crs_num": "101",
            "crs_name": "Language I",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "113": {
            "crs_id": "113",
            "dept": "NSCI",
            "crs_num": "361",
            "crs_name": "Biochemistry I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "114": {
            "crs_id": "114",
            "dept": "NSCI",
            "crs_num": "361L",
            "crs_name": "Biochemistry I Lab",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "115": {
            "crs_id": "115",
            "dept": "PHYS",
            "crs_num": "130",
            "crs_name": "University Physics I",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "116": {
            "crs_id": "116",
            "dept": "PHYS",
            "crs_num": "130L",
            "crs_name": "Experiments in Gen Physics I",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "117": {
            "crs_id": "117",
            "dept": "LANG",
            "crs_num": "102",
            "crs_name": "Language II",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "118": {
            "crs_id": "118",
            "dept": "NSCI",
            "crs_num": "362",
            "crs_name": "Biochemistry II",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "119": {
            "crs_id": "119",
            "dept": "NSCI",
            "crs_num": "362L",
            "crs_name": "Biochemistry II Laboratory",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "120": {
            "crs_id": "120",
            "dept": "NSCI",
            "crs_num": "385",
            "crs_name": "Bioinformatics",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "121": {
            "crs_id": "121",
            "dept": "NSCI",
            "crs_num": "385L",
            "crs_name": "Bioinformatics Lab",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "122": {
            "crs_id": "122",
            "dept": "PHYS",
            "crs_num": "140",
            "crs_name": "University Physics II",
            "credits": 3,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "123": {
            "crs_id": "123",
            "dept": "PHYS",
            "crs_num": "140L",
            "crs_name": "Experiments in Gen Physics II",
            "credits": 1,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "124": {
            "crs_id": "124",
            "dept": "BIOL ",
            "crs_num": "410",
            "crs_name": "Molecular Methods ",
            "credits": 4,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        },
        "125": {
            "crs_id": "125",
            "dept": "CHEM ",
            "crs_num": "341L",
            "crs_name": "Physical Chemistry and Lab I",
            "credits": 0,
            "nearest_prereq": [],
            "term": 1,
            "dependents": [],
            "min_term": 1,
            "max_term": 8
        }
    },
    terms: {
        'term-1': {
            id: 'term-1',
            title: 'Term 1',
            courses: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '29', '35', '39', '45', '47', '49', '51', '52', '77', '79']
        },
        'term-2': {
            id: 'term-2',
            title: 'Term 2',
            courses: []
        },
        'term-3': {
            id: 'term-3',
            title: 'Term 3',
            courses: []
        },
        'term-4': {
            id: 'term-4',
            title: 'Term 4',
            courses: []
        },
        'term-5': {
            id: 'term-5',
            title: 'Term 5',
            courses: []
        },
        'term-6': {
            id: 'term-6',
            title: 'Term 6',
            courses: []
        },
        'term-7': {
            id: 'term-7',
            title: 'Term 7',
            courses: []
        },
        'term-8': {
            id: 'term-8',
            title: 'Term 8',
            courses: []
        }
    },
    termOrder: ['term-1', 'term-2', 'term-3', 'term-4', 'term-5', 'term-6', 'term-7', 'term-8'],
    min: null,
    max: null,
};

// function add_prereq(prereq_list, course){

// }
export default initial_data;
// export default add_prereq;