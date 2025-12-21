 document.querySelectorAll('.device-screen').forEach(screen => {
            screen.addEventListener('scroll', function() {
                const nav = this.querySelector('.nav-bar');
                if(nav) {
                    if (this.scrollTop > 10) {
                        nav.classList.add('scrolled');
                    } else {
                        nav.classList.remove('scrolled');
                    }
                }
            });
        });