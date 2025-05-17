import { SITE_TITLE } from '../consts';

export const generateMedicalTourismSchema = (data?: any) => ({
    "@context": "https://schema.org",
    "@type": ["Organization", "MedicalBusiness", "MedicalClinic"],
    "@id": "https://nirogyatra.com",
    "name": SITE_TITLE,
    "url": "https://nirogyatra.com",
    "logo": {
        "@type": "ImageObject",
        "url": "https://nirogyatra.com/favicon.svg",
        "width": "512",
        "height": "512"
    },
    "image": [
        "https://nirogyatra.com/images/hospital-front.jpg",
        "https://nirogyatra.com/images/surgery-room.jpg",
        "https://nirogyatra.com/images/patient-care.jpg"
    ],
    "description": "Leading medical tourism facilitator in India offering affordable cancer treatment, cardiac surgery, and wellness packages for international patients. JCI and NABH accredited hospitals with world-class medical care.",
    "medicalSpecialty": [
        "http://schema.org/Oncology",
        "http://schema.org/Cardiology",
        "http://schema.org/Orthopedics",
        "http://schema.org/Neurosurgery",
        "http://schema.org/PhysicalTherapy"
    ],
    "availableService": [
        {
            "@type": "MedicalTherapy",
            "name": "Cancer Treatment",
            "description": "Comprehensive cancer care including chemotherapy, radiation therapy, and surgical oncology",
            "medicineSystem": "http://schema.org/WesternConventional",
            "relevantSpecialty": "http://schema.org/Oncology",
            "availableService": [
                {
                    "@type": "MedicalProcedure",
                    "name": "Chemotherapy",
                    "howPerformed": "Intravenous administration of cancer-fighting drugs",
                    "preparation": ["Blood tests", "Physical examination"],
                    "procedureType": "http://schema.org/TherapeuticProcedure"
                },
                {
                    "@type": "MedicalProcedure",
                    "name": "Radiation Therapy",
                    "procedureType": "http://schema.org/RadiationTherapy"
                }
            ]
        },
        {
            "@type": "MedicalTherapy",
            "name": "Cardiac Care",
            "description": "Advanced heart procedures including bypass surgery and valve replacement",
            "medicineSystem": "http://schema.org/WesternConventional",
            "relevantSpecialty": "http://schema.org/Cardiology",
            "availableService": [
                {
                    "@type": "MedicalProcedure",
                    "name": "Coronary Bypass Surgery",
                    "procedureType": "http://schema.org/SurgicalProcedure"
                },
                {
                    "@type": "MedicalProcedure",
                    "name": "Heart Valve Replacement",
                    "procedureType": "http://schema.org/SurgicalProcedure"
                }
            ]
        }
    ],
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Medical Tourism Complex",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110001",
        "addressCountry": "IN"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "28.6139",
        "longitude": "77.2090"
    },
    "contactPoint": [
        {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "customer service",
            "areaServed": ["IN", "AE", "KE", "NG", "BD"],
            "availableLanguage": ["English", "Hindi", "Arabic"],
            "email": "care@nirogyatra.com"
        },
        {
            "@type": "ContactPoint",
            "telephone": "+91-XXXXXXXXXX",
            "contactType": "emergency",
            "availableLanguage": ["English", "Hindi"]
        }
    ],
    "priceRange": "$$",
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
    },
    "availableLanguage": ["English", "Hindi", "Arabic"],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "hasCredential": [
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Medical Tourism Certification",
            "recognizedBy": {
                "@type": "Organization",
                "name": "Joint Commission International"
            }
        },
        {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Healthcare Accreditation",
            "recognizedBy": {
                "@type": "Organization",
                "name": "National Accreditation Board for Hospitals"
            }
        }
    ],
    "award": [
        {
            "@type": "Award",
            "name": "Best Medical Tourism Facilitator 2024",
            "description": "Awarded for excellence in international patient care and service"
        },
        {
            "@type": "Award",
            "name": "Excellence in Patient Care 2024",
            "description": "Recognition for outstanding medical outcomes and patient satisfaction"
        }
    ],
    "sameAs": [
        "https://www.facebook.com/nirogyatra",
        "https://twitter.com/nirogyatra",
        "https://www.linkedin.com/company/nirogyatra",
        "https://www.instagram.com/nirogyatra"
    ]
});
