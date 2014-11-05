var bio = {
	"name": "Victoria Mudraya",
	"role": "Web Developer",
	"welcomeMessage": "Contact Me",
	"picture": "images/logo.jpg",
	"contacts": {
		"mobile": "+380950818178",
		"email": "victoria.mudraya@gmail.com",
		"github": "victoria-front-enddev",
		"location": "Odessa, Ukraine",
		"twitter": "@mobileintersog",
		"blog": "testblog",
	},
	"skills": ["html", "css", "javascript", "wordpress", "php"],
	"languages": ["English", "German", "Russian", "Ukrainian", "Polish"]
};
bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#subheader").prepend(formattedRole);
	$("#header").prepend(formattedName);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").prepend(formattedGithub);
	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").prepend(formattedMobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").prepend(formattedEmail);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").prepend(formattedLocation);
	var formattedWellcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#topContacts").prepend(formattedWellcomeMessage);
	var formattedPicture = HTMLbioPic.replace("%data%", bio.picture);
	$("#photo").append(formattedPicture);

	//var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	//$("#topContacts").prepend(formattedTwitter);
	//var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
	//$("#topContacts").prepend(formattedBlog);
	if (bio.skills.length > 0) {
		//$("#skills").append(HTMLskillsStart);
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
		$("#skills").append(formattedSkill);
	}
	if (bio.languages.length > 0) {
		//$("#skills").append(HTMLskillsStart);
		var formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[0]);
		$("#languages").append(formattedLanguage);
		formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[1]);
		$("#languages").append(formattedLanguage);
		formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[2]);
		$("#languages").append(formattedLanguage);
		formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[3]);
		$("#languages").append(formattedLanguage);
		formattedLanguage = HTMLlanguages.replace("%data%", bio.languages[4]);
		$("#languages").append(formattedLanguage);
	}
};
bio.display();
var education = {
	"schools": [
	{
		"name": "Odessa National Mechnickov University",
		"location": "Odessa, Ukraine",
		"years": "2009 - 2010",
		"degree": "Master of Arts, Honors degree",
		"major": "English and German Philology" 
	},
	{
		"name": "Odessa National Mechnickov University",
		"location": "Odessa, Ukraine",
		"years": "2005 - 2009",
		"degree": "Bachelor of Arts, Honors degree",
		"major": "Philology"
	},
	{
		"name": "STEP Computer Colledge",
		"location": "Odessa, Ukraine",
		"years": "2003 - 2005",
		"degree": "Web Developer",
        "major": "CS"
	}
	],
    "onlineCourses": [
    {
    	"title": "Front-End Web Developer Nanodegree",
    	"school": "Udacity",
    	"dates": "2014-2015",
    	"logo": "images/udacity.png",
    	"onlineUrl": "https://www.udacity.com/course/nd001"},
     {
    	"title": "Intro to HTML and CSS",
    	"school": "Udacity",
    	"dates": "2014",
    	"logo": "images/udacity.png",
    	"onlineUrl": "https://www.udacity.com/course/ud304"},
    {
    	"title": "Learn to Program: The Fundamentals",
    	"school": "Coursera",
    	"dates": "2012",
    	"logo": "images/coursera.png",
    	"onlineUrl": "https://www.coursera.org/course/programming1"
    }
    ]
};
education.display = function() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);
		var formattedsName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedsName);
		var formattedsDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedsDegree);
		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
		$(".education-entry:last").append(formattedDates);
		var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedLocation);
		var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedMajor);

	}
	if (education.onlineCourses.length > 0) {
		$(".education-entry:last").append(HTMLonlineClasses);
	}
	for (course in education.onlineCourses) {
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);
		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedSchool);
		var formattedoDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedoDates);
		var formattedLogo = HTMLonlineLogo.replace("%data%", education.onlineCourses[course].logo);
		$(".education-entry:last").append(formattedLogo);
		var formattedoUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].onlineUrl);
        $(".education-entry:last").append(formattedoUrl);
	}
};
education.display();
var work = {
	"jobs": [
	{
	"employer": "Intersog",
	"title": "SEO and Web Developer",
	"location": "Odessa, Ukraine",
	"dates": "2012 - 2015",
	"description": "Website Development: creating websites from scratch, installing & customizing Wordpress, themes and plugins. Collaborating with designers and implementing custom website design, pages, products and forms. Market and competitors analysis, SEO and marketing plans development. Site structure development, SEO optimization and inner links scheme creation. Analyzing the market and selecting the most relevant keywords with the highest traffic. Placing websites in Google top 10 on high competitive keywords. Developing and analyzing new SEO techniques. Analyzing results using Google Analytics and improving site optimization and linksbuilding. "
	},
	{
	"employer": "Vizualtech",
	"title": "SEO Manager",
	"location": "Kiev, Ukraine",
	"dates": "2011 - 2012",
	"description": "Leading the team of SEO specialists, managing multiple projects with tight deadlines. Analyzing the market and selecting the most relevant keywords with the highest traffic. Developing and analyzing new SEO techniques, planning the work of SEO Department.Making analysis and providing recommendation for onsite optimization. Collaborating with web developers and web designers to implement the improvements. Placing websites in Google top 10 on high competitive keywords. Analyzing results using Google Analytics and reporting to the clients. Consulting the clients about the SEO and AdWords Services and their benefits for the business.Creating, managing and optimizing multiple Google Adwords Campaigns, choosing the most valuable keywords according to both traffic and ROI, experimenting with different ads and formats, analyzing the ROI, creating reports for the clients. "
	},
	{
	"employer": "Vizualtech",
	"title": "Search Engine Specialist",
	"location": "Odessa, Ukraine",
	"dates": "2010 - 2011",
	"description": "Search Engine Specialist in VizualTech IT Company: placing the websites in top 10 on high competitive keywords worldwide and in Google local search. Google local optimization for best local ranking. Develop SEO optimized content for the websites and managing link building campaigns"
	}
	]
};
work.display = function() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}

};
work.display();
var projects = {
	"myProjects": [
	{
    "title": "Intersog.com",
    "dates": "2013 - 2015",
    "description": "Developing new version of corporate website from scratch. Installing & customizing Wordpress, theme and plugins. Developing site structure, SEO optimization and inner links scheme creation. Collaborating with designers and implementing custom design solutions, pages and forms. Creating custom templates for pages, cutomized contact forms and woocommerce products. Implementing  corporative website style and functions customizing site's html, php and css",
    "images": ["images/i1.png", "images/i2.png", "images/i4.png"]
     },
     {
    "title": "Webappy.com",
    "dates": "2013 - 2014",
    "description": "Developing E-commerce store from scratce. Installing and customizing Wordpress, woocommerce and theme. Setting up payment plugins, working with designers on custom products pages, cart and chechout. ",
    "images": ["images/w1.png", "images/w2.png", "images/w3.png"]
     },
     {
    "title": "Intersog.de",
    "dates": "2013 - 2014", 
    "description": "Developing German version of corporate website from scratch. Installing & customizing Wordpress, theme and plugins. Developing site structure, collaborating with designers and implementing custom design solutions, pages and forms. Creating custom pages & cutomized contact forms",
    "images": ["images/d1.png", "images/d2.png", "images/d3.png"]
     }
	]
};
projects.display = function() {
	for (pro in projects.myProjects) {
	$("#projects").append(HTMLprojectStart);
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.myProjects[pro].title);
	$(".project-entry:last").append(formattedTitle);
	var formattedDates = HTMLprojectDates.replace("%data%", projects.myProjects[pro].dates);
	$(".project-entry:last").append(formattedDates);
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.myProjects[pro].description);
	$(".project-entry:last").append(formattedDescription);
	if (projects.myProjects[pro].images.length > 0) {
		for (image in projects.myProjects[pro].images) {
			var formattedImage = HTMLprojectImage.replace("%data%", projects.myProjects[pro].images[image]);
			$(".project-entry:last").append(formattedImage);
		}
	}
	
}
};
projects.display();
$("#mapDiv").append(googleMap);
google.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Skills', 'Usage in Projects'],
          ['Wordpress',     7],
          ['HTML',      8],
          ['CSS',  4],
          ['Javascript', 2],
          ['PHP',    5]
        ]);

        var options = {
          title: 'My Skills'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }