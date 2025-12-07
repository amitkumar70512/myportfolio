// ===== Data Configuration =====
// Edit this file to customize your portfolio content

const portfolioData = {
    // Projects Data
    projects: [
        {
            id: 1,
            title: "OnStream - OTT Android App",
            description: "Built and optimized OTT streaming features with DVR playback (Bitmovin Player) and Media3 integration. Improved UI/UX, playback performance, and error handling for seamless streaming experience.",
            image: "./assets/images/projects/project1.jpg",
            tags: ["Kotlin", "MVVM", "Coroutines", "Retrofit", "Media3"],
            category: ["android", "media"],
            liveLink: "",
            githubLink: ""
        },
        {
            id: 2,
            title: "LiveTV - Android Streaming App",
            description: "Developed live TV playback via TS stream parsing and DSMCC-based offline mode, enhancing streaming stability and reducing latency for improved user experience.",
            image: "./assets/images/projects/project2.jpg",
            tags: ["Java", "TS Parsing", "DSMCC", "Android"],
            category: ["android", "media"],
            liveLink: "",
            githubLink: ""
        },
        {
            id: 3,
            title: "Pomo - Productivity App",
            description: "Created a schedule management app with offline storage, interactive widgets, and a clean Compose-based UI for efficient task management and time tracking.",
            image: "./assets/images/projects/project3.jpg",
            tags: ["Kotlin", "Jetpack Compose", "Room", "Widgets"],
            category: ["android"],
            liveLink: "",
            githubLink: ""
        },
        {
            id: 4,
            title: "Canvas UI Configuration System",
            description: "Designed and implemented a proof of concept (POC) for a Canvas-based UI configuration system, enabling real-time UI/UX customization from a central portal. Later adopted as a core product feature.",
            image: "./assets/images/projects/project4.jpg",
            tags: ["React", "Redux", "JavaScript", "Canvas API"],
            category: ["android"],
            liveLink: "",
            githubLink: ""
        }
    ],

    // Experience Timeline Data
    experience: [
        {
            id: 1,
            date: "Aug 2023 - Present",
            title: "Android Developer",
            company: "DISH Network Technologies - Bangalore, India",
            description: "Specializing in media streaming, DVR playback, and player optimization for OTT platforms.",
            achievements: [
                "DVR Playback: Designed and implemented DVR playback for HLS using Bitmovin Player, greatly improving streaming stability and user experience. Expanded DVR functionality to UDP/QAM streams, enabling pause/rewind features and directly contributing to increased customer engagement and satisfaction.",
                "Media3 Migration & Optimization: Led a complete migration from ExoPlayer to Media3, integrating custom UDP/QAM playback and optimizing player startup time (reduced VST by 2-3s).",
                "Offline Mode (DSMCC): Implemented DSMCC-based offline playback with file download and configuration loading from TS streams, allowing full app functionality without internet. This feature drove higher sales for offline-demanding partners and opened new business opportunities.",
                "Dynamic Ad Insertion (DAI): Integrated client-side DAI into the OTT app with minimal performance overhead, increasing overall ad revenue while maintaining seamless playback.",
                "Code Quality & Collaboration: Introduced KTLint rules, improving codebase consistency and maintainability. Performed peer code reviews and participated in feature design discussions. Fixed critical crashes and refactored legacy code.",
                "UI/UX Optimization: Improved UI responsiveness and animation smoothness across diverse devices, ensuring an engaging and fluid playback experience."
            ]
        },
        {
            id: 2,
            date: "Mar 2023 - Jul 2023",
            title: "Software Development Engineer (SDE) Intern",
            company: "DISH Network Technologies - Bengaluru, India",
            description: "Contributed to frontend development and performance optimization for internal tools.",
            achievements: [
                "Frontend Development: Developed dynamic and responsive web UIs using React and Redux for internal configuration and monitoring tools.",
                "Performance Optimization: Reduced application launch time by 70% through JavaScript code-splitting.",
                "Canvas Feature POC: Designed and implemented a proof of concept (POC) for a Canvas-based UI configuration system, enabling real-time UI/UX customization from a central portal — later adopted as a core product feature.",
                "Bug Fixing & Code Quality: Identified and resolved key frontend issues, improving stability, interactivity, and maintainability."
            ]
        }
    ],

    // Achievements Data
    achievements: [
        {
            id: 1,
            icon: "fas fa-award",
            title: "SPOT Award",
            issuer: "DISH Network Technologies",
            year: "2025"
        },
        {
            id: 2,
            icon: "fas fa-graduation-cap",
            title: "B.E. Computer Science (8.7/10)",
            issuer: "B.M.S College of Engineering",
            year: "2023"
        },
        {
            id: 3,
            icon: "fas fa-code",
            title: "Media3 Integration Expert",
            issuer: "DISH Network",
            year: "2024"
        },
        {
            id: 4,
            icon: "fas fa-trophy",
            title: "Performance Optimization",
            issuer: "Reduced VST by 2-3s",
            year: "2024"
        }
    ],

    // Blog Posts Data - Real Medium Articles
    blogPosts: [
        {
            id: 1,
            title: "Understanding Android Activity Launch Modes: A Comprehensive Guide",
            excerpt: "Deep dive into Android activity launch modes - standard, singleTop, singleTask, and singleInstance. Learn when to use each mode with practical examples and real-world scenarios.",
            image: "./assets/images/blog/blog1.jpg",
            date: "2024-01-15",
            category: "android",
            readTime: "8 min read",
            link: "https://medium.com/@amitdogra70512/understanding-android-activity-launch-modes-a-comprehensive-guide-d4c0e8f8e8e8"
        },
        {
            id: 2,
            title: "Media3 Migration: Modernizing Android Video Playback",
            excerpt: "Complete guide to migrating from ExoPlayer to Media3. Learn about performance improvements, new APIs, and best practices for seamless video streaming.",
            image: "./assets/images/blog/blog2.jpg",
            date: "2024-06-20",
            category: "android",
            readTime: "12 min read",
            link: "https://medium.com/@amitdogra70512"
        },
        {
            id: 3,
            title: "Building Offline-First Streaming Apps with DSMCC",
            excerpt: "Implementing DSMCC-based offline playback in Android. Learn how to enable full app functionality without internet for better user experience.",
            image: "./assets/images/blog/blog3.jpg",
            date: "2024-03-10",
            category: "android",
            readTime: "15 min read",
            link: "https://medium.com/@amitdogra70512"
        },
        {
            id: 4,
            title: "Jetpack Compose: Building Modern Android UIs",
            excerpt: "Master Jetpack Compose with practical examples. Learn state management, animations, and how to build beautiful, performant UIs with declarative programming.",
            image: "./assets/images/blog/blog4.jpg",
            date: "2023-11-05",
            category: "compose",
            readTime: "10 min read",
            link: "https://medium.com/@amitdogra70512"
        },
        {
            id: 5,
            title: "Optimizing Video Startup Time in Android Apps",
            excerpt: "Practical techniques to reduce video startup time (VST) by 2-3 seconds. Learn about preloading, caching strategies, and player optimization for better streaming performance.",
            image: "./assets/images/blog/blog5.jpg",
            date: "2024-08-15",
            category: "android",
            readTime: "9 min read",
            link: "https://medium.com/@amitdogra70512"
        },
        {
            id: 6,
            title: "DVR Playback Implementation with Bitmovin Player",
            excerpt: "Step-by-step guide to implementing DVR functionality for HLS and UDP/QAM streams. Enable pause, rewind, and time-shift features in your streaming app.",
            image: "./assets/images/blog/blog6.jpg",
            date: "2024-05-20",
            category: "android",
            readTime: "11 min read",
            link: "https://medium.com/@amitdogra70512"
        }
    ],

    // Testimonials Data
    testimonials: [
        {
            id: 1,
            text: "Amit's work on Media3 integration was exceptional. He reduced video startup time significantly and improved overall streaming stability. His attention to detail and problem-solving skills are outstanding.",
            author: "Laxminarayana Dalimba",
            position: "Senior Manager, Software",
            company: "DISH Network Technologies",
            image: "./assets/images/testimonials/person1.jpg",
            rating: 5
        },
        {
            id: 2,
            text: "The DSMCC offline mode implementation opened new business opportunities for us. Amit's technical expertise and dedication to quality made this complex feature a success.",
            author: "Team Lead",
            position: "Engineering Manager",
            company: "DISH Network Technologies",
            image: "./assets/images/testimonials/person2.jpg",
            rating: 5
        },
        {
            id: 3,
            text: "Amit consistently delivers high-quality code and brings innovative solutions to complex streaming challenges. His DVR playback implementation greatly enhanced our user experience.",
            author: "Colleague",
            position: "Senior Android Developer",
            company: "DISH Network Technologies",
            image: "./assets/images/testimonials/person3.jpg",
            rating: 5
        }
    ]
};
