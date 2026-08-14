import { useState, useEffect } from "react";
import { 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code, 
  Palette, 
  Sparkles, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  MessageSquare,
  ArrowUp,
  Server,
  ExternalLink,
  ChevronRight,
  FileText,
  Download,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  User
} from "lucide-react";
import heroImg from "./assets/hero.png";
import colegioPreview from "./assets/colegio_preview.png";
import valetPreview from "./assets/valet_preview.png";
import vetPreview from "./assets/vet_preview.png";
import electronicPreview from "./assets/electronic_shop_preview.png";

// Translations dictionary
const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      cv: "Curriculum Vitae",
      contact: "Contacto",
      cta: "Contrátame"
    },
    cv: {
      button: "Curriculum Vitae",
      downloadPdf: "Descargar CV (PDF)",
      viewPdf: "Ver PDF Completo",
      title: "Curriculum Vitae",
      subtitle: "Desarrollador Full Stack · Administrador de Infraestructura IT · Soporte Técnico",
      location: "Caracas, Distrito Capital",
      summaryTitle: "Resumen Profesional",
      summaryText: "Desarrollador Full Stack y administrador de infraestructura IT con más de 3 años combinando programación (Angular, NestJS, React) y gestión de redes y soporte técnico para más de 20 estaciones de trabajo. Lleva proyectos de principio a fin, desde el levantamiento de requerimientos hasta el despliegue en producción con Docker y bases de datos relacionales. Su experiencia paralela como instructor a 6 niveles educativos distintos aporta una capacidad probada para traducir requerimientos de negocio en soluciones técnicas claras.",
      skillsTitle: "Habilidades Técnicas",
      experienceTitle: "Experiencia Profesional",
      educationTitle: "Formación Académica",
      contactTitle: "Contacto & Redes",
      webDev: "Desarrollo Web",
      mobileDev: "Desarrollo Móvil",
      databases: "Bases de Datos",
      versionControl: "Control de Versiones",
      infrastructure: "Infraestructura y Sistemas"
    },
    hero: {
      badge: "PROGRAMADOR & DISEÑADOR",
      title: "Hola, soy José Vásquez, ",
      titleHighlight: "creo experiencias digitales con propósito",
      subtitle: "Soy programador y diseñador. Creo productos web modernos, minimalistas y de alto rendimiento — desde el primer boceto hasta la última línea de código.",
      ctaPrimary: "Trabaja conmigo",
      ctaSecondary: "Ver mis servicios",
      roleDesign: "DESIGN",
      roleDesignDesc: "UI - UX - Brand",
      roleCode: "CODE",
      roleCodeDesc: "React - TypeScript"
    },
    services: {
      title: "Lo que hago,\ny cómo puedo ayudarte",
      subtitle: "Combino sensibilidad de diseño con ingeniería sólida para entregar productos que se ven increíbles y funcionan aún mejor.",
      webDev: {
        title: "Desarrollo Web",
        desc: "Sitios y aplicaciones web modernas con React, TypeScript y código limpio, eficiente y mantenible."
      },
      uiux: {
        title: "Diseño UI / UX",
        desc: "Interfaces pensadas para el usuario, con jerarquía clara, flujos intuitivos y un lenguaje visual refinado."
      },
      landing: {
        title: "Desarrollo Backend",
        desc: "Creación de APIs REST, bases de datos eficientes, seguridad, autenticación y lógica del lado del servidor robusta y escalable."
      }
    },
    portfolio: {
      title: "Proyectos Destacados",
      subtitle: "Algunos de los sistemas y aplicaciones web que he construido recientemente.",
      project1: {
        title: "Colegio Santa Luisa",
        desc: "Landing page institucional moderna y optimizada para el colegio, con excelente rendimiento y diseño responsive.",
        tag: "Landing Page & CRM"
      },
      project2: {
        title: "Servicio de Estacionamiento",
        desc: "Sistema web de gestión en tiempo real para servicios de estacionamiento y control de vehículos.",
        tag: "Sistema de Gestión"
      },
      project3: {
        title: "Sistema Veterinario",
        desc: "Plataforma de administración para clínicas veterinarias, control de citas, historias médicas y pacientes.",
        tag: "Sistema de Gestión"
      },
      project4: {
        title: "Electronic Shop",
        desc: "Sistema integral Full-Stack de e-commerce de electrónica con Nuxt 3, FeathersJS v5, PostgreSQL, Redis y Socket.io.",
        tag: "E-Commerce Full-Stack"
      }
    },
    contact: {
      title: "Trabajemos juntos",
      subtitle: "¿Tienes un proyecto en mente? Cuéntame sobre él y te responderé lo antes posible.",
      email: "Correo",
      phone: "Teléfono",
      location: "Ubicación",
      locationVal: "Disponible globalmente — Remoto",
      labelName: "Nombre",
      placeholderName: "Tu nombre",
      labelEmail: "Correo",
      placeholderEmail: "tu.correo@ejemplo.com",
      labelMessage: "Mensaje",
      placeholderMessage: "Cuéntame sobre tu proyecto...",
      submit: "Enviar Mensaje",
      sending: "Enviando..."
    }
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      cv: "Curriculum Vitae",
      contact: "Contact",
      cta: "Hire me"
    },
    cv: {
      button: "Curriculum Vitae",
      downloadPdf: "Download CV (PDF)",
      viewPdf: "View Full PDF",
      title: "Curriculum Vitae",
      subtitle: "Full Stack Developer · IT Infrastructure Administrator · Technical Support",
      location: "Caracas, Capital District",
      summaryTitle: "Professional Summary",
      summaryText: "Full Stack Developer and IT infrastructure administrator with over 3 years combining software development (Angular, NestJS, React) and network management and tech support for 20+ workstations. Leads projects end-to-end, from requirements gathering to production deployment with Docker and relational databases. Parallel experience as an instructor across 6 educational levels brings a proven ability to translate business requirements into clear technical solutions.",
      skillsTitle: "Technical Skills",
      experienceTitle: "Professional Experience",
      educationTitle: "Academic Education",
      contactTitle: "Contact & Networks",
      webDev: "Web Development",
      mobileDev: "Mobile Development",
      databases: "Databases",
      versionControl: "Version Control",
      infrastructure: "Infrastructure & Systems"
    },
    hero: {
      badge: "DEVELOPER & DESIGNER",
      title: "Hi, I'm José Vásquez, ",
      titleHighlight: "I create digital experiences with purpose",
      subtitle: "I am a developer and designer. I create modern, minimalist, and high-performance web products — from the first sketch to the last line of code.",
      ctaPrimary: "Work with me",
      ctaSecondary: "View my services",
      roleDesign: "DESIGN",
      roleDesignDesc: "UI - UX - Brand",
      roleCode: "CODE",
      roleCodeDesc: "React - TypeScript"
    },
    services: {
      title: "What I do,\nand how I can help you",
      subtitle: "I combine design sensibility with solid engineering to deliver products that look amazing and perform even better.",
      webDev: {
        title: "Web Development",
        desc: "Modern websites and web applications built with React, TypeScript, and clean, maintainable code."
      },
      uiux: {
        title: "UI / UX Design",
        desc: "User-centered interfaces with clear hierarchy, intuitive flows, and a refined visual language."
      },
      landing: {
        title: "Backend Development",
        desc: "Creation of REST APIs, efficient databases, security, authentication, and robust, scalable server-side logic."
      }
    },
    portfolio: {
      title: "Featured Projects",
      subtitle: "A selection of web systems and applications I have recently built.",
      project1: {
        title: "Santa Luisa School",
        desc: "Modern and optimized institutional landing page for the school, featuring high performance and responsive design.",
        tag: "Landing Page & CRM"
      },
      project2: {
        title: "Valet Parking",
        desc: "Real-time management web system for parking services and vehicle tracking.",
        tag: "Management System"
      },
      project3: {
        title: "Veterinary System",
        desc: "Clinic administration platform for pet clinics, handling appointments, medical records, and patients.",
        tag: "Management System"
      },
      project4: {
        title: "Electronic Shop",
        desc: "Decoupled full-stack e-commerce system for consumer electronics built with Nuxt 3, FeathersJS v5, PostgreSQL, Redis, and Socket.io.",
        tag: "Full-Stack E-Commerce"
      }
    },
    contact: {
      title: "Let's work together",
      subtitle: "Have a project in mind? Tell me about it and I'll get back to you as soon as possible.",
      email: "Email",
      phone: "Phone",
      location: "Location",
      locationVal: "Available globally — Remote",
      labelName: "Name",
      placeholderName: "Your name",
      labelEmail: "Email",
      placeholderEmail: "your.email@example.com",
      labelMessage: "Message",
      placeholderMessage: "Tell me about your project...",
      submit: "Send Message",
      sending: "Sending..."
    }
  }
};

interface ProjectDetail {
  id: string;
  title: string;
  tag: string;
  shortDesc: string;
  longDesc: string;
  philosophy: string;
  liveUrl: string;
  techs: string[];
  features: string[];
  security: string[];
  architecture: { [key: string]: string };
}

const PROJECT_DETAILS: { [key: string]: { es: ProjectDetail; en: ProjectDetail } } = {
  project1: {
    es: {
      id: "project1",
      title: "Colegio Santa Luisa",
      tag: "Landing Page & CRM",
      shortDesc: "Plataforma web institucional con Landing Page pública y CRM Administrativo optimizado.",
      longDesc: "Este proyecto consiste en una plataforma web institucional que incluye una Landing Page pública y un Panel de Administración (CRM Administrativo) diseñado para gestionar la presencia digital de centros educativos. Funciona bajo un esquema de marca blanca, permitiendo ser reutilizado y adaptado de forma rápida para cualquier institución escolar.",
      philosophy: "Diseñado como plantilla de marca blanca reutilizable. Permite a múltiples usuarios gestionar comunicados, blogs, noticias y parámetros de configuración según roles específicos.",
      liveUrl: "https://colegiosantaluisa.dpdns.org/",
      techs: ["Astro 6", "Supabase", "PostgreSQL", "Tailwind CSS v4", "Bcryptjs", "TypeScript"],
      features: [
        "Renderizado híbrido en servidor (SSR) en Astro 6",
        "CRM Administrativo privado para la gestión de contenidos y comunicados",
        "Base de datos relacional PostgreSQL con Supabase",
        "Diseño responsivo móvil-primero con Tailwind CSS v4"
      ],
      security: [
        "Encriptación segura de contraseñas con Bcryptjs (10 salt rounds)",
        "Flujo de sesión personalizado desacoplado de Supabase Auth",
        "Tokens de sesión seguros almacenados en cookies HttpOnly y Secure",
        "Restricciones y autorización granular de acciones por roles (Admin, Editor)"
      ],
      architecture: {
        "src/components/": "Componentes de interfaz pública y administrativa",
        "src/layouts/": "Plantillas generales del sitio",
        "src/lib/": "Lógica de base de datos y esquemas de validación",
        "src/pages/": "Enrutamiento basado en archivos (Astro routes)"
      }
    },
    en: {
      id: "project1",
      title: "Santa Luisa School",
      tag: "Landing Page & CRM",
      shortDesc: "Institutional web platform featuring a public landing page and optimized administrative CRM.",
      longDesc: "This project consists of an institutional web platform including a public Landing Page and a private Administration Panel (Administrative CRM) designed to manage educational centers' digital presence. It works under a white-label template scheme, allowing rapid reuse and adaptation.",
      philosophy: "Designed as a reusable white-label template. Enables multiple users to manage announcements, blogs, news, and system parameters according to specific roles.",
      liveUrl: "https://colegiosantaluisa.dpdns.org/",
      techs: ["Astro 6", "Supabase", "PostgreSQL", "Tailwind CSS v4", "Bcryptjs", "TypeScript"],
      features: [
        "Hybrid Server-Side Rendering (SSR) in Astro 6",
        "Private Administrative CRM to manage blogs and school announcements",
        "Relational database storage with PostgreSQL and Supabase",
        "Mobile-first responsive design with Tailwind CSS v4"
      ],
      security: [
        "Secure password hashing via Bcryptjs (10 salt rounds)",
        "Custom session token workflow decoupled from default Supabase Auth",
        "Secure HttpOnly, Secure, and SameSite Lax cookie session storage",
        "Granular role-based access control (Admin, Editor) on routes/endpoints"
      ],
      architecture: {
        "src/components/": "Reusable UI and administration elements",
        "src/layouts/": "Page layouts for public and admin views",
        "src/lib/": "Database clients, auth helpers, and schemas",
        "src/pages/": "File-based routing structure"
      }
    }
  },
  project2: {
    es: {
      id: "project2",
      title: "Servicio de Estacionamiento",
      tag: "Sistema de Gestión",
      shortDesc: "Sistema web de gestión en tiempo real para servicios de estacionamiento y control de vehículos.",
      longDesc: "Un sistema web en tiempo real desarrollado para agilizar y digitalizar las operaciones de servicio de estacionamiento. Permite a los operadores registrar el ingreso de vehículos, gestionar tarifas dinámicas, enviar alertas de retiro automático y coordinar a los choferes en tiempo real.",
      philosophy: "Maximizar la eficiencia operativa reduciendo tiempos de espera y automatizando el cálculo de costos con total transparencia para el cliente.",
      liveUrl: "https://parking-valet-v1-0-git-develop-jose-vasquezs-projects.vercel.app/",
      techs: ["React", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL"],
      features: [
        "Actualizaciones de estado de vehículos en tiempo real vía WebSockets",
        "Cálculo de tarifas dinámicas y automatizadas según tiempo transcurrido",
        "Módulo de notificaciones SMS/WhatsApp automáticas para clientes",
        "Panel interactivo para administración de ubicaciones y espacios disponibles"
      ],
      security: [
        "Autenticación segura JWT para operarios y administradores",
        "Control de accesos basado en permisos según turno y locación",
        "Auditoría completa de transacciones y estados de llaves"
      ],
      architecture: {
        "backend/": "API Server con Express y WebSockets",
        "frontend/": "Single Page Application (SPA) con React y Tailwind",
        "database/": "Esquema relacional para historial de vehículos y facturación"
      }
    },
    en: {
      id: "project2",
      title: "Valet Parking System",
      tag: "Management System",
      shortDesc: "Real-time web management system for valet services and vehicle tracking.",
      longDesc: "A real-time web application developed to streamline and digitize valet parking operations. Enables operators to log vehicle check-ins, manage dynamic fees, trigger automated retrieval alerts, and coordinate drivers on the fly.",
      philosophy: "Maximize operational efficiency, minimize customer wait times, and automate cost calculations with total transparency.",
      liveUrl: "https://parking-valet-v1-0-git-develop-jose-vasquezs-projects.vercel.app/",
      techs: ["React", "Node.js", "WebSockets", "Tailwind CSS", "PostgreSQL"],
      features: [
        "Real-time vehicle status updates using WebSocket synchronization",
        "Dynamic fee calculation based on parking elapsed time",
        "Automated SMS/WhatsApp notification module for car retrieval",
        "Interactive dashboard to monitor active parking lots and spaces"
      ],
      security: [
        "Secure JWT authentication for operators and admins",
        "Location and shift-based permission access control",
        "Complete transaction log and key status audit trail"
      ],
      architecture: {
        "backend/": "Express API server with WebSocket support",
        "frontend/": "React client with responsive Tailwind layout",
        "database/": "Relational schema storing tickets, cash logs, and driver history"
      }
    }
  },
  project3: {
    es: {
      id: "project3",
      title: "Sistema Veterinario",
      tag: "Sistema de Gestión",
      shortDesc: "Plataforma de administración para clínicas veterinarias, control de citas, historias médicas y pacientes.",
      longDesc: "Un CRM integral diseñado para clínicas y consultorios veterinarios. Permite llevar el registro clínico detallado de mascotas, calendarizar citas de vacunas y cirugías, gestionar el inventario de medicamentos y administrar la facturación y fichas de clientes.",
      philosophy: "Unificar el historial médico y la administración clínica en una única interfaz intuitiva para mejorar el cuidado del paciente y la gestión del negocio.",
      liveUrl: "#",
      techs: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Prisma"],
      features: [
        "Historia clínica digital detallada de mascotas por especie y raza",
        "Calendario inteligente de citas y recordatorios de vacunación automáticos",
        "Gestión de inventario de medicamentos con alertas de stock mínimo",
        "Módulo de facturación e integración de recetas médicas en PDF"
      ],
      security: [
        "Acceso seguro de médicos y personal administrativo mediante OAuth2",
        "Historial médico inmutable protegido contra modificaciones no autorizadas",
        "Cumplimiento de normativas de protección de datos de clientes"
      ],
      architecture: {
        "app/": "Componentes de Next.js (App Router)",
        "prisma/": "Esquemas y base de datos relacional MongoDB",
        "services/": "Integración para generación de PDFs y envío de correos"
      }
    },
    en: {
      id: "project3",
      title: "Veterinary System",
      tag: "Management System",
      shortDesc: "Clinic administration platform for pet clinics, handling appointments, medical records, and patients.",
      longDesc: "A comprehensive CRM designed for veterinary clinics. Manages detailed pet medical records, schedules vaccine and surgery appointments, monitors drug store inventory, and automates client invoicing.",
      philosophy: "Unify medical history and clinical business administration into a single, intuitive interface to improve patient care.",
      liveUrl: "#",
      techs: ["React", "Next.js", "MongoDB", "Tailwind CSS", "Prisma"],
      features: [
        "Digital pet medical record system detailing species and breeds",
        "Smart appointment scheduler with automated email reminders",
        "Drug store inventory tracking with low-stock warnings",
        "Invoicing module with PDF prescription generator"
      ],
      security: [
        "Secure OAuth2 authentication for doctors and administrators",
        "Immutable patient record updates to protect medical history integrity",
        "Data protection policies for client contact information"
      ],
      architecture: {
        "app/": "Next.js app routing structures",
        "prisma/": "ORM declarations connecting to database engines",
        "services/": "Email and PDF export services"
      }
    }
  },
  project4: {
    es: {
      id: "project4",
      title: "Electronic Shop",
      tag: "E-Commerce Full-Stack",
      shortDesc: "Sistema integral de comercio electrónico de arquitectura desacoplada con panel de administración, tiempo real y facturación PDF.",
      longDesc: "Electronic Shop es una aplicación web moderna compuesta por un frontend responsivo desarrollado en Nuxt 3 / Vue 3 y un backend robusto basado en FeathersJS 5 con Prisma ORM sobre PostgreSQL. Incorpora soporte para caché con Redis, comunicación bidireccional en tiempo real con Socket.io y generación de facturas y reportes en PDF.",
      philosophy: "Estructura desacoplada y escalable basada en Clean Architecture (domain, application, infrastructure, services) diseñada para soportar alto tráfico, almacenamiento en caché de alto rendimiento y gestión integral de inventario y pedidos.",
      liveUrl: "https://electronic-shop-five-blush.vercel.app/",
      techs: ["Nuxt 3", "Vue 3", "FeathersJS 5", "Prisma ORM v6", "PostgreSQL", "Redis", "Pinia", "Tailwind CSS", "Socket.io", "PDFKit"],
      features: [
        "Catálogo de Productos: Exploración por categorías, filtrado por precio/nombre y paginación",
        "Ficha de Producto: Vista detallada con especificaciones técnicas en formato JSON y stock disponible",
        "Carrito de Compras Persistente: Gestión dinámica con Pinia y cálculo automático de totales",
        "Dashboard de Métricas: Visualización de ingresos totales, órdenes completadas y gráficos interactivos con Chart.js",
        "Gestión de Órdenes e Inventario (CRUD): Control de productos y cambios de estados en tiempo real vía Socket.io",
        "Reportes y Facturación: Exportación automática e impresión de comprobantes de compra en formato PDF (PDFKit)"
      ],
      security: [
        "Autenticación y autorización mediante JWT (JSON Web Tokens)",
        "Cifrado de contraseñas mediante bcryptjs",
        "Control de acceso basado en roles (USER y ADMIN)",
        "Protección y validación de endpoints en arquitectura desacoplada"
      ],
      architecture: {
        "frontend/": "Aplicación Nuxt 3 (Vue 3, Pinia, Tailwind CSS, Socket.io client)",
        "backend/domain/": "Entidades de negocio y reglas de dominio",
        "backend/application/": "Casos de uso y lógica de aplicación",
        "backend/infrastructure/": "Conexión a PostgreSQL (Prisma ORM), Redis y Socket.io",
        "backend/services/": "Servicios de FeathersJS v5 para APIs REST y WebSockets"
      }
    },
    en: {
      id: "project4",
      title: "Electronic Shop",
      tag: "Full-Stack E-Commerce",
      shortDesc: "Decoupled full-stack e-commerce system with admin panel, real-time sync, and PDF invoicing.",
      longDesc: "Electronic Shop is a modern web application featuring a responsive frontend in Nuxt 3 / Vue 3 and a robust backend built on FeathersJS 5 with Prisma ORM over PostgreSQL. Features Redis caching, real-time Socket.io communication, and PDF invoice generation.",
      philosophy: "Decoupled Clean Architecture (domain, application, infrastructure, services) designed for high-performance inventory management, real-time updates, and scalable e-commerce workflows.",
      liveUrl: "https://electronic-shop-five-blush.vercel.app/",
      techs: ["Nuxt 3", "Vue 3", "FeathersJS 5", "Prisma ORM v6", "PostgreSQL", "Redis", "Pinia", "Tailwind CSS", "Socket.io", "PDFKit"],
      features: [
        "Interactive product catalog with category filtering, search, and dynamic pagination",
        "Product detail view with JSON technical specifications and live stock indicators",
        "Persistent Pinia shopping cart with automated checkout total calculations",
        "Administrative dashboard (/admin) with sales metrics charts via Chart.js",
        "Real-time order state updates and product CRUD inventory management via Socket.io",
        "Automated PDF receipt and sales report generation using PDFKit"
      ],
      security: [
        "JWT (JSON Web Tokens) authentication and authorization",
        "Secure password hashing via bcryptjs",
        "Role-based access control (USER and ADMIN roles)",
        "Input validation and decoupled architecture endpoint protection"
      ],
      architecture: {
        "frontend/": "Nuxt 3 application (Vue 3, Pinia, Tailwind CSS, Socket.io client)",
        "backend/domain/": "Domain entities and core business rules",
        "backend/application/": "Use cases and application logic layer",
        "backend/infrastructure/": "PostgreSQL (Prisma ORM), Redis, and Socket.io integration",
        "backend/services/": "FeathersJS v5 REST & WebSocket services"
      }
    }
  }
};

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [serviceFilter, setServiceFilter] = useState<"all" | "development" | "design">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
        setIsCvModalOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme application
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
    }
  }, [theme]);

  const t = translations[lang];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "es" ? "en" : "es"));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch("https://formspree.io/f/mgogvnnd", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      const data = await response.json();
      if (response.ok && (data.success === "true" || data.ok === true)) {
        setFormSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      } else {
        throw new Error(data.message || "Error al enviar el formulario");
      }
    } catch (error) {
      clearTimeout(timeoutId);
      console.error(error);
      const err = error instanceof Error ? error : new Error(String(error));
      let errorMessage = err.message;

      const isNetworkError = err instanceof TypeError || 
        err.name === "AbortError" ||
        (err.message && /fetch|network|load|cors|abort|timed out/i.test(err.message));

      if (isNetworkError) {
        errorMessage = lang === "es"
          ? "No se pudo conectar con el servidor de correos. Si usas un bloqueador de anuncios (como uBlock, AdBlock o Brave Shield) o no tienes conexión a internet, por favor desactívalo o revisa tu conexión e intenta de nuevo."
          : "Could not connect to the mail server. If you use an adblocker (like uBlock, AdBlock, or Brave Shield) or have no internet connection, please disable it or check your connection and try again.";
      } else if (!errorMessage) {
        errorMessage = lang === "es"
          ? "Hubo un error al enviar el mensaje. Por favor intente nuevamente."
          : "There was an error sending your message. Please try again.";
      }
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#07080c] text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-900 dark:selection:text-cyan-200 transition-colors duration-200 overflow-x-hidden bg-grid-pattern relative">
      
      {/* Floating Navbar Container */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pb-2 transition-all duration-300">
        <div 
          className={`max-w-6xl mx-auto rounded-full px-5 py-3 flex items-center justify-between transition-all duration-300 ${
            isScrolled
              ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-indigo-500/5 dark:shadow-cyan-500/10"
              : "bg-white/60 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-white/5"
          }`}
        >
          <a href="#home" className="group flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
            <span className="text-lg sm:text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-indigo-900 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent">
              José Vásquez
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            <a href="#home" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              {t.nav.home}
            </a>
            <a href="#services" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              {t.nav.services}
            </a>
            <a href="#portfolio" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              {t.nav.portfolio}
            </a>
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-500" />
              <span>{t.nav.cv}</span>
            </button>
            <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* CV Button */}
            <button
              onClick={() => setIsCvModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-500/15 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm"
              title={t.cv.button}
            >
              <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
              <span>{t.cv.button}</span>
            </button>

            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
              title="Cambiar idioma / Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            {/* Light / Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200 hover:border-amber-400/50 hover:text-amber-500 dark:hover:text-amber-300 transition-all cursor-pointer shadow-sm"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>

            {/* CTA Header Button */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 dark:from-cyan-500 dark:to-indigo-600 text-white font-bold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-2.5 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-[11px] font-bold text-slate-700 dark:text-slate-200"
            >
              <Globe className="w-3 h-3 text-cyan-500" />
              <span>{lang === "es" ? "EN" : "ES"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-200"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu Card */}
        {mobileMenuOpen && (
          <div className="md:hidden max-w-6xl mx-auto mt-2 p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3 transition-all animate-in fade-in slide-in-from-top-4">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors flex items-center justify-between"
            >
              <span>{t.nav.home}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors flex items-center justify-between"
            >
              <span>{t.nav.services}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors flex items-center justify-between"
            >
              <span>{t.nav.portfolio}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsCvModalOpen(true);
              }}
              className="px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors flex items-center justify-between cursor-pointer w-full text-left"
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-cyan-500" />
                {t.nav.cv}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl font-bold text-sm text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-500 transition-colors flex items-center justify-between"
            >
              <span>{t.nav.contact}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-center text-sm font-extrabold shadow-lg shadow-cyan-500/25 mt-1"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 pb-16 overflow-hidden">
        {/* Ambient Blur Background Spheres */}
        <div className="ambient-glow top-[12%] left-[8%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-indigo-500/15 dark:bg-indigo-600/20" />
        <div className="ambient-glow bottom-[12%] right-[5%] w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] bg-cyan-500/15 dark:bg-cyan-500/20" />
        <div className="ambient-glow top-[50%] left-[45%] w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 grid gap-10 sm:gap-14 items-center lg:grid-cols-[1.15fr_0.85fr]">
          <div className="text-center lg:text-left lg:max-w-xl">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 dark:bg-cyan-500/15 text-[10px] sm:text-xs font-extrabold tracking-widest text-cyan-800 dark:text-cyan-300 uppercase mb-6 shadow-sm shadow-cyan-500/10 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-300 animate-spin" style={{ animationDuration: '8s' }} />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto lg:mx-0 leading-[1.15] mb-6">
              {t.hero.title}
              <span className="block bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:via-purple-400 dark:to-emerald-400 bg-clip-text text-transparent mt-1">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-8">
              {t.hero.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <a
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-cyan-500 dark:via-indigo-600 dark:to-purple-600 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all text-center"
              >
                {t.hero.ctaPrimary}
              </a>
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/90 dark:bg-slate-900/90 border border-cyan-500/40 text-slate-800 dark:text-slate-100 font-extrabold text-sm hover:bg-cyan-50 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all backdrop-blur-md text-center shadow-md flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
              >
                <FileText className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />
                <span>{t.cv.button}</span>
              </button>
              <a
                href="#services"
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 font-bold text-sm hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-cyan-300 transition-all backdrop-blur-md text-center shadow-sm"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Hero Profile Image Container & Floating Glass Badges */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative w-[270px] h-[270px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] flex items-center justify-center">
              
              {/* Outer Rotating Dashed Ring */}
              <div className="organic-circle-bg" />
              
              {/* Floating Glass Badges */}
              {/* 1. Design Badge */}
              <div className="absolute top-[8%] left-[-2%] sm:left-[-4%] z-20 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl bg-cyan-500/15 dark:bg-cyan-950/70 border border-cyan-400/40 dark:border-cyan-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-cyan-500/20 hero-card-anim delay-0 text-center px-1">
                <span className="text-[8px] sm:text-[10px] font-black text-cyan-600 dark:text-cyan-300 uppercase tracking-wider">Design</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">UI · UX</span>
              </div>

              {/* 2. Code Badge */}
              <div className="absolute top-[-2%] right-[4%] sm:right-[6%] z-20 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-amber-500/15 dark:bg-amber-950/70 border border-amber-400/40 dark:border-amber-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 hero-card-anim delay-200 text-center">
                <span className="text-[8px] sm:text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">Code</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">React / Vue</span>
              </div>

              {/* 3. DevOps Badge */}
              <div className="absolute bottom-[20%] left-[-4%] sm:left-[-6%] z-20 px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-purple-500/15 dark:bg-purple-950/70 border border-purple-400/40 dark:border-purple-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-purple-500/20 hero-card-anim delay-400 text-center">
                <span className="text-[8px] sm:text-[10px] font-black text-purple-600 dark:text-purple-300 uppercase tracking-wider">DevOps</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">Cloud / Backend</span>
              </div>

              {/* 4. Live Dev Status Badge */}
              <div className="absolute bottom-[6%] right-[4%] sm:right-[8%] z-20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/40 dark:border-emerald-400/40 backdrop-blur-xl flex items-center gap-2 shadow-xl shadow-emerald-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">80% Dev</span>
              </div>

              {/* Main Circular Profile Image with Glowing Border */}
              <div className="relative w-[210px] h-[210px] sm:w-[290px] sm:h-[290px] md:w-[360px] md:h-[360px] lg:w-[440px] lg:h-[440px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white/80 dark:border-slate-800 shadow-2xl z-10 organic-profile-frame">
                <img
                  src={heroImg}
                  alt="José Vásquez"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Back to Top Floating Button */}
        <a
          href="#home"
          aria-label="Back to Top"
          className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full border border-cyan-500/30 bg-gradient-to-r from-cyan-400 to-emerald-400 p-3.5 text-slate-950 shadow-2xl shadow-cyan-500/30 backdrop-blur transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <ArrowUp className="w-5 h-5 font-black" />
        </a>
      </section>

      {/* My Advantage & Skills Section */}
      <section className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
            
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase mb-4">
                <span>My Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5">
                My Skills &<br />Advantage
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                He trabajado con diversas herramientas de diseño y desarrollo web para lograr entregar productos excelentes y eficientes.
              </p>
              
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent border border-indigo-500/20 dark:border-indigo-400/30 flex items-center gap-6 shadow-xl backdrop-blur-md">
                <span className="text-5xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">04</span>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider leading-relaxed">
                  AÑOS DE EXPERIENCIA<br />
                  <span className="text-emerald-600 dark:text-emerald-400 font-extrabold">100% Clientes Satisfechos</span>
                </div>
              </div>
            </div>

            {/* Skill Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                { name: "React / Next.js", value: "95%" },
                { name: "Vue.js", value: "85%" },
                { name: "Tailwind CSS", value: "95%" },
                { name: "Backend (Node.js)", value: "90%" },
                { name: "Docker", value: "80%" },
                { name: "DevOps / CI/CD", value: "90%" }
              ].map((skill, i) => (
                <div 
                  key={i} 
                  className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all text-center flex flex-col items-center justify-center gap-3 animated-gradient-border backdrop-blur-md group"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-4 border-indigo-500/20 dark:border-indigo-400/20 border-t-cyan-500 dark:border-t-cyan-400 flex items-center justify-center font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm group-hover:scale-105 transition-transform">
                    {skill.value}
                  </div>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{skill.name}</span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#07080c] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[25%] right-[5%] w-[260px] h-[260px] bg-cyan-500/15 dark:bg-cyan-500/20" />
        <div className="ambient-glow bottom-[15%] left-[5%] w-[280px] h-[280px] bg-indigo-500/15 dark:bg-indigo-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-cyan-800 dark:text-cyan-300 uppercase mb-3">
              <span>{t.services.title.split('\n')[0]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-pre-line mb-4">
              Popular Services
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.services.subtitle}
            </p>

            {/* Popular Services Filters */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              <button
                onClick={() => setServiceFilter("all")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${
                  serviceFilter === "all"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setServiceFilter("development")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${
                  serviceFilter === "development"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setServiceFilter("design")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${
                  serviceFilter === "design"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                Design
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            
            {/* Service 1: Web Dev */}
            {(serviceFilter === "all" || serviceFilter === "development") && (
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group backdrop-blur-md animated-gradient-border flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/15 to-cyan-500/15 border border-indigo-500/20 dark:border-cyan-400/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Code className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">{t.services.webDev.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t.services.webDev.desc}</p>
                </div>
              </div>
            )}

            {/* Service 2: UI / UX Design */}
            {(serviceFilter === "all" || serviceFilter === "design") && (
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group backdrop-blur-md animated-gradient-border flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/15 to-purple-500/15 border border-amber-500/20 dark:border-purple-400/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Palette className="w-6 h-6 text-amber-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">{t.services.uiux.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t.services.uiux.desc}</p>
                </div>
              </div>
            )}

            {/* Service 3: Backend Development */}
            {(serviceFilter === "all" || serviceFilter === "development") && (
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-indigo-500/40 dark:hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 group backdrop-blur-md animated-gradient-border flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/15 to-cyan-500/15 border border-emerald-500/20 dark:border-cyan-400/30 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                    <Server className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">{t.services.landing.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t.services.landing.desc}</p>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[20%] left-[8%] w-[260px] h-[260px] bg-indigo-500/15 dark:bg-indigo-500/20" />
        <div className="ambient-glow bottom-[15%] right-[8%] w-[310px] h-[310px] bg-cyan-500/15 dark:bg-cyan-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase mb-3">
              <span>Portafolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Project 1: Colegio Santa Luisa */}
            <div className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between h-full backdrop-blur-md animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform">
                  <img src={colegioPreview} alt="Colegio Santa Luisa" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase mb-3">
                  {t.portfolio.project1.tag}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {t.portfolio.project1.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t.portfolio.project1.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project1[lang])}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 pt-2"
              >
                <span>Ver proyecto detallado</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Project 2: Valet Parking */}
            <div className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between h-full backdrop-blur-md animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform">
                  <img src={valetPreview} alt="Valet Parking" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase mb-3">
                  {t.portfolio.project2.tag}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {t.portfolio.project2.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t.portfolio.project2.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project2[lang])}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 pt-2"
              >
                <span>Ver proyecto detallado</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Project 3: Sistema Veterinario */}
            <div className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between h-full backdrop-blur-md animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform">
                  <img src={vetPreview} alt="Sistema Veterinario" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase mb-3">
                  {t.portfolio.project3.tag}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {t.portfolio.project3.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t.portfolio.project3.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project3[lang])}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 pt-2"
              >
                <span>Ver proyecto detallado</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Project 4: Electronic Shop */}
            <div className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between h-full backdrop-blur-md animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform">
                  <img src={electronicPreview} alt="Electronic Shop" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase mb-3">
                  {t.portfolio.project4.tag}
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {t.portfolio.project4.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {t.portfolio.project4.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project4[lang])}
                className="inline-flex items-center gap-2 text-xs font-extrabold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0 pt-2"
              >
                <span>Ver proyecto detallado</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#07080c] relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[30%] right-[8%] w-[330px] h-[330px] bg-cyan-500/15 dark:bg-cyan-500/20" />
        <div className="ambient-glow bottom-[10%] left-[8%] w-[270px] h-[270px] bg-indigo-500/15 dark:bg-indigo-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-start">
            
            {/* Info panel */}
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-cyan-800 dark:text-cyan-300 uppercase mb-4">
                <span>Contacto</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
                {t.contact.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 flex items-center justify-center border border-slate-200 dark:border-white/10 text-cyan-600 dark:text-cyan-400 shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{t.contact.email}</h4>
                    <a href="mailto:jvasquez978@gmail.com" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      jvasquez978@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 flex items-center justify-center border border-slate-200 dark:border-white/10 text-indigo-600 dark:text-indigo-400 shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{t.contact.phone}</h4>
                    <a href="tel:+584269217118" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +58 426 921 7118
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <a
                    href="https://wa.me/584269217118"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Directo
                  </a>
                  <a
                    href="https://wa.me/584269217118?text=Hola%20José%2C%20quiero%20consultar%20sobre%20un%20proyecto"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-sm transition-all"
                  >
                    Mensaje Rápido
                  </a>
                </div>

                <div className="flex items-start gap-4 pt-2">
                  <div className="w-12 h-12 rounded-2xl bg-white/80 dark:bg-slate-900/80 flex items-center justify-center border border-slate-200 dark:border-white/10 text-emerald-600 dark:text-emerald-400 shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-0.5">{t.contact.location}</h4>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.contact.locationVal}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form panel */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="p-7 sm:p-10 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 space-y-6 backdrop-blur-md shadow-xl animated-gradient-border">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.labelName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={t.contact.placeholderName}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.labelEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder={t.contact.placeholderEmail}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm font-medium"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                    {t.contact.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full px-4 py-3.5 rounded-xl bg-white/90 dark:bg-slate-950/80 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 transition-all text-sm font-medium resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? (lang === "es" ? "Enviando..." : "Sending...") : t.contact.submit}</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-extrabold animate-pulse mt-2">
                    {lang === "es" ? "¡Mensaje enviado con éxito! Te contactaremos pronto." : "Message sent successfully! We will contact you soon."}
                  </p>
                )}

                {submitError && (
                  <p className="text-center text-xs text-rose-500 font-bold mt-2">
                    {submitError}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-slate-950/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} José Vásquez. All rights reserved.
          </div>
          
          <div className="flex items-center gap-5">
            <a href="https://github.com/jav978" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://gitlab.com/jvasquez978" target="_blank" rel="noreferrer" aria-label="GitLab" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="m23.955 13.587-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.86 0L16.42 9.447H7.579L4.914 1.263c-.135-.417-.724-.417-.86 0L1.386 9.452.044 13.587c-.153.47.014 1.011.412 1.299L12 23.361l11.544-8.475c.398-.288.565-.828.411-1.299"/>
              </svg>
            </a>
            <a href="https://x.com/JoseAntonio978" target="_blank" rel="noreferrer" aria-label="X" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/jav_978/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-vasquez978" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 backdrop-blur-xl transition-opacity duration-300">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 p-6 sm:p-10 shadow-2xl flex flex-col gap-6 backdrop-blur-2xl">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-400/15 px-3 py-1 rounded-full mb-2 inline-block border border-cyan-500/20">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {lang === "es" ? "Descripción del Proyecto" : "Project Description"}
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                    {selectedProject.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                    {lang === "es" ? "Filosofía y Propósito" : "Philosophy & Purpose"}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {selectedProject.philosophy}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {lang === "es" ? "Características Clave" : "Key Features"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {lang === "es" ? "Tecnologías" : "Technologies"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {lang === "es" ? "Seguridad y Autorización" : "Security & Auth"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                    {selectedProject.security.map((sec, index) => (
                      <li key={index}>{sec}</li>
                    ))}
                  </ul>
                </div>

                {/* Directory Architecture */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                    {lang === "es" ? "Estructura del Proyecto" : "Project Structure"}
                  </h4>
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50 p-4 space-y-2 text-xs font-mono">
                    {Object.entries(selectedProject.architecture).map(([path, desc], index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-100 dark:border-white/5 pb-2 last:border-0 last:pb-0">
                        <span className="text-cyan-600 dark:text-cyan-400 font-bold">{path}</span>
                        <span className="text-slate-500 dark:text-slate-400 text-[10px] sm:text-right">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-200/80 dark:border-white/10 pt-4 mt-2">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-center"
              >
                {lang === "es" ? "Cerrar" : "Close"}
              </button>
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 text-center flex items-center justify-center gap-1.5 hover:scale-105 transition-all"
                >
                  <span>{lang === "es" ? "Ver Demo en Vivo" : "View Live Demo"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Curriculum Vitae Modal */}
      {isCvModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-300">
          <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 p-5 sm:p-8 shadow-2xl flex flex-col gap-6 backdrop-blur-2xl">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-200/80 dark:border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 shrink-0">
                  <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-400/15 px-2.5 py-0.5 rounded-full border border-cyan-500/20">
                      CV
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-cyan-500" />
                      {t.cv.location}
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-cyan-600 to-emerald-600 dark:from-white dark:via-cyan-300 dark:to-emerald-300 bg-clip-text text-transparent mt-0.5">
                    José Antonio Vásquez
                  </h3>
                  <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
                    {t.cv.subtitle}
                  </p>
                </div>
              </div>
              
              <button 
                onClick={() => setIsCvModalOpen(false)}
                className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Top Toolbar / Action Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-2xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/10">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>{lang === "es" ? "Documento listo para descarga o lectura" : "Document ready for download or view"}</span>
              </div>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href="/CV_Jose_Antonio_Vasquez.pdf"
                  download="CV_Jose_Antonio_Vasquez.pdf"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 font-extrabold text-xs shadow-md shadow-cyan-500/20 hover:scale-105 transition-all flex items-center justify-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.cv.downloadPdf}</span>
                </a>
                <a
                  href="/CV_Jose_Antonio_Vasquez.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none px-4 py-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-700 transition-all flex items-center justify-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t.cv.viewPdf}</span>
                </a>
              </div>
            </div>

            {/* Modal Content Sections */}
            <div className="space-y-6">
              
              {/* Contact Info Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                <a href="mailto:jvasquez978@gmail.com" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/40 hover:border-cyan-500/50 transition-colors flex items-center gap-2 group">
                  <Mail className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate group-hover:text-cyan-500">jvasquez978@gmail.com</span>
                </a>
                <a href="tel:+5804269217118" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/40 hover:border-cyan-500/50 transition-colors flex items-center gap-2 group">
                  <Phone className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate group-hover:text-cyan-500">+58 (0426) 921-71-18</span>
                </a>
                <a href="https://github.com/jav978" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/40 hover:border-cyan-500/50 transition-colors flex items-center gap-2 group">
                  <Globe className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate group-hover:text-cyan-500">github.com/jav978</span>
                </a>
                <a href="https://linkedin.com/in/jose-vasquez978" target="_blank" rel="noreferrer" className="p-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-950/40 hover:border-cyan-500/50 transition-colors flex items-center gap-2 group">
                  <User className="w-3.5 h-3.5 text-cyan-500 shrink-0" />
                  <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 truncate group-hover:text-cyan-500">linkedin.com/in/jose-vasquez978</span>
                </a>
              </div>

              {/* Professional Summary */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2 flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-500" />
                  {t.cv.summaryTitle}
                </h4>
                <div className="p-4 rounded-2xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                  {t.cv.summaryText}
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4 text-cyan-500" />
                  {t.cv.skillsTitle}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 block mb-2">{t.cv.webDev}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Angular", "AstroJS", "React", "Vue", "Next.js", "Nuxt", "Node.js", "NestJS", "FeathersJS", "Tailwind CSS"].map((skill, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-cyan-500/10 text-cyan-800 dark:text-cyan-200 border border-cyan-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 block mb-2">{t.cv.mobileDev} & {t.cv.databases}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {["Flutter", "PostgreSQL", "MySQL", "SQL Server", "MongoDB"].map((skill, i) => (
                        <span key={i} className="px-2.5 py-0.5 text-[11px] font-semibold rounded-md bg-amber-500/10 text-amber-800 dark:text-amber-200 border border-amber-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-emerald-600 dark:text-emerald-400 block mb-2">{t.cv.versionControl}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {lang === "es" 
                        ? "Git y GitHub para gestión de repositorios y trabajo colaborativo en equipo." 
                        : "Git and GitHub for repository management and collaborative teamwork."}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-purple-600 dark:text-purple-400 block mb-2">{t.cv.infrastructure}</span>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {lang === "es"
                        ? "Docker, administración de entornos Linux (Ubuntu Budgie) y Windows, configuración de redes locales."
                        : "Docker, administration of Linux (Ubuntu Budgie) and Windows environments, local network configuration."}
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-cyan-500" />
                  {t.cv.experienceTitle}
                </h4>
                <div className="space-y-5 relative before:absolute before:left-3 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent pl-8">
                  
                  {/* Job 1 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {lang === "es" ? "Desarrollador de Software Independiente" : "Independent Software Developer"}
                      </h5>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20 w-fit">
                        2023 – {lang === "es" ? "Actualidad" : "Present"}
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {lang === "es" ? (
                        <>
                          <li>Diseñó y desplegó un sistema de gestión integral para Valet Parking (Angular + NestJS), digitalizando el control de tickets y automatizando el cálculo de tarifas dinámicas.</li>
                          <li>Desarrolló una plataforma médica para una clínica veterinaria, centralizando en un solo sistema la gestión de pacientes y el historial clínico.</li>
                          <li>Gestionó el ciclo completo de proyectos web a medida —levantamiento de requerimientos, arquitectura frontend/backend y despliegue— para negocios locales.</li>
                          <li>Orquestó entornos de prueba con Docker y bases de datos relacionales (PostgreSQL/MySQL), estandarizando la configuración de ambientes de desarrollo.</li>
                        </>
                      ) : (
                        <>
                          <li>Designed and deployed an end-to-end management system for Valet Parking (Angular + NestJS), digitalizing ticket control and automating dynamic rate calculation.</li>
                          <li>Developed a medical platform for a veterinary clinic, centralizing patient management and clinical history in a single system.</li>
                          <li>Managed the complete lifecycle of custom web projects —requirements gathering, frontend/backend architecture, and deployment— for local businesses.</li>
                          <li>Orchestrated testing environments with Docker and relational databases (PostgreSQL/MySQL), standardizing development setup.</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Job 2 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {lang === "es" ? "Instructor de Informática y Soporte Técnico" : "Computer Instructor & Tech Support"}
                        <span className="font-normal text-slate-500 dark:text-slate-400"> | U.E. Colegio Santa Luisa</span>
                      </h5>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/20 w-fit">
                        2020 – {lang === "es" ? "Presente" : "Present"}
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {lang === "es" ? (
                        <>
                          <li>Administra la infraestructura de red de la institución y un laboratorio de 21 estaciones de trabajo, implementando políticas de acceso y monitoreo con Veyon.</li>
                          <li>Imparte clases de informática a estudiantes de 6 niveles educativos (desde preescolar hasta 5to año de bachillerato), formando alfabetización digital en toda la matrícula.</li>
                          <li>Lidera el desarrollo del nuevo portal web institucional y blog de actividades (Astro + Supabase + PostgreSQL), centralizando la comunicación digital.</li>
                        </>
                      ) : (
                        <>
                          <li>Manages institutional network infrastructure and a 21-workstation lab, implementing access policies and monitoring via Veyon.</li>
                          <li>Teaches computer science across 6 educational levels (from preschool to 12th grade), fostering digital literacy school-wide.</li>
                          <li>Leads the development of the new institutional web portal and activity blog (Astro + Supabase + PostgreSQL), centralizing digital communication.</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Job 3 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-500/20" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {lang === "es" ? "Técnico Supervisor (E)" : "Supervisor Technician (E)"}
                        <span className="font-normal text-slate-500 dark:text-slate-400"> | CORPOELEC</span>
                      </h5>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-300 border border-emerald-500/20 w-fit">
                        2013 – 2016
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {lang === "es" ? (
                        <>
                          <li>Supervisó la Sala de Control (CECON), monitoreando de forma ininterrumpida sistemas de circuito cerrado (CCTV) y contraincendios.</li>
                          <li>Redactó informes de análisis de riesgo y coordinó al personal de seguridad a su cargo.</li>
                        </>
                      ) : (
                        <>
                          <li>Supervised the Control Room (CECON), providing continuous monitoring of CCTV and fire protection systems.</li>
                          <li>Drafted risk analysis reports and coordinated assigned security personnel.</li>
                        </>
                      )}
                    </ul>
                  </div>

                  {/* Job 4 */}
                  <div className="relative">
                    <div className="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20" />
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                      <h5 className="text-sm font-extrabold text-slate-900 dark:text-white">
                        {lang === "es" ? "Operador Sala de Control" : "Control Room Operator"}
                        <span className="font-normal text-slate-500 dark:text-slate-400"> | M.P.P.E.E.</span>
                      </h5>
                      <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-300 border border-amber-500/20 w-fit">
                        2012 – 2013
                      </span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                      {lang === "es" ? (
                        <>
                          <li>Coordinó apoyo logístico con organismos de seguridad e inspeccionó instalaciones físicas de forma periódica.</li>
                        </>
                      ) : (
                        <>
                          <li>Coordinated logistical support with security agencies and conducted periodic physical facility inspections.</li>
                        </>
                      )}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Education */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-cyan-500" />
                  {t.cv.educationTitle}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-indigo-600 dark:text-indigo-400 block mb-1">
                      {lang === "es" ? "Ingeniería de Sistemas" : "Systems Engineering"}
                    </span>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Universidad Nacional Abierta (UNA)</p>
                    <span className="text-[10px] font-bold text-cyan-600 dark:text-cyan-400 mt-1 inline-block bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                      {lang === "es" ? "En curso" : "In progress"}
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-slate-950/50">
                    <span className="text-xs font-extrabold text-cyan-600 dark:text-cyan-400 block mb-1">
                      {lang === "es" ? "TSU en Informática" : "Associate Degree in Computer Science"}
                    </span>
                    <p className="text-xs font-medium text-slate-700 dark:text-slate-300">Instituto Universitario de Gerencia y Tecnología (IUGT)</p>
                    <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 mt-1 inline-block bg-slate-500/10 px-2 py-0.5 rounded border border-slate-500/20">
                      {lang === "es" ? "6to semestre cursado" : "6th semester completed"}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Modal Footer / Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 pt-4 mt-2">
              <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline-block">
                José Antonio Vásquez — {t.cv.subtitle}
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button 
                  onClick={() => setIsCvModalOpen(false)}
                  className="px-6 py-2.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  {lang === "es" ? "Cerrar" : "Close"}
                </button>
                <a
                  href="/CV_Jose_Antonio_Vasquez.pdf"
                  download="CV_Jose_Antonio_Vasquez.pdf"
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 font-extrabold text-xs shadow-lg shadow-cyan-500/20 text-center flex items-center justify-center gap-1.5 hover:scale-105 transition-all"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.cv.downloadPdf}</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
