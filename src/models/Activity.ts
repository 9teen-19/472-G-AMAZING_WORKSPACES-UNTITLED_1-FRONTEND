import { IActivityResponse, IActivityCreate } from "../types/activity.types";

export class Activity {
    id: number;
    name: string;
    description: string;
    startDate: Date;
    endDate: Date;
    sectionId: number;
    owner:string;
    workspace_id: string;

    constructor(data: IActivityResponse) {
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.startDate = new Date(data.start_date); // Convert string to Date
        this.endDate = new Date(data.end_date);     // Convert string to Date
        this.owner = data.owner;
        this.sectionId = data.section_id;
        this.workspace_id = data.workspace_id;
    }

    toJSON(): IActivityCreate {
        return {
            name: this.name,
            description: this.description,
            start_date: this.startDate.toISOString(), // Convert Date to ISO string
            end_date: this.endDate.toISOString(),     // Convert Date to ISO string
            owner: this.owner,
            section_id: this.sectionId,
            workspace_id: this.workspace_id,
        };
    }

    static fromResponse(data: IActivityResponse): Activity {
        return new Activity(data);
    }
}