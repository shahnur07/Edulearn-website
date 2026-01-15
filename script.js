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

        // ========== NAVBAR DRAWER FOR MOBILE/TABLET ==========
        function setupNavbarDrawer() {
            const navLinks = document.getElementById('navLinks');
            const hamburger = document.getElementById('hamburgerBtn');
            if (!navLinks || !hamburger) return;

            hamburger.addEventListener('click', function(e) {
                e.stopPropagation();
                navLinks.classList.toggle('open');
                hamburger.classList.toggle('active');
            });

            document.addEventListener('click', function(e) {
                if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && e.target !== hamburger) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('active');
                }
            });

            window.addEventListener('resize', function() {
                if (window.innerWidth > 768) {
                    navLinks.classList.remove('open');
                    hamburger.classList.remove('active');
                }
            });
        }
        setupNavbarDrawer();

        // ========== EXPLORE COURSES BUTTON ==========
        document.querySelectorAll('button').forEach(btn => {
            if(btn.textContent.includes('Explore Courses')) {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    window.location.href = 'course.html';
                });
            }
        });

        // ========== COURSE FILTERING & SEARCH ==========
        const courseSearch = document.getElementById('course-search');
        const courseFilter = document.querySelectorAll('.course-filter');
        const courseCards = document.querySelectorAll('.course-card');

        // Search functionality
        if(courseSearch) {
            courseSearch.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase();
                filterCourses(searchTerm);
            });
        }

        // Filter checkboxes
        courseFilter.forEach(filter => {
            filter.addEventListener('change', function() {
                const searchTerm = courseSearch ? courseSearch.value.toLowerCase() : '';
                filterCourses(searchTerm);
            });
        });

        function filterCourses(searchTerm) {
            const activeCategories = Array.from(courseFilter)
                .filter(f => f.checked)
                .map(f => f.value);

            courseCards.forEach(card => {
                const title = card.querySelector('.cc-title').textContent.toLowerCase();
                const category = card.getAttribute('data-category');
                
                const matchesSearch = title.includes(searchTerm);
                const matchesCategory = activeCategories.length === 0 || activeCategories.includes(category);

                if(matchesSearch && matchesCategory) {
                    card.parentElement.style.display = 'block';
                } else {
                    card.parentElement.style.display = 'none';
                }
            });
        }

        // ========== LOGIN/SIGNUP FORM VALIDATION ==========
        
        // Login form validation
        function validateLogin() {
            const email = document.querySelector('#login input[type="email"]');
            const password = document.querySelector('#login input[type="password"]');
            
            if(email && password) {
                const emailInput = email.value.trim();
                const passwordInput = password.value.trim();
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailRegex.test(emailInput)) {
                    showToast('Please enter a valid email address', 'error');
                    return false;
                }
                
                // Password validation
                if(passwordInput.length < 6) {
                    showToast('Password must be at least 6 characters', 'error');
                    return false;
                }
                
                return true;
            }
            return false;
        }

        // Signup form validation
        function validateSignup() {
            const fullName = document.querySelector('#signup input[type="text"]');
            const email = document.querySelector('#signup input[type="email"]');
            const password = document.querySelectorAll('#signup input[type="password"]');
            
            if(fullName && email && password.length >= 2) {
                const nameInput = fullName.value.trim();
                const emailInput = email.value.trim();
                const passwordInput = password[0].value.trim();
                const confirmPasswordInput = password[1].value.trim();
                
                // Name validation
                if(nameInput.length < 3) {
                    showToast('Full name must be at least 3 characters', 'error');
                    return false;
                }
                
                // Email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if(!emailRegex.test(emailInput)) {
                    showToast('Please enter a valid email address', 'error');
                    return false;
                }
                
                // Password validation
                if(passwordInput.length < 6) {
                    showToast('Password must be at least 6 characters', 'error');
                    return false;
                }
                
                // Confirm password match
                if(passwordInput !== confirmPasswordInput) {
                    showToast('Passwords do not match', 'error');
                    return false;
                }
                
                return true;
            }
            return false;
        }

        // Form submission handlers
        const loginForm = document.querySelector('#login .contact-form');
        const signupForm = document.querySelector('#signup .contact-form');

        if(loginForm) {
            const loginBtn = loginForm.querySelector('button[type="submit"]');
            if(loginBtn) {
                loginBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    if(validateLogin()) {
                        showToast('Login successful! Redirecting...', 'success');
                        setTimeout(() => {
                            window.location.href = 'home.html';
                        }, 1500);
                    }
                });
            }
        }

        if(signupForm) {
            const signupBtn = signupForm.querySelector('button[type="submit"]');
            if(signupBtn) {
                signupBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    if(validateSignup()) {
                        showToast('Account created successfully! Redirecting...', 'success');
                        setTimeout(() => {
                            window.location.href = 'home.html';
                        }, 1500);
                    }
                });
            }
        }

        // ========== TOAST NOTIFICATION ==========
        function showToast(message, type = 'info') {
            let toast = document.querySelector('.toast');
            if(!toast) {
                toast = document.createElement('div');
                toast.className = 'toast';
                document.body.appendChild(toast);
            }
            
            toast.textContent = message;
            toast.classList.add('show');
            
            // Color based on type
            if(type === 'error') {
                toast.style.background = '#ef4444';
            } else if(type === 'success') {
                toast.style.background = '#10b981';
            } else {
                toast.style.background = '#284bff';
            }
            
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }

        // ========== FORM INPUT ENHANCEMENTS ==========
        const formInputs = document.querySelectorAll('.form-input');
        formInputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            input.addEventListener('blur', function() {
                this.style.transform = 'translateY(0)';
            });
        });

        // ========== BUTTON RIPPLE EFFECT ==========
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.position = 'absolute';
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.style.borderRadius = '50%';
                ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.6)';
                ripple.style.pointerEvents = 'none';
                ripple.style.animation = 'ripple 0.6s ease-out';
                
                if(this.style.position === '' || this.style.position === 'static') {
                    this.style.position = 'relative';
                    this.style.overflow = 'hidden';
                }
                
                this.appendChild(ripple);
                
                setTimeout(() => ripple.remove(), 600);
            });
        });

        // Add ripple animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);