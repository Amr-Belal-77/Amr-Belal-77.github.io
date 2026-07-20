export interface Certificate {
    id: string;
    title: string;
    issuer: string;
    date: string;
    field: string;
    imageUrl?: string;
    description: string;
    skills: string[];
}

export const certificatesData: Certificate[] = [
    {
        id: '1',
        title: 'Generative AI Intern',
        issuer: 'DEPI – EYouth',
        date: 'Nov 2025 - Jul 2026',
        field: 'Artificial Intelligence',
        description: 'Comprehensive internship covering Deep Learning, LLMs, Transformers, GANs, Diffusion Models, HuggingFace, and Agentic AI systems.',
        skills: ['Deep Learning', 'LLMs', 'Transformers', 'GANs', 'Diffusion Models', 'HuggingFace', 'Agentic AI', 'Multi-Agent Systems']
    },
    {
        id: '2',
        title: 'Data Science Intern',
        issuer: 'DEPI – AMIT',
        date: 'Oct 2024 – May 2025',
        field: 'Data Science',
        imageUrl: '/certificates/depi_amit.png',
        description: 'Intensive training in Data cleaning, EDA, Feature Engineering, Statistics, and Model evaluation.',
        skills: ['Data Cleaning', 'EDA', 'Feature Engineering', 'Statistics', 'Model Evaluation']
    },
    {
        id: '3',
        title: 'AI Intern',
        issuer: 'The British University in Egypt (BUE)',
        date: 'Feb 2025',
        field: 'Artificial Intelligence',
        imageUrl: '/certificates/bue_ai.png',
        description: 'Training included Computer vision, CNN models, Transfer Learning, and YOLO basics.',
        skills: ['Computer Vision', 'CNN', 'Transfer Learning', 'YOLO']
    },
    {
        id: '4',
        title: 'AI & ML Training',
        issuer: 'Shabab Mubtakirun & Huawei',
        date: 'Jan – Feb 2025',
        field: 'Machine Learning',
        description: 'Covered ML pipelines, Regression, Classification, Clustering, and Data preprocessing.',
        skills: ['ML Pipelines', 'Regression', 'Classification', 'Clustering', 'Preprocessing']
    },
    {
        id: '5',
        title: 'Frontend Development Course',
        issuer: 'Coursera',
        date: '2023',
        field: 'Web Development',
        description: 'Course included HTML, CSS, JavaScript.',
        skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
        id: '6',
        title: 'Java Course',
        issuer: 'Coursera',
        date: '2023',
        field: 'Software Engineering',
        description: 'Comprehensive Java programming course.',
        skills: ['Java', 'OOP']
    },
    {
        id: '7',
        title: 'Machine Learning Course',
        issuer: 'Coursera',
        date: '2023',
        field: 'Machine Learning',
        description: 'Training included KNN, SVM, Decision Tree, K-Means, and model evaluation metrics.',
        skills: ['KNN', 'SVM', 'Decision Trees', 'K-Means']
    },
    {
        id: '8',
        title: 'Python Course',
        issuer: 'Coursera',
        date: '2023',
        field: 'Programming',
        description: 'Fundamental Python programming course.',
        skills: ['Python', 'Scripting']
    }
];
