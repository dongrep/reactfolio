const INFO = {
	main: {
		title: "Piyush Dongre Portfolio",
		name: "Piyush Dongre",
		email: "dongre.p@northeastern.edu",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/dongrep",
		linkedin: "https://linkedin.com/in/dongre-piyush",
	},

	homepage: {
		title: "Full-stack web and mobile app developer, and amateur skateboarder.",
		description:
			"As a seasoned software engineer, I bring extensive experience primarily in front-end development. Eager to broaden my expertise, I've successfully transitioned to the backend, augmenting my skills with a proficiency in DevOps practices. This dynamic combination enables me to contribute holistically to software development life cycles. I am adept at crafting robust and scalable solutions, seamlessly integrating both front-end and back-end technologies. My multifaceted skill set positions me as a versatile professional ready to tackle the challenges of today's ever-evolving tech landscape.",
	},

	about: {
		title: "I’m Piyush Dongre, Grad Software engineering student at Northeastern",
		description:
			"I've engaged in a diverse range of projects throughout my professional journey, and I take pride in the substantial progress I've achieved. Presently, I am dedicated to enhancing my skill set to align with the dynamic demands of the contemporary tech industry. My overarching goal is to identify and excel in a role that resonates best with my capabilities and aspirations.",
	},

	articles: {
		title: "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
	},

	// 
// Cloud Infra Automation | GCP, GitHub, Terraform, Packer, git, nodejs, express, linux Jan 2023 – April 2024
// – Orchestrated Infrastructure-as-Code (IaC) deployment on GCP using Terraform, adhering to industry-leading
// architectural and cloud design practices like immutability
// – Automated continuous deployment workflows with GitHub Actions, integrating Packer for custom image
// creation and load balancer setup across HTTP, TCP, and SSL protocols
// – Implemented cloud pub/sub messaging for email verification, optimizing user authentication processes and
// enhancing system reliability

	projects: [
		{
			title: "Cloud Infra Automation",
			description:
				"Automated Infrastructure-as-Code (IaC) deployment and continuous deployment workflows on GCP using Terraform, GitHub Actions, and Packer, optimizing user authentication and system reliability with cloud pub/sub messaging. (Jan – April 2024)",
			logo: "https://static.vecteezy.com/system/resources/previews/004/925/877/non_2x/cloud-network-icon-free-vector.jpg",
			linkText: "View Project",
			link: "https://github.com/MegaCorp-Inc/webapp",
		},
		{
			title: "Image Processor",
			description:
				"Java-based image editing application following the MVC architecture. It provides versatile image manipulation, including loading, editing, saving, and exporting. The application offers multiple operation methods, accommodating user preferences. With efficient image processing and robust error handling, it's suitable for casual users and developers alike. (Sept - Dec 2023)",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/dongrep/image-editor-showcase",
		},

		{
			title: "HuskyEvents",
			description:
				"Full stack app for university event management app with React, tailwind CSS, Express.js, MongoDB, and Node.js. Features intuitive interfaces, a robust API for seamless user and event management, and strong software design principles. (Sept - Dec 2023)",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://huskyevents.onrender.com/",
		},
		{
			title: "Bookario",
			description:
				"Developed a versatile cross-platform mobile application using Flutter, Firebase, and Razorpay for seamless booking and management of event tickets. The project encompasses both user and admin apps, each boasting an intuitive interface for effortless event management. Additionally, it features a cutting-edge QR scanning system to ensure seamless verification of bookings, enhancing security and efficiency for event organizers. (Jan - Apr 2022)",
			logo: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
		},
		{
			title: "Gatator",
			description:
				"Pioneered the development of a web application with the Flutter SDK, tailored to streamline quiz management. Users can effortlessly upload images or text and customize quiz options, specifying correct answers and configuring parameters like question quantity, topics, and time limits for a personalized quiz experience. (Feb 2022).",
			logo: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
		},
		{
			title: "CommCourse",
			description:
				"Flutter based mobile application for course management and communication. Used Razorpay api to manage subscription and vimeo api to manage streaming and storing of video lectures. (Nov - Dec 2021).",
			logo: "https://seeklogo.com/images/F/flutter-logo-5086DD11C5-seeklogo.com.png",
		},
		{
			title: "Noor Pune",
			description:
				"Web application for Noor Pune, a non-profit organization focused on spreading awareness about mental health, using React.js, Express.js, MongoDB, and Node.js. The application features a user-friendly interface, a robust API for seamless user, event and blog management, and strong software design principles. (Oct - Dec 2021).",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
		},
	],

	work: [
		{
			title: "Hopstack",
			subtitle: "Frontend Engineer",
			logo: "./hopstack_logo.jpeg",
			alt: "hopstack",
			duration: "Sept 22 - July 23",
			desc: [
				"Revamped front-end architecture to align with contemporary functional programming standards, resulting in a 36% reduction in engineer on-boarding time and a 60% acceleration in new feature integration",
				"Executed rapid prototyping for a responsive Flowchart Conversion software with a GraphQL backend in under 2 months. Reduced client on-boarding time by 87% and achieved up to 24% cost savings",
				"Deployed Jira and Confluence for task management, catalyzing a 45% surge in collaboration while curtailing information mismatch by up to 80%",
				"Translated high quality design to applications, improving customer satisfaction by 50%",
			],
		},
		{
			title: "Mobiux",
			subtitle: "Software Engineer",
			logo: "./mobiux.jpeg",
			alt: "mobiux",
			duration: "Apr 21 - June 22",
			desc: [
				"Spearheaded a cross-functional team to deliver a high-impact web application, utilizing AWS to increase availability and reliability, reducing stack size by 30%",
				"Accelerated industry-ready Flutter application development, integrating RESTful API, resulting in business acceleration by 25%, demonstrating rapid top-quality solutions while prioritizing efficiency and innovation",
				"Led the integration of cloud technologies, including AWS services, resulting in a 95% reduction in downtime and a 80% increase in system performance, optimizing scalability and reliability for delivering application",
			],
		},
		{
			title: "Recibo",
			subtitle: "Application Engineer",
			logo: "./recibo.jpeg",
			alt: "recibo",
			duration: "Apr 21 - June 22",
			desc: [
				"Designed and launched application with intuitive charts, aiding 55% increase in customer data analysis",
				"Leveraged cutting-edge technologies like Flutter, Firebase, GraphQL to optimize scalability and performance, resulting in a significant 50% increase in internal productivity and increased company revenues by 24%",
			],
		},
	],
};

export default INFO;
