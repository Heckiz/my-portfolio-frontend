//CONTACT-INFO MODEL
export interface ContactLink {
    id: string;
    src: string;
    alt: string;
    href: string;
    tooltip: string;
    content: string;
}

export interface ContactInfo {
    name: string;
    lastName: string;
    label: string;
    contactLink: ContactLink[];
}

export interface Presentation {
    backgroundUrl: string;
    pictureUrl: string;
    pictureBgUrl: string;
    cite: string;
}

//SKILLS MODEL
export interface SoftSkills {
    icons: Icon[];
    skillDetail: SkillDetail[];
}

export interface HardSkills {
    icons: Icon[];
    skillDetail: SkillDetail[];
}


export interface Skills {
    softSkills: SoftSkills;
    hardSkills: HardSkills;
}

export interface Icon {
    id: string;
    iconUrl: string;
    title: string;
}

export interface SkillDetail {
    id: string;
    title: string;
}

//ROOT MODEL
export interface RootObject {
    faboData: FaboData;
}

export interface FaboData {
    contactInfo: ContactInfo;
    presentation: Presentation;
    skills: Skills;
}