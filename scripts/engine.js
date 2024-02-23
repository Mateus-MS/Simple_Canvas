export class Engine{

    constructor(){

        this.canvas = document.getElementById("canvas");
        this.c      = this.canvas.getContext("2d");

        this.screen = {
            w: window.innerWidth,
            h: window.innerHeight,
            half_w: window.innerWidth / 2,
            half_h: window.innerHeight / 2
        }

        this.canvas.width  = this.screen.w;
        this.canvas.height = this.screen.h;
        this.canvas.style.backgroundColor = "rgb(200, 200, 200)";

        this.c.translate(this.screen.half_w, this.screen.half_h);

        this.interval = undefined;

        //Start render
        this.render();

    }

    render(){

        this.interval = setInterval(()=>{

            this.c.clearRect(-this.screen.half_w, -this.screen.half_h, this.screen.w, this.screen.h);

            for(let i = 0; i < this.entities.length; i++){ 
                this.Draw.circle({
                    color: this.entities[i].color,
                    position: this.entities[i].position,
                    size: this.entities[i].size
                })
            }

            if(this.update) this.update();

        }, 1)

    }

}