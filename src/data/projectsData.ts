export type ProjectCategory =
    | 'Agentic AI'
    | 'Generative AI'
    | 'Applied AI & Robotics'
    | 'HCI & Web App'
    | 'Computer Vision'
    | 'IoT & Machine Learning'
    | 'Information Retrieval'
    | 'Classification'
    | 'Conversational AI'
    | 'Data Loss Prevention'
    | 'Clustering'
    | 'Data Analytics'
    | 'ML Evaluation'
    | 'Regression'
    | 'Assistive Robotics'
    | 'Wireless Communications'
    | 'ML Algorithms'
    | 'ML Engineering';

export interface Project {
    id: string;
    title: string;
    description: string;
    purpose?: string;
    features?: string[];
    projectType?: string;
    techStack: string[];
    link?: string;
    githubUrl?: string;
    liveUrl?: string;
    documentationUrl?: string;
    date?: string;
    category: ProjectCategory;
}

export const projectsData: Project[] = [
    {
        id: 'sourcecraft-research',
        projectType: 'Multi-Agent Research Project',
        title: 'SourceCraft Research – Multi-Agent Research Assistant',
        description: 'Built a source-aware three-agent research assistant that searches the web, writes cited Markdown briefs, reviews its own output, and routes evidence gaps or writing issues back to the right agent through a bounded LangGraph workflow.',
        techStack: ['Python', 'LangGraph', 'Gemini API', 'Multi-Agent Systems', 'DuckDuckGo Search', 'Streamlit', 'Structured State', 'Pytest', 'Ruff', 'Docker', 'CI'],
        link: 'https://github.com/Amr-Belal-77/sourcecraft-research',
        liveUrl: 'https://sourcecraft-research.streamlit.app/',
        date: 'Jul 2026',
        category: 'Agentic AI'
    },
    {
        id: 'raay',
        projectType: 'DEPI Graduation Project — GenAI Track, Round 4',
        title: 'Raay – Amazon Egypt Sentiment & AI Marketing',
        description: 'Developed a Streamlit application that searches Amazon Egypt, collects Arabic and English reviews, analyzes sentiment, compares products, visualizes insights, exports results, and generates a social-ready marketing poster for the strongest product.',
        techStack: ['Python', 'Streamlit', 'Arabic NLP', 'Sentiment Analysis', 'Web Scraping', 'Transformers', 'HuggingFace', 'Stable Diffusion', 'Pillow', 'Data Visualization', 'Pytest'],
        link: 'https://github.com/Amr-Belal-77/Raay',
        liveUrl: 'https://raaygit-bcjjkpixmgvmm7p8kescqw.streamlit.app/',
        date: 'Jul 2026',
        category: 'Generative AI'
    },
    {
        id: 'ish-intelligent-spherical-home',
        projectType: 'College Graduation Project',
        title: 'ISH – Intelligent Spherical Home Robot',
        description: 'An AI-powered spherical smart-home robot and college graduation project designed to move around the home as one integrated assistant, safety monitor, mobile security platform, reminder system, object-memory assistant, and smart-home control center.',
        purpose: 'ISH solves the fragmentation of traditional smart-home tools by connecting the camera, voice assistant, safety sensors, memory, alerts, robotics, and mobile access in one modular system. It is designed to help residents monitor their home, identify people, check safety conditions, remember where objects were placed, manage reminders, and access the robot remotely from one interface.',
        features: [
            'Face detection and recognition with authorized, unauthorized, and unknown-person classification.',
            'Live ESP32-CAM streaming and snapshots for security monitoring and face recognition.',
            'Arabic and English voice commands using Whisper STT, with spoken replies from a local Egyptian Arabic TTS model.',
            'Environmental monitoring for gas, smoke, fire, temperature, humidity, motion, distance, and light, with risk-based alerts.',
            'Reminder creation and querying through voice or the mobile application.',
            'Object-location memory for saving and retrieving the last known location of household items.',
            'Flutter mobile access to robot status, alerts, sensors, event history, face information, and the live camera.',
            'A modular Raspberry Pi, ESP32, FastAPI, and Supabase architecture prepared for autonomous movement and future smart-device control.'
        ],
        techStack: ['Python', 'FastAPI', 'Computer Vision', 'InsightFace', 'Whisper STT', 'Local TTS', 'Flutter', 'Supabase', 'ESP32', 'Raspberry Pi', 'IoT', 'Robotics'],
        link: 'https://github.com/Amr-Belal-77/ISH-Intelligent-Spherical-Home',
        documentationUrl: 'https://drive.google.com/file/d/118gCdB5V1vhJxHFallx4nls1ZaKd8Qvk/view?usp=sharing',
        date: '2025 - 2026',
        category: 'Applied AI & Robotics'
    },
    {
        id: 'weekly-genai-linkedin-agent',
        projectType: 'Private Project',
        title: 'Weekly GenAI LinkedIn Agent',
        description: 'Private multi-agent project that researches current Generative AI news, verifies each story across multiple sources, ranks the strongest updates, writes professional Arabic and English LinkedIn posts, applies an automated quality gate, and delivers a deduplicated digest by email on a schedule.',
        techStack: ['Python', 'Agentic AI', 'Multi-Agent Systems', 'Gemini API', 'Structured Output', 'Automated Quality Gates', 'SMTP', 'GitHub Actions', 'Pytest'],
        link: 'https://github.com/Amr-Belal-77/weekly-genai-linkedin-agent',
        date: 'Jul 2026',
        category: 'Agentic AI'
    },
    {
        id: 'hci-course-registration',
        projectType: 'HCI Prototype',
        title: 'Student Course Registration System – HCI Prototype',
        description: 'Created a complete three-tier course-registration prototype with administrator authentication, dashboards, CRUD workflows, advanced search, validation, and interface decisions grounded in HCI principles such as visibility, consistency, feedback, and error prevention.',
        techStack: ['Python', 'Flask', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap 5', '3-Tier Architecture', 'HCI', 'CRUD'],
        link: 'https://github.com/Amr-Belal-77/Student-Course-Registration-System---HCI-Prototype',
        date: 'May 2026',
        category: 'HCI & Web App'
    },
    {
        id: 'firevision-classifier',
        title: 'FireVision – Fire Image Classifier',
        description: 'Evaluated 88 deep-learning experiments for fire versus non-fire image classification, comparing original images, augmentation, seven edge-detection methods, and combined preprocessing. EfficientNetB0 with rotation or contrast augmentation achieved 97.96% accuracy.',
        techStack: ['Python', 'TensorFlow', 'Keras', 'EfficientNetB0', 'Computer Vision', 'Transfer Learning', 'Image Augmentation', 'Edge Detection', 'Classification', 'Model Evaluation'],
        link: 'https://github.com/Amr-Belal-77/FireVision-Classifier',
        date: 'Mar 2026',
        category: 'Computer Vision'
    },
    {
        id: 'weather-system',
        title: 'IOT Weather Prediction & Smart Control System',
        description: 'Designed a smart IoT system to monitor temperature, humidity, rain, wind, and light using ESP32 and real sensors. Trained an ML prediction model to generate “Play/Not Play” decisions based on real-time sensor data. Created a real-time dashboard to visualize all readings and toggle between Manual and AI control modes.',
        techStack: ['ESP32', 'Sensors', 'PWM RGB Control', 'Python', 'ML (Naïve Bayes)', 'PHP', 'MySQL', 'Plotly.js', 'HTML/CSS/JS', 'IoT Data Pipeline'],
        link: 'https://github.com/Amr-Belal-77/Weather-Monitoring-System',
        date: 'Nov 2025',
        category: 'IoT & Machine Learning'
    },
    {
        id: 'info-retrieval',
        title: 'Information Retrieval Engine & Flask Interface',
        description: 'Built a complete Information Retrieval pipeline using NLTK preprocessing and Gensim’s TF-IDF model to retrieve, rank, and evaluate over 2,000 movie review documents. Deployed a Flask-based search interface displaying top-k results with automated precision, recall, and F1-score evaluation.',
        techStack: ['Python', 'NLTK', 'Gensim', 'Scikit-learn', 'Flask', 'TF-IDF', 'Cosine Similarity', 'Information Retrieval'],
        link: 'https://github.com/Amr-Belal-77/information-retrieval-gensim',
        date: 'Nov 2025',
        category: 'Information Retrieval'
    },
    {
        id: 'drug-classification',
        title: 'Drug Classification – ML Models Evaluation',
        description: 'Built a complete ML pipeline to classify drug types using Decision Tree, SVM, KNN, and Logistic Regression with multiple scaling techniques. Applied feature encoding, scaling (MinMax, Standard, Robust, MaxAbs), and visualized performance with classification reports and decision trees.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Classification Models', 'Label Encoding'],
        link: 'https://github.com/Amr-Belal-77/drug-classification-ml-evaluation',
        date: 'Jul 2025',
        category: 'Classification'
    },
    {
        id: 'mentassist',
        title: 'Mental Health Chatbot',
        description: 'Developed an intelligent conversational chatbot focusing on mental health support and empathetic AI responses. Engineered and trained using LSTM with attention for context-aware conversations. Deployed via Flask for real-time use.',
        techStack: ['Python', 'Flask', 'TensorFlow', 'Keras', 'Git', 'GitHub', 'HTML/CSS/JS', 'Git LFS'],
        link: 'https://github.com/Amr-Belal-77/MentAssist-Chatbot',
        date: 'May 2025',
        category: 'Conversational AI'
    },
    {
        id: 'sensitive-data',
        title: 'Sensitive Data Chat Monitor',
        description: 'Implemented a secure chat interface to prevent data leaks by detecting and blocking sensitive keywords using keyword logic and user intent control. Enhanced safety in internal communications through a Flask-Node.js integration.',
        techStack: ['HTML', 'JavaScript', 'CSS', 'Node.js', 'Express'],
        link: 'https://github.com/Amr-Belal-77/sensitive-data-monitor',
        date: 'Apr 2025',
        category: 'Data Loss Prevention'
    },
    {
        id: 'wholesale-clustering',
        title: 'Clustering Analysis of Wholesale Data',
        description: 'Applied clustering techniques (KMeans and DBSCAN) to segment wholesale customers based on annual spending. Performed outlier removal, standardization, and used Elbow Method/Silhouette Score for optimal cluster selection. Visualized results using PCA.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'PCA', 'Clustering Metrics'],
        link: 'https://github.com/Amr-Belal-77/Wholesale_clustering',
        date: 'Apr 2025',
        category: 'Clustering'
    },
    {
        id: 'nyc-taxi',
        title: 'NYC Taxi Trip Analysis Dashboard',
        description: 'Built an interactive analytical dashboard using Plotly Dash to explore NYC taxi trip data, including heatmaps, regression-based fare prediction, and trip duration analysis. Enabled real-time data filtering and summary insights.',
        techStack: ['Python', 'Plotly Dash', 'Pandas', 'Mapbox', 'Scikit-learn', 'Data Visualization', 'Linear Regression'],
        link: '#',
        date: 'Mar 2025',
        category: 'Data Analytics'
    },
    {
        id: 'ml-eval',
        title: 'Machine Learning Models Evaluation',
        description: 'Python-based tools to analyze and evaluate datasets using machine learning techniques (classification, regression, clustering). Enhanced decision-making in selecting the best machine learning models for different tasks.',
        techStack: ['Python', 'ML Techniques', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
        link: 'https://github.com/Amr-Belal-77/Machine-Learning-Models-Evaluation-',
        date: 'Dec 2024',
        category: 'ML Evaluation'
    },
    {
        id: 'house-price',
        title: 'House Price Regression: Scaling Impact',
        description: 'Conducted a comparative study on how different feature scaling techniques affect model performance (Linear Regression vs KNN) on house price prediction. Demonstrated the critical role of preprocessing in non-parametric models.',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Regression', 'Feature Scaling'],
        link: '#',
        category: 'Regression'
    },
    {
        id: 'prosthetic-hand',
        title: 'Prosthetic Hand Project',
        description: 'Designed a smart prosthetic hand to improve upper-limb functionality for amputees using IoT and robotics to simulate natural hand movements.',
        techStack: ['ML', 'IoT', 'Robotics'],
        link: 'https://drive.google.com/file/d/157qfg1nnXj9Jowpf779zPYOYPrzof68T/view?usp=sharing',
        date: '4th Semester',
        category: 'Assistive Robotics'
    },
    {
        id: 'radio-labelling',
        title: 'Radio Labelling for Radio Stations',
        description: 'Solution to interference between communications that arises due to interference from uncontrolled simultaneous transmissions.',
        techStack: ['Python', 'Data Processing'],
        link: 'https://github.com/Amr-Belal-77/Radio-Labelling-For-Radio-Station',
        date: 'Dec 2023',
        category: 'Wireless Communications'
    },
    {
        id: 'kmeans-scratch',
        title: 'K-Means Implementation',
        description: 'Implementing k-means without using libraries, allowing user choice for k-determination (random/deterministic) and distance metric (Euclidean/Manhattan).',
        techStack: ['Python', 'Algorithms', 'Math'],
        link: 'https://github.com/Amr-Belal-77/KMeans-from-scratch',
        liveUrl: 'https://amr-belal-77.github.io/KMeans-from-scratch/',
        category: 'ML Algorithms'
    },
    {
        id: 'final-ml-pipeline',
        title: 'Reproducible Machine Learning Pipeline',
        description: 'Structured an end-to-end Jupyter-based machine learning workflow covering data loading, exploratory analysis, preprocessing, model training, evaluation, and reproducible environment setup with a clear path toward production-ready scripts.',
        techStack: ['Python', 'Jupyter Notebook', 'Data Analysis', 'Data Preprocessing', 'Machine Learning', 'Model Training', 'Model Evaluation', 'Reproducible Workflows'],
        link: 'https://github.com/Amr-Belal-77/final-project',
        date: 'May 2023',
        category: 'ML Engineering'
    }
];
