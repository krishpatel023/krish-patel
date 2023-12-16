import ReactLogo from '../assets/react.svg'
import Tailwind from '../assets/Tailwind.svg'
import Javascript from '../assets/Javascript.svg'
import Redux from '../assets/Redux.svg'
import SocketIo from '../assets/SocketIo.svg'
import Docker from '../assets/Docker.svg'
import NodeJS from '../assets/NodeJS.svg'
import Express from '../assets/Express.svg'
import MongoDB from '../assets/MongoDB.svg'
import Firebase from '../assets/Firebase.svg'
import Multer from '../assets/Multer.svg'
import Git from '../assets/Git.svg'
// import Github from '../assets/Github.svg'
import HTML from '../assets/HTML.svg'
import CSS from '../assets/CSS.svg'


import Github from '../assets/GithubLink.svg'
// import Website from '../assets/Website.svg'
import Website from '../assets/GoArrowWhite.svg'


// Project Images
import Calm_sounds from '../assets/Projects/calm-sounds.png'
import Snkr_street from '../assets/Projects/snkr-street.png'
import Calendar from '../assets/Projects/calendar.png'
import Coinverse from '../assets/Projects/coinverse.png'
import Gym_mate from '../assets/Projects/gym-mate.png'
import Car_rental from '../assets/Projects/car-rental.png'

export const ProjectsWebDevelopment = [
    {
        ProjectName : "CALM SOUNDS",
        ProjectType : "Fullstack",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
            {
                logo : Firebase,
                title : 'Firebase (For Authentication, Storage and Database)'
            }
        ],
        Description : "CALM SOUNDS is a responsive ReactJS web application similar to Spotify having two interface for mobile and computer separately. It includes functionalities like Music Player(from Firebase Storage), creating and editing personal playlist, linking playlists to the user account, Authentication & implementation dark and light mode.",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://calm-sounds.vercel.app"
            },
            {
                img : Github,
                title : "CODE",
                link : "https://github.com/krishpatel023/calm-sounds"
            }
        ],
        Category : 'dynamic',
        PreviewImg : Calm_sounds
    },
    {
        ProjectName : "SNKR STREET - E-COMMERCE APPLICATION",
        ProjectType : "Fullstack",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
            {
                logo : Redux,
                title : 'Redux'
            },
            {
                logo : NodeJS,
                title : 'NodeJS'
            },
            {
                logo : Express,
                title : 'ExpressJS'
            },
            {
                logo : MongoDB,
                title : 'MongoDB'
            },
            {
                logo : Firebase,
                title : 'Firebase (For Authentication)'
            }
        ],
        Description : "SNKR STREET is a responsive ReactJS application mimicking a full functional shopping app like Nike. It has functionalities like Dynamic Product Catalog, Cart (implemented using REDUX), Order Placement, Authentication (implemented using Firebase), Order Tracking, Admin Panel(for displaying, editing, creating or deleting Products as well as Orders.",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://snkr-street-frontend.vercel.app"
            },
            {
                img : Github,
                title : "FRONTEND CODE",
                link : "https://github.com/krishpatel023/snkr-street-frontend"
            },
            {
                img : Github,
                title : "BACKEND CODE",
                link : "https://github.com/krishpatel023/snkr-street-backend"
            }
        ],
        Category : 'dynamic',
        PreviewImg : Snkr_street
    },
    {
        ProjectName : "CALENDAR APP",
        ProjectType : "Frontend",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
            {
                logo : Tailwind,
                title : 'Tailwind'
            },
            {
                logo : ReactLogo,
                title : 'Context API'
            },
        ],
        Description : "The calendar web app where users can effortlessly create and customize tasks and set due dates. The standout feature of the app lies in its intuitive drag-and-drop functionality, allowing users to effortlessly schedule and rearrange tasks on the calendar. The calendar itself is designed with month and list view, providing a comprehensive overview of upcoming events and deadlines. This fully functional calendar web app ensures a smooth and efficient organization of tasks with a good UI",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://calender-app-red.vercel.app/"
            },
            {
                img : Github,
                title : "CODE",
                link : "https://github.com/krishpatel023/calender-app"
            }
        ],
        Category : 'dynamic',
        PreviewImg : Calendar
    },
    {
        ProjectName : "COINVERSE",
        ProjectType : "Frontend",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
        ],
        Description : "COINVERSE is a frontend landing page that includes functionalities like interacting with API, Pagination and Lazy Loading.",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://coin-verse-delta.vercel.app/"
            },
            {
                img : Github,
                title : "CODE",
                link : "https://github.com/krishpatel023/coin-verse"
            }
        ],
        Category : 'static',
        PreviewImg : Coinverse
    },
    {
        ProjectName : "Gym Mate",
        ProjectType : "Frontend",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
            {
                logo : Tailwind,
                title : 'Tailwind CSS'
            },
            {
                logo : Firebase,
                title : 'Firebase'
            },
        ],
        Description : "Gymate provides a space for people to improve their physical fitness and overall health through regular exercise and physical activity. It has been built by accurately executing a figma design to code.",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://gym-mate-seven.vercel.app/"
            },
            {
                img : Github,
                title : "CODE",
                link : "https://github.com/krishpatel023/gym-mate"
            }
        ],
        Category : 'static',
        PreviewImg : Gym_mate
    },
    {
        ProjectName : "Car Rental",
        ProjectType : "Frontend",
        TechnologiesUsed : [
            {
                logo : ReactLogo,
                title : 'React'
            },
        ],
        Description : "A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an easy-to-use interface for searching, comparing, and reserving cars from a wide selection of vehicles that vary in make, model, size, and price.",
        Links : [
            {
                img : Website,
                title : "WEBSITE",
                link : "https://car-rental-five-mu.vercel.app/"
            },
            {
                img : Github,
                title : "CODE",
                link : "https://github.com/krishpatel023/car-rental"
            }
        ],
        Category : 'static',
        PreviewImg : Car_rental
    }
]


export const ProjectsAIML = [
    {
        ProjectName : "STOCK MARKET FORECASTING",
        ProjectType : "LSTM (Long Short-Term Memory) Network",
        Description : "It is a stock forecasting project utilizing LSTM neural networks. Developed deep learning models to analyze historical stock data, identifying patterns and predicting future stock price movements. Gained expertise in time series analysis and machine learning, demonstrating proficiency in data science and predictive modeling.",
        Links : [
            {
                img : Github,
                title : "CODE",
                link : "https://colab.research.google.com/drive/125QPxXox_7f4YUlwKMgoGkaR-BXPYR8m?usp=sharing"
            }
        ]
    },
    {
        ProjectName : "SPAM MESSAGE IDENTIFICATION",
        ProjectType : "Naive Bayes - NLP (Natural Language Processing)",
        Description : "This project focused on spam message identification using Naive Bayes and Natural Language Processing (NLP) techniques. Constructed NLP models to analyze and classify text messages, distinguishing between spam and legitimate messages. It included usage of NLTK Library.",
        Links : [
            {
                img : Github,
                title : "CODE",
                link : "https://colab.research.google.com/drive/1pyR-EuHN8SLbbsUPv5dXThHyK-4pwtmK?usp=sharing"
            }
        ]
    },
    {
        ProjectName : "BREAST CANCER PREDICTION",
        ProjectType : "Classification using SVM (Support Vector Machine)",
        Description : "This project centered on breast cancer identification through classification using Support Vector Machines (SVM). Developed robust machine learning models to analyze medical data and classify breast cancer cases.",
        Links : [
            {
                img : Github,
                title : "CODE",
                link : "https://colab.research.google.com/drive/1_N61sw5IjIC5Tui22XnnfvgG5vhEmTfd?usp=sharing"
            }
        ]
    },
]


// Schema
// {
//     ProjectName : "Calm Sounds",
//     ProjectType : "FullStack",
//     TechnologiesUsed : [
//         {
//             logo : '',
//             title : ''
//         }
//     ],
//     ProjectDomain : "",
//     Description : "",
//     Links : [
//         {
//             img : "",
//             title : "",
//             link : ""
//         }
//     ]
// }