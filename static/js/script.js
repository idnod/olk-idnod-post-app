// Datos de los links (se cargarán desde Hugo)
const linkData = {
    github: {
        title: "GitHub",
        description: "My code and projects",
        url: "https://github.com/lherc",
        image: "/images/github.jpg"
    },
    linkedin: {
        title: "LinkedIn", 
        description: "My professional profile",
        url: "https://linkedin.com/in/lherc",
        image: "/images/linkedin.jpg"
    },
    twitter: {
        title: "Twitter",
        description: "My thoughts and updates", 
        url: "https://twitter.com/lherc",
        image: "/images/twitter.jpg"
    },
    portfolio: {
        title: "Portfolio",
        description: "My projects and work",
        url: "https://lherc.dev", 
        image: "/images/portfolio.jpg"
    },
    blog: {
        title: "Blog",
        description: "Articles and tutorials",
        url: "https://blog.lherc.dev",
        image: "/images/blog.jpg"
    },
    email: {
        title: "Email",
        description: "Contact me directly",
        url: "mailto:hola@lherc.dev",
        image: "/images/email.jpg"
    },
    // Certifications data
    "aws-certified": {
        title: "AWS Certified Solutions Architect",
        description: "Professional certification in AWS cloud solutions architecture",
        image: "/images/aws-certification.jpg",
        date: "2023-12-15"
    },
    "google-cloud-certified": {
        title: "Google Cloud Professional",
        description: "Professional certification in Google Cloud Platform",
        image: "/images/gcp-certification.jpg",
        date: "2023-10-20"
    },
    // Products data
    "mobile-app": {
        title: "Mobile App Suite",
        description: "Cross-platform mobile application with advanced features",
        url: "https://github.com/lherc/mobile-app",
        image: "/images/mobile-product.jpg",
        tech: ["React Native", "TypeScript", "Firebase"]
    },
    "web-platform": {
        title: "Web Platform",
        description: "Scalable web platform with modern architecture",
        url: "https://github.com/lherc/web-platform",
        image: "/images/web-product.jpg",
        tech: ["Next.js", "PostgreSQL", "Docker"]
    },
    // Organizations data
    "tech-community-lead": {
        title: "Tech Community Lead",
        description: "Leader of the local tech community",
        organization: "Tech Community Hub",
        image: "/images/tech-community.jpg",
        role: "Leader",
        period: "2022 - Present"
    },
    "open-source-contributor": {
        title: "Open Source Contributor",
        description: "Active contributor to open source projects",
        organization: "Mozilla Foundation",
        image: "/images/mozilla-contributor.jpg",
        role: "Contributor",
        period: "2021 - Present"
    }
};

// Función para abrir un link
function openLink(url) {
    window.open(url, '_blank');
}

// Función para abrir el modal
function openModal(linkId) {
    const modal = document.getElementById('linkModal');
    const data = linkData[linkId];
    
    if (data) {
        document.getElementById('modalTitle').textContent = data.title;
        document.getElementById('modalDescription').textContent = data.description;
        document.getElementById('modalLink').href = data.url;
        document.getElementById('modalImage').src = data.image;
        document.getElementById('modalImage').alt = data.title;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('linkModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('linkModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Función para toggle de secciones
function toggleSection(sectionId) {
    const content = document.getElementById(sectionId + '-content');
    const toggle = document.getElementById(sectionId + '-toggle');
    
    if (content.classList.contains('collapsed')) {
        // Expandir sección
        content.classList.remove('collapsed');
        toggle.classList.add('rotated');
        
        // Animar las tarjetas dentro de la sección
        const cards = content.querySelectorAll('.link-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    } else {
        // Colapsar sección
        content.classList.add('collapsed');
        toggle.classList.remove('rotated');
    }
}

// Animaciones de entrada
document.addEventListener('DOMContentLoaded', function() {
    // Configurar estado inicial de todas las secciones (incluyendo redes sociales)
    const sections = ['social-networks', 'medals', 'projects', 'organizations'];
    sections.forEach(sectionId => {
        const content = document.getElementById(sectionId + '-content');
        const toggle = document.getElementById(sectionId + '-toggle');
        
        if (content && toggle) {
            content.classList.add('collapsed');
            toggle.classList.remove('rotated');
        }
    });
});
