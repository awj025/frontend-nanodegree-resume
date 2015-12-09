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
    "welcomeMessage": "Pride goes before destruction, a haughty spirit before a fall.  - King Solomon",
    "skills": ["singing", "piano playing", "public speaking", "teaching"],
    "biopic": "images/awj025.jpg",
    "display": function () {
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        $("#header").prepend(formattedRole);

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        $("#header").prepend(formattedName);

        // Problem displaying contact info... trying codyperry65 approach from discussion forum, 
        //   using moderator Myles" suggestion...

        for (var contactIdx in bio.contacts) {
            if (bio.contacts.hasOwnProperty(contactIdx)) {
                var formattedContact = HTMLcontactGeneric.replace("%contact%", contactIdx).replace("%data%", bio.contacts[contactIdx]);

                $(formattedContact).appendTo("#topContacts, #footerContacts");
            }
        }

        //      end of codyperry65 approach

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").append(formattedBioPic);

        if (bio.skills.length > 0) {
            $("#skills").append(HTMLskillsStart);
            var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
            $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
            $("#skills").append(formattedSkill);
        }
    }
};

bio.display();

var education = {
    "schools": [{
        "name": "Eastern University",
        "location": "St. Davids, PA",
        "degree": "Master of Business Administration",
        "majors": ["Economic Development", "Philadelphia Traffic"],
        "dates": 1988,
        "url": "http://www.eastern.edu"
    }, {
        "name": "Mount Vernon Nazarene University",
        "location": "Mt. Vernon, OH",
        "degree": "Bachelor of Arts",
        "majors": ["Computer Science", "Biblical Languages"],
        "dates": 1985,
        "url": "http://www.mvnu.edu"
    }, {
        "name": "Edgewood Senior High School",
        "location": "Ashtabula, OH",
        "degree": "Diploma",
        "majors": ["College Prep Curriculum", "Assorted Extra-Curriculars"],
        "dates": 1981,
        "url": "http://http://www.buckeyeschools.info/EdgewoodSenior.cfm"
    }],
    "onlineCourses": [{
        "title": "JavaScript Basics",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/ud804"
    }, {
        "title": "Intro to HTML and CSS",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/ud304"
    }, {
        "title": "Responsive Web Design Fundamentals",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/ud893"
    }, {
        "title": "Responsive Images",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/ud882"
    }, {
        "title": "Version Control with Git and Github",
        "school": "Udacity",
        "dates": 2015,
        "url": "http://www.udacity.com/course/ud775"
    }],
    "display": function () {
        if (education.schools.length > 0) {
            for (var schoolIdx in education.schools) {
                if (education.schools.hasOwnProperty(schoolIdx)) {
                    $("#education").append(HTMLschoolStart);
                    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[schoolIdx].name);
                    $(".education-entry:last").append(formattedSchoolName);
                    var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schoolIdx].dates);
                    $(".education-entry:last").append(formattedSchoolDates);
                    var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[schoolIdx].degree);
                    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schoolIdx].majors[0]);
                    var formattedSchoolDegreeMajor = formattedSchoolDegree + formattedSchoolMajor;
                    $(".education-entry:last").append(formattedSchoolDegreeMajor);
                    var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schoolIdx].location);
                    $(".education-entry:last").append(formattedSchoolLocation);
                }
            }
        }
        if (education.onlineCourses.length > 0) {
            var FormattedOnlineCoursesHdr = HTMLonlineClasses;
            $("#education").append(FormattedOnlineCoursesHdr);
            for (var courseIdx in education.onlineCourses) {
                if (education.onlineCourses.hasOwnProperty(courseIdx)) {
                    var FormattedCourseTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[courseIdx].title);
                    var FormattedCourseSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[courseIdx].school);
                    var FormattedCourseTitleSchool = FormattedCourseTitle + FormattedCourseSchool;
                    $("#education").append(FormattedCourseTitleSchool);
                    var FormattedCourseDates = HTMLonlineDates.replace("%data%", education.onlineCourses[courseIdx].dates);
                    $("#education").append(FormattedCourseDates);
                    var FormattedCourseURL = HTMLonlineURL.replace("%data%", education.onlineCourses[courseIdx].url);
                    $("#education").append(FormattedCourseURL);
                }
            }
        }
    }
};

education.display();

var work = {
    "jobs": [{
        "employer": "AT&T Hosting and Application Services",
        "location": "Columbus, OH",
        "title": "Senior Technical Architect, PeopleSoft Systems",
        "description": "Primary technical support resource for PeopleSoft ERP applications of multiple hosting customers",
        "dates": "2011 - present"
    }, {
        "employer": "Aquarius Technology Services",
        "location": "Cincinnati, OH",
        "title": "Self-Employed Technical Consultant",
        "description": "Provided production support, interface maintenance and development of PeopleSoft and surrounding HR & Payroll systems of transportation client in a short-term contract assignment",
        "dates": "2010 - 2011"
    }, {
        "employer": "Cardinal Health",
        "location": "Dublin, OH",
        "title": "Manager, HR IT Solutions, Build",
        "description": "Led technical aspects of implementation of case management software package.  Managed a team of four Business Analysts responsible for supporting outsourced and SaaS applications across Human Relations business units",
        "dates": "2010"
    }, {
        "employer": "Nationwide",
        "location": "Columbus, OH",
        "title": "Manager, IT Application Development",
        "description": "Managed a technical team of six to eleven people responsible for infrastructure and testing of PeopleSoft HR system, learning management system, and associate portal.",
        "dates": "2006 -2009"
    }, {
        "employer": "Big Lots",
        "location": "Columbus, OH",
        "title": "Lead Application Analyst",
        "description": "Led team of five supporting PeopleSoft HCM 8.3 application in team's responsibilities including analysis, development, testing, and infrastructure operations",
        "dates": "2005 - 2006"
    }, {
        "employer": "WorldCom",
        "location": "Hilliard, OH",
        "title": "Principal Engineer, PeopleSoft Systems Infrastructure",
        "description": "Led technical infrastructure effort supporting implementation, support, and maintenance of multi-national telecommunications firm's two production PeopleSoft HR / Payroll systems.  Managed as many as eight employees.",
        "dates": "1998 - 2005"
    }, {
        "employer": "CompuServe & UUNET",
        "location": "Hilliard, OH",
        "title": "IT Manager, PeopleSoft Systems",
        "description": "Provided design, development, and support, then leadership of support teams for implementation of PeopleSoft HR system",
        "dates": "1994 - 1998"
    }, {
        "employer": "Self-Employed Consultant",
        "location": "North Kingsville, OH",
        "title": "Self-Employed Consultant",
        "description": "Customized and supported accounting systems in small manufacturing firms.",
        "dates": "1992 - 1994"
    }, ],
    "display": function () {
        if (work.jobs.length > 0) {
            for (var jobIdx in work.jobs) {
                if (work.jobs.hasOwnProperty(jobIdx)) {
                    $("#workExperience").append(HTMLworkStart);
                    var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[jobIdx].employer);
                    var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[jobIdx].title);
                    var formattedWorkEmployerTitle = formattedWorkEmployer + formattedWorkTitle;
                    $(".work-entry:last").append(formattedWorkEmployerTitle);
                    var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[jobIdx].dates);
                    $(".work-entry:last").append(formattedWorkDates);
                    var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[jobIdx].location);
                    $(".work-entry:last").append(formattedWorkLocation);
                    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[jobIdx].description);
                    $(".work-entry:last").append(formattedWorkDescription);
                }
            }
        }
    }
};

work.display();


var projects = {
    "projects": [{
        "title": "Taught Nephew to Play Soccer",
        "dates": "2004 - 2010",
        "description": "Nephew wins U-20 National Championship with Chicago Fire U-20s",
        "images": ["images/JCwChicagoU20s.jpg", "images/JC at Dayton.jpg"]
    }, {
        "title": "Nephew Wins USL Title with Charleston",
        "dates": "2011 - 2012",
        "description": "They put him on the phonebook",
        "images": ["images/JCinCharleston.jpg", "images/JCinCharleston2.jpg", "images/JC v Pittsburgh 2011 04 30.jpg", "images/JC on Phonebook.jpg"]
    }, {
        "title": "Nephew Tries Out in Florida",
        "dates": "2013",
        "description": "Nephew on Trial with Tampa Bay Rowdies",
        "images": ["images/JCTrialwithTBRowdies.jpg", "images/JCTrialwithTBRowdies2.jpg"]
    }, {
        "title": "Nephew Prefers Finland to Florida",
        "dates": "2015",
        "description": "Now He Wears Gloves and Shoots at the Goalie",
        "images": ["images/JC in Finland 02.jpg", "images/JC in Finland 06.jpg", "images/JC in Finland 05.jpg", "images/JC in Finland 04.jpg"]
    }],
    "display": function () {
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
            for (var projIdx in projects.projects) {
                if (projects.projects.hasOwnProperty(projIdx)) {
                    var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[projIdx].title);
                    $(".project-entry:last").append(formattedProjectTitle);
                    var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[projIdx].dates);
                    $(".project-entry:last").append(formattedProjectDates);
                    var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[projIdx].description);
                    $(".project-entry:last").append(formattedProjectDescription);
                    for (var projImgIdx in projects.projects[projIdx].images) {
                        if (projects.projects[projIdx].images.hasOwnProperty(projImgIdx)) {
                            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[projIdx].images[projImgIdx]);
                            $(".project-entry:last").append(formattedProjectImage);
                        }
                    }
                }
            }
        }
    }
};

projects.display();

$("#mapDiv").append(googleMap);