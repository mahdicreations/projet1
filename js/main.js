/**
 * SARAHGLAM'S - PREMIUM LANDING PAGE INTERACTION SCRIPT
 * Custom features: Sticky Nav, Intersection Observers, Lightbox, WhatsApp integration
 */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- Mobile Hamburger Menu Menu ---
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (burgerMenu && mobileNav) {
    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
    });
    
    // Close mobile nav when clicking a link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.classList.remove('no-scroll');
      });
    });
  }

  // --- Sticky Header Scroll Effect ---
  const header = document.querySelector('.header');
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once at start to handle page refreshes mid-scroll

  // --- Intersection Observer for Active Nav Links ---
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  const activeNavObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -70% 0px', // Trigger when section occupies the sweet spot of viewport
    threshold: 0
  };
  
  const activeNavObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, activeNavObserverOptions);
  
  sections.forEach(section => {
    activeNavObserver.observe(section);
  });

  // --- Intersection Observer for Scroll Reveals ---
  const reveals = document.querySelectorAll('.reveal');
  
  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px', // Trigger slightly before entering viewport fully
    threshold: 0.1
  };
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target); // Animate only once
      }
    });
  }, revealObserverOptions);
  
  reveals.forEach(el => {
    revealObserver.observe(el);
  });

  // --- Premium Lightbox Gallery Popup ---
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxCaption = document.querySelector('.lightbox-caption');
  
  if (galleryItems && lightbox && lightboxImg) {
    galleryItems.forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('.gallery-title').textContent;
        const category = item.querySelector('.gallery-category').textContent;
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightboxCaption.textContent = `${category} - ${title}`;
        
        lightbox.classList.add('open');
        document.body.classList.add('no-scroll');
      });
    });
    
    const closeLightboxFunc = () => {
      lightbox.classList.remove('open');
      document.body.classList.remove('no-scroll');
    };
    
    lightboxClose.addEventListener('click', closeLightboxFunc);
    
    // Close lightbox when clicking outside the content image
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightboxFunc();
      }
    });
    
    // Escape key closes lightbox
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('open')) {
        closeLightboxFunc();
      }
    });
  }

  // --- Booking Form & WhatsApp Redirect Link Builder ---
  const bookingForm = document.getElementById('booking-form');
  const directWhatsappBtn = document.getElementById('direct-whatsapp-btn');
  
  // WhatsApp config: standard Moroccan premium beauty number (Sarah's placeholder)
  const WHATSAPP_NUMBER = '212612345678'; 
  
  const generateWhatsAppMessage = (name, phone, date, city, service, message) => {
    let text = `✨ *Demande de Maquillage à Domicile Marrakech - Sarahglam's* ✨\n\n`;
    text += `🌸 *Nom :* ${name}\n`;
    text += `📞 *Téléphone :* ${phone}\n`;
    text += `📅 *Date souhaitée :* ${date}\n`;
    text += `📍 *Quartier/Riad/Hôtel :* ${city}\n`;
    text += `💄 *Prestation :* ${service}\n\n`;
    
    if (message.trim()) {
      text += `💌 *Message/Détails :*\n_${message.trim()}_\n\n`;
    }
    
    text += `Merci de me reconfirmer vos disponibilités pour Marrakech ! 💕`;
    return encodeURIComponent(text);
  };

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get values
      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const date = document.getElementById('form-date').value.trim();
      const city = document.getElementById('form-city').value.trim();
      const service = document.getElementById('form-service').value;
      const message = document.getElementById('form-message').value.trim();
      
      // Simple validation check (HTML5 does most, this is a fallback validation)
      if (!name || !phone || !date || !city || !service) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      
      // Build WhatsApp URL
      const whatsappText = generateWhatsAppMessage(name, phone, date, city, service, message);
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;
      
      // Visual feedback before redirecting
      const submitBtn = bookingForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = 'Redirection en cours... ✨';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        bookingForm.reset();
      }, 1000);
    });
  }
  
  if (directWhatsappBtn) {
    directWhatsappBtn.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Fast template for instant booking
      const text = encodeURIComponent("Bonjour Sarahglam's ! Je souhaite obtenir des informations sur vos prestations de maquillage à domicile à Marrakech. ✨");
      const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
      window.open(whatsappUrl, '_blank');
    });
  }
});
