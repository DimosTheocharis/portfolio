import { Injectable } from "@angular/core";
import { InterestModel } from "src/app/Models/interest/interestModel";

@Injectable({
    providedIn: "root"
})
export class InterestService {
    private interestData: InterestModel[] = [
        {
            name: "Programming",
            icon: "fa-solid fa-laptop-code",
        },
        {
            name: "Gym",
            icon: "fa-solid fa-dumbbell"
        },
        {
            name: "Listening to music (G-Eazy, Post Malone, Weeknd...)",
            icon: "fa-solid fa-music"
        },
        {
            name: "Hang out with friends",
            icon: "fa-solid fa-beer-mug-empty"
        }
    ]

    constructor() { }

    public getInterest(): InterestModel[] {
        return this.interestData;
    }
}