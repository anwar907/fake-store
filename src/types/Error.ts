import { User } from ".";
import { MetaData } from "./User";


export interface Error {
    id: string,
    event_type: string,
    groupID: string,
    eventID: string,
    projectID: string,
    message: string,
    title: string,
    platform: string,
    dateCreated: string,
    metaData: MetaData,
    user: User
}