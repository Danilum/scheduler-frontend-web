export enum TimeSlotType {
    Empty,
    Subject
}

export interface TimeTable {
    group: string,
    study: Study[],
    subGroupsTable: SubGroupsTable []
}

export interface Study {
    day: string,
    periods: Period [] | undefined
}

export interface SubGroupsTable {
    subgroup: string,
    study: Study []
}

export interface Period {
    startTime: string,
    endTime: string,
    lab: string,
    subject: string,
    instructor: string
    numberOfStudents: number,
    assistant: string,
    room: number
}


export interface Schedule {
    time: string,
    slots: TimeSlot[]
}
export interface TimeSlot {
    isFree: boolean,
    periods?: Period,
    isCommon: boolean

}

// export const DayOfWeeks = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
export const DayOfWeeks = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]
export const HoursOfDay = ["9:00 - 10:30","10:30 - 12:00", "12:00 - 13:30","13:30 - 15:00", "15:00 - 16:30", "16:30 - 18:00", "18:00 - 19:30" ]

