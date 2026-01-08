export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    link?: string;
    githubUrl?: string;
    date?: string;
    category: 'AI' | 'NLP' | 'IoT' | 'Dashboard' | 'Algorithms' | 'Other';
}

export const projectsData: Project[] = [
    {
        id: 'weather-system',
        title: 'IOT Weather Prediction & Smart Control System',
        description: 'Designed a smart IoT system to monitor temperature, humidity, rain, wind, and light using ESP32 and real sensors. Trained an ML prediction model to generate “Play/Not Play” decisions based on real-time sensor data. Created a real-time dashboard to visualize all readings and toggle between Manual and AI control modes.',
        techStack: ['ESP32', 'Sensors', 'PWM RGB Control', 'Python', 'ML (Naïve Bayes)', 'PHP', 'MySQL', 'Plotly.js', 'HTML/CSS/JS', 'IoT Data Pipeline'],
        link: 'https://github.com/Amr-Belal-77/Weather-Monitoring-System',
        date: 'Nov 2025',
        category: 'IoT'
    },
    {
        id: 'info-retrieval',
        title: 'Information Retrieval Engine & Flask Interface',
        description: 'Built a complete Information Retrieval pipeline using NLTK preprocessing and Gensim’s TF-IDF model to retrieve, rank, and evaluate over 2,000 movie review documents. Deployed a Flask-based search interface displaying top-k results with automated precision, recall, and F1-score evaluation.',
        techStack: ['Python', 'NLTK', 'Gensim', 'Scikit-learn', 'Flask', 'TF-IDF', 'Cosine Similarity', 'Information Retrieval'],
        link: 'https://github.com/Amr-Belal-77/information-retrieval-gensim',
        date: 'Nov 2025',
        category: 'NLP'
    },
    {
        id: 'drug-classification',
        title: 'Drug Classification – ML Models Evaluation',
        description: 'Built a complete ML pipeline to classify drug types using Decision Tree, SVM, KNN, and Logistic Regression with multiple scaling techniques. Applied feature encoding, scaling (MinMax, Standard, Robust, MaxAbs), and visualized performance with classification reports and decision trees.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'Classification Models', 'Label Encoding'],
        link: 'https://github.com/Amr-Belal-77/drug-classification-ml-evaluation',
        date: 'Jul 2025',
        category: 'AI'
    },
    {
        id: 'mentassist',
        title: 'Mental Health Chatbot',
        description: 'Developed an intelligent conversational chatbot focusing on mental health support and empathetic AI responses. Engineered and trained using LSTM with attention for context-aware conversations. Deployed via Flask for real-time use.',
        techStack: ['Python', 'Flask', 'TensorFlow', 'Keras', 'Git', 'GitHub', 'HTML/CSS/JS', 'Git LFS'],
        link: 'https://github.com/Amr-Belal-77/MentAssist-Chatbot',
        date: 'May 2025',
        category: 'NLP'
    },
    {
        id: 'sensitive-data',
        title: 'Sensitive Data Chat Monitor',
        description: 'Implemented a secure chat interface to prevent data leaks by detecting and blocking sensitive keywords using keyword logic and user intent control. Enhanced safety in internal communications through a Flask-Node.js integration.',
        techStack: ['HTML', 'JavaScript', 'CSS', 'Node.js', 'Express'],
        link: 'https://github.com/Amr-Belal-77/sensitive-data-monitor',
        date: 'Apr 2025',
        category: 'Other'
    },
    {
        id: 'wholesale-clustering',
        title: 'Clustering Analysis of Wholesale Data',
        description: 'Applied clustering techniques (KMeans and DBSCAN) to segment wholesale customers based on annual spending. Performed outlier removal, standardization, and used Elbow Method/Silhouette Score for optimal cluster selection. Visualized results using PCA.',
        techStack: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn', 'PCA', 'Clustering Metrics'],
        link: 'https://github.com/Amr-Belal-77/Wholesale_clustering',
        date: 'Apr 2025',
        category: 'AI'
    },
    {
        id: 'nyc-taxi',
        title: 'NYC Taxi Trip Analysis Dashboard',
        description: 'Built an interactive analytical dashboard using Plotly Dash to explore NYC taxi trip data, including heatmaps, regression-based fare prediction, and trip duration analysis. Enabled real-time data filtering and summary insights.',
        techStack: ['Python', 'Plotly Dash', 'Pandas', 'Mapbox', 'Scikit-learn', 'Data Visualization', 'Linear Regression'],
        link: '#',
        date: 'Mar 2025',
        category: 'Dashboard'
    },
    {
        id: 'ml-eval',
        title: 'Machine Learning Models Evaluation',
        description: 'Python-based tools to analyze and evaluate datasets using machine learning techniques (classification, regression, clustering). Enhanced decision-making in selecting the best machine learning models for different tasks.',
        techStack: ['Python', 'ML Techniques', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Seaborn'],
        link: 'https://github.com/Amr-Belal-77/Machine-Learning-Models-Evaluation-',
        date: 'Dec 2024',
        category: 'AI'
    },
    {
        id: 'house-price',
        title: 'House Price Regression: Scaling Impact',
        description: 'Conducted a comparative study on how different feature scaling techniques affect model performance (Linear Regression vs KNN) on house price prediction. Demonstrated the critical role of preprocessing in non-parametric models.',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'Seaborn', 'Regression', 'Feature Scaling'],
        link: '#',
        category: 'AI'
    },
    {
        id: 'prosthetic-hand',
        title: 'Prosthetic Hand Project',
        description: 'Designed a smart prosthetic hand to improve upper-limb functionality for amputees using IoT and robotics to simulate natural hand movements.',
        techStack: ['ML', 'IoT', 'Robotics'],
        link: 'https://drive.google.com/file/d/157qfg1nnXj9Jowpf779zPYOYPrzof68T/view?usp=sharing',
        date: '4th Semester',
        category: 'IoT'
    },
    {
        id: 'radio-labelling',
        title: 'Radio Labelling for Radio Stations',
        description: 'Solution to interference between communications that arises due to interference from uncontrolled simultaneous transmissions.',
        techStack: ['Python', 'Data Processing'],
        link: 'https://github.com/Amr-Belal-77/Radio-Labelling-For-Radio-Station',
        date: 'Dec 2023',
        category: 'Other'
    },
    {
        id: 'kmeans-scratch',
        title: 'K-Means Implementation',
        description: 'Implementing k-means without using libraries, allowing user choice for k-determination (random/deterministic) and distance metric (Euclidean/Manhattan).',
        techStack: ['Python', 'Algorithms', 'Math'],
        link: 'https://github.com/Amr-Belal-77/KMeans-from-scratch',
        category: 'Algorithms'
    }
];
