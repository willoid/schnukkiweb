const showContact = () => {
    document.getElementById('contactModal').classList.add('show')
    const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
    const body = document.body;
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}`;
  };
  const closeContact = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
    document.getElementById('contactModal').classList.remove('show');
  }
  window.addEventListener('scroll', () => {
    document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
  });

  const showNav = () => {
    document.getElementById('navList').classList.add('showNavList');
    document.getElementById('navBtn').classList.add('hideNavBtn') 
}

const hideNav = () => {
    document.getElementById('navList').classList.remove('showNavList');
    document.getElementById('navBtn').classList.remove('hideNavBtn') 
}