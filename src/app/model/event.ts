import { Category } from "./category";

export class Event{
    id: number |null;
	name: string|null;
	startDate: Date|null;
	endDate: Date|null;
	description: string|null;
	location: string|null;
	imgUrl: string|null;
	category: Category|null;
	constructor(id: number|null, name: string|null,description: string|null, location: string|null, startDate: Date|null, endDate: Date|null, imgUrl: string|null, category: Category|null){
		this.id=id;
		this.name=name;
		this.startDate=startDate;
		this.endDate=endDate;
		this.description=description;
		this.location=location;
		this.imgUrl=imgUrl;
		this.category = category;
	}
}