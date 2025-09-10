// Small hover effect for skill cards
document.querySelectorAll('.skill').forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.transform = 'scale(1.08)';
  });
  skill.addEventListener('mouseleave', () => {
    skill.style.transform = 'scale(1)';
  });
});
