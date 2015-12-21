var bio = {
    "name": "Miles Clark",
    "role": "Web Developer / System Administrator / Project Manager",
    "contacts": {
	"mobile": "805-471-4931",
	"email": "mmc@obispo.com",
	"github": "mmclark",
	"twitter": "@clarkout",
	"location": "Templeton, CA"
    },
    "welcomeMessage": "Hi there!",
    "skills": ["python", "javascript", "linux", "management"],
    "biopic": "images/OnTheOldTrain-2.jpg",

    "display": function() {
	$("#header").prepend(
	    HTMLheaderName.replace("%data%", this.name) +
		HTMLheaderRole.replace("%data%", this.role)
	);

	$("#header").append(HTMLbioPic.replace("%data%", this.biopic));
	if (this.skills && this.skills.length > 0) {
	    $("#header").append(HTMLskillsStart);
	    $("#skills").append(HTMLskills.replace("%data%", this.skills[0]));
	    $("#skills").append(HTMLskills.replace("%data%", this.skills[1]));
	    $("#skills").append(HTMLskills.replace("%data%", this.skills[2]));
	    $("#skills").append(HTMLskills.replace("%data%", this.skills[3]));
	}

	$("#topContacts").append(
	    HTMLmobile.replace("%data%",  this.contacts.mobile) +
		HTMLemail.replace("%data%", this.contacts.email) +
		HTMLtwitter.replace("%data%", this.contacts.twitter) +
		HTMLgithub.replace("%data%", this.contacts.github) +
		HTMLlocation.replace("%data%", this.contacts.location)
	);

	$("#footerContacts").append(
	    HTMLmobile.replace("%data%",  this.contacts.mobile) +
		HTMLemail.replace("%data%", this.contacts.email) +
		HTMLtwitter.replace("%data%", this.contacts.twitter) +
		HTMLgithub.replace("%data%", this.contacts.github) +
		HTMLlocation.replace("%data%", this.contacts.location)
	);


    }
};


var education = {
    "schools": [
	{
	    "name": "Cal Poly",
	    "location": "San Luis Obispo, CA",
	    "degree": "BS",
	    "majors": ["Computer Science"],
	    "dates": 1995,
	    "url": "http://calpoly.edu"
	},
	{
	    "name": "Cuesta College",
	    "degree": "AA",
	    "location": "San Luis Obispo, CA",
	    "majors": ["Computer Science", "Music"],
	    "dates": 1989,
	    "url": "http://cuesta.edu"
	}
    ],

    "onlineCourses": [
	{
	    "title": "JavaScript Road Trip Part 2",
	    "school": "Code School",
	    "date": 2014,
	    "url": "https://www.codeschool.com/courses/javascript-road-trip-part-2"
	},
	{
	    "title": "JavaScript Road Trip Part 1",
	    "school": "Code School",
	    "date": 2014,
	    "url": "https://www.codeschool.com/courses/javascript-road-trip-part-1"
	},
	{
	    "title": "Discover DevTools",
	    "school": "Code School",
	    "date": 2014,
	    "url": "https://www.codeschool.com/courses/discover-devtools"
	},
	{
	    "title": "Shaping up with Angular.js",
	    "school": "Code School",
	    "date": 2014,
	    "url": "https://www.codeschool.com/courses/shaping-up-with-angular-js"
	}

    ],

    "display": function() {
	for (var ndx in this.schools) {
	    var school = this.schools[ndx];
	    $("#education").append(HTMLschoolStart);
	    $(".education-entry:last").append(
		HTMLschoolName.replace("%data%", school.name) +
		    HTMLschoolDegree.replace("%data%", school.degree) +
		    HTMLschoolDates.replace("%data%", school.grad_year) +
		    HTMLschoolLocation.replace("%data%", school.location) +
		    HTMLschoolMajor.replace("%data%", school.majors)
	    );
	}
	if (this.hasOwnProperty('onlineCourses') && this.onlineCourses.length > 0) {
	    $("#education").append(HTMLonlineClasses);
	    for (var courseNdx in this.onlineCourses) {
		$("#education").append(HTMLschoolStart);
		var course = this.onlineCourses[courseNdx];
		$(".education-entry:last").append(
		    HTMLonlineTitle.replace("%data%", course.title) +
			HTMLonlineSchool.replace("%data%", course.school) +
			HTMLonlineDates.replace("%data%", course.date) +
			HTMLonlineURL.replace("%data%", course.url)
		);
	    }
	}

    }
};


var work = {
    "jobs": [
	{
	    "employer": "Cal Poly College of Engineering",
	    "title": "Web Administrator",
	    "location": "San Luis Obispo, CA",
	    "dates": "2005-Present",
	    "description": "Primary web developer and system administrator " +
		"for the College of Engineering, which includes over 30 websites " +
		"under its umbrella.  Responsibilities include web design using " +
		"HTML, CSS and Javascript; backend development using Python and Django; " +
		"interacting with clients; managing multi-month and multi-year projects; " +
		"and managing a team of junior developers."
	},
	{
	    "employer": "Obispo Technology Group, Inc.",
	    "title": "President",
	    "location": "Templeton, CA",
	    "dates_worked": "1999-Present",
	    "description": "OTG does contract primarily web development for a collection of clients in North America.  Projects have included an Usher Management application for a large performing arts center, A workflow application for a graphic design and printing business, and general software develop for a credit card processing company."
	},
	{
	    "employer": "OutBack Resource Group",
	    "title": "Senior Software Engineer",
	    "location": "San Luis Obispo, CA",
	    "dates_worked": "1995-1999",
	    "description": "Participated in many software development project, most notably remote management software for cable modems and related equipment."
	},
	{
	    "employer": "Dega Technology",
	    "title": "Software Engineering, Director of Software Development",
	    "location": "San Luis Obispo, CA",
	    "dates_worked": "1992-1995",
	    "description": "Managed software development for the companies Electronic Parts Catalog products.  Also involved in Technical Sales."
	}
    ],

    "display": function () {
	for (ndx in work.jobs) {
	    $("#workExperience").append(HTMLworkStart);
	    var job = work.jobs[ndx];
	    $(".work-entry:last").append(
		HTMLworkEmployer.replace("%data%", job.employer) +
		    HTMLworkTitle.replace("%data%", job.title) +
		    HTMLworkDates.replace("%data%", job.dates) +
		    HTMLworkLocation.replace("%data%", job.location) +
		    HTMLworkDescription.replace("%data%", job.description)
	    );
	}
    }

};



var projects = {
    "examples": [
	{
	    "title": "PAC Usher Scheduling",
	    "dates": "2010-present",
	    "description": "A web application that assists with assigning ushers to shows that the performing arts center.",
	    "images": ["images/pac.jpg"]
	},
	{
	    "title": "Reinventing the General Plan",
	    "dates": "2012-present",
	    "description": "A site designed to highlight new and innovate approach to designing General Plan guidelines for cities and counties.",
	    "images": ["images/rtgp.jpg"]
	},
	{
	    "title": "EPIC",
	    "dates": "2011-present",
	    "description": "A summer camp management app that includes application, registrations, track signups and also reporting.",
	    "images": ["images/epic.jpg"]
	}
    ],

    "display": function() {
	for (var ndx in projects.examples) {
	    $("#projects").append(HTMLprojectStart);
	    var project = projects.examples[ndx];
	    var entry = $(".project-entry:last");
	    entry.append(
		HTMLprojectTitle.replace("%data%", project.title) +
		    HTMLprojectDates.replace("%data%", project.dates) +
		    HTMLprojectDescription.replace("%data%", project.description)
	    );

	    for (var imgNdx in project.images) {
		entry.append(HTMLprojectImage.replace("%data%", project.images[imgNdx]));
	    }
	}
    }

};



bio.display();
education.display();
work.display();
projects.display();

$("#mapDiv").append(googleMap);
