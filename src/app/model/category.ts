import {Event} from './event';
export class Category{
    id: number | null;
	name: string | null;
	events: Event[]  | null;
	constructor(id: number | null, name: string | null, events: Event[] | null){
		this.id = id;
		this.name = name;
		this.events = events;
	}//ssddsds
}