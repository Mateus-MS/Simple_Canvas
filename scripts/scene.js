import { Engine } from "./engine.js";
import { Draw } from "./draw.js";
import { Entity } from "./entity.js";

export class Scene extends Engine{

    constructor(){
        super()

        this.entities = [];
        this.Draw = new Draw(this);
        this.setup();

    }

    setup(){
        this.entities.push(new Entity({x: 20, y: 30}, 30, "red"))
    }

    update(){
        this.entities.forEach(entity => {
            entity.position.x += 1;
        });
    }

}