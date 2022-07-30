

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

export interface FaboData {
    contactInfo: ContactInfo;
    presentation: Presentation;
}

export interface RootObject {
    faboData: FaboData;
}



