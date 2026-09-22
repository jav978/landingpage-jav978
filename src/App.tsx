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
  User,
  ShieldCheck,
  Layers,
  Cpu,
  Database,
  Terminal,
  BookOpen,
  Check
} from "lucide-react";
import heroImg from "./assets/hero.png";
import schoolManagementPreview from "./assets/school_management_preview.png";
import colegioPreview from "./assets/colegio_preview.png";
import valetPreview from "./assets/valet_preview.png";
import vetPreview from "./assets/vet_preview.png";
import electronicPreview from "./assets/electronic_shop_preview.png";
import schoolLogo from "./assets/logocolegio.png";

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
    advantage: {
      badge: "Competencias Técnicas",
      title: "Stack Tecnológico &\nCapacidades",
      desc: "Arquitectura frontend de alto rendimiento combinada con ingeniería backend robusta, comunicación en tiempo real y despliegue continuo en producción.",
      years: "04",
      yearsText: "AÑOS DE EXPERIENCIA",
      satisfaction: "100% Proyectos en Producción",
      categories: [
        {
          title: "Frontend & UI Engineering",
          desc: "Aplicaciones reactivas, diseño ultra-fluido y SSR.",
          skills: ["React 19", "Next.js", "Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS v4", "Pinia"]
        },
        {
          title: "Backend & Tiempo Real",
          desc: "APIs robustas, WebSockets bidireccionales y Clean Architecture.",
          skills: ["Node.js", "Feathers.js 5", "Express", "WebSockets / Socket.io", "Clean Architecture", "REST APIs"]
        },
        {
          title: "Bases de Datos & Persistencia",
          desc: "Modelado relacional, cachés y ORMs modernos.",
          skills: ["PostgreSQL", "Knex.js", "MongoDB", "Redis", "Prisma ORM", "Supabase"]
        },
        {
          title: "DevOps & Seguridad",
          desc: "Contenedores, CI/CD, pruebas automatizadas y autenticación 2FA.",
          skills: ["Docker", "Fly.io", "Vercel", "Playwright E2E", "JWT / 2FA TOTP", "Linux Admin"]
        }
      ]
    },
    portfolio: {
      badge: "Portafolio de Proyectos",
      title: "Sistemas & Soluciones Web",
      subtitle: "Plataformas de alta complejidad desplegadas en producción: ERPs académicos, comercio electrónico y sistemas operativos en tiempo real.",
      viewProject: "Ficha Técnica",
      liveDemo: "Ver en Vivo",
      liveBadge: "En Producción",
      flagshipBadge: "PROYECTO INSIGNIA",
      categories: {
        all: "Todos",
        erp: "Sistemas ERP & Gestión",
        ecommerce: "E-Commerce",
        web: "Web & Landing"
      },
      modalTabs: {
        overview: "Visión General",
        modules: "Módulos Clave",
        architecture: "Arquitectura",
        security: "Seguridad & Stack"
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
    advantage: {
      badge: "Technical Competencies",
      title: "Tech Stack &\nCore Capabilities",
      desc: "High-performance frontend architecture combined with robust backend engineering, real-time communication, and continuous production deployment.",
      years: "04",
      yearsText: "YEARS OF EXPERIENCE",
      satisfaction: "100% Projects in Production",
      categories: [
        {
          title: "Frontend & UI Engineering",
          desc: "Reactive, ultra-fluid interfaces and SSR applications.",
          skills: ["React 19", "Next.js", "Nuxt 4", "Vue 3", "TypeScript", "Tailwind CSS v4", "Pinia"]
        },
        {
          title: "Backend & Real-Time",
          desc: "Scalable services, bi-directional WebSockets, and Clean Architecture.",
          skills: ["Node.js", "Feathers.js 5", "Express", "WebSockets / Socket.io", "Clean Architecture", "REST APIs"]
        },
        {
          title: "Databases & Persistence",
          desc: "Relational modeling, high-speed caching, and modern ORMs.",
          skills: ["PostgreSQL", "Knex.js", "MongoDB", "Redis", "Prisma ORM", "Supabase"]
        },
        {
          title: "DevOps & Security",
          desc: "Containerization, CI/CD, automated E2E testing, and 2FA.",
          skills: ["Docker", "Fly.io", "Vercel", "Playwright E2E", "JWT / 2FA TOTP", "Linux Admin"]
        }
      ]
    },
    portfolio: {
      badge: "Project Portfolio",
      title: "Systems & Web Solutions",
      subtitle: "High-complexity platforms deployed to production: academic ERPs, full-stack e-commerce, and real-time operational systems.",
      viewProject: "Technical Specs",
      liveDemo: "Live Demo",
      liveBadge: "Live in Production",
      flagshipBadge: "FEATURED PROJECT",
      categories: {
        all: "All",
        erp: "ERP & Management",
        ecommerce: "E-Commerce",
        web: "Web & Landing"
      },
      modalTabs: {
        overview: "Overview",
        modules: "Key Modules",
        architecture: "Architecture",
        security: "Security & Stack"
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
  category: "erp" | "ecommerce" | "web";
  shortDesc: string;
  longDesc: string;
  philosophy: string;
  liveUrl: string;
  backendUrl?: string;
  isFlagship?: boolean;
  image: string;
  techs: string[];
  features: string[];
  security: string[];
  architecture: { [key: string]: string };
}

const PROJECT_KEYS = ["school_management", "project4", "project3", "project2", "project1"] as const;

const PROJECT_DETAILS: { [key: string]: { es: ProjectDetail; en: ProjectDetail } } = {
  school_management: {
    es: {
      id: "school_management",
      title: "U.E. Colegio \"Santa Luisa\" - Sistema de Gestión Escolar",
      tag: "ERP Escolar & SIS",
      category: "erp",
      isFlagship: true,
      image: schoolManagementPreview,
      shortDesc: "Sistema integral de gestión académica, control de estudios, evaluaciones, asistencia en tiempo real y cobranzas de colegiaturas con 2FA.",
      longDesc: "Plataforma web unificada de alta densidad operativa (ACERO Terminal) diseñada para centralizar y modernizar todos los procesos académicos, administrativos y financieros de la U.E. Colegio 'Santa Luisa'. Construida sobre Nuxt 4 y Feathers.js 5 con PostgreSQL, erradica hojas de cálculo aisladas mediante expedientes digitales de alumnos (SIS), control de asistencia diaria por aula, libro de evaluaciones ponderadas con generación de boletines oficiales MPPE, cobro de colegiaturas con emisión de recibos y autenticación multifactor (2FA / TOTP) mediante códigos QR institucionales.",
      philosophy: "Máxima densidad operativa, velocidad y scanabilidad para secretaría y coordinadores. Diseñada respetando los rituales académicos reales del colegio y la normativa educativa, asegurando trazabilidad absoluta de notas y cobranzas.",
      liveUrl: "https://gestionescolarcolegiosantaluisa.vercel.app/auth/login",
      backendUrl: "https://school-backend-9e07b02c-badb-4ddd-94ca-afd4d8aca2bd.fly.dev",
      techs: ["Nuxt 4", "Vue 3", "Feathers.js 5", "Knex.js", "PostgreSQL", "Tailwind CSS v4", "Nuxt UI", "DaisyUI", "Pinia", "WebSockets", "2FA / TOTP", "HTML2PDF", "Playwright", "Fly.io", "Vercel"],
      features: [
        "Dashboard Analítico Institucional: métricas en tiempo real de 1,260 estudiantes, 224 profesores, 840 familias y balance de ingresos vs gastos",
        "Portal Institucional Multi-Rol con control de accesos RBAC (Directivos, Profesores, Representantes y Estudiantes)",
        "Autenticación de Alta Seguridad con 2FA: verificación en dos pasos basada en TOTP con vinculación por código QR institucional",
        "Expediente Digital del Estudiante (SIS): ficha personal, matrículas, historial académico y datos familiares",
        "Control de Estudio, Calificaciones y Boletas: ponderación por lapsos pedagógicos y emisión de boletines oficiales MPPE",
        "Control de Asistencia Diaria en Tiempo Real: pase de lista por aula y asignatura con gestión de justificaciones y retardos",
        "Horarios, Planificación Académica y Aulas: matriz interactiva por grado, sección, profesor e instalaciones",
        "Generador de Exámenes, Diplomas, Certificados y Útiles Escolares",
        "Gestión Financiera de Colegiaturas: control de pagos, gastos operativos, emisión de recibos y solvencias",
        "Carnetización Estudiantil con Código QR institucional embebido",
        "Tablón de Anuncios y Calendario de Eventos: circulares oficiales y efemérides institucionales"
      ],
      security: [
        "Autenticación JWT con rotación de tokens, expiración configurada y aislamiento de sesiones",
        "Autenticación de doble factor (2FA / TOTP) estándar RFC 6238 implementada con otplib y códigos QR",
        "Cifrado de contraseñas de máxima seguridad mediante Bcryptjs (10 salt rounds)",
        "Control de acceso basado en roles (RBAC) validado en cada servicio REST y canal WebSocket",
        "Protección perimetral con cabeceras Helmet, rate limiting por IP (Express Rate Limit) y CORS estricto",
        "Validación exhaustiva de esquemas y sanitización de datos de entrada con TypeBox"
      ],
      architecture: {
        "frontend/app.vue": "Entrada principal y envoltorio global con Nuxt UI v4 y DaisyUI",
        "frontend/pages/": "Vistas de autenticación, dashboard, estudiantes, calificaciones, asistencia y finanzas",
        "frontend/stores/": "Gestión de estado global reactivo con Pinia (@pinia/nuxt)",
        "backend/index.js": "Servidor Feathers.js 5 REST & WebSockets en Node.js desplegado en Fly.io",
        "backend/services/": "Servicios de negocio, endpoints REST y hooks de autorización",
        "backend/migrations/": "Migraciones de base de datos relacional PostgreSQL con Knex.js",
        "tests/e2e/": "Suite de 28 especificaciones de pruebas end-to-end con Playwright"
      }
    },
    en: {
      id: "school_management",
      title: "Santa Luisa School - Academic Management System",
      tag: "School ERP & SIS",
      category: "erp",
      isFlagship: true,
      image: schoolManagementPreview,
      shortDesc: "Comprehensive K-12 school management platform handling academics, student dossiers, attendance, gradebook, and tuition billing with 2FA.",
      longDesc: "Unified high-density academic management terminal (ACERO) engineered to centralize and streamline administrative, academic, and financial workflows for Santa Luisa School. Built with Nuxt 4 and Feathers.js 5 backed by PostgreSQL, it replaces fragmented spreadsheets with digital student dossiers (SIS), real-time classroom attendance logging, weighted evaluation gradebooks emitting official MPPE report cards, tuition fee management with receipt generation, and two-factor authentication (2FA/TOTP) via QR codes.",
      philosophy: "Operational density, speed, and scanability for school leadership and clerical staff. Designed around genuine school rituals and educational compliance, ensuring absolute auditability across grading and billing.",
      liveUrl: "https://gestionescolarcolegiosantaluisa.vercel.app/auth/login",
      backendUrl: "https://school-backend-9e07b02c-badb-4ddd-94ca-afd4d8aca2bd.fly.dev",
      techs: ["Nuxt 4", "Vue 3", "Feathers.js 5", "Knex.js", "PostgreSQL", "Tailwind CSS v4", "Nuxt UI", "DaisyUI", "Pinia", "WebSockets", "2FA / TOTP", "HTML2PDF", "Playwright", "Fly.io", "Vercel"],
      features: [
        "Institutional Analytics Dashboard: Real-time telemetry for 1,260 students, 224 teachers, 840 families, and revenue vs expenses",
        "Multi-Role Institutional Portal: Granular RBAC access for Directors, Teachers, Parents, and Students",
        "2FA Security Authentication: Two-factor verification (TOTP) via institutional QR code scanning",
        "Student Information System (SIS): Digital dossiers, enrollment history, and guardian contact data",
        "Gradebook & Evaluation Engine: Weighted grading periods, automated GPA calculations, and official report cards",
        "Real-Time Daily Attendance: Classroom roll-call tracking by subject and section, with tardiness and excuse logging",
        "Weekly Timetable Scheduler & Facilities: Interactive matrix organized by grade, section, classroom, and teacher",
        "Exam Generator, Diplomas, Certificates, and School Supply Lists",
        "Tuition & Finance Management: Payment balance tracking, operating expenses, invoice receipts, and clearances",
        "Student ID Badges with embedded institutional QR codes",
        "Notice Board & Academic Event Calendar: Official school circulars and date reminders"
      ],
      security: [
        "Secure JWT authentication with token rotation, controlled expiration, and session isolation",
        "Two-Factor Authentication (2FA / TOTP) based on RFC 6238 using otplib and QR codes",
        "High-security password hashing with Bcryptjs (10 salt rounds)",
        "Role-Based Access Control (RBAC) strictly enforced across REST services and WebSocket events",
        "Edge security headers via Helmet, IP rate limiting (Express Rate Limit), and strict CORS rules",
        "Type-safe input schema validation and payload sanitization using TypeBox"
      ],
      architecture: {
        "frontend/app.vue": "Application root entry point and layout wrapper using Nuxt UI and DaisyUI",
        "frontend/pages/": "Modular views for authentication, dashboard, SIS dossiers, grades, and billing",
        "frontend/stores/": "Reactive state management via Pinia (@pinia/nuxt)",
        "backend/index.js": "Feathers.js 5 REST & WebSockets server on Node.js deployed on Fly.io",
        "backend/services/": "Business services, data hooks, and role authorization pipelines",
        "backend/migrations/": "PostgreSQL schema migrations and relationship builders via Knex.js",
        "tests/e2e/": "Automated end-to-end test suite containing 28 Playwright specs"
      }
    }
  },
  project4: {
    es: {
      id: "project4",
      title: "Electronic Shop",
      tag: "E-Commerce Full-Stack",
      category: "ecommerce",
      isFlagship: false,
      image: electronicPreview,
      shortDesc: "Sistema integral de comercio electrónico de arquitectura desacoplada con panel de administración, tiempo real y facturación PDF.",
      longDesc: "Electronic Shop es una aplicación web moderna compuesta por un frontend responsivo desarrollado en Nuxt 3 / Vue 3 y un backend robusto basado en FeathersJS 5 con Prisma ORM sobre PostgreSQL. Incorpora soporte para caché con Redis, comunicación bidireccional en tiempo real con Socket.io y generación de facturas y reportes en PDF.",
      philosophy: "Estructura desacoplada y escalable basada en Clean Architecture diseñada para soportar alto tráfico, almacenamiento en caché de alto rendimiento y gestión integral de inventario y pedidos.",
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
      category: "ecommerce",
      isFlagship: false,
      image: electronicPreview,
      shortDesc: "Decoupled full-stack e-commerce system with admin panel, real-time sync, and PDF invoicing.",
      longDesc: "Electronic Shop is a modern web application featuring a responsive frontend in Nuxt 3 / Vue 3 and a robust backend built on FeathersJS 5 with Prisma ORM over PostgreSQL. Features Redis caching, real-time Socket.io communication, and PDF invoice generation.",
      philosophy: "Decoupled Clean Architecture designed for high-performance inventory management, real-time updates, and scalable e-commerce workflows.",
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
  },
  project3: {
    es: {
      id: "project3",
      title: "Sistema Veterinario (MedVet)",
      tag: "Gestión Clínica & CRM",
      category: "erp",
      isFlagship: false,
      image: vetPreview,
      shortDesc: "Plataforma de administración para clínicas veterinarias, control de citas, historias médicas y pacientes.",
      longDesc: "Un CRM integral diseñado para clínicas y consultorios veterinarios. Permite llevar el registro clínico detallado de mascotas, calendarizar citas de vacunas y cirugías, gestionar el inventario de medicamentos y administrar la facturación y fichas de clientes.",
      philosophy: "Unificar el historial médico y la administración clínica en una única interfaz intuitiva para mejorar el cuidado del paciente y la gestión del negocio.",
      liveUrl: "https://medvet-system.vercel.app/",
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
      title: "Veterinary System (MedVet)",
      tag: "Clinic Management & CRM",
      category: "erp",
      isFlagship: false,
      image: vetPreview,
      shortDesc: "Clinic administration platform for pet clinics, handling appointments, medical records, and patients.",
      longDesc: "A comprehensive CRM designed for veterinary clinics. Manages detailed pet medical records, schedules vaccine and surgery appointments, monitors drug store inventory, and automates client invoicing.",
      philosophy: "Unify medical history and clinical business administration into a single, intuitive interface to improve patient care.",
      liveUrl: "https://medvet-system.vercel.app/",
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
  project2: {
    es: {
      id: "project2",
      title: "Servicio de Estacionamiento (Valet Parking)",
      tag: "Sistema en Tiempo Real",
      category: "erp",
      isFlagship: false,
      image: valetPreview,
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
      tag: "Real-Time Management",
      category: "erp",
      isFlagship: false,
      image: valetPreview,
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
  project1: {
    es: {
      id: "project1",
      title: "U.E. Colegio \"Santa Luisa\" - Portal Web",
      tag: "Portal Web Institucional",
      category: "web",
      isFlagship: false,
      image: colegioPreview,
      shortDesc: "Plataforma web institucional con Landing Page pública y CRM Administrativo optimizado.",
      longDesc: "Este proyecto consiste en una plataforma web institucional que incluye una Landing Page pública y un Panel de Administración (CRM Administrativo) diseñado para gestionar la presencia digital del centro educativo, noticias, comunicados y admisiones.",
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
      title: "Santa Luisa School - Web Portal",
      tag: "Institutional Web Portal",
      category: "web",
      isFlagship: false,
      image: colegioPreview,
      shortDesc: "Institutional web platform featuring a public landing page and optimized administrative CRM.",
      longDesc: "This project consists of an institutional web platform including a public Landing Page and a private Administration Panel (Administrative CRM) designed to manage the school's digital presence, announcements, and admissions.",
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
  }
};

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<"overview" | "modules" | "architecture" | "security">("overview");
  const [portfolioFilter, setPortfolioFilter] = useState<"all" | "erp" | "ecommerce" | "web">("all");
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
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
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

  // Language application to html document
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
      <header className="fixed top-0 left-0 right-0 z-50 pt-3 pb-2 transition-all duration-300 pointer-events-none">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pointer-events-auto">
          <div
            className={`w-full rounded-full px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between transition-all duration-300 ${isScrolled
                ? "bg-white/85 dark:bg-slate-900/85 backdrop-blur-xl border border-slate-200/80 dark:border-white/10 shadow-xl shadow-indigo-500/5 dark:shadow-cyan-500/10"
                : "bg-white/60 dark:bg-slate-950/50 backdrop-blur-lg border border-slate-200/50 dark:border-white/5"
              }`}
          >
            <a href="#home" className="group flex items-center gap-2 flex-shrink-0">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <img src="/favicon.png" alt="Logo" className="h-6 w-6 rounded-full transition-transform duration-300 hover:scale-110 active:scale-95" />
              <span className="text-base sm:text-lg lg:text-xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-indigo-900 to-cyan-700 dark:from-white dark:via-cyan-300 dark:to-indigo-300 bg-clip-text text-transparent whitespace-nowrap">
                José Vásquez
              </span>
            </a>

            {/* Desktop Nav Links (Visible only from lg: 1024px onwards) */}
            <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
              <a href="#home" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.nav.home}
              </a>
              <a href="#services" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.nav.services}
              </a>
              <a href="#portfolio" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.nav.portfolio}
              </a>
              <a href="#contact" className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors whitespace-nowrap">
                {t.nav.contact}
              </a>
            </nav>

            {/* Right Action Controls (Desktop lg:) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* CV Button */}
              <button
                onClick={() => setIsCvModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 dark:bg-cyan-500/15 text-xs font-bold text-cyan-700 dark:text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all cursor-pointer shadow-sm whitespace-nowrap"
                title={t.cv.button}
              >
                <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>{t.cv.button}</span>
              </button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100/80 dark:bg-slate-800/60 text-xs font-bold text-slate-700 dark:text-slate-200 hover:border-cyan-500/50 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all cursor-pointer shadow-sm whitespace-nowrap"
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
                className="px-4 xl:px-5 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 dark:from-cyan-500 dark:to-indigo-600 text-white font-bold text-xs shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all whitespace-nowrap"
              >
                {t.nav.cta}
              </a>
            </div>

            {/* Mobile & Tablet Portrait Menu Toggle (< lg) */}
            <div className="flex items-center gap-2 sm:gap-2.5 lg:hidden">
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

          {/* Mobile & Tablet Dropdown Menu Card */}
          {mobileMenuOpen && (
            <div className="lg:hidden w-full mt-2 p-5 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-white/10 backdrop-blur-2xl shadow-2xl flex flex-col gap-3 transition-all animate-in fade-in slide-in-from-top-4">
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
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 sm:pt-32 md:pt-36 lg:pt-36 pb-16 lg:pb-24 overflow-hidden scroll-mt-28">
        {/* Ambient Blur Background Spheres */}
        <div className="ambient-glow top-[12%] left-[8%] w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-indigo-500/15 dark:bg-indigo-600/20" />
        <div className="ambient-glow bottom-[12%] right-[5%] w-[300px] sm:w-[460px] h-[300px] sm:h-[460px] bg-cyan-500/15 dark:bg-cyan-500/20" />
        <div className="ambient-glow top-[50%] left-[45%] w-[220px] sm:w-[350px] h-[220px] sm:h-[350px] bg-emerald-500/10 dark:bg-emerald-500/15" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 grid gap-8 sm:gap-12 items-center lg:grid-cols-[1.15fr_0.85fr]">
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
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-500 dark:to-indigo-600 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all text-center"
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
            <div className="relative w-[260px] h-[260px] sm:w-[330px] sm:h-[330px] md:w-[390px] md:h-[390px] lg:w-[460px] lg:h-[460px] flex items-center justify-center">

              {/* Outer Rotating Dashed Ring */}
              <div className="organic-circle-bg" />

              {/* Floating Glass Badges */}
              {/* 1. Design Badge */}
              <div className="absolute top-[8%] left-[-2%] sm:left-[-4%] lg:left-[-6%] z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 rounded-2xl bg-cyan-500/15 dark:bg-cyan-950/70 border border-cyan-400/40 dark:border-cyan-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-cyan-500/20 hero-card-anim delay-0 text-center px-1">
                <span className="text-[8px] sm:text-[10px] font-black text-cyan-600 dark:text-cyan-300 uppercase tracking-wider">Design</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">UI · UX</span>
              </div>

              {/* 2. Code Badge */}
              <div className="absolute top-[-2%] right-[2%] sm:right-[4%] lg:right-[4%] z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-amber-500/15 dark:bg-amber-950/70 border border-amber-400/40 dark:border-amber-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-amber-500/20 hero-card-anim delay-200 text-center">
                <span className="text-[8px] sm:text-[10px] font-black text-amber-600 dark:text-amber-400 uppercase tracking-wider">Code</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">React / Vue</span>
              </div>

              {/* 3. DevOps Badge */}
              <div className="absolute bottom-[18%] left-[-4%] sm:left-[-6%] lg:left-[-8%] z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-purple-500/15 dark:bg-purple-950/70 border border-purple-400/40 dark:border-purple-400/50 backdrop-blur-xl flex flex-col items-center justify-center shadow-lg shadow-purple-500/20 hero-card-anim delay-400 text-center">
                <span className="text-[8px] sm:text-[10px] font-black text-purple-600 dark:text-purple-300 uppercase tracking-wider">DevOps</span>
                <span className="text-[9px] sm:text-xs font-bold text-slate-900 dark:text-white leading-tight">Cloud / Backend</span>
              </div>

              {/* 4. Live Dev Status Badge */}
              <div className="absolute bottom-[6%] right-[2%] sm:right-[4%] lg:right-[4%] z-20 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-emerald-500/40 dark:border-emerald-400/40 backdrop-blur-xl flex items-center gap-2 shadow-xl shadow-emerald-500/20">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] sm:text-xs font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">100% Dev</span>
              </div>

              {/* Main Circular Profile Image with Glowing Border */}
              <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[310px] md:h-[310px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden border-4 sm:border-[6px] border-white/80 dark:border-slate-800 shadow-2xl z-10 organic-profile-frame">
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
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label={lang === "es" ? "Volver arriba" : "Back to top"}
          title={lang === "es" ? "Volver arriba" : "Back to top"}
          className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 inline-flex items-center justify-center rounded-full p-2.5 sm:p-3.5 backdrop-blur-md shadow-lg transition-all duration-300 cursor-pointer border ${showBackToTop
              ? "opacity-35 hover:opacity-100 active:opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 translate-y-4 pointer-events-none"
            } bg-slate-200/50 dark:bg-slate-900/50 text-slate-700 dark:text-cyan-300 border-slate-300/50 dark:border-white/15 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-indigo-600 hover:text-white hover:border-cyan-400 hover:shadow-cyan-500/30 hover:scale-110 hover:-translate-y-1 active:bg-gradient-to-r active:from-cyan-400 active:to-emerald-400 active:text-slate-950 active:scale-95`}
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </section>

      {/* My Advantage & Skills Section */}
      <section className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 relative overflow-hidden scroll-mt-24">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[20%] right-[10%] w-[320px] h-[320px] bg-indigo-500/10 dark:bg-indigo-500/15" />
        <div className="ambient-glow bottom-[15%] left-[10%] w-[320px] h-[320px] bg-cyan-500/10 dark:bg-cyan-500/15" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase mb-4">
                <Cpu className="w-3.5 h-3.5" />
                <span>{t.advantage.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-pre-line mb-5">
                {t.advantage.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                {t.advantage.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-cyan-500/10 to-transparent border border-indigo-500/20 dark:border-indigo-400/30 flex flex-col justify-center shadow-lg backdrop-blur-md">
                  <span className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 bg-clip-text text-transparent">{t.advantage.years}</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider mt-1">{t.advantage.yearsText}</span>
                </div>
                <div className="p-5 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-transparent border border-emerald-500/20 dark:border-emerald-400/30 flex flex-col justify-center shadow-lg backdrop-blur-md">
                  <span className="text-4xl sm:text-5xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                  <span className="text-[11px] text-slate-600 dark:text-slate-300 font-bold uppercase tracking-wider mt-1">{t.advantage.satisfaction}</span>
                </div>
              </div>
            </div>

            {/* Technical Capabilities Matrix */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.advantage.categories.map((cat, i) => {
                const icons = [
                  <Code className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
                  <Server className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
                  <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
                  <ShieldCheck className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                ];
                return (
                  <div
                    key={i}
                    className="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between animated-gradient-border backdrop-blur-md group"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                        {icons[i % icons.length]}
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white mb-1.5">{cat.title}</h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-4">{cat.desc}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 dark:border-white/5">
                      {cat.skills.map((skill, si) => (
                        <span key={si} className="text-[10.5px] font-semibold px-2 py-0.5 rounded-md bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#07080c] relative overflow-hidden scroll-mt-24">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[25%] right-[5%] w-[260px] h-[260px] bg-cyan-500/15 dark:bg-cyan-500/20" />
        <div className="ambient-glow bottom-[15%] left-[5%] w-[280px] h-[280px] bg-indigo-500/15 dark:bg-indigo-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-cyan-800 dark:text-cyan-300 uppercase mb-3">
              <span>{t.services.title.split('\n')[0]}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white whitespace-pre-line mb-4">
              {t.services.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              {t.services.subtitle}
            </p>

            {/* Filter Pill Buttons */}
            <div className="flex flex-wrap justify-center gap-2.5 mt-8">
              <button
                onClick={() => setServiceFilter("all")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${serviceFilter === "all"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
              >
                All
              </button>
              <button
                onClick={() => setServiceFilter("development")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${serviceFilter === "development"
                    ? "bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-400 dark:to-emerald-400 text-white dark:text-slate-950 shadow-md shadow-cyan-500/20"
                    : "bg-white/80 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
              >
                Development
              </button>
              <button
                onClick={() => setServiceFilter("design")}
                className={`px-5 py-2.5 rounded-full text-xs font-extrabold transition-all cursor-pointer shadow-sm ${serviceFilter === "design"
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
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 dark:bg-cyan-400/10 flex items-center justify-center text-indigo-600 dark:text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                    <Code className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {t.services.webDev.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {t.services.webDev.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-indigo-700 dark:text-cyan-400">01 · FRONTEND</span>
                  <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )}

            {/* Service 2: UI/UX */}
            {(serviceFilter === "all" || serviceFilter === "design") && (
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 dark:hover:border-purple-400/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group backdrop-blur-md animated-gradient-border flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-purple-400/10 flex items-center justify-center text-cyan-600 dark:text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                    <Palette className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {t.services.uiux.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {t.services.uiux.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-cyan-700 dark:text-purple-400">02 · PROTOTYPING</span>
                  <ChevronRight className="w-4 h-4 text-cyan-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )}

            {/* Service 3: Backend */}
            {(serviceFilter === "all" || serviceFilter === "development") && (
              <div className="p-8 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-emerald-500/40 dark:hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 group backdrop-blur-md animated-gradient-border flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                    <Server className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-3">
                    {t.services.landing.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                    {t.services.landing.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-700 dark:text-emerald-400">03 · ARCHITECTURE</span>
                  <ChevronRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-slate-950/50 relative overflow-hidden scroll-mt-24">
        {/* Ambient Glows */}
        <div className="ambient-glow top-[20%] left-[8%] w-[260px] h-[260px] bg-indigo-500/15 dark:bg-indigo-500/20" />
        <div className="ambient-glow bottom-[15%] right-[8%] w-[310px] h-[310px] bg-cyan-500/15 dark:bg-cyan-500/20" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 z-10 relative">

          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 dark:border-indigo-400/30 bg-indigo-500/10 text-[10px] sm:text-xs font-extrabold tracking-wider text-indigo-700 dark:text-indigo-300 uppercase mb-3">
              <span>{t.portfolio.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {(["all", "erp", "ecommerce", "web"] as const).map((catKey) => {
              const isActive = portfolioFilter === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setPortfolioFilter(catKey)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border ${
                    isActive
                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-950 border-slate-900 dark:border-white shadow-md shadow-indigo-500/10 scale-105"
                      : "bg-white/70 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-cyan-500/40 hover:text-cyan-600 dark:hover:text-cyan-400"
                  }`}
                >
                  {t.portfolio.categories[catKey]}
                </button>
              );
            })}
          </div>

          {/* Flagship Hero Card: U.E. Colegio Santa Luisa - Sistema de Gestión Escolar */}
          {(portfolioFilter === "all" || portfolioFilter === "erp") && (
            <div className="mb-12 rounded-3xl border-2 border-cyan-500/30 dark:border-cyan-400/30 bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl p-6 sm:p-8 lg:p-10 shadow-2xl shadow-cyan-500/10 relative overflow-hidden group">
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                {/* Left Column: Interactive Screenshot & Status */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-xl group-hover:border-cyan-500/50 transition-all">
                    <img
                      src={schoolManagementPreview}
                      alt={PROJECT_DETAILS.school_management[lang].title}
                      className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                    />
                    {/* Live Badge Overlay */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-extrabold text-emerald-400 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="w-2 h-2 rounded-full bg-emerald-400 absolute left-3.5" />
                      <span className="pl-2">{t.portfolio.liveBadge} (Vercel)</span>
                    </div>

                    {/* School badge */}
                    <div className="absolute bottom-3.5 right-3.5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/15 text-[11px] font-bold text-slate-200 shadow-lg">
                      <img src={schoolLogo} alt="Logo Colegio Santa Luisa" className="w-4 h-4 object-contain" />
                      <span>U.E. Colegio Santa Luisa</span>
                    </div>
                  </div>

                  {/* Architecture quick strip */}
                  <div className="hidden sm:grid grid-cols-3 gap-2.5 text-center">
                    <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Frontend</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Nuxt 4 + Vue 3</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Backend</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">Feathers 5 · Fly.io</div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-950/60 border border-slate-200 dark:border-white/5">
                      <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400">Database</div>
                      <div className="text-xs font-bold text-slate-800 dark:text-slate-200">PostgreSQL + Knex</div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Information & Actions */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-600 dark:text-amber-400 text-[10px] font-black tracking-wider uppercase">
                        ⭐ {t.portfolio.flagshipBadge}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase">
                        {PROJECT_DETAILS.school_management[lang].tag}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
                      {PROJECT_DETAILS.school_management[lang].title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {PROJECT_DETAILS.school_management[lang].shortDesc}
                    </p>

                    {/* Operational Highlights Pills */}
                    <div className="space-y-2 mb-5">
                      <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>{lang === "es" ? "Expediente Digital SIS & Matrícula Escolar" : "Digital SIS Student Dossiers & Enrollment"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>{lang === "es" ? "Libro de Calificaciones MPPE & Boletines PDF" : "MPPE Gradebook & PDF Report Cards"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>{lang === "es" ? "Asistencia Diaria por Aula y Horarios Semanales" : "Classroom Attendance & Weekly Timetable"}</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                        <span>{lang === "es" ? "Cobranzas de Colegiaturas & Seguridad 2FA (TOTP)" : "Tuition Billing & 2FA (TOTP) Security"}</span>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {["Nuxt 4", "Vue 3", "Feathers.js 5", "PostgreSQL", "Knex.js", "Tailwind CSS v4", "2FA / TOTP", "Playwright"].map((tech, idx) => (
                        <span key={idx} className="px-2.5 py-0.5 text-[11px] font-bold rounded-md bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Primary & Secondary Actions */}
                  <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                    <a
                      href="https://gestionescolarcolegiosantaluisa.vercel.app/auth/login"
                      target="_blank"
                      rel="noreferrer"
                      className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-black text-xs shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>{lang === "es" ? "Probar Sistema en Vivo" : "Try Live Demo"}</span>
                    </a>
                    <button
                      onClick={() => {
                        setSelectedProject(PROJECT_DETAILS.school_management[lang]);
                        setProjectModalTab("overview");
                      }}
                      className="w-full sm:w-auto px-5 py-3.5 rounded-2xl border border-slate-300 dark:border-white/15 bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-extrabold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer hover:scale-[1.02]"
                    >
                      <FileText className="w-3.5 h-3.5 text-cyan-500" />
                      <span>{t.portfolio.viewProject}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECT_KEYS.filter((key) => {
              const proj = PROJECT_DETAILS[key][lang];
              if (proj.isFlagship) {
                return false;
              }
              if (portfolioFilter === "all") return true;
              return proj.category === portfolioFilter;
            }).map((key) => {
              const project = PROJECT_DETAILS[key][lang];
              return (
                <div
                  key={key}
                  className="group p-6 rounded-3xl bg-white/80 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/10 hover:border-cyan-500/40 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between h-full backdrop-blur-md animated-gradient-border"
                >
                  <div>
                    <div className="aspect-video w-full rounded-2xl bg-slate-100 dark:bg-slate-950 mb-5 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-white/10 relative group-hover:scale-[1.02] transition-transform">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="inline-flex px-3 py-1 rounded-full bg-cyan-500/10 dark:bg-cyan-400/15 border border-cyan-500/30 dark:border-cyan-400/30 text-cyan-700 dark:text-cyan-300 text-[10px] font-extrabold tracking-wider uppercase mb-3 max-w-full truncate">
                      {project.tag}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.techs.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                          {tech}
                        </span>
                      ))}
                      {project.techs.length > 3 && (
                        <span className="px-2 py-0.5 text-[10px] font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500">
                          +{project.techs.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between gap-2">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setProjectModalTab("overview");
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-extrabold text-indigo-600 dark:text-cyan-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-300 transition-colors cursor-pointer bg-transparent border-0"
                    >
                      <span>{t.portfolio.viewProject}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                        title={t.portfolio.liveDemo}
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-24 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#07080c] relative overflow-hidden scroll-mt-24">
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
                    <a href="tel:+584265217116" className="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                      +58 426 521 7116
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <a
                    href="https://wa.me/584265217116"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm transition-all shadow-lg shadow-emerald-500/20 hover:scale-105"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp Directo
                  </a>
                  <a
                    href="https://wa.me/584265217116?text=Hola%20José%2C%20quiero%20consultar%20sobre%20un%20proyecto"
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
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 dark:from-cyan-500 dark:to-indigo-600 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
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
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href="https://gitlab.com/jvasquez978" target="_blank" rel="noreferrer" aria-label="GitLab" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="m23.955 13.587-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.86 0L16.42 9.447H7.579L4.914 1.263c-.135-.417-.724-.417-.86 0L1.386 9.452.044 13.587c-.153.47.014 1.011.412 1.299L12 23.361l11.544-8.475c.398-.288.565-.828.411-1.299" />
              </svg>
            </a>
            <a href="https://x.com/JoseAntonio978" target="_blank" rel="noreferrer" aria-label="X" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/jav_978/" target="_blank" rel="noreferrer" aria-label="Instagram" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-vasquez978" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-full border border-slate-200 dark:border-white/10 text-slate-600 dark:text-slate-300 hover:text-cyan-500 dark:hover:text-cyan-400 hover:border-cyan-500/40 transition-all">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 shadow-2xl backdrop-blur-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Modal Header */}
            <div className="shrink-0 flex items-start justify-between border-b border-slate-200/80 dark:border-white/10 p-6 sm:p-8 pb-4">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 bg-cyan-500/10 dark:bg-cyan-400/15 px-3 py-1 rounded-full border border-cyan-500/20">
                    {selectedProject.tag}
                  </span>
                  {selectedProject.isFlagship && (
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                      ⭐ {t.portfolio.flagshipBadge}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{selectedProject.title}</h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0 ml-4"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Tabs Navigation */}
            <div className="shrink-0 px-6 sm:px-8 py-3 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-slate-950/40">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
                <button
                  type="button"
                  onClick={() => setProjectModalTab("overview")}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    projectModalTab === "overview"
                      ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>{t.portfolio.modalTabs.overview}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectModalTab("modules")}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    projectModalTab === "modules"
                      ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <Layers className="w-4 h-4 shrink-0" />
                  <span>{t.portfolio.modalTabs.modules}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectModalTab("architecture")}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    projectModalTab === "architecture"
                      ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <Terminal className="w-4 h-4 shrink-0" />
                  <span>{t.portfolio.modalTabs.architecture}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setProjectModalTab("security")}
                  className={`shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                    projectModalTab === "security"
                      ? "bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40 shadow-sm"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/50 border border-transparent"
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>{t.portfolio.modalTabs.security}</span>
                </button>
              </div>
            </div>

            {/* Modal Body: Scrollable Tab Content Container */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 modal-scrollbar min-h-0">
              {projectModalTab === "overview" && (
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 items-start">
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

                    {/* Deployed Environments / Endpoints */}
                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-white/10 space-y-3">
                      <h4 className="text-xs font-black uppercase tracking-wider text-cyan-600 dark:text-cyan-400">
                        {lang === "es" ? "Entornos Desplegados" : "Deployed Environments"}
                      </h4>
                      <div className="space-y-2 text-xs">
                        {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                          <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                              <span className="font-bold">Frontend (Vercel):</span>
                            </div>
                            <a
                              href={selectedProject.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-cyan-600 dark:text-cyan-400 hover:underline truncate font-mono text-[11px] max-w-[200px] sm:max-w-[280px]"
                            >
                              {selectedProject.liveUrl}
                            </a>
                          </div>
                        )}
                        {selectedProject.backendUrl && (
                          <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5">
                            <div className="flex items-center gap-2">
                              <span className="w-2 h-2 rounded-full bg-indigo-400" />
                              <span className="font-bold">Backend API (Fly.io):</span>
                            </div>
                            <a
                              href={selectedProject.backendUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-indigo-600 dark:text-indigo-400 hover:underline truncate font-mono text-[11px] max-w-[200px] sm:max-w-[280px]"
                            >
                              {selectedProject.backendUrl}
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Preview Image */}
                    <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-white/15 bg-slate-950 shadow-md">
                      <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-auto object-cover" />
                    </div>

                    {/* Core Tech Stack */}
                    <div>
                      <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                        {lang === "es" ? "Stack Tecnológico Principal" : "Core Tech Stack"}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {selectedProject.techs.map((tech, index) => (
                          <span key={index} className="px-2.5 py-1 text-xs font-bold rounded-lg bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {projectModalTab === "modules" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {lang === "es" ? "Módulos y Capacidades Operativas" : "Operational Modules & Features"}
                    </h4>
                    <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      {selectedProject.features.length} {lang === "es" ? "módulos verificados" : "verified modules"}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {selectedProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/10 flex items-start gap-3 hover:border-cyan-500/30 transition-colors"
                      >
                        <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                          <Check className="w-4 h-4" />
                        </div>
                        <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {projectModalTab === "architecture" && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                      {lang === "es" ? "Estructura de Directorios & Responsabilidades" : "Directory Architecture & Responsibilities"}
                    </h4>
                    <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
                      Clean Architecture
                    </span>
                  </div>
                  <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50/70 dark:bg-slate-950/70 p-5 space-y-3 font-mono text-xs">
                    {Object.entries(selectedProject.architecture).map(([path, desc], index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-slate-200/50 dark:border-white/5 pb-2.5 last:border-0 last:pb-0 gap-1 sm:gap-4">
                        <span className="text-cyan-700 dark:text-cyan-400 font-bold tracking-tight">{path}</span>
                        <span className="text-slate-600 dark:text-slate-300 font-sans text-xs sm:text-right">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {projectModalTab === "security" && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      {lang === "es" ? "Arquitectura de Seguridad y Políticas" : "Security Architecture & Policies"}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedProject.security.map((sec, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/80 dark:border-white/10 flex items-start gap-3"
                        >
                          <div className="p-1.5 rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5">
                            <ShieldCheck className="w-4 h-4" />
                          </div>
                          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {sec}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3">
                      {lang === "es" ? "Ecosistema Tecnológico Completo" : "Full Technology Ecosystem"}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techs.map((tech, index) => (
                        <span key={index} className="px-3 py-1.5 text-xs font-bold rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-white/10 text-slate-800 dark:text-slate-200 shadow-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer / Actions */}
            <div className="shrink-0 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-200/80 dark:border-white/10 p-4 sm:p-6 bg-slate-50/70 dark:bg-slate-950/40">
              <div className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block font-medium">
                {selectedProject.isFlagship && "★ " + (lang === "es" ? "Sistema Institucional en Producción Activa" : "Institutional System in Active Production")}
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-bold text-xs hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-center"
                >
                  {lang === "es" ? "Cerrar" : "Close"}
                </button>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-cyan-500 to-emerald-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-extrabold text-xs shadow-lg shadow-cyan-500/20 text-center flex items-center justify-center gap-1.5 hover:scale-105 transition-all cursor-pointer"
                  >
                    <span>{lang === "es" ? "Ver Demo en Vivo" : "View Live Demo"}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Curriculum Vitae Modal */}
      {isCvModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xl transition-opacity duration-300"
          onClick={() => setIsCvModalOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-slate-200 dark:border-white/15 bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-slate-100 shadow-2xl backdrop-blur-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >

            {/* Header */}
            <div className="shrink-0 flex items-start justify-between border-b border-slate-200/80 dark:border-white/10 p-6 sm:p-8 pb-4">
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
                className="p-2 rounded-full border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer shrink-0 ml-4"
                aria-label="Close CV Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Top Toolbar / Action Bar */}
            <div className="shrink-0 px-6 sm:px-8 py-3.5 border-b border-slate-200/80 dark:border-white/10 bg-slate-50/70 dark:bg-slate-950/40 flex flex-wrap items-center justify-between gap-3">
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
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 modal-scrollbar min-h-0">

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

              {/* Work Experience Timeline */}
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
