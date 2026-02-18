import project1_img from '../assets/proj1.svg'
import project2_img from '../assets/proj2.JPG'
import project3_img from '../assets/proj7.JPG'
import project4_img from '../assets/proj4.JPG'
import project5_img from '../assets/project_2.svg'
import project6_img from '../assets/proj8.JPG'

const mywork_data = [
    {
        id: 1,
        title: "Enterprise RAG Knowledge System",
        impact: "Reduced document access time by 98% using LLM + Vector Search",
        techStack: "AWS Bedrock • Pinecone • Neo4j • Azure",
        img: project1_img,
        problem: "Employees struggled to find relevant documents quickly, leading to wasted time and reduced productivity.",
        architectureImg: "/assets/rag-architecture.png",
        highlights: [
            "Embedding strategy",
            "Chunking logic",
            "Async processing",
            "Model evaluation"
        ],
        metrics: [
            { label: "98% reduction in access time", value: "98%" },
            { label: "83% faster processing", value: "83%" },
            { label: "$8,800 annual cost savings", value: "$8,800" }
        ]
    },
    {
        id: 2,
        title: "E-Commerce Analytics Dashboard",
        impact: "Enabled real-time sales insights, boosting conversion by 22%",
        techStack: "React • Node.js • MongoDB • Chart.js",
        img: project2_img,
        problem: "Lack of actionable analytics made it hard for managers to optimize sales strategies.",
        architectureImg: "/assets/ecommerce-architecture.png",
        highlights: [
            "Live data streaming",
            "Custom charting",
            "Role-based access",
            "Automated reporting"
        ],
        metrics: [
            { label: "22% increase in conversion", value: "22%" },
            { label: "Real-time insights", value: "Real-time" },
            { label: "$5,200 monthly revenue boost", value: "$5,200" }
        ]
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        impact: "Showcased skills and projects, leading to 3 job offers",
        techStack: "Vite • React • CSS Modules • Netlify",
        img: project3_img,
        problem: "Needed a modern, responsive site to highlight experience and attract recruiters.",
        architectureImg: "/assets/portfolio-architecture.png",
        highlights: [
            "Responsive design",
            "Lazy loading",
            "SEO optimization",
            "Continuous deployment"
        ],
        metrics: [
            { label: "3 job offers received", value: "3" },
            { label: "100% mobile friendly", value: "100%" },
            { label: "<1s load time", value: "<1s" }
        ]
    }
];
 
export default mywork_data;