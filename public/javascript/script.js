console.log("JavaScript is linked correctly!");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Form submitted!');
    });

    document.addEventListener('DOMContentLoaded', function() {
        const flipBoxes = document.querySelectorAll('.flip-box-inner');
        flipBoxes.forEach(box => {
          box.addEventListener('click', function() {
            this.classList.toggle('flipped');
          });
        });
      });
      

    // Adding smooth scrolling to the navigation links
    const navLinks = document.querySelectorAll('.header nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adding some interactivity to the welcome text
    const welcomeText = document.querySelector('.waviy');
    let textArray = ["WELCOME", "TO", "MY", "PORTFOLIO", "WEBSITE"];
    let i = 0;
    setInterval(() => {
        welcomeText.innerHTML = `<span style="--i:${i+1}">${textArray[i]}</span>`;
        i = (i + 1) % textArray.length;
    }, 1000);

    applyStyles();
});

function applyStyles() {
    // Applying global styles
    document.body.style.display = 'flex';
    document.body.style.flexDirection = 'column';
    document.body.style.fontSize = '1.3rem';
    document.body.style.fontFamily = 'Alegreya SC, sans-serif';
    document.body.style.lineHeight = '1.6';
    document.body.style.color = '#333';

    // Applying styles for header
    const header = document.querySelector('header');
    if (header) {
        header.style.display = 'flex';
        header.style.flexDirection = 'column';
        header.style.alignItems = 'center';
        header.style.paddingTop = '2rem';
        header.style.paddingBottom = '2rem';
        header.style.lineHeight = '1.7em';
        header.style.textAlign = 'center';
        header.style.maxWidth = '117rem';
        header.style.backgroundColor = '#FCEEE6';
    }

    // Applying styles for about-me-container
    const aboutMeContainer = document.querySelector('.about-me-container');
    if (aboutMeContainer) {
        aboutMeContainer.style.display = 'flex';
        aboutMeContainer.style.flexWrap = 'wrap';
        aboutMeContainer.style.justifyContent = 'center';
        aboutMeContainer.style.alignItems = 'flex-start';
        aboutMeContainer.style.marginTop = '2rem';

        const img = aboutMeContainer.querySelector('img');
        if (img) {
            img.style.width = '12vw';
            img.style.height = '20vw';
            img.style.borderRadius = '50%';
            img.style.marginRight = '2rem';
            img.style.marginLeft = '2rem';
            img.style.marginTop = '-6vw';
            img.style.filter = 'blur(0.018rem)';

            img.addEventListener('mouseover', () => {
                img.style.filter = 'contrast(110%) blur(0rem)';
            });
            img.addEventListener('mouseout', () => {
                img.style.filter = 'blur(0.018rem)';
            });
        }

        const p = aboutMeContainer.querySelector('p');
        if (p) {
            p.style.maxWidth = '50rem';
            p.style.marginLeft = '10rem';
            p.style.fontSize = 'larger';
        }
    }

    // Additional style applications
    applyNavStyles();
    applyContactStyles();
    applyFooterStyles();
}

function applyNavStyles() {
    const nav = document.querySelector('nav');
    if (nav) {
        nav.style.backgroundImage = 'url(../images/pexels-pixabay-257904.jpg)';
        nav.style.overflowX = 'scroll';
        nav.style.display = 'flex';
        nav.style.justifyContent = 'space-between';
        nav.style.alignItems = 'center';
        nav.style.padding = '1rem 2rem';
        nav.style.paddingRight = '6.25rem';

        const ul = nav.querySelector('ul');
        if (ul) {
            ul.style.listStyle = 'none';
            ul.style.color = 'white';
            ul.style.display = 'flex';
            ul.style.gap = '1.5rem';
            ul.style.paddingRight = '1rem';

            const links = ul.querySelectorAll('a');
            links.forEach(link => {
                link.style.textDecoration = 'none';
                link.style.display = 'inline-block';
                link.style.padding = '0.5rem 1rem';
                link.style.border = '0.1rem solid white';
                link.style.color = 'white';
                link.style.fontWeight = 'bold';
                link.style.transition = 'background-color 0.3s, color 0.3s, transform 0.2s';
                link.style.marginRight = '6.25rem';

                link.addEventListener('mouseover', () => {
                    link.style.color = '#ff9900';
                    link.style.transform = 'scale(1.1)';
                });
                link.addEventListener('mouseout', () => {
                    link.style.color = 'white';
                    link.style.transform = 'scale(1)';
                });
            });
        }

        const h1 = nav.querySelector('h1');
        if (h1) {
            h1.style.margin = '0';
            h1.style.fontSize = '2rem';
            h1.style.fontWeight = 'bold';
            h1.style.color = 'white';
            h1.style.fontFamily = 'localFont';
            h1.style.textShadow = '0.1rem 0.1rem 0.25rem rgba(0, 0, 0, 0.5)';
        }
    }
}

function applyContactStyles() {
    const contact = document.querySelector('.contact');
    if (contact) {
        contact.style.display = 'flex';
        contact.style.backgroundColor = '#FCEEE6';
        contact.style.padding = '4rem';

        const container = contact.querySelector('.container');
        if (container) {
            container.style.flex = '1';
            container.style.paddingRight = '4rem';
            container.style.display = 'flex';
            container.style.flexDirection = 'column';
            container.style.alignItems = 'center';

            const h2 = container.querySelector('h2');
            if (h2) {
                h2.style.textAlign = 'center';
                h2.style.fontWeight = '900';
                h2.style.paddingBottom = '3rem';
            }

            const p = container.querySelector('p');
            if (p) {
                p.style.lineHeight = '1.8';
                p.style.textAlign = 'center';
            }

            const form = container.querySelector('form');
            if (form) {
                form.style.flex = '1';
                form.style.maxWidth = '37.5rem';
                form.style.margin = '0 auto';
                form.style.boxShadow = '0 0.1rem 0.25rem #000';
                form.style.borderRadius = '0.3rem';
                form.style.padding = '3rem';
                form.style.backgroundColor = '#f2d2d7';

                const formGroups = form.querySelectorAll('.form-group');
                formGroups.forEach(group => {
                    group.style.marginBottom = '1.3rem';

                    const label = group.querySelector('label');
                    if (label) {
                        label.style.display = 'block';
                        label.style.fontWeight = 'bold';
                        label.style.marginBottom = '0.3rem';
                        label.style.fontFamily = 'Montserrat, sans-serif';
                    }

                    const input = group.querySelector('input');
                    const textarea = group.querySelector('textarea');
                    if (input) {
                        input.style.width = '100%';
                        input.style.padding = '0.6rem';
                        input.style.border = '0.06rem solid #ddd';
                        input.style.borderRadius = '0.3rem';
                        input.style.fontSize = '1rem';
                        input.style.fontFamily = 'Arial, sans-serif';
                    }
                    if (textarea) {
                        textarea.style.width = '100%';
                        textarea.style.padding = '0.6rem';
                        textarea.style.border = '0.06rem solid #ddd';
                        textarea.style.borderRadius = '0.3rem';
                        textarea.style.fontSize = '1rem';
                        textarea.style.fontFamily = 'Arial, sans-serif';
                        textarea.style.resize = 'vertical';
                    }
                });

                const button = form.querySelector('button');
                if (button) {
                    button.style.backgroundColor = '#ff9900';
                    button.style.color = '#fff';
                    button.style.border = 'none';
                    button.style.padding = '0.6rem 1.25rem';
                    button.style.cursor = 'pointer';
                    button.style.fontSize = '1rem';
                    button.style.fontFamily = 'Open Sans, sans-serif';
                    button.style.transition = 'background-color 0.3s';
                    button.style.borderRadius = '0.3rem';
                    button.style.animation = 'wiggle 2s linear infinite';
                }
            }
        }
    }
}

function applyFooterStyles() {
    const footerContainer = document.querySelector('.footer-container');
    if (footerContainer) {
        footerContainer.style.textAlign = 'center';
        footerContainer.style.backgroundColor = '#c9c7c76d';
        footerContainer.style.padding = '1rem';
    }
}
