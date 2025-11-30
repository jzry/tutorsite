// app/curriculum/page.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface Module {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  projects: string[];
}

interface Curriculum {
  title: string;
  subtitle: string;
  color: string;
  headerColor: string;
  modules: Module[];
}

interface Curricula {
  [key: string]: Curriculum;
}

export default function CurriculumPage() {
  const [selectedLevel, setSelectedLevel] = useState('elementary');
  const [expandedModules, setExpandedModules] = useState<{ [key: string]: boolean }>({});

  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  const curricula: Curricula = {
    elementary: {
      title: "Elementary School (Ages 7-11)",
      subtitle: "Foundation through Play & Exploration",
      color: "bg-green-50 border-green-500",
      headerColor: "bg-green-500",
      modules: [
        {
          id: "elem-1",
          title: "Computational Thinking Basics",
          duration: "8-10 weeks",
          topics: [
            "Pattern recognition through Minecraft builds",
            "Sequencing with Scratch Jr story creation",
            "Decomposition: Breaking down problems into steps",
            "Debugging basics: Finding and fixing mistakes",
            "Algorithmic thinking with board games and puzzles"
          ],
          projects: [
            "Create a Minecraft redstone circuit to automate a door",
            "Build a simple animation in Scratch showing a day cycle",
            "Design a maze and write step-by-step instructions to solve it"
          ]
        },
        {
          id: "elem-2",
          title: "Introduction to Scratch Programming",
          duration: "10-12 weeks",
          topics: [
            "Sprites, costumes, and backdrops",
            "Motion, looks, and sound blocks",
            "Events and control structures (loops, conditionals)",
            "Variables and simple data collection",
            "Creating interactive stories and games"
          ],
          projects: [
            "Interactive story with branching choices",
            "Simple catching game with score tracking",
            "Virtual pet that responds to interactions"
          ]
        },
        {
          id: "elem-3",
          title: "Data Science with Minecraft",
          duration: "8 weeks",
          topics: [
            "Counting and categorizing blocks",
            "Creating bar graphs of resources collected",
            "Tracking time spent on activities",
            "Comparing different biomes (temperature, resources)",
            "Making predictions about spawn rates"
          ],
          projects: [
            "Build a Minecraft world census: count all animals",
            "Create a physical bar graph showing ore distribution",
            "Design an experiment: which crop grows fastest?"
          ]
        },
        {
          id: "elem-4",
          title: "Creative Logic Puzzles",
          duration: "6 weeks",
          topics: [
            "Boolean logic with Minecraft redstone",
            "AND, OR, NOT gates in simple terms",
            "Cause and effect relationships",
            "Building simple machines and contraptions",
            "Introduction to sensors and automation"
          ],
          projects: [
            "Redstone door with combination lock",
            "Automatic farm with redstone",
            "Create a working calculator in Minecraft"
          ]
        }
      ]
    },
    
    middle: {
      title: "Middle School (Ages 12-14)",
      subtitle: "Building Programming Foundations",
      color: "bg-blue-50 border-blue-500",
      headerColor: "bg-blue-500",
      modules: [
        {
          id: "mid-1",
          title: "Python Fundamentals",
          duration: "12 weeks",
          topics: [
            "Variables, data types, and operators",
            "Control flow: if/else, loops",
            "Functions and parameters",
            "Lists, tuples, and dictionaries",
            "String manipulation and formatting",
            "File I/O basics",
            "Introduction to modules and libraries"
          ],
          projects: [
            "Text-based adventure game",
            "Mad Libs generator",
            "Simple calculator with multiple operations",
            "Password strength checker"
          ]
        },
        {
          id: "mid-2",
          title: "Data Science Fundamentals",
          duration: "10 weeks",
          topics: [
            "What is data? Types of data",
            "Collecting data from surveys and observations",
            "Data cleaning and preparation basics",
            "Creating visualizations with Python (matplotlib basics)",
            "Basic statistics: mean, median, mode",
            "Making predictions from data patterns",
            "Introduction to Jupyter notebooks"
          ],
          projects: [
            "Analyze favorite video game statistics",
            "Survey classmates and visualize results",
            "Track and analyze personal daily activities",
            "Compare sports statistics across players"
          ]
        },
        {
          id: "mid-3",
          title: "Minecraft Modding with Python",
          duration: "8 weeks",
          topics: [
            "Setting up Minecraft Python API",
            "Block manipulation programmatically",
            "Creating structures with loops",
            "Event handling and game interactions",
            "Building mini-games within Minecraft"
          ],
          projects: [
            "Auto-builder: Generate structures from code",
            "Treasure hunt game with clues",
            "TNT run minigame",
            "Custom teleportation system"
          ]
        },
        {
          id: "mid-4",
          title: "Web Development Basics",
          duration: "10 weeks",
          topics: [
            "HTML structure and elements",
            "CSS styling and layouts",
            "Basic JavaScript interactions",
            "Creating forms and handling input",
            "Introduction to responsive design",
            "Publishing websites"
          ],
          projects: [
            "Personal portfolio website",
            "Fan page for favorite game/movie",
            "Interactive quiz with score tracking",
            "Simple blog layout"
          ]
        },
        {
          id: "mid-5",
          title: "Introduction to AI Concepts",
          duration: "6 weeks",
          topics: [
            "What is artificial intelligence?",
            "Machine learning basics (without math)",
            "Training vs. testing data",
            "Decision trees and classification",
            "Using pre-built AI tools (teachable machine)",
            "Ethics in AI: bias and fairness"
          ],
          projects: [
            "Image classifier using Teachable Machine",
            "Rock-paper-scissors AI player",
            "Sentiment analyzer for text",
            "Chatbot with simple responses"
          ]
        }
      ]
    },
    
    highschool: {
      title: "High School (Ages 15-18)",
      subtitle: "Advanced Programming & Specialization",
      color: "bg-purple-50 border-purple-500",
      headerColor: "bg-purple-500",
      modules: [
        {
          id: "hs-1",
          title: "Advanced Python & OOP",
          duration: "12 weeks",
          topics: [
            "Object-oriented programming principles",
            "Classes, objects, and methods",
            "Inheritance and polymorphism",
            "Encapsulation and abstraction",
            "Exception handling",
            "Working with APIs",
            "Regular expressions",
            "Decorators and generators"
          ],
          projects: [
            "Library management system",
            "Text-based RPG with character classes",
            "Weather app using API integration",
            "Custom data structure implementation"
          ]
        },
        {
          id: "hs-2",
          title: "Data Structures & Algorithms",
          duration: "14 weeks",
          topics: [
            "Arrays, linked lists, stacks, queues",
            "Trees: binary trees, BST, heaps",
            "Hash tables and hash functions",
            "Graphs and graph traversal",
            "Sorting algorithms (bubble, merge, quick)",
            "Searching algorithms (binary search, DFS, BFS)",
            "Big O notation and complexity analysis",
            "Dynamic programming introduction",
            "Recursion and backtracking"
          ],
          projects: [
            "Implement all major data structures from scratch",
            "Maze solver using graph algorithms",
            "Autocomplete system using tries",
            "LeetCode-style problem solving (50+ problems)"
          ]
        },
        {
          id: "hs-3",
          title: "Data Science & Machine Learning",
          duration: "12 weeks",
          topics: [
            "NumPy and Pandas fundamentals",
            "Data cleaning and preprocessing",
            "Exploratory data analysis",
            "Statistical analysis and hypothesis testing",
            "Data visualization (matplotlib, seaborn)",
            "Linear regression and logistic regression",
            "Decision trees and random forests",
            "K-means clustering",
            "Model evaluation and validation",
            "Feature engineering basics"
          ],
          projects: [
            "House price prediction model",
            "Customer segmentation analysis",
            "Movie recommendation system",
            "Sports outcome predictor",
            "Kaggle competition entry"
          ]
        },
        {
          id: "hs-4",
          title: "Deep Learning & Neural Networks",
          duration: "10 weeks",
          topics: [
            "Neural network fundamentals",
            "TensorFlow and Keras basics",
            "Convolutional Neural Networks (CNNs)",
            "Image classification and object detection",
            "Recurrent Neural Networks (RNNs)",
            "Natural Language Processing basics",
            "Transfer learning",
            "Model optimization and hyperparameter tuning"
          ],
          projects: [
            "Image classifier for custom dataset",
            "Handwritten digit recognition (MNIST)",
            "Sentiment analysis on movie reviews",
            "Simple chatbot using NLP",
            "Style transfer application"
          ]
        },
        {
          id: "hs-5",
          title: "Full-Stack Web Development",
          duration: "14 weeks",
          topics: [
            "Advanced HTML5 and CSS3",
            "JavaScript ES6+ features",
            "React.js fundamentals",
            "State management and hooks",
            "Backend development with Flask/Django",
            "RESTful API design",
            "Database design (SQL and NoSQL)",
            "Authentication and authorization",
            "Deployment and hosting"
          ],
          projects: [
            "Social media clone",
            "E-commerce website with cart",
            "Task management application",
            "Real-time chat application",
            "Personal blog with CMS"
          ]
        },
        {
          id: "hs-6",
          title: "Cybersecurity Fundamentals",
          duration: "8 weeks",
          topics: [
            "CIA triad: Confidentiality, Integrity, Availability",
            "Common vulnerabilities (OWASP Top 10)",
            "SQL injection and XSS attacks",
            "Password security and hashing",
            "Encryption basics (symmetric and asymmetric)",
            "Network security fundamentals",
            "Secure coding practices",
            "Ethical hacking introduction"
          ],
          projects: [
            "Vulnerability assessment of sample website",
            "Create a password manager",
            "Implement encryption system",
            "Capture the Flag (CTF) challenges"
          ]
        },
        {
          id: "hs-7",
          title: "Developer Tools & Version Control",
          duration: "6 weeks",
          topics: [
            "Git fundamentals and workflows",
            "GitHub collaboration",
            "Command line proficiency",
            "IDEs and debugging tools",
            "Testing and test-driven development",
            "CI/CD basics",
            "Code review best practices",
            "Documentation and technical writing"
          ],
          projects: [
            "Contribute to open-source project",
            "Set up automated testing pipeline",
            "Create comprehensive project documentation",
            "Build a CLI tool"
          ]
        },
        {
          id: "hs-8",
          title: "AI System Architecture",
          duration: "10 weeks",
          topics: [
            "Prompt engineering and LLM interaction",
            "Building applications with AI APIs",
            "RAG (Retrieval-Augmented Generation) systems",
            "Vector databases and embeddings",
            "Fine-tuning models",
            "AI agent design patterns",
            "Evaluation and monitoring",
            "Cost optimization strategies"
          ],
          projects: [
            "Custom AI assistant with domain knowledge",
            "Document Q&A system using RAG",
            "AI-powered content generator",
            "Multi-agent system for complex tasks"
          ]
        }
      ]
    },
    
    adult: {
      title: "Adult/Professional (University Level)",
      subtitle: "Comprehensive Computer Science & AI Engineering",
      color: "bg-red-50 border-red-500",
      headerColor: "bg-red-500",
      modules: [
        {
          id: "adult-1",
          title: "Programming Foundations & Advanced Python",
          duration: "10 weeks",
          topics: [
            "Multiple programming paradigms",
            "Advanced OOP: design patterns (Singleton, Factory, Observer, etc.)",
            "Functional programming concepts",
            "Memory management and garbage collection",
            "Concurrency and parallelism",
            "Async/await and event loops",
            "Metaprogramming and reflection",
            "Package development and distribution",
            "Type hints and static analysis"
          ],
          projects: [
            "Design pattern implementation library",
            "High-performance data processing pipeline",
            "Multi-threaded web scraper",
            "Custom framework or library"
          ]
        },
        {
          id: "adult-2",
          title: "Data Structures, Algorithms & Computational Theory",
          duration: "16 weeks",
          topics: [
            "Advanced data structures (tries, segment trees, AVL, Red-Black trees)",
            "Graph algorithms (Dijkstra, Bellman-Ford, Floyd-Warshall, Kruskal, Prim)",
            "Advanced dynamic programming",
            "Greedy algorithms and optimization",
            "String algorithms (KMP, Rabin-Karp)",
            "Computational complexity (P, NP, NP-complete)",
            "Approximation algorithms",
            "Space-time tradeoffs",
            "Cache-efficient algorithms"
          ],
          projects: [
            "Implement complex algorithms from research papers",
            "Competitive programming practice (200+ problems)",
            "Algorithm visualization tool",
            "Performance benchmarking suite"
          ]
        },
        {
          id: "adult-3",
          title: "System Design & Architecture",
          duration: "12 weeks",
          topics: [
            "Scalability principles and patterns",
            "Load balancing and caching strategies",
            "Database sharding and replication",
            "Microservices architecture",
            "Message queues and event-driven systems",
            "CAP theorem and distributed systems",
            "System design interviews preparation",
            "Monitoring, logging, and observability",
            "High availability and disaster recovery"
          ],
          projects: [
            "Design Twitter/Instagram/Uber from scratch",
            "Build distributed cache system",
            "Create microservices application",
            "Design rate limiter and URL shortener"
          ]
        },
        {
          id: "adult-4",
          title: "Machine Learning Engineering",
          duration: "14 weeks",
          topics: [
            "Advanced supervised learning algorithms",
            "Ensemble methods (bagging, boosting, stacking)",
            "Dimensionality reduction (PCA, t-SNE, UMAP)",
            "Anomaly detection techniques",
            "Time series analysis and forecasting",
            "Reinforcement learning fundamentals",
            "MLOps and model deployment",
            "Feature stores and data pipelines",
            "Model monitoring and drift detection",
            "A/B testing for ML models"
          ],
          projects: [
            "End-to-end ML pipeline with deployment",
            "Recommendation system at scale",
            "Fraud detection system",
            "Time series forecasting application",
            "RL agent for game/simulation"
          ]
        },
        {
          id: "adult-5",
          title: "Deep Learning & Advanced AI",
          duration: "16 weeks",
          topics: [
            "Advanced neural architectures",
            "Transformers and attention mechanisms",
            "Vision transformers and multi-modal models",
            "Generative models (GANs, VAEs, Diffusion)",
            "Large Language Models architecture",
            "Model compression and quantization",
            "Distributed training strategies",
            "Custom training loops and optimization",
            "Advanced NLP (BERT, GPT, T5)",
            "Computer vision (YOLO, R-CNN, Segmentation)",
            "Graph Neural Networks"
          ],
          projects: [
            "Build transformer model from scratch",
            "Fine-tune LLM for specific domain",
            "Create custom GAN for image generation",
            "Multi-modal AI system (vision + language)",
            "Research paper implementation and reproduction"
          ]
        },
        {
          id: "adult-6",
          title: "AI System Development & LLMOps",
          duration: "12 weeks",
          topics: [
            "Production LLM deployment",
            "Prompt engineering at scale",
            "RAG system architecture and optimization",
            "Vector database selection and tuning",
            "Embedding models and semantic search",
            "LLM fine-tuning and RLHF",
            "Agent frameworks and orchestration",
            "Tool use and function calling",
            "Guardrails and safety systems",
            "Cost optimization and token management",
            "Evaluation frameworks and metrics"
          ],
          projects: [
            "Production RAG system with monitoring",
            "Multi-agent AI application",
            "Custom AI assistant with tools",
            "LLM evaluation framework",
            "Domain-specific AI copilot"
          ]
        },
        {
          id: "adult-7",
          title: "Full-Stack Development (Advanced)",
          duration: "14 weeks",
          topics: [
            "Advanced React patterns (HOCs, Render Props, Compound Components)",
            "State management architectures (Redux, MobX, Zustand)",
            "Server-side rendering and Next.js",
            "Advanced backend frameworks (FastAPI, Express, Django)",
            "GraphQL and API design",
            "Database optimization and indexing",
            "Caching strategies (Redis, Memcached)",
            "WebSockets and real-time communication",
            "OAuth 2.0 and JWT authentication",
            "Docker and containerization",
            "Kubernetes basics",
            "Cloud platforms (AWS/GCP/Azure)"
          ],
          projects: [
            "Full-stack SaaS application",
            "Real-time collaboration tool",
            "API-first platform with documentation",
            "Scalable multi-tenant system"
          ]
        },
        {
          id: "adult-8",
          title: "Cybersecurity & Secure Systems",
          duration: "12 weeks",
          topics: [
            "Threat modeling and risk assessment",
            "Advanced cryptography (RSA, ECC, AES)",
            "Blockchain and smart contracts",
            "Penetration testing methodologies",
            "Network security and firewalls",
            "Security in cloud environments",
            "Secure software development lifecycle",
            "Zero trust architecture",
            "Incident response and forensics",
            "Compliance (GDPR, HIPAA, SOC 2)"
          ],
          projects: [
            "Security audit of production system",
            "Build secure authentication system",
            "Penetration testing report",
            "Implement security monitoring dashboard",
            "Smart contract security analysis"
          ]
        },
        {
          id: "adult-9",
          title: "Database Systems & Big Data",
          duration: "10 weeks",
          topics: [
            "Relational database internals",
            "Query optimization and execution plans",
            "NoSQL databases (MongoDB, Cassandra, DynamoDB)",
            "Data warehousing and OLAP",
            "Apache Spark and distributed computing",
            "Stream processing (Kafka, Flink)",
            "Data lake architectures",
            "ETL/ELT pipelines",
            "Data modeling and schema design",
            "Database administration and tuning"
          ],
          projects: [
            "Build data warehouse with ETL pipeline",
            "Real-time analytics platform",
            "Distributed data processing system",
            "Database performance optimization case study"
          ]
        },
        {
          id: "adult-10",
          title: "Computer Networks & Operating Systems",
          duration: "12 weeks",
          topics: [
            "OSI and TCP/IP models in depth",
            "Network protocols (HTTP, DNS, TCP, UDP)",
            "Socket programming",
            "Process management and scheduling",
            "Memory management and virtual memory",
            "File systems and I/O",
            "Concurrency and synchronization",
            "Deadlock prevention and handling",
            "Linux system administration",
            "Performance profiling and optimization"
          ],
          projects: [
            "Build custom HTTP server",
            "Implement process scheduler",
            "Create simple shell interpreter",
            "Network protocol analyzer",
            "Performance optimization of system application"
          ]
        },
        {
          id: "adult-11",
          title: "Software Engineering Best Practices",
          duration: "8 weeks",
          topics: [
            "SOLID principles and clean code",
            "Test-driven development (TDD)",
            "Behavior-driven development (BDD)",
            "Continuous integration/deployment",
            "Code review culture and practices",
            "Refactoring techniques",
            "Technical debt management",
            "Agile and Scrum methodologies",
            "Documentation strategies",
            "Team collaboration tools"
          ],
          projects: [
            "Legacy code refactoring project",
            "Complete CI/CD pipeline setup",
            "Open-source contribution portfolio",
            "Technical documentation suite"
          ]
        },
        {
          id: "adult-12",
          title: "Specialized Topics & Capstone",
          duration: "16 weeks",
          topics: [
            "Choose specialization: AI Research, Systems Programming, Web3, or IoT",
            "Research methodology",
            "Reading and implementing papers",
            "Industry-specific applications",
            "Emerging technologies exploration",
            "Career development and portfolio building"
          ],
          projects: [
            "Major capstone project (3-4 months)",
            "Research paper implementation",
            "Startup MVP or portfolio application",
            "Open-source tool or library"
          ]
        }
      ]
    }
  };

  const currentCurriculum = curricula[selectedLevel];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-20">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            AI & Computer Science Curriculum
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning paths from elementary to professional level. 
            Choose your level to explore the curriculum tailored for you.
          </p>
        </div>

        {/* Level Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(curricula).map(([key, curr]) => (
            <button
              key={key}
              onClick={() => setSelectedLevel(key)}
              className={`cursor-pointer p-6 rounded-xl border-2 transition-all duration-200 ${
                selectedLevel === key
                  ? curr.color + ' shadow-lg transform scale-105'
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:shadow-md'
              }`}
            >
              <div className="font-semibold text-sm md:text-base text-gray-800">
                {curr.title.split('(')[0].trim()}
              </div>
              <div className="text-xs text-gray-600 mt-1">
                {curr.title.match(/\(([^)]+)\)/)?.[1]}
              </div>
            </button>
          ))}
        </div>

        {/* Curriculum Display */}
        <div className={`rounded-xl border-2 overflow-hidden shadow-xl ${currentCurriculum.color}`}>
          <div className={`${currentCurriculum.headerColor} text-white p-8`}>
            <h2 className="text-3xl md:text-4xl font-bold">{currentCurriculum.title}</h2>
            <p className="text-lg md:text-xl mt-2 opacity-90">{currentCurriculum.subtitle}</p>
          </div>

          <div className="p-6 md:p-8 space-y-4">
            {currentCurriculum.modules.map((module) => (
              <div key={module.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full p-5 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {module.title}
                    </h3>
                  </div>
                  {expandedModules[module.id] ? (
                    <ChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>

                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    expandedModules[module.id] ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 border-t bg-gray-50">
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Topics Covered:</h4>
                      <ul className="space-y-2">
                        {module.topics.map((topic, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-lg">Projects:</h4>
                      <ul className="space-y-2">
                        {module.projects.map((project, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start">
                            <span className="text-green-500 mr-3 mt-1 flex-shrink-0">→</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Notes */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-4 text-xl">Curriculum Notes:</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Curriculum can be adjusted based on student pace, topic interest, or prior knowledge</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Projects are designed to be portfolio-worthy and demonstrate practical skills</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Each level builds on concepts from previous levels where applicable</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span>Adult curriculum aligns with top CS programs (MIT, Stanford, CMU standards)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
              <span>All courses include hands-on projects, real-world applications, and personalized mentorship</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}