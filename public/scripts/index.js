document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.container-scroll__section');
  const links = document.querySelectorAll('a');
  const donationForm = document.getElementById('form');
  const submitBtn = donationForm.querySelector('[type="submit"]');
  const logo = document.getElementById('logo');

  document.querySelector('.footer p span').textContent =
    new Date().getFullYear();

  let currentSection = 0;
  let isScrolling = false;

  const scrollToSection = (index) => {
    if (index < 0 || index >= sections.length) {
      return;
    }

    isScrolling = true;
    sections[index].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => {
      isScrolling = false;
      currentSection = index;
    }, 1000);
  };

  const showComingSoonToast = () => {
    if (document.querySelector('#coming-soon-toast')) {
      return;
    }

    const toast = document.createElement('div');

    toast.id = 'coming-soon-toast';
    toast.innerText = 'Recurso disponível em breve!';

    Object.assign(toast.style, {
      position: 'fixed',
      bottom: '2rem',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: '#222',
      color: '#fff',
      padding: '1rem 2rem',
      borderRadius: '8px',
      zIndex: '9999',
      fontFamily: 'sans-serif',
      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
      opacity: '0',
      transition: 'opacity 0.3s ease',
    });

    document.body.appendChild(toast);

    requestAnimationFrame(() => {
      toast.style.opacity = '1';
    });

    setTimeout(() => {
      toast.style.opacity = '0';

      setTimeout(() => toast.remove(), 300);
    }, 2500);
  };

  links.forEach((link) => {
    const href = link.getAttribute('href');

    if (!href) {
      return;
    }

    link.addEventListener('click', (e) => {
      console.log(href);

      if (href === '#') {
        e.preventDefault();

        showComingSoonToast();

        return;
      }
      if (href.startsWith('/') || href.startsWith('.')) {
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  logo.addEventListener('click', () => {
    scrollToSection(0);
  });

  donationForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.classList.add('btn--loading');

    await new Promise((resolve) => setTimeout(resolve, 3000));

    showComingSoonToast();

    submitBtn.disabled = false;
    submitBtn.classList.remove('btn--loading');
  });

  window.addEventListener('wheel', (e) => {
    if (isScrolling) {
      return;
    }

    if (e.deltaY > 0) {
      scrollToSection(currentSection + 1);
    } else {
      scrollToSection(currentSection - 1);
    }
  });

  window.addEventListener('keydown', (e) => {
    if (isScrolling) {
      return;
    }

    if (e.key === 'ArrowDown') {
      scrollToSection(currentSection + 1);
    }

    if (e.key === 'ArrowUp') {
      scrollToSection(currentSection - 1);
    }
  });
});
