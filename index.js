document.addEventListener('DOMContentLoaded', function () {

    const emailElement = document.querySelector('.c-footer span');
    emailElement.addEventListener('click', function() {
        const email = 'nour@advermte.com'; 
        navigator.clipboard.writeText(email).then(function() {
            alert('Email address copied to clipboard!');
        }, function(err) {
            alert('Failed to copy email address: ', err);
        });
    });



    const canvas = document.createElement('canvas');
    canvas.id = 'interactiveCanvas';
    document.body.insertBefore(canvas, document.body.firstChild);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    function init() {
        particlesArray = [];
        for (let i = 0; i < 100; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    init();
    animate();

    window.addEventListener('resize', function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    canvas.addEventListener('click', function(event) {
        particlesArray.push(new Particle());
    });

    canvas.addEventListener('mousemove', function(event) {
        particlesArray.push(new Particle());
        if (particlesArray.length > 200) {
            particlesArray.shift();
        }
    });

    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 50,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });
});
