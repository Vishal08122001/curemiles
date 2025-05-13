import { SITE_TITLE } from '../consts';

export const generateMedicalTourismSchema = (data?: any) => ({
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": "https://nirogyatra.com",
    "name": SITE_TITLE,
    "url": "https://nirogyatra.com",
    "logo": "https://nirogyatra.com/favicon.svg",
    "image": "https://nirogyatra.com/images/hospital-front.jpg",
    "description": "Leading medical tourism facilitator in India offering affordable cancer treatment, cardiac surgery, and wellness packages for international patients.",
    "medicalSpecialty": [
        "Oncology",
        "Cardiology",
        "Orthopedics",
        "Neurosurgery",
        "Ayurveda"
    ],
    "availableService": [
        {
            "@type": "MedicalProcedure",
            "name": "Cancer Treatment",
            "description": "Comprehensive cancer care including chemotherapy, radiation therapy, and surgical oncology"
        },
        {
            "@type": "MedicalProcedure",
            "name": "Cardiac Surgery",
            "description": "Advanced heart procedures including bypass surgery and valve replacement"
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
    "telephone": "+91-XXXXXXXXXX",
    "email": "care@nirogyatra.com",
    "priceRange": "$$",
    "openingHours": "Mo-Su 00:00-24:00",
    "languages": ["English", "Hindi", "Arabic"],
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "awards": [
        "Best Medical Tourism Facilitator 2024",
        "Excellence in Patient Care 2024"
    ],
    "accreditation": [
        "Joint Commission International (JCI)",
        "National Accreditation Board for Hospitals (NABH)"
    ]
});
