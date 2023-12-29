import { assets } from "@/constant/assets";

const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const projectTypes = [
    {
        slug: 'case-study',
        name: 'Case Study',
    },
    {
        slug: 'real-project',
        name: 'Real Project',
    },
    {
        slug: 'semester-project',
        name: 'Semester Project'
    },
    {
        slug:'research',
        name:'research-project'
    },
    {
        slug:'external-project',
        name:'External Project'
    },
    {
        slug:'personal-project',
        name:'Personal Project'
    }
]

const initialProjects = [
    {
        slug: 'lseg-flower-exchange',
        title: 'LSEG Flower Exchange',
        image: assets.home.myLatestProject.projects.flowerExchange,
        repositoryUrl: "https://github.com/AyeshGK/lseg_flower_exchange",
        demoUrl: "",
        summary: 'Flower Exchange Project developed for London Stock Exchange Group (LSEG) which  designed to streamline the flower exchange process using C++. Project aimed to facilitate transactions between buyers and sellers.',
        techStacks: [
            {
                name: 'C++',
                imageUrl: 'https://img.icons8.com/?size=512&id=40669&format=png',
                webUrl: 'https://www.cplusplus.com/'
            },
        ],
        contributors: [
            {
                name: 'Ayesh Vininda',
                email: "x"
            },
            {
                name: 'Kavindu Ranasinghe',
                email: "x"
            }
        ],
        images:[
            {
                url: assets.home.myLatestProject.projects.flowerExchange,
                alt: 'Flower Exchange'
            },
            {
                url: assets.home.myLatestProject.projects.flowerExchange,
                alt: 'Flower Exchange'
            },
            {
                url: assets.home.myLatestProject.projects.flowerExchange,
                alt: 'Flower Exchange'
            }
        ],
        descriptions: [
            {
                title: 'Introduction',
                description: 'The Flower Exchange Project is designed to streamline the flower exchan'
            }
            ,
            {
                title: 'Problem',
                description: 'The Flower Exchange Project is designed to streamline the flower exchan'
            },
        ],
        projectType: projectTypes[4],
        category: categories[1]
    },
    // World Happiness Report
    {
        slug: 'world-happiness-report',
        title: 'World Happiness Report',
        image: assets.home.myLatestProject.projects.happinessReport,
        repositoryUrl: "",
        demoUrl: "https://datalore.jetbrains.com/report/static/WMusuL1p8wFKqLJUPl9qDa/YKq9ycK2HNR06gP1ggm6JV",
        summary: "The World Happiness Report is a comprehensive and ongoing initiative aimed at understanding and measuring the global well-being and happiness of people . Conducted annually, this project assesses and ranks countries based on various factors contributing to happiness, including GDP per capita, social support, life expectancy, freedom, generosity, and corruption.Through rigorous data analysis and in-depth research, the World Happiness Report provides valuable insights into the evolving trends and determinants of happiness worldwide. Policymakers, governments, and organizations use these findings to identify areas for improvement, implement positive changes, and enhance the overall quality of life for their citizens.",
        techStacks: [
            {
                name: 'Datalore-Jetbrains',
                imageUrl: 'https://img.icons8.com/?size=512&id=FrYBY9mulFTb&format=png',
                webUrl: 'https://datalore.jetbrains.com/'
            },
            {
                name: 'Plotly',
                imageUrl: 'https://img.icons8.com/?size=512&id=80255&format=png',
                // https://icons8.com/icon/80255/bar-chart
                webUrl: 'https://plotly.com/'
            },
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/'
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'parkinson-disease-detection-system',
        title: 'Parkinson Disease Detection System',
        image: assets.home.myLatestProject.projects.parkinsonDisease,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: "In the 4th semester Software Engineering module project, we developed a Parkinson’s Disease Detection System, utilizing machine learning for diagnosing Parkinson's disease, managing patient reports, and facilitating recovery tracking. The system encompasses three user roles – doctor, examiner, and admin – enabling examiners to register patients, conduct tests (spiral and wave), and generate reports, while doctors can access and review completed test records for registered patients.",
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/'
            },
            {
                name:'MongoDB',
                imageUrl: 'https://img.icons8.com/?size=512&id=74402&format=png',
                webUrl:'https://www.mongodb.com/'
            }
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'customer-churn-dashboard',
        title: 'Customer Churn Dashboard',
        image: assets.home.myLatestProject.projects.customerChurn,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: 'This dashboard helps to identify valuable insights for making decisions to company managers',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name:'PowerBI',
                imageUrl:'https://img.icons8.com/?size=512&id=qYfwpsRXEcpc&format=png',
                webUrl:'https://powerbi.microsoft.com/en-us/'
            },
            {
                name:'Firebase',
                imageUrl:'https://img.icons8.com/?size=512&id=62452&format=png',
                webUrl:'https://www.mongodb.com/'
            },
            {
                name:'Flask',
                imageUrl:'https://img.icons8.com/?size=512&id=MHcMYTljfKOr&format=png',
                webUrl:'https://flask.palletsprojects.com/en/2.0.x/'
            }
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'bank-transactions-and-loan-processing-system',
        title: 'Bank Transactions and Loan Processing System',
        image: assets.home.myLatestProject.projects.bank,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: "For the 4th semester Database Systems module we developed Bank Transaction and Loan Processing web Application which can be accessed all branches their customers and employees. This is database project which consists on advanced SQL queries for optimized data selections, events for automation, triggers for data manipulation, indexing for fast data access and transactions .",  
        techStacks: [
            {
                name: 'EJS',
                imageUrl: 'https://img.icons8.com/?size=512&id=Pxe6MGswB8pX&format=png',
                webUrl: 'https://ejs.co/'
            },
            {
                name: 'MySQL',
                imageUrl: 'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
                webUrl: 'https://www.mysql.com/'
            },
            {
                name: 'Node JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=hsPbhkOH4FMe&format=png',
                webUrl: 'https://nodejs.org/en/'
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    {
        slug: 'clinical-trial-management-system',
        title: 'Clinical Trial Management System',
        image: assets.home.myLatestProject.projects.clinicalTrial,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: 'For the Object-Oriented Software Development module, we developed a website for Clinical Trial Management.This is a Web application built using PHP, MySQL with MVC for backend and HTML, CSS, Bootstrap for Frontend.',
        techStacks: [
            {
                name: 'Bootstrap',
                imageUrl: 'https://img.icons8.com/?size=512&id=PndQWK6M1Hjo&format=png',
                webUrl: 'https://getbootstrap.com/'
            },
            {
                name: 'MySQL',
                imageUrl: 'https://img.icons8.com/?size=512&id=UFXRpPFebwa2&format=png',
                webUrl: 'https://www.mysql.com/'
            },
            {
                name: 'PHP',
                imageUrl: 'https://img.icons8.com/?size=512&id=anECpXcEIboQ&format=png',
                webUrl: 'https://www.php.net/'
            },
        ],
        projectType: projectTypes[2],
        category: categories[0]
    },
    
    {
        slug: 'web-application-for-vehicle-rentle-service',
        title: 'Web application for vehicle rentle service',
        image: assets.home.myLatestProject.projects.carRental,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: 'Contributed to the development of web application for a vehicle rental service, with frontend responsibilities using React.',
        techStacks: [
            {
                name: 'Tailwind CSS',
                imageUrl: 'https://img.icons8.com/?size=512&id=4PiNHtUJVbLs&format=png',
                webUrl: 'https://tailwindcss.com/'
            },
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                webUrl: 'https://reactjs.org/'
            },
            {
                name: 'Redux JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=jD-fJzVguBmw&format=png',
                webUrl: 'https://redux.js.org/'
            },
            {
                name: 'Spring Boot',
                imageUrl: 'https://img.icons8.com/?size=512&id=90519&format=png',
                webUrl: 'https://spring.io/projects/spring-boot'
            },
        ],
        projectType: projectTypes[4],
        category: categories[0]
    },
    {
        slug: 'audirea-music-generator',
        title: 'Audirea - Music generator',
        image: assets.home.myLatestProject.projects.audirea,
        repositoryUrl: "https://github.com/ayesh-vininda/portfolio",
        demoUrl: "",
        summary: 'Developed a music-generator, utilizing deep learning techniques with LSTM  in TensorFlow.',
        techStacks: [
            {
                name:'Python',
                imageUrl:'https://img.icons8.com/?size=512&id=l75OEUJkPAk4&format=png',
                webUrl:'https://www.python.org/'
            },
            {
                name: 'Tensorflow',
                imageUrl: 'https://img.icons8.com/?size=512&id=n3QRpDA7KZ7P&format=png',
                webUrl: 'https://www.tensorflow.org/'
            },
        ],
        projectType: projectTypes[5],
        category: categories[0]
    },
]

function getProjectBySlug(slug: string) {
    return initialProjects.find(project => project.slug === slug);
}

export { categories, projectTypes, initialProjects, getProjectBySlug };