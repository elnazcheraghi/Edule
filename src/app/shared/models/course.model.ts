export class Course {
    public coach: string;
    public lectures: number;
    public price: number;
    public imagePath: string;
    public profileImg: string;
    public type: string;
    public description: string;

    constructor(coach: string, lectures: number, price: number, img: string, profile: string, type: string, desc: string) {
        this.coach = coach;
        this.lectures = lectures;
        this.price = price;
        this.imagePath = img;
        this.profileImg = profile;
        this.type = type;
        this.description = desc;
    }
}