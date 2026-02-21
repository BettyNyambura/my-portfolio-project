import project1_img from '../assets/policy_doc.png'
import project2_img from '../assets/proj2.JPG'
import project3_img from '../assets/proj7.JPG'
import project4_img from '../assets/architecture_policy.png'
import project5_img from '../assets/project_2.svg'
import project6_img from '../assets/proj8.JPG'

const mywork_data = [
    {
        id: 1,
        title: "Enterprise RAG Chatbot",
        impact: "Reduced policy document access time from 30 minutes to 2–3 seconds using LLMs, vector search, and knowledge graph reasoning",
        techStack: [
            "AWS Bedrock • Pinecone •Neo4j (Cypher) • Azure Bot Services • Python • Docker"
        ],
        img: project1_img,
        extraImg: project1_img, 
        problem: "Staff at a non-profit trade organization that works across Europe and Africa struggled to find relevant policy documents quickly due to complex, multi-format files and scattered knowledge",
        architectureImg: project4_img,
        highlights: [
            "Built a dual-retrieval RAG pipeline: vector search (Pinecone) + knowledge graph (Neo4j, Cypher queries)",
            "Automated semantic chunking and embedding of multi-column PDFs using AWS Textract and Bedrock",
            "Enabled hybrid search: semantic similarity and graph-based entity reasoning",
            "Exposed backend via AWS API Gateway and Lambda, integrated with MS Teams via Azure Bot Service",
            "Delivered contextual, accurate answers with conversation memory and fast response times"
        ],
        metrics: [
            { label: "Reduction in document access time", value: "98%" },
            { label: "Faster query processing", value: "83%" }
        ]
    },
    {
        id: 2,
        title: "Cloud-Hosted VLM OCR Pipeline",
        impact: "Automated complex document extraction, reducing manual review cycles and enabling scalable, secure processing for high-volume workloads.",
        techStack: "Python • Vision-Language Models • FastAPI • Google Cloud Run • Terrafoam • Docker • REST API • Prompt Engineering",
        img: project2_img,
        problem: "Manual extraction of structured data from diverse documents was slow, error-prone, and not scalable for production needs.",
        architectureImg: "/assets/ocr-architecture.png",
        highlights: [
        "Deployed a Vision-Language Model (VLM) OCR service on Google Cloud using Terrafoam for rapid GPU provisioning",
        "Exposed the VLM via FastAPI and Cloud Run for scalable, secure endpoint access",
        "Engineered advanced prompts and context windows to maximize extraction accuracy and reliability",
        "Designed a comprehensive Markdown output contract for structured, downstream-ready results",
        "Benchmarked and iterated on prompt/context strategies to optimize for real-world document complexity"
        ],
        metrics: [
        { label: "Manual review reduction", value: "80%+" },
        { label: "Extraction accuracy (complex docs)", value: "90%+" },
        { label: "Concurrent document throughput", value: "Scalable (Cloud Run autoscaling)" }
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