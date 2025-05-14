// footer.js - moved from Footer.astro for CSP compliance

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.newsletter-form');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.querySelector('input');
    console.log('Newsletter subscription:', email.value);
    form.reset();
    alert('Thank you for subscribing!');
  });
});
