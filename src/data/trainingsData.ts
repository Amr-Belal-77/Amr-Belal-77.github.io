export interface Training {
    id: string;
    title: string;
    institution: string;
    date: string;
    takeaways: string[];
    certificateImage?: string;
}

export const trainingsData: Training[] = [
    {
        id: '1',
        title: 'Generative AI Intern',
        institution: 'DEPI – EYouth',
        date: 'Nov 2025 - Jul 2026',
        takeaways: [
            'Deep Learning & Transformers',
            'LLMs & HuggingFace Ecosystem',
            'GANs & Diffusion Models',
            'Agentic AI & Multi-Agent Systems'
        ]
    },
    {
        id: '2',
        title: 'Data Science Intern',
        institution: 'DEPI – AMIT',
        date: 'Oct 2024 – May 2025',
        certificateImage: '/certificates/depi_amit.png',
        takeaways: [
            'Data Cleaning & EDA',
            'Feature Engineering & Statistics',
            'Model Evaluation & Optimization'
        ]
    },
    {
        id: '3',
        title: 'AI Intern',
        institution: 'The British University in Egypt',
        date: 'Feb 2025',
        certificateImage: '/certificates/bue_ai.png',
        takeaways: [
            'Computer Vision & CNNs',
            'Transfer Learning',
            'Object Detection (YOLO)'
        ]
    },
    {
        id: '4',
        title: 'AI & ML Training',
        institution: 'Shabab Mubtakirun & Huawei',
        date: 'Jan – Feb 2025',
        takeaways: [
            'Machine Learning Pipelines',
            'Regression & Classification',
            'Clustering & Preprocessing'
        ]
    }
];
