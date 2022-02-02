const mobileMenuBtn = document.getElementById('mobile-menu-cta')
              nav = document.querySelector('nav')
              mobileMenuExit = document.getElementById('mobile-menu-exit-cta');

              mobileMenuBtn.addEventListener('click', () => {
                  nav.classList.add('menu-btn');
              })
              mobileMenuExit.addEventListener('click', () => {
                  nav.classList.remove('menu-btn');
              })
            
