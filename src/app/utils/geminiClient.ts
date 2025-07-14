// Gemini API client
// Note: You'll need to add your API key to .env.local file

// Resume context that will be provided to Gemini for better responses
const resumeContext = `
DHARMIK JOSHI, Senior Software Engineer
(+91-9096167416) | DHARMIKJ75@GMAIL.COM | LINKEDIN(https://www.linkedin.com/in/eng-dj/) | GITHUB(https://github.com/DharmikJoshi-is-star) | YOUTUBE(https://www.youtube.com/@dharmikjoshi1055)

SUMMARY
As an accomplished Software Development Engineer, I specialize in backend development and API design, leveraging
my expertise in Java and Spring Boot. With a solid understanding of Data Structures and Algorithms, I excel in crafting
scalable frameworks and features, ensuring robust performance and reliability. I take pride in leading backend teams,
guiding them with a blend of logical thinking and ownership mentality. Furthermore, I have a proven track record in
mentoring junior engineers and interns, fostering their growth, and conducting thorough software engineer interviews.
Holding a Bachelor of Engineering in Computer Science, I bring a comprehensive skill set to any project or team.

SKILLS
✓ Java ✓ SpringBoot ✓ NoSQL(MongoDB) ✓ Rest API ✓ Microservices ✓ LLD Design Patterns
✓ Cache(Redis) ✓ Docker ✓ AWS EC2 ✓ Git ✓ DSA ✓ API Security (JWT)

EXPERIENCE
SENIOR SOFTWARE ENGINEER (NEWFOLD DIGITAL) | SEPT 2024 - CURRENT
➡ JSP TO ANGULAR MIGRATION
✓ Conducted in-depth analysis of a JSP-based monolithic service, documenting features and system dependencies.
✓ Developed and optimized RESTful APIs, integrating Redis caching for high-performance data retrieval.
✓ Refactored and modularized backend services, leveraging existing platform components to enhance code
reusability and system scalability.
➡ PRODUCTION SUPPORT
✓ Resolved high-priority production issues with detailed RCA, preventing recurrence and earning senior management
recognition for rapid and effective bug fixes.

SOFTWARE DEVELOPMENT ENGINEER 2 → SDE 1 (SHOPSE – DIGITAL FINANCE) | JUL 2021 – AUG 2024
➡ ABOUT SHOPSE
ShopSe is a leading digital finance platform in India that connects customers with lenders, offering Buy Now Pay Later 
(BNPL) options and other financial services through a robust technology infrastructure.
➡ LENDING FLOW (SHOPSE APP & CHECKOUT PAGE)
✓ Improved soft-approved eligibility checks with multiple lenders by using parallel streaming and automation,
reducing drop-off rates by 30% and enhanced user journey, this reduced user's efforts for finding approved lender.
✓ Technologies: Java8, Spring Boot, API Design, Redis, Composite Design Pattern, Factory Pattern, Strategy Pattern.
➡ CONSUMER DURABLE LENDING FLOW
✓ Led the end-to-end design and development of backend APIs to enable loan journeys and provide lending options
such as HDFC Easy EMI, ICICI Cardless, Moneyview (which saw a 300% sales growth), and DMI Finance, thereby
establishing the ShopSe Lending platform as the flagship product.
✓ Integrating with several services for KYC, E-Nach setup, Account Aggregation, CIBIL Checks using strategy pattern.
✓ Implemented fraud prevention checks and notification framework for customer updates.
✓ Technologies: API Security, State Design Pattern, JWT Auth, Redis Cache, Pub-Sub Design Pattern, Factory
Pattern, Visitor Pattern, Swagger, Docker, Microservice.
➡ PAYMENT GATEWAY INTEGRATION
✓ Integrated with Razorpay PG for Credit Card transactions on EMI, facilitating a seamless migration.
✓ Implemented Cardless transaction journeys for 50M+ Preapproved customers of banks like HDFC Bank, Kotak
bank, ICICI Bank, and IDFC Bank
✓ Technologies: Factory Pattern, Pessimistic Locking, API Integration, Redis.
➡ TEAM LEADERSHIP
✓ Led a team of 5 backend engineers conducting architectural design, code reviews and providing mentorship.
✓ Conducted technical interviews and mentored new engineers.

SOFTWARE ENGINEER INTERN (PAYNAV – NEO BANK FOR SOCIAL PAYMENTS) | FEB 2021 – JUN 2021
✓ Implemented Elastic stack for log management of multiple services
✓ Deployed/Managed containerized applications with Docker on AWS EC2 instance

EDUCATION
SHREE LR TIWARI COLLEGE OF ENGINEERING, MUMBAI UNIVERSITY Mumbai, India
B.E. in COMPUTER ENGINEERING (CGPA: 9.18/10) Aug 2017 - Jun 2021

ADDITIONAL CERTIFICATES
Docker & Kubernetes Course Certification, Oracle Certified Associate Java SE 8 Programmer

HONOURS AND AWARDS
ShopSe Adarsh Award (July2022 - Sept2022), ShopSe Ratna Award (Oct2022 - Dec2022)
`;

// Projects information to provide context about personal projects
const projectsContext = `
PERSONAL PROJECTS

1. ATTENDANCE MANAGEMENT SYSTEM FOR ACADEMIC SECTOR
   Description: An automated system for tracking and managing student attendance with reporting features, user management, and analytics dashboards.
   Technologies: Java, Database, Web Development, Authentication, Reporting
   GitHub: https://github.com/DharmikJoshi-is-star/Student-attendance-Management
   Demo: https://youtu.be/1ku8lNU-cB8

2. TIME TABLE GENERATOR
   Description: An intelligent system for generating optimized academic timetables based on course requirements, teacher availability, and classroom constraints.
   Technologies: Java, Algorithm Design, Optimization, UI Design
   Demo: https://youtu.be/rYfbjqZd7Mg

3. SHOWME
   Description: A media showcase platform for displaying and sharing content with intuitive user experience and responsive design.
   Technologies: Java, Spring Boot, RESTful API, Database Design
   GitHub: https://github.com/DharmikJoshi-is-star/ShowMe
`;

// Direct API implementation without using the Google Generative AI package
export class GeminiClient {
  private apiKey: string;
  private apiUrl: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
    this.apiUrl = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  }

  async generateResponse(query: string): Promise<string> {
    try {
      // Combine the user's query with resume and projects context
      const prompt = `
        As Dharmik Joshi's AI assistant, please respond to the following question from a recruiter or visitor.
        Use the provided resume information and projects details to give accurate answers about Dharmik's skills, 
        experience, projects, and background. Be professional, concise, and helpful.
        
        Resume information:
        ${resumeContext}
        
        Projects information:
        ${projectsContext}
        
        Question: ${query}
      `;

      // Create request payload based on the Gemini API specification
      const requestData = {
        contents: [
          {
            parts: [
              {
                text: prompt
              }
            ]
          }
        ]
      };

      // Call the Gemini API directly
      const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
      });

      const data = await response.json();

      // Check for errors in the response
      if (!response.ok) {
        console.error("Error from Gemini API:", data);
        throw new Error(`Gemini API error: ${data.error?.message || 'Unknown error'}`);
      }

      // Extract the text from the response
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                           "I'm sorry, I couldn't generate a response at the moment.";
      
      return textResponse;
    } catch (error) {
      console.error("Error generating response from Gemini:", error);
      return "I'm sorry, I couldn't generate a response at the moment. Please try again later.";
    }
  }
}

// Create and export a singleton instance of the Gemini client
let geminiClientInstance: GeminiClient | null = null;

export function getGeminiClient(): GeminiClient | null {
  if (!geminiClientInstance) {
    const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API key is not set in environment variables");
      return null;
    }
    geminiClientInstance = new GeminiClient(apiKey);
  }
  return geminiClientInstance;
}