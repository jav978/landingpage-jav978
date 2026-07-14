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
  Monitor,
  ArrowUp,
  Server
} from "lucide-react";
import heroImg from "./assets/hero.png";
import colegioPreview from "./assets/colegio_preview.png";
import valetPreview from "./assets/valet_preview.png";
import vetPreview from "./assets/vet_preview.png";

// Translations dictionary
const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      portfolio: "Portafolio",
      contact: "Contacto",
      cta: "Contrátame"
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
        desc: "Sitios y aplicaciones web modernas con React, TypeScript y código limpio y mantenible."
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
        tag: "Landing Page"
      },
      project2: {
        title: "Valet Parking",
        desc: "Sistema web de gestión en tiempo real para servicios de aparcamiento y control de vehículos.",
        tag: "Sistema de Gestión"
      },
      project3: {
        title: "Sistema Veterinario",
        desc: "Plataforma de administración para clínicas veterinarias, control de citas, historias médicas y pacientes.",
        tag: "Sistema de Gestión"
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
      contact: "Contact",
      cta: "Hire me"
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
        tag: "Landing Page"
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
      title: "Valet Parking System",
      tag: "Sistema de Gestión",
      shortDesc: "Sistema web de gestión en tiempo real para servicios de aparcamiento y control de vehículos.",
      longDesc: "Un sistema web en tiempo real desarrollado para agilizar y digitalizar las operaciones de valet parking. Permite a los operadores registrar el ingreso de vehículos, gestionar tarifas dinámicas, enviar alertas de retiro automático y coordinar a los choferes en tiempo real.",
      philosophy: "Maximizar la eficiencia operativa reduciendo tiempos de espera y automatizando el cálculo de costos con total transparencia para el cliente.",
      liveUrl: "#",
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
      liveUrl: "#",
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
  }
};

function App() {
  const [lang, setLang] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [serviceFilter, setServiceFilter] = useState<"all" | "development" | "design">("all");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      // Reemplaza TU_FORM_ID con el ID de formulario que te dio Formspree (ej. mqkvzprz)
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
    <div className="min-h-screen bg-slate-50 dark:bg-neutral-950 text-slate-900 dark:text-neutral-100 font-sans selection:bg-neutral-200 dark:selection:bg-neutral-800 selection:text-neutral-900 dark:selection:text-white transition-colors duration-150 overflow-x-hidden">
      
      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          isScrolled
            ? "bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-slate-200 dark:border-neutral-800/50 py-4"
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <a href="#home" className="text-xl font-bold tracking-tight text-slate-900 dark:text-white hover:opacity-90 transition-opacity">
            José Vásquez
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              {t.nav.home}
            </a>
            <a href="#services" className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              {t.nav.services}
            </a>
            <a href="#portfolio" className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              {t.nav.portfolio}
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors">
              {t.nav.contact}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            {/* Language Selector Button */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-xs font-semibold text-slate-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-neutral-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === "es" ? "ES" : "EN"}</span>
            </button>

            {/* Dark/Light mode toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-slate-700 dark:text-neutral-300 hover:bg-slate-200 dark:hover:bg-neutral-800 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* CTA Header Button */}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all shadow-sm"
            >
              {t.nav.cta}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-xs font-semibold text-slate-700 dark:text-neutral-300"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === "es" ? "ES" : "EN"}</span>
            </button>

            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-slate-700 dark:text-neutral-300"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-neutral-950 border-b border-slate-200 dark:border-neutral-850 px-6 py-6 flex flex-col gap-4 shadow-xl">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.home}
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.services}
            </a>
            <a
              href="#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.portfolio}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black text-center text-sm font-semibold hover:bg-slate-800 dark:hover:bg-neutral-200 transition-all mt-2"
            >
              {t.nav.cta}
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="ambient-glow top-[15%] left-[10%] w-[320px] h-[320px] bg-slate-300/30 dark:bg-neutral-500/25" />
        <div className="ambient-glow bottom-[15%] right-[10%] w-[380px] h-[380px] bg-slate-300/30 dark:bg-neutral-500/25" />

        <div className="max-w-6xl mx-auto px-6 z-10 grid gap-12 items-center lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-center lg:text-left lg:max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-[10px] md:text-xs font-semibold tracking-wider text-slate-600 dark:text-neutral-400 uppercase mb-8">
              <Sparkles className="w-3.5 h-3.5 text-slate-500 dark:text-neutral-455" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white max-w-3xl mx-auto lg:mx-0 leading-tight mb-8">
              {t.hero.title}
              <span className="block underline decoration-slate-300 dark:decoration-neutral-700 underline-offset-8">
                {t.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base md:text-lg text-slate-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-12">
              {t.hero.subtitle}
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-16">
              <a
                href="#contact"
                className="px-8 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-slate-800 dark:hover:bg-neutral-200 hover:scale-105 active:scale-95 transition-all shadow-md w-full sm:w-auto text-center"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#services"
                className="px-8 py-3.5 rounded-full bg-slate-100 dark:bg-neutral-900 border border-slate-200 dark:border-neutral-800 text-slate-700 dark:text-neutral-300 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-neutral-800 hover:text-slate-900 dark:hover:text-white transition-all w-full sm:w-auto text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[460px] h-[460px] md:w-[560px] md:h-[560px] flex items-center justify-center">
              {/* Circular backgrounds from Elito */}
              <div className="organic-circle-bg" />
              
              {/* Outer decorative items / tech badges styled like original but with new text */}
              <div className="absolute top-[12%] left-[-4%] z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#00c8ff]/10 border border-[#00c8ff]/45 backdrop-blur-md flex flex-col items-center justify-center shadow-lg animate-bounce text-center px-1">
                <span className="text-[8px] md:text-[10px] font-black text-[#00c8ff] uppercase tracking-wider">Design</span>
                <span className="text-[9px] md:text-xs font-bold text-white dark:text-white leading-tight">UI · UX</span>
              </div>
              <div className="absolute top-[-3%] right-[12%] z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#ff9f00]/10 border border-[#ff9f00]/45 backdrop-blur-md flex flex-col items-center justify-center shadow-lg animate-pulse text-center px-1">
                <span className="text-[8px] md:text-[10px] font-black text-[#ff9f00] uppercase tracking-wider">Code</span>
                <span className="text-[9px] md:text-xs font-bold text-white dark:text-white leading-tight">React</span>
              </div>
              <div className="absolute bottom-[22%] left-[-6%] z-20 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/45 backdrop-blur-md flex flex-col items-center justify-center shadow-lg animate-pulse text-center px-1" style={{ animationDelay: '1s' }}>
                <span className="text-[8px] md:text-[10px] font-black text-[#ff3b30] uppercase tracking-wider">DevOps</span>
                <span className="text-[9px] md:text-xs font-bold text-white dark:text-white leading-tight">Cloud</span>
              </div>
              <div className="absolute bottom-[8%] right-[8%] z-20 px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-2xl bg-white/95 dark:bg-neutral-900/95 border border-slate-200 dark:border-neutral-800 backdrop-blur-md flex items-center gap-1.5 sm:gap-2.5 shadow-2xl">
                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-[10px] sm:text-xs font-black text-emerald-500 dark:text-emerald-400 uppercase tracking-wider">80% Dev</span>
              </div>

              {/* Main Circular Profile Image - adjusted for showing more body and scaled larger by 40% */}
              <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[490px] lg:h-[490px] rounded-full overflow-hidden border-[6px] border-slate-200 dark:border-neutral-900 shadow-2xl z-10">
                <img
                  src={heroImg}
                  alt="José Vásquez"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>
          </div>
        </div>

        <a
          href="#home"
          aria-label="Back to Top"
          className={`fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-neutral-850 bg-emerald-400 dark:bg-emerald-500 px-4 py-3 text-sm font-semibold text-black shadow-2xl shadow-black/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-300 ${isScrolled ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}`}
        >
          <ArrowUp className="w-5 h-5" />
        </a>
      </section>

      {/* My Advantage Section (Elito Style) */}
      <section className="py-24 border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-100 dark:bg-neutral-900/50 text-[10px] md:text-xs font-semibold tracking-wider text-slate-600 dark:text-neutral-400 uppercase mb-6">
                <span>My Advantage</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                My Skills &<br />Advantage
              </h2>
              <p className="text-slate-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-8">
                He trabajado con diversas herramientas de diseño y desarrollo web para lograr entregar productos excelentes y eficientes.
              </p>
              
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-850 flex items-center gap-6">
                <span className="text-5xl font-black text-emerald-500 dark:text-emerald-400">04</span>
                <div className="text-xs text-slate-500 dark:text-neutral-400 font-medium">
                  AÑOS DE EXPERIENCIA<br />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">100% Clientes Satisfechos</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { name: "React / Next.js", value: "95%" },
                { name: "Vue.js", value: "85%" },
                { name: "Tailwind CSS", value: "95%" },
                { name: "Backend (Node.js)", value: "90%" },
                { name: "Docker", value: "80%" },
                { name: "DevOps / CI/CD", value: "90%" }
              ].map((skill, i) => (
                <div key={i} className="p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/30 border border-slate-200 dark:border-neutral-900 hover:border-slate-300 dark:hover:border-neutral-850 hover:bg-slate-100 dark:hover:bg-neutral-900/50 transition-all text-center flex flex-col items-center justify-center gap-3 animated-gradient-border">
                  <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 dark:border-emerald-400/20 border-t-emerald-500 dark:border-t-emerald-400 flex items-center justify-center font-bold text-slate-800 dark:text-white text-sm">
                    {skill.value}
                  </div>
                  <span className="text-xs font-semibold text-slate-700 dark:text-neutral-300">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 relative overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="ambient-glow top-[30%] right-[5%] w-[250px] h-[250px] bg-slate-300/30 dark:bg-neutral-500/25" />
        <div className="ambient-glow bottom-[10%] left-[5%] w-[280px] h-[280px] bg-slate-300/30 dark:bg-neutral-500/25" />

        <div className="max-w-6xl mx-auto px-6 z-10 relative">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white whitespace-pre-line mb-6">
              Popular Services
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed">
              {t.services.subtitle}
            </p>

            {/* Popular Services Filters */}
            <div className="flex justify-center gap-3 mt-8">
              <button
                onClick={() => setServiceFilter("all")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === "all"
                    ? "bg-emerald-400 dark:bg-emerald-500 text-neutral-950 shadow-md"
                    : "bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setServiceFilter("development")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === "development"
                    ? "bg-emerald-400 dark:bg-emerald-500 text-neutral-950 shadow-md"
                    : "bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800"
                }`}
              >
                Development
              </button>
              <button
                onClick={() => setServiceFilter("design")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  serviceFilter === "design"
                    ? "bg-emerald-400 dark:bg-emerald-500 text-neutral-950 shadow-md"
                    : "bg-slate-50 dark:bg-neutral-900 text-slate-700 dark:text-neutral-300 border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800"
                }`}
              >
                Design
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 justify-center">
            
            {/* Service 1: Web Dev (Development) */}
            {(serviceFilter === "all" || serviceFilter === "development") && (
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-900 hover:border-slate-300 dark:hover:border-neutral-850 hover:bg-slate-100 dark:hover:bg-neutral-900/60 transition-all duration-300 group backdrop-blur-sm animated-gradient-border">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-neutral-950 flex items-center justify-center border border-slate-200 dark:border-neutral-850 mb-8 group-hover:scale-110 transition-transform">
                  <Code className="w-5 h-5 text-slate-600 dark:text-neutral-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.services.webDev.title}</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">{t.services.webDev.desc}</p>
              </div>
            )}

            {/* Service 2: UI / UX (Design) */}
            {(serviceFilter === "all" || serviceFilter === "design") && (
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-900 hover:border-slate-300 dark:hover:border-neutral-850 hover:bg-slate-100 dark:hover:bg-neutral-900/60 transition-all duration-300 group backdrop-blur-sm animated-gradient-border">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-neutral-950 flex items-center justify-center border border-slate-200 dark:border-neutral-850 mb-8 group-hover:scale-110 transition-transform">
                  <Palette className="w-5 h-5 text-slate-600 dark:text-neutral-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.services.uiux.title}</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">{t.services.uiux.desc}</p>
              </div>
            )}

            {/* Service 3: Backend Development (Development) */}
            {(serviceFilter === "all" || serviceFilter === "development") && (
              <div className="p-8 rounded-2xl bg-slate-50 dark:bg-neutral-900/40 border border-slate-200 dark:border-neutral-900 hover:border-slate-300 dark:hover:border-neutral-850 hover:bg-slate-100 dark:hover:bg-neutral-900/60 transition-all duration-300 group backdrop-blur-sm animated-gradient-border">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-neutral-950 flex items-center justify-center border border-slate-200 dark:border-neutral-850 mb-8 group-hover:scale-110 transition-transform">
                  <Server className="w-5 h-5 text-slate-600 dark:text-neutral-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">{t.services.landing.title}</h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed">{t.services.landing.desc}</p>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* Portfolio Section (Replacing Testimonials) */}
      <section id="portfolio" className="py-24 border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 relative overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="ambient-glow top-[20%] left-[8%] w-[260px] h-[260px] bg-slate-300/30 dark:bg-neutral-500/25" />
        <div className="ambient-glow bottom-[15%] right-[8%] w-[310px] h-[310px] bg-slate-300/30 dark:bg-neutral-500/25" />

        <div className="max-w-6xl mx-auto px-6 z-10 relative">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              {t.portfolio.title}
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-sm md:text-base">
              {t.portfolio.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Project 1: Colegio Santa Luisa */}
            <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/30 border border-slate-200 dark:border-neutral-900 hover:border-slate-350 dark:hover:border-neutral-850 hover:shadow-lg dark:hover:shadow-black/30 transition-all flex flex-col justify-between h-full backdrop-blur-sm animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-neutral-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-neutral-850 relative">
                  <img src={colegioPreview} alt="Colegio Santa Luisa" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wide uppercase mb-4">
                  {t.portfolio.project1.tag}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {t.portfolio.project1.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {t.portfolio.project1.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project1[lang])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-0"
              >
                <span>Ver proyecto</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Project 2: Valet Parking */}
            <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/30 border border-slate-200 dark:border-neutral-900 hover:border-slate-350 dark:hover:border-neutral-850 hover:shadow-lg dark:hover:shadow-black/30 transition-all flex flex-col justify-between h-full backdrop-blur-sm animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-neutral-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-neutral-850 relative">
                  <img src={valetPreview} alt="Valet Parking" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wide uppercase mb-4">
                  {t.portfolio.project2.tag}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {t.portfolio.project2.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {t.portfolio.project2.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project2[lang])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-0"
              >
                <span>Ver proyecto</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

            {/* Project 3: Sistema Veterinario */}
            <div className="group p-6 rounded-2xl bg-slate-50 dark:bg-neutral-900/30 border border-slate-200 dark:border-neutral-900 hover:border-slate-350 dark:hover:border-neutral-850 hover:shadow-lg dark:hover:shadow-black/30 transition-all flex flex-col justify-between h-full backdrop-blur-sm animated-gradient-border">
              <div>
                <div className="aspect-video w-full rounded-xl bg-slate-100 dark:bg-neutral-950 mb-6 overflow-hidden flex items-center justify-center border border-slate-200 dark:border-neutral-850 relative">
                  <img src={vetPreview} alt="Sistema Veterinario" className="w-full h-full object-cover" />
                </div>
                <div className="inline-flex px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold tracking-wide uppercase mb-4">
                  {t.portfolio.project3.tag}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {t.portfolio.project3.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-neutral-400 leading-relaxed mb-8">
                  {t.portfolio.project3.desc}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(PROJECT_DETAILS.project3[lang])}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer bg-transparent border-0"
              >
                <span>Ver proyecto</span>
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 border-t border-slate-200 dark:border-neutral-900 bg-white dark:bg-neutral-950 relative overflow-hidden">
        {/* Ambient Blur Backgrounds */}
        <div className="ambient-glow top-[40%] right-[10%] w-[330px] h-[330px] bg-slate-300/30 dark:bg-neutral-500/25" />
        <div className="ambient-glow bottom-[10%] left-[8%] w-[270px] h-[270px] bg-slate-300/30 dark:bg-neutral-500/25" />

        <div className="max-w-6xl mx-auto px-6 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Info panel */}
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                {t.contact.title}
              </h2>
              <p className="text-slate-600 dark:text-neutral-400 text-sm md:text-base leading-relaxed mb-10">
                {t.contact.subtitle}
              </p>

              <div className="flex flex-col gap-6">
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center border border-slate-200 dark:border-neutral-850 text-slate-500 dark:text-neutral-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider mb-1">{t.contact.email}</h4>
                    <a href="mailto:jvasquez978@gmail.com" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-slate-600 dark:hover:text-neutral-300 transition-colors">
                      jvasquez978@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center border border-slate-200 dark:border-neutral-850 text-slate-500 dark:text-neutral-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider mb-1">{t.contact.phone}</h4>
                    <a href="tel:+584269217118" className="text-sm font-semibold text-slate-800 dark:text-white hover:text-slate-600 dark:hover:text-neutral-300 transition-colors">
                      +58 426 921 7118
                    </a>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
                  <a
                    href="https://wa.me/584269217118"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-500 text-black font-semibold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20"
                  >
                    <MessageSquare className="w-4 h-4" />
                    WhatsApp
                  </a>
                  <a
                    href="https://wa.me/584269217118?text=Hola%20José%2C%20quiero%20consultar%20sobre%20un%20proyecto"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-slate-200 dark:border-neutral-800 bg-slate-50 dark:bg-neutral-900 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    Mensaje rápido
                  </a>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-neutral-900 flex items-center justify-center border border-slate-200 dark:border-neutral-850 text-slate-500 dark:text-neutral-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 dark:text-neutral-500 uppercase tracking-wider mb-1">{t.contact.location}</h4>
                    <p className="text-sm font-semibold text-slate-800 dark:text-white">
                      {t.contact.locationVal}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Form panel */}
            <div className="lg:col-span-7">
              <form onSubmit={handleContactSubmit} className="p-8 md:p-10 rounded-2xl bg-slate-50 dark:bg-neutral-900/30 border border-slate-200 dark:border-neutral-900 space-y-6 backdrop-blur-sm">
                
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    {t.contact.labelName}
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder={t.contact.placeholderName}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-950 border border-slate-250 dark:border-neutral-850 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-slate-450 dark:focus:border-neutral-700 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    {t.contact.labelEmail}
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                    placeholder={t.contact.placeholderEmail}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-950 border border-slate-250 dark:border-neutral-850 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-slate-450 dark:focus:border-neutral-700 transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-500 dark:text-neutral-400 uppercase tracking-wider mb-2">
                    {t.contact.labelMessage}
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder={t.contact.placeholderMessage}
                    className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-neutral-950 border border-slate-250 dark:border-neutral-850 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-neutral-600 focus:outline-none focus:border-slate-450 dark:focus:border-neutral-700 transition-colors text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm hover:bg-slate-800 dark:hover:bg-neutral-200 active:scale-99 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? (lang === "es" ? "Enviando..." : "Sending...") : t.contact.submit}</span>
                </button>

                {formSubmitted && (
                  <p className="text-center text-xs text-emerald-600 dark:text-emerald-400 font-bold animate-pulse mt-2">
                    {lang === "es" ? "¡Mensaje enviado con éxito! Te contactaremos pronto." : "Message sent successfully! We will contact you soon."}
                  </p>
                )}

                {submitError && (
                  <p className="text-center text-xs text-red-500 font-bold mt-2">
                    {submitError}
                  </p>
                )}

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-200 dark:border-neutral-900/60 bg-white/80 dark:bg-neutral-950/80">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 dark:text-neutral-500">
          <div>
            © {new Date().getFullYear()} José Vásquez. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/jav978" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-slate-400 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://gitlab.com/jvasquez978" target="_blank" rel="noreferrer" aria-label="GitLab" className="text-slate-400 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m23.955 13.587-1.342-4.135-2.664-8.189c-.135-.417-.724-.417-.86 0L16.42 9.447H7.579L4.914 1.263c-.135-.417-.724-.417-.86 0L1.386 9.452.044 13.587c-.153.47.014 1.011.412 1.299L12 23.361l11.544-8.475c.398-.288.565-.828.411-1.299"/>
              </svg>
            </a>
            <a href="https://x.com/JoseAntonio978" target="_blank" rel="noreferrer" aria-label="X" className="text-slate-400 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/jav_978/" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-slate-400 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jose-vasquez978" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-slate-400 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Detailed Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-200 dark:border-neutral-850 bg-white/95 dark:bg-neutral-900/95 text-slate-900 dark:text-neutral-100 p-6 md:p-10 shadow-2xl flex flex-col gap-6 backdrop-blur-md">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-slate-100 dark:border-neutral-800 pb-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-600 dark:text-emerald-450 bg-emerald-500/10 px-2.5 py-1 rounded-full mb-2 inline-block">
                  {selectedProject.tag}
                </span>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight">{selectedProject.title}</h3>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
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
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-2">
                    {lang === "es" ? "Descripción del Proyecto" : "Project Description"}
                  </h4>
                  <p className="text-sm md:text-base leading-relaxed text-slate-700 dark:text-neutral-300">
                    {selectedProject.longDesc}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-2">
                    {lang === "es" ? "Filosofía y Propósito" : "Philosophy & Purpose"}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-neutral-450">
                    {selectedProject.philosophy}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-3">
                    {lang === "es" ? "Características Clave" : "Key Features"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-slate-700 dark:text-neutral-350">
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
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-3">
                    {lang === "es" ? "Tecnologías" : "Technologies"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techs.map((tech, index) => (
                      <span key={index} className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-neutral-950 border border-slate-200 dark:border-neutral-800 text-slate-800 dark:text-neutral-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Security */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-3">
                    {lang === "es" ? "Seguridad y Autorización" : "Security & Auth"}
                  </h4>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs text-slate-600 dark:text-neutral-400">
                    {selectedProject.security.map((sec, index) => (
                      <li key={index}>{sec}</li>
                    ))}
                  </ul>
                </div>

                {/* Directory Architecture */}
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 dark:text-neutral-500 mb-3">
                    {lang === "es" ? "Estructura del Proyecto" : "Project Structure"}
                  </h4>
                  <div className="rounded-xl border border-slate-200 dark:border-neutral-800/80 bg-slate-50/50 dark:bg-neutral-950/50 p-3.5 space-y-2 text-xs font-mono">
                    {Object.entries(selectedProject.architecture).map(([path, desc], index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between border-b border-slate-100 dark:border-neutral-850 pb-1.5 last:border-0 last:pb-0">
                        <span className="text-emerald-600 dark:text-emerald-450 font-bold">{path}</span>
                        <span className="text-slate-500 dark:text-neutral-500 text-[10px] sm:text-right">{desc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer / Action */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-100 dark:border-neutral-800 pt-4 mt-2">
              <button 
                onClick={() => setSelectedProject(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full border border-slate-200 dark:border-neutral-850 text-slate-700 dark:text-neutral-300 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-neutral-800 transition-colors cursor-pointer text-center"
              >
                {lang === "es" ? "Cerrar" : "Close"}
              </button>
              {selectedProject.liveUrl && selectedProject.liveUrl !== "#" && (
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-emerald-500 text-black font-semibold text-xs hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/10 text-center"
                >
                  {lang === "es" ? "Ver Demo en Vivo" : "View Live Demo"}
                </a>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default App;
