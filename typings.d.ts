type SanityBody = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
  };
  interface Image {
    _type: "image";
    asset: {
      _ref: string;
      _type: "reference";
    };
  }
  export interface PageInfo extends SanityBody {
    _type: "pageInfo";
    address: string;
    backgroundInformation: string;
    email: string;
    heroimage: Image;
    name: string;
    role: string;
    phoneNumber: string;
    profilePics: Image;
  }
  export interface Technology extends SanityBody {
    _type: "skills";
    title: string;
    image: Image;
    progress: number;
  }
  
  export interface Skills extends SanityBody {
    _type: "skills";
    title: string;
    image: Image;
    progress: number;
  }
  
  export interface Project extends SanityBody {
    title: string;
    _type: "project";
    image: Image;
    linkToBuild: string;
    summary: string;
    technologies: Technology[];
  }
  export interface Experiences extends SanityBody {
    _type: "experience";
    company: string;
    companyImage: Image;
    dateStarted: date;
    dateEnded: date;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technology: Technology[];
  }
  
  export interface Social extends SanityBody {
    _type: "social";
    title: string;
    url: string;
  }
  