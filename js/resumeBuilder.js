var bio = {
    "name": "Alan Johnson",
    "role": "Front-End Web Developer",
    "contacts": {
        "mobile": "614-851-1708",
        "email": "awj025@gmail.com",
        "github": "awj025",
        "twitter": "@awj025",
        "location": "Galloway, OH"
    },
    "welcomeMessage": "welcome!",
    "skills": ["singing", "piano playing", "public speaking", "teaching"],
    "BioPic": "images/awj025.jpg"
}

var education = {
    "schools": [
        {
            "name": "Eastern University",
            "location": "St. Davids, PA",
            "degree": "Master of Business Administration",
            "major": "Economic Development",
            "dates": 1988
        },
        {
            "name": "Mount Vernon Nazarene University",
            "location": "Mt. Vernon, OH",
            "degree": "Bachelor of Arts",
            "major": "Computer Science",
            "dates": 1985
        },
        {
            "name": "Edgewood Senior High School",
            "location": "Ashtabula, OH",
            "degree": "Diploma",
            "major": "College Prep Curriculum",
            "dates": 1981
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud804"
        },  
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud304"
        }, 
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud893"
        }, 
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": 2015,
            "url": "http://www.udacity.com/course/ud893"
        }      
    ]
}

var work = {
    "jobs": [
        {
            "employer":  "AT&T Hosting and Application Services",
            "location": "Columbus, OH",
            "title": "Senior Technical Architect, PeopleSoft Systems",
            "description": "Primary technical support resource for PeopleSoft ERP applications of multiple hosting customers",
            "dates": "2011 - present"
        },
        {
            "employer":  "Aquarius Technology Services",
            "location": "Cincinnati, OH",
            "title": "Self-Employed Technical Consultant",
            "description": "Provided production support, interface maintenance and development of PeopleSoft and surrounding HR & Payroll systems of transportation client in a short-term contract assignment",
            "dates": "2010 - 2011"
        },
        {
            "employer":  "Cardinal Health",
            "location": "Dublin, OH",
            "title": "Manager, HR IT Solutions, Build",
            "description": "Led technical aspects of implementation of case management software package.  Managed a team of four Business Analysts responsible for supporting outsourced and SaaS applications across Human Relations business units",
            "dates": "2010"
        },
        {
            "employer":  "Nationwide",
            "location": "Columbus, OH",
            "title": "Manager, IT Application Development",
            "description": "Managed a technical team of six to eleven people responsible for infrastructure and testing of PeopleSoft HR system, learning management system, and associate portal.",
            "dates": "2006 -2009"
        },
        {
            "employer":  "Big Lots",
            "location": "Columbus, OH",
            "title": "Lead Application Analyst",
            "description": "Led team of five supporting PeopleSoft HCM 8.3 application in team's responsibilities including analysis, development, testing, and infrastructure operations",
            "dates": "2005 - 2006"
        },
                {
            "employer":  "WorldCom",
            "location": "Hilliard, OH",
            "title": "Principal Engineer, PeopleSoft Systems Infrastructure",
            "description": "Led technical infrastructure effort supporting implementation, support, and maintenance of multi-national telecommunications firm's two production PeopleSoft HR / Payroll systems.  Managed as many as eight employees.",
            "dates": "1998 - 2005"
        },
{
            "employer":  "CompuServe & UUNET",
            "location": "Hilliard, OH",
            "title":  "IT Manager, PeopleSoft Systems",
            "description": "Provided design, development, and support, then leadership of support teams for implementation of PeopleSoft HR system",
            "dates": "1994 - 1998"
        },
        {
            "employer":  "Self-Employed Consultant",
            "location": "North Kingsville, OH",
            "title": "Self-Employed Consultant",
            "description": "Customized and supported accounting systems in small manufacturing firms.",
            "dates": "1992 - 1994"
        },
        {
            "employer":  "Habitat for Humanity International",
            "location": "Mbandaka, Zaire",
            "title": "International Partner",
            "description": "Directed non-profit housing project in Africa.  Served as Regional Director for Equator Region.",
            "dates": "1988 - 1991"
        }

    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud804"
        },  
        {
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud304"
        }, 
        {
            "title": "Responsive Web Design Fundamentals",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud893"
        }, 
        {
            "title": "Responsive Images",
            "school": "Udacity",
            "dates": "2015",
            "url": "http://www.udacity.com/course/ud893"
        }      
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sample Project 1",
            "dates": "2014",
            "description": "This was the best project in the history of Tuesdays during October 2014"
        },
        {
            "title": "Sample Project 2",
            "dates": "2014",
            "description": "This was the best project in the history of Wednesdays during October 2014"
        },        {
            "title": "Sample Project 3",
            "dates": "2014",
            "description": "This was the best project in the history of Thursdays during October 2014"
        }
    ]
}

// var formattedWelcomeMessage = HTMLcontactGeneric.replace("%data%",bio.welcomeMessage);
// $("#header").append(formattedWelcomeMessage);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);

if (bio.skills.length > 0) {
	$("#skills").append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%",bio.skills[3]);
	$("#skills").append(formattedSkill);
};

function displayWork () {
	if (work.jobs.length > 0) {
		for (job in work.jobs) {
			$("#workExperience").append(HTMLworkStart);
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
			var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedWorkEmployerTitle);
			var formattedWorkDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
			$(".work-entry:last").append(formattedWorkDates);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
			$(".work-entry:last").append(formattedWorkLocation);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
			$(".work-entry:last").append(formattedWorkDescription);
		};
	};

};

displayWork();

function displayProject () {
	if (projects.projects.length > 0) {
		$("#projects").append(HTMLprojectStart);
		for (proj in projects.projects) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%",projects.projects[proj].title);
			$(".project-entry:last").append(formattedProjectTitle);
			var formattedProjectDates = HTMLprojectDates.replace("%data%",projects.projects[proj].dates);
			$(".project-entry:last").append(formattedProjectDates);
			var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.projects[proj].description);
			$(".project-entry:last").append(formattedProjectDescription);
		};
	};
};

displayProject ();  

function displayEducation () {
	if (education.schools.length > 0) {
		for (school in education.schools) {
			$("#education").append(HTMLschoolStart);	
			var formattedSchoolName = HTMLschoolName.replace("%data%",education.schools[school].name);
			$(".education-entry:last").append(formattedSchoolName);
			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
			$(".education-entry:last").append(formattedSchoolLocation);
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
			var formattedSchoolMajor = HTMLschoolMajor.replace("%data%",education.schools[school].major);
			var formattedSchoolDegreeMajor = formattedSchoolDegree + formattedSchoolMajor;
			$(".education-entry:last").append(formattedSchoolDegreeMajor);
			var formattedSchoolDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
			$(".education-entry:last").append(formattedSchoolDates);
		};
	};
	if (work.onlineCourses.length > 0) {
		var FormattedOnlineCoursesHdr = HTMLonlineClasses;
		$("#education").append(FormattedOnlineCoursesHdr);
		for (course in work.onlineCourses) {
			var FormattedCourseTitle = HTMLonlineTitle.replace("%data%",work.onlineCourses[course].title);
			$("#education").append(FormattedCourseTitle);
			var FormattedCourseSchool = HTMLonlineSchool.replace("%data%",work.onlineCourses[course].school);
			$("#education").append(FormattedCourseSchool);			
			var FormattedCourseDates = HTMLonlineDates.replace("%data%",work.onlineCourses[course].dates);
			$("#education").append(FormattedCourseDates);			
			var FormattedCourseURL = HTMLonlineURL.replace("%data%",work.onlineCourses[course].url);
			$("#education").append(FormattedCourseURL);		
		};
	};
};

displayEducation ();