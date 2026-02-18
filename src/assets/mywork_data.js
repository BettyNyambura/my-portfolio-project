import project1_img from '../assets/proj1.svg'
import project2_img from '../assets/proj2.JPG'
import project3_img from '../assets/proj7.JPG'
import project4_img from '../assets/proj4.JPG'
import project5_img from '../assets/project_2.svg'
import project6_img from '../assets/proj8.JPG'

const mywork_data = [
    {
        id: 1,
        title: "Enterprise RAG Chatbot",
        impact: "Reduced policy document access time from 30 minutes to 2–3 seconds using LLMs and Vector Search",
        techStack: "AWS Bedrock • Pinecone • Neo4j • Azure Bot Services • Python • Docker",
        img: project1_img,
        problem: "Staff at a non-profit organization were spending up to 30 minutes searching for relevant policy documents, causing inefficiencies and frustration.",
        architectureImg: "/assets/rag-architecture.png",
        highlights: [
            "Designed a Retrieval-Augmented Generation (RAG) pipeline integrating LLM embeddings with vector search",
            "Implemented intelligent document chunking for multi-page and multi-format documents",
            "Built asynchronous Python backend to handle high concurrency and fast responses",
            "Evaluated and selected models to achieve high retrieval accuracy and consistency",
            "Integrated with Azure Bot Services for seamless access via Microsoft Teams"
        ],
        metrics: [
            { label: "Reduction in document access time", value: "98%" },
            { label: "Faster processing of queries", value: "83%" },
        ]
    },
    {
        id: 2,
        title: "GPU-Powered OCR Pipeline",
        impact: "Reduced invoice processing time from 17 days to 3 days, saving over $8,800 annually in labor costs",
        techStack: "Python • GPU Acceleration • Vision-Language Models • Azure AI Foundry • Docker • Async Processing",
        img: project2_img,
        problem: "Level 4 hospital staff were manually processing invoices, taking up to 17 days per batch, causing delays and high labor costs.",
        architectureImg: "/assets/ocr-architecture.png",
        highlights: [
            "Architected a GPU-powered Vision-Language Model (VLM) OCR system for high-volume document processing",
            "Implemented precision prompt engineering for improved extraction accuracy",
            "Optimized async Python pipelines for faster multi-page invoice processing",
            "Structured OCR outputs into JSON for downstream use and integration",
            "Evaluated multiple OCR models and benchmarked on FUNSD dataset to achieve 90% extraction accuracy"
        ],
        metrics: [
            { label: "Reduction in processing time", value: "83%" },
            { label: "Extraction accuracy achieved", value: "90%" },
            { label: "Annual labor cost savings", value: "$8,800" },
            { label: "Invoices processed per day (approx.)", value: "5x increase" }
        ]
    },
    {
        id: 3,
        title: "Intelligent OCR Optimization",
        impact: "Achieved 95% classification consistency and reduced document processing time by 60% using async LLM pipelines",
        techStack: "Python • LLM Integration • Async Processing • JSON Structuring • OCR Systems • Docker",
        img: project3_img,
        problem: "Existing OCR system was slow and inconsistent when processing multi-modal documents, causing delays and manual correction work.",
        architectureImg: "/assets/ocr-optimization-architecture.png",
        highlights: [
            "Integrated async Python LLMs to intelligently chunk and structure multi-modal OCR outputs",
            "Optimized pipeline to reduce redundant processing and improve throughput",
            "Transformed raw OCR outputs into structured JSON for downstream applications",
            "Ensured high classification consistency across document types and formats",
            "Benchmarking and fine-tuning to achieve 95%+ classification accuracy"
        ],
        metrics: [
            { label: "Classification consistency", value: "95%" },
            { label: "Reduction in processing time", value: "60%" },
            { label: "Integration-ready structured outputs", value: "100%" }
        ]
    },
];
 
export default mywork_data;