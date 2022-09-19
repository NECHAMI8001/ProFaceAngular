import { Time } from "@angular/common"

export class Presence
{
    Presence_Code!: number
    Presence_Lesson_Name!:string
    Presence_Student_ID!:string
    Presence_Grade_Code!:number
    Presence_Date!:Date
    Presence_TimeBLesson!:boolean
    Presence_TimeMLesson!:boolean
    Presence_TimeELesson!:boolean
    Presence_Hour!:Time
}
