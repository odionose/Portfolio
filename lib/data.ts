import type {
  Profile,
  Project,
  SkillGroup,
} from "./types";

export const profile: Profile = {
  name: "Nathaniel Odion",
  title: "Data Engineer",
  email: "nathanielodion@gmail.com",
  linkedin: "https://www.linkedin.com/in/nathaniel-odion/",
  github: "https://github.com/odionose",
};

export const projects: Project[] = [
  {
    slug: "flight-operations-pipeline",
    number: "01",
    name: "Flight Operations Pipeline",
    oneLiner:
      "An automated ETL pipeline that turns live flight-tracking data into analytics-ready Snowflake tables.",
    problem:
      "Raw flight operations data from a public tracking API arrives continuously, unstructured, and unfit for direct analysis — it needs a repeatable path from live feed to something a stakeholder could query.",
    approach:
      "Built an end-to-end pipeline orchestrated with Apache Airflow that ingests flight data from the OpenSky Network API on a schedule, then progressively cleans, normalizes, and aggregates it for analytical use.",
    architecture:
      "A Bronze → Silver → Gold medallion architecture in Snowflake: Bronze holds raw ingested records, Silver applies cleaning and normalization, and Gold produces business-ready aggregates for downstream analysis.",
    architectureFlow: ["OpenSky Network API", "Bronze", "Silver", "Gold", "Snowflake"],
    contribution:
      "Designed and implemented the full pipeline — Airflow DAGs, transformation logic, and the medallion schema in Snowflake — and containerized the system with Docker for reproducible local deployment.",
    technologies: ["Apache Airflow", "Python", "Snowflake", "SQL", "Docker", "OpenSky Network API"],
    results: [],
    sourceUrl: "https://github.com/odionose/flight-operations-pipeline",
    sourceLabel: "GitHub profile",
    featured: true,
  },
  {
    slug: "ai-data-retrieval-pipeline",
    number: "02",
    name: "AI Data Retrieval Pipeline",
    oneLiner:
      "A retrieval system that answers questions over SEC 10-K filings by combining SQL and semantic search.",
    problem:
      "Financial filings mix structured figures with long unstructured narrative sections — answering a real question often needs both a precise number and the surrounding context, which neither a database nor a search index handles alone.",
    approach:
      "Built an extract → clean → chunk → embed → store pipeline for SEC 10-K filings, indexing unstructured text in Qdrant while keeping structured financial data in SQLite, then used LangGraph to orchestrate a workflow that routes a query to SQL, vector search, or both.",
    architecture:
      "A LangGraph-based workflow sits between the two stores: it decides whether a query needs structured lookup, semantic retrieval over embedded filing text, or a combination, then assembles the result.",
    architectureFlow: ["SEC 10-K Filings", "Extract / Clean / Chunk", "Embed", "Qdrant + SQLite", "LangGraph Retrieval"],
    contribution:
      "Built the ingestion pipeline, the LangGraph orchestration logic, the FastAPI service layer, and the RAGAS evaluation harness used to measure retrieval quality.",
    technologies: ["LangGraph", "Google Gemini API", "Qdrant", "SQLite", "FastAPI", "Docker"],
    results: [
      "0.80 faithfulness (RAGAS)",
      "0.70 answer relevance (RAGAS)",
      "0.75 overall RAGAS score",
      "$0.0002 average cost per query",
    ],
    sourceUrl: "https://github.com/odionose/RAG-Data-Analyst",
    sourceLabel: "GitHub profile",
    featured: true,
  },
   {
    slug: "distributed-systems-docker-k8s",
    number: "05",
    name: "Containerized Flask API with Docker & Kubernetes",
    oneLiner:
      "A Flask REST API containerized with Docker and deployed to a local Kubernetes cluster, built to demonstrate the full container-to-cluster lifecycle.",
    problem:
      "Getting a service into a container is only the first step — running it reliably at scale means proving it can be discovered, scaled, healed, updated, and rolled back inside an actual orchestrator, not just started with `docker run`.",
    approach:
      "Containerized a small Flask item API, hardened the image and runtime configuration, published it to Docker Hub, then deployed it to a three-node local Kubernetes cluster (kind) running three replicas behind a ClusterIP service.",
    architecture:
      "The Flask app is built into a versioned Docker image and pushed to Docker Hub, then deployed onto a three-node kind cluster (one control plane, two workers) as three pod replicas behind a ClusterIP service, with a NetworkPolicy restricting traffic.",
    architectureFlow: [
      "Flask App",
      "Docker Image",
      "Docker Hub",
      "kind Cluster (3 nodes)",
      "3 Pod Replicas + ClusterIP Service",
    ],
    contribution:
      "Wrote the Dockerfile and Compose configuration, hardened both around a non-root user, dropped capabilities, a read-only root filesystem, and a health check; authored the Kubernetes manifests (deployment, service, NetworkPolicy, resource limits, readiness/liveness probes); and validated scaling, self-healing, rolling updates, and rollback against the running cluster.",
    technologies: ["Docker", "Docker Compose", "Kubernetes", "kind", "Flask", "Python"],
    results: ["3 pod replicas behind a ClusterIP service", "Zero critical vulnerabilities in the final scanned image"],
    sourceUrl: "https://github.com/odionose/msc-de1-distributed-systems-docker-k8s",
    sourceLabel: "GitHub repository",
  },

  {
    slug: "trackback",
    number: "04",
    name: "TrackBack",
    oneLiner:
      "A deep learning pipeline that maps a lyric snippet back to its source song, built on a transfer-learning + custom-classifier architecture.",
    problem:
      "Matching a short, noisy piece of text to the exact document it came from is a semantic search problem — a plain keyword match falls apart once the query is a fragment rather than a full title.",
    approach:
      "Built a hybrid pipeline: sentence embeddings for feature extraction, feeding a custom-trained classifier for the actual prediction, rather than relying on embeddings alone or training a classifier from raw text.",
    architecture:
      "Text is first converted into 384-dimensional dense embeddings using the Hugging Face all-MiniLM-L6-v2 SentenceTransformer. Those embeddings feed a custom PyTorch feed-forward network — an input layer with Gaussian noise for regularization, a 128-unit hidden layer with batch normalization and ReLU, a dropout layer, and an output layer sized to the number of source documents. Training uses the Adam optimizer with weight decay, a ReduceLROnPlateau scheduler, an 80/20 train/test split, and early stopping on Top-5 accuracy.",
    architectureFlow: ["Raw Text", "MiniLM Embeddings", "PyTorch FFNN Classifier", "Predicted Source"],
    contribution:
      "Built the full pipeline end to end — the lyric-scraping data collection script, the embedding and training pipeline in PyTorch, and the Streamlit app used to demo it. The backend is deliberately generalized: the current demo is themed around lyric snippets, but the same architecture applies to any text-to-source-document matching problem.",
    technologies: ["PyTorch", "Hugging Face Sentence-Transformers", "Streamlit", "Python"],
    results: [],
    sourceUrl: "https://github.com/odionose/TrackBack",
    sourceLabel: "GitHub repository",
    demoUrl: "https://trackback.streamlit.app/",
    demoLabel: "Live demo",
  },
    {
    slug: "sustainability-analysis",
    number: "03",
    name: "Sustainability Analysis Project",
    oneLiner:
      "Analytics-ready sustainability datasets, delivered through interactive Power BI dashboards.",
    problem:
      "Sustainability indicators are only useful if they're clean, validated, and easy to explore — raw data rarely supports decision-making on its own.",
    approach:
      "Applied data cleaning, validation, and transformation to build analytics-ready datasets, then connected them to interactive Power BI dashboards for exploration.",
    architecture:
      "A transformation layer in SQL feeds a set of Power BI dashboards built directly on top of the cleaned datasets, visualizing sustainability indicators for decision-making.",
    contribution:
      "Handled the data preparation pipeline end to end — cleaning, validation, and transformation — and built the connected Power BI dashboards.",
    technologies: ["SQL", "Power BI", "Data Transformation", "Data Cleaning"],
    results: [],
    sourceUrl: "https://github.com/odionose/Sustainability-Analysis",
    sourceLabel: "GitHub profile",
  },
 
];

export const skills: SkillGroup[] = [
  { category: "Programming", items: ["Python", "SQL", "TypeScript", "Bash"] },
  {
    category: "Data Orchestration",
    items: ["Apache Airflow"],
  },
   {
    category: "Data Processing",
    items: ["Pyspark", "Pandas"],
  },
  { category: "Databases & Warehousing", items: ["Snowflake", "PostgreSQL", "MySQL", "SQLite", "MongoDB", "Qdrant"] },
  { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux"] },
 
   {
    category: "Web Scraping",
    items: ["Selenium", "BeautifulSoup", "Requests", "Scrapy"],
  },
   { category: "Analytics & Visualization", items: ["Power BI", "DAX", "Microsoft Excel"] },
];


