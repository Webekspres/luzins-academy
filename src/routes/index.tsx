import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import type React from "react";
import { TopBar } from "@/components/sections/top-bar/TopBar";
import { Navbar } from "@/components/sections/navbar/Navbar";
import { Hero } from "@/components/sections/hero/Hero";
import { TrainerProfile } from "@/components/sections/trainer-profile/TrainerProfile";
import { TrustSection } from "@/components/sections/trust-section/TrustSection";
import { ProblemSection } from "@/components/sections/problem-section/ProblemSection";
import { BenefitSection } from "@/components/sections/benefit-section/BenefitSection";
import { MaterialsSection } from "@/components/sections/materials-section/MaterialsSection";
import { DocumentationSection } from "@/components/sections/documentation-section/DocumentationSection";
import { CertificateSection } from "@/components/sections/certificate-section/CertificateSection";
import { BonusSection } from "@/components/sections/bonus-section/BonusSection";
import { TestimonialSection } from "@/components/sections/testimonial-section/TestimonialSection";
import { VideoSection } from "@/components/sections/video-section/VideoSection";
import { PackageSection } from "@/components/sections/package-section/PackageSection";
import { FaqSection } from "@/components/sections/faq-section/FaqSection";
import { FinalCta } from "@/components/sections/final-cta/FinalCta";
import { Footer } from "@/components/sections/footer/Footer";
import { FloatingWhatsApp } from "@/components/sections/floating-whatsapp/FloatingWhatsApp";
import ogImage from "../assets/og-image.png?url";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Luzins Academy Indonesia | Pelatihan Public Speaking Profesional" },
      {
        name: "description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      {
        property: "og:title",
        content: "Luzins Academy Indonesia | Pelatihan Public Speaking Profesional",
      },
      {
        property: "og:description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      {
        property: "og:image",
        content: ogImage,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Luzins Academy Indonesia — Pelatihan Public Speaking Profesional",
      },
      {
        name: "twitter:description",
        content:
          "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, berlisensi resmi Kemenkumham RI.",
      },
      {
        name: "twitter:image",
        content: ogImage,
      },
    ],
  }),
  component: Index,
});

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationOrganization",
      "@id": "https://www.luzinsworkshop.web.id/#organization",
      "name": "Luzins Academy Indonesia",
      "url": "https://www.luzinsworkshop.web.id",
      "logo": "https://www.luzinsworkshop.web.id/assets/og-image.png",
      "description": "Lembaga Kursus Pelatihan (LKP) Public Speaking Resmi berlisensi Kemenkumham RI.",
      "founder": {
        "@type": "Person",
        "name": "Coach Ibnu Jabir"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "ID"
      }
    },
    {
      "@type": "Course",
      "@id": "https://www.luzinsworkshop.web.id/#course",
      "name": "Sertifikasi & Pelatihan Public Speaking Seni Berbicara",
      "description": "Latih skill komunikasi & seni berbicara bersama trainer berpengalaman Coach Ibnu Jabir. Online & offline, untuk pemula hingga profesional.",
      "provider": {
        "@id": "https://www.luzinsworkshop.web.id/#organization"
      },
      "educationalCredentialAwarded": "Gelar Non-Akademik C.PS (Certified Public Speaker)",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "blended",
        "courseWorkload": "PT30H",
        "instructor": {
          "@type": "Person",
          "name": "Coach Ibnu Jabir",
          "jobTitle": "Founder & CEO Luzins Academy Indonesia",
          "description": "Muhammad Andrian Jabir, S.Pd., S.T., C.ODS., C.MT adalah Master Trainer & Fasilitator Nasional berlisensi Kemenkumham RI."
        }
      }
    }
  ]
};

function Index() {
  const topBarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />
      <div ref={topBarRef}>
        <TopBar />
      </div>
      <Navbar topBarRef={topBarRef as React.RefObject<HTMLDivElement | null>} />
      <div className="h-17" aria-hidden="true" />
      <Hero />
      <TrainerProfile />
      <TrustSection />
      <ProblemSection />
      <BenefitSection />
      <MaterialsSection />
      <DocumentationSection />
      <CertificateSection />
      <BonusSection />
      <TestimonialSection />
      <VideoSection />
      <PackageSection />
      <FaqSection />
      <FinalCta />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
