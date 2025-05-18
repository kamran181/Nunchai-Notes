export const templates = [
    {
      id: "blank",
      label: "Blank document",
      imageUrl: "/blank-document.svg",
      initialContent: ""
    },
    {
      id: "software-proposal",
      label: "Software Proposal",
      imageUrl: "/software-proposal.svg",
      initialContent: `
        <h1>Software Proposal</h1>
        <p><strong>Project Name:</strong> [Enter Project Name]</p>
        <p><strong>Client:</strong> [Client Name]</p>
        <h2>Executive Summary</h2>
        <p>[Brief overview of the software project]</p>
        <h2>Objectives</h2>
        <ul>
          <li>Objective 1</li>
          <li>Objective 2</li>
        </ul>
        <h2>Scope of Work</h2>
        <p>[Details about the deliverables and tasks]</p>
        <h2>Timeline</h2>
        <p>[Estimated schedule]</p>
        <h2>Budget</h2>
        <p>[Cost breakdown]</p>
        <p>Sincerely,<br/>[Your Name]</p>
      `
    },
    {
      id: "project-proposal",
      label: "Project Proposal",
      imageUrl: "/project-proposal.svg",
      initialContent: `
        <h1>Project Proposal</h1>
        <p><strong>Project Title:</strong> [Enter Title]</p>
        <h2>Introduction</h2>
        <p>[Brief background and context]</p>
        <h2>Goals and Objectives</h2>
        <ul>
          <li>Goal 1</li>
          <li>Goal 2</li>
        </ul>
        <h2>Methodology</h2>
        <p>[Explain how the project will be implemented]</p>
        <h2>Expected Outcomes</h2>
        <p>[List anticipated results]</p>
        <h2>Team and Roles</h2>
        <p>[Team members and responsibilities]</p>
        <p>Submitted by: [Your Name]</p>
      `
    },
    {
      id: "busines-letter",
      label: "Business Letter",
      imageUrl: "/business-letter.svg",
      initialContent: `
        <p>[Your Name]<br/>
        [Your Address]<br/>
        [City, State ZIP Code]</p>
  
        <p>[Date]</p>
  
        <p>[Recipient's Name]<br/>
        [Recipient's Title]<br/>
        [Company Name]<br/>
        [Company Address]</p>
  
        <p>Dear [Recipient's Name],</p>
  
        <p>[Opening paragraph: purpose of the letter]</p>
        <p>[Body paragraphs: additional details]</p>
        <p>[Closing paragraph: summary and next steps]</p>
  
        <p>Sincerely,<br/>[Your Name]</p>
      `
    },
    {
      id: "resume",
      label: "Resume",
      imageUrl: "/resume.svg",
      initialContent: `
        <h1>[Your Name]</h1>
        <p>Email: [Your Email] | Phone: [Your Phone] | LinkedIn: [Your LinkedIn]</p>
  
        <h2>Professional Summary</h2>
        <p>[Brief summary of your career and skills]</p>
  
        <h2>Work Experience</h2>
        <h3>[Job Title] – [Company Name]</h3>
        <p><em>[Start Date] – [End Date]</em></p>
        <ul>
          <li>Responsibility or achievement</li>
          <li>Responsibility or achievement</li>
        </ul>
  
        <h2>Education</h2>
        <p>[Degree] – [University], [Year]</p>
  
        <h2>Skills</h2>
        <ul>
          <li>Skill 1</li>
          <li>Skill 2</li>
        </ul>
      `
    },
    {
      id: "cover-letter",
      label: "Cover Letter",
      imageUrl: "/cover-letter.svg",
      initialContent: `
        <p>[Your Name]<br/>
        [Your Address]<br/>
        [City, State ZIP Code]</p>
  
        <p>[Date]</p>
  
        <p>[Hiring Manager's Name]<br/>
        [Company Name]<br/>
        [Company Address]</p>
  
        <p>Dear [Hiring Manager's Name],</p>
  
        <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With [X] years of experience in [Your Field], I am confident in my ability to contribute meaningfully to your team.</p>
  
        <p>[Mention specific skills or accomplishments relevant to the role]</p>
  
        <p>I would welcome the opportunity to discuss how my experience aligns with your needs. Thank you for considering my application.</p>
  
        <p>Sincerely,<br/>[Your Name]</p>
      `
    },
    {
      id: "letter",
      label: "Letter",
      imageUrl: "/letter.svg",
      initialContent: `
        <p>[Your Name]<br/>
        [Your Address]<br/>
        [City, State ZIP Code]</p>
  
        <p>[Date]</p>
  
        <p>[Recipient's Name]<br/>
        [Recipient's Address]</p>
  
        <p>Dear [Recipient's Name],</p>
  
        <p>[Write your message here]</p>
  
        <p>Best regards,<br/>[Your Name]</p>
      `
    }
  ];
  