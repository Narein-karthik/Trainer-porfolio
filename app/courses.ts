export type CourseFilter =
  | "All Courses"
  | "Data Analytics"
  | "Machine Learning"
  | "Business Intelligence"
  | "Generative AI"
  | "Advanced AI"
  | "Online Workshops";

export type Course = {
  id: string;
  title: string;
  tagline: string;
  category: "Data Analytics & Machine Learning" | "Generative AI & AI Engineering";
  filters: CourseFilter[];
  icon: "data" | "ml" | "bi" | "genai" | "rag" | "mcp";
  duration: string;
  mode: "Offline" | "Online" | "Hybrid";
  level: string;
  featured: boolean;
  description: string;
  topics: string[];
  outcome: string;
  prerequisites: string[];
  projects: string[];
};

export const courseFilters: CourseFilter[] = [
  "All Courses",
  "Data Analytics",
  "Machine Learning",
  "Business Intelligence",
  "Generative AI",
  "Advanced AI",
  "Online Workshops",
];

export const courses: Course[] = [
  {
    id: "sql-python-data-analytics",
    title: "Data Analytics with SQL & Python",
    tagline: "Query, clean, analyse and visualise real-world datasets.",
    category: "Data Analytics & Machine Learning",
    filters: ["Data Analytics"], icon: "data", duration: "6–7 Hours", mode: "Hybrid",
    level: "Beginner to Intermediate", featured: true,
    description: "A practical Data Analytics Workshop that takes participants from relational queries to Python-based exploration and visualisation.",
    topics: ["SQL fundamentals", "Data Definition, Manipulation and Query Languages", "Filtering, grouping and aggregation", "Joins and subqueries", "Python fundamentals for analytics", "NumPy and Pandas", "Data cleaning and preprocessing", "Exploratory data analysis", "Data visualisation", "Real-world analytics mini project"],
    outcome: "Participants analyse a dataset using SQL and Python and generate meaningful insights.",
    prerequisites: ["Basic computer literacy", "No prior analytics experience required"],
    projects: ["Real-world SQL and Python analytics mini project"],
  },
  {
    id: "applied-machine-learning",
    title: "Applied Machine Learning for Data Analytics",
    tagline: "Transform historical data into predictive insights using machine learning.",
    category: "Data Analytics & Machine Learning",
    filters: ["Data Analytics", "Machine Learning"], icon: "ml", duration: "6–7 Hours", mode: "Hybrid",
    level: "Intermediate", featured: false,
    description: "An applied Machine Learning Workshop focused on building reliable predictive workflows with real-world data.",
    topics: ["Machine learning workflow", "Data preprocessing", "Feature selection", "Train-test split", "Regression", "Classification", "Clustering", "Model evaluation", "Overfitting and underfitting", "Scikit-learn pipelines", "Predictive analytics mini project"],
    outcome: "Participants build, evaluate and interpret a machine learning model using a real-world dataset.",
    prerequisites: ["Working knowledge of Python", "Basic understanding of datasets and statistics"],
    projects: ["Predictive analytics mini project using scikit-learn"],
  },
  {
    id: "excel-power-bi",
    title: "Data Analytics & Business Intelligence with Excel and Power BI",
    tagline: "Transform raw business data into interactive dashboards and actionable insights.",
    category: "Data Analytics & Machine Learning",
    filters: ["Data Analytics", "Business Intelligence"], icon: "bi", duration: "6–7 Hours", mode: "Hybrid",
    level: "Beginner to Intermediate", featured: false,
    description: "A hands-on Power BI Workshop covering business-data preparation, modelling, KPI design and dashboard communication.",
    topics: ["Excel data cleaning", "Excel formulas and functions", "PivotTables and PivotCharts", "Power Query", "Data transformation", "Power BI fundamentals", "Data modelling and relationships", "DAX measures", "KPI development", "Interactive dashboards", "Data storytelling", "Business intelligence mini project"],
    outcome: "Participants create an interactive Power BI dashboard from a cleaned business dataset.",
    prerequisites: ["Basic spreadsheet familiarity", "No prior Power BI experience required"],
    projects: ["Interactive business intelligence dashboard"],
  },
  {
    id: "python-power-bi",
    title: "Python-Powered Data Analytics and Power BI Dashboards",
    tagline: "Combine Python-based analysis with interactive Power BI reporting.",
    category: "Data Analytics & Machine Learning",
    filters: ["Data Analytics", "Business Intelligence"], icon: "bi", duration: "6–7 Hours", mode: "Hybrid",
    level: "Intermediate", featured: true,
    description: "An integrated analytics workshop connecting Python data preparation and exploratory analysis with polished Power BI reporting.",
    topics: ["Python and Pandas", "Dataset inspection and profiling", "Missing-value treatment", "Duplicate removal", "Data-type correction", "Grouping and aggregation", "Exploratory data analysis", "Feature engineering", "Statistical summaries", "Exporting processed datasets", "Connecting Python data to Power BI", "Power BI data modelling", "DAX measures and KPIs", "Python visuals in Power BI", "Interactive dashboard development"],
    outcome: "Participants produce a Python notebook, processed dataset and interactive Power BI dashboard.",
    prerequisites: ["Basic Python knowledge", "Basic understanding of data tables"],
    projects: ["Python analytics notebook", "Processed dataset", "Interactive Power BI dashboard"],
  },
  {
    id: "introduction-gen-ai-tools",
    title: "Introduction to Gen AI & AI Tools",
    tagline: "Explore modern AI tools for learning, productivity, coding and career development.",
    category: "Generative AI & AI Engineering",
    filters: ["Generative AI"], icon: "genai", duration: "6 Hours", mode: "Hybrid",
    level: "Beginner", featured: false,
    description: "A practical Generative AI Workshop for using current AI platforms thoughtfully across academic and professional tasks.",
    topics: ["Introduction to Generative AI", "AI, ML, Deep Learning and Gen AI", "Large Language Model fundamentals", "ChatGPT, Gemini, Claude and other AI platforms", "Prompt engineering fundamentals", "AI for research and learning", "AI for coding support", "AI for presentations and documentation", "Multimodal AI tools", "Responsible AI", "Hallucinations, privacy and verification", "Practical AI tools challenge"],
    outcome: "Participants learn to use modern Gen AI tools effectively and responsibly for academic and professional tasks.",
    prerequisites: ["No prior AI or programming experience required"],
    projects: ["Practical AI tools challenge"],
  },
  {
    id: "llms-ai-applications",
    title: "Fundamentals of Gen AI: From LLMs to AI Applications",
    tagline: "Understand how LLMs work and build an API-powered AI application.",
    category: "Generative AI & AI Engineering",
    filters: ["Generative AI"], icon: "genai", duration: "6–7 Hours", mode: "Hybrid",
    level: "Beginner to Intermediate", featured: true,
    description: "An AI Application Development workshop that connects LLM concepts, prompt design, APIs and guided product building.",
    topics: ["Evolution of AI", "Large Language Models", "Tokens and tokenisation", "Embeddings", "Context windows", "Transformer and attention overview", "Training vs inference", "Temperature, top-k and top-p", "Hallucinations", "Prompt engineering using RTCCF", "Structured JSON outputs", "LLM APIs", "System prompts", "Conversation memory", "Function-calling concepts", "AI application development", "Guided mini project"],
    outcome: "Participants build an API-based AI application using Python.",
    prerequisites: ["Basic Python familiarity", "Comfort using web applications and APIs"],
    projects: ["AI Resume Analyser", "AI Study Assistant", "AI Interview Coach", "AI Coding Assistant"],
  },
  {
    id: "transformers-rag-engineering",
    title: "Gen AI Deep Dive: Transformers, Embeddings & RAG Engineering",
    tagline: "Understand Transformer architecture and build an AI assistant that learns from private documents.",
    category: "Generative AI & AI Engineering",
    filters: ["Generative AI", "Advanced AI"], icon: "rag", duration: "6–7 Hours", mode: "Hybrid",
    level: "Intermediate to Advanced", featured: true,
    description: "An advanced RAG Engineering Workshop combining Transformer intuition, semantic retrieval, vector stores and grounded generation.",
    topics: ["Sequence models and Transformer evolution", "Encoder, decoder and encoder-decoder architectures", "Tokenisation implementation", "Token and sentence embeddings", "Vector representations", "Cosine similarity", "Positional encoding", "Self-attention", "Query, Key and Value", "Multi-head attention", "Causal masking", "Pretrained Transformer models", "Semantic search", "Document extraction", "Chunking strategies", "Vector databases", "Retrieval pipelines", "Grounded generation", "Source attribution", "RAG evaluation"],
    outcome: "Participants build a RAG-based PDF or document question-answering assistant.",
    prerequisites: ["Intermediate Python", "Basic familiarity with LLM applications"],
    projects: ["RAG-based PDF or private-document question-answering assistant"],
  },
  {
    id: "mcp-tool-server",
    title: "MCP for AI Developers: Build Your First Tool Server",
    tagline: "Connect AI applications to real-world tools, resources and data using MCP.",
    category: "Generative AI & AI Engineering",
    filters: ["Advanced AI", "Online Workshops"], icon: "mcp", duration: "3 Hours", mode: "Online",
    level: "Intermediate", featured: false,
    description: "Focused MCP Training for AI developers who want to expose reliable tools, resources and reusable prompts to AI hosts.",
    topics: ["Introduction to Model Context Protocol", "Why MCP exists", "MCP vs REST APIs", "MCP vs function calling", "Host, client and server architecture", "Tools", "Resources", "Prompts", "Capability discovery", "Building an MCP server with Python", "Input and output schemas", "MCP Inspector", "Validation and error handling", "Tool permissions", "Basic MCP security"],
    outcome: "Participants build and test a working MCP server that exposes tools, resources and reusable prompts.",
    prerequisites: ["Working knowledge of Python", "Basic familiarity with APIs and AI applications"],
    projects: ["Working Python MCP server tested with MCP Inspector"],
  },
];
