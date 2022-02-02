const mobileMenuBtn = document.getElementById('mobile-menu-cta')
              nav = document.querySelector('nav')
              mobileMenuExit = document.getElementById('mobile-menu-exit-cta');

              mobileMenuBtn.addEventListener('click', () => {
                  nav.classList.add('menu-btn');
              })
              mobileMenuExit.addEventListener('click', () => {
                  nav.classList.remove('menu-btn');
              })
            
/* will be adding the actual JS functionality of populating a list of dog breeds
or predicting search results as the user types a dog breed. The first one would
be easier but the second one would look cooler. Then making API calls and displaying 
an image and eventually info of the dog breed */ 