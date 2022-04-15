window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 600;
    //canvas settings
    console.log(ctx);

    class Fractal {
        constructor(canvasWidth, canvasHeight){
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
        }
        draw(context){
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(canvas.width, canvas.height);
            context.stroke();
        }
    }

    const fractal1 = new Fractal(canvas.width, canvas.height);
    fractal1.draw(ctx);

    class Particle {

    }

    class Rain {

    }
});