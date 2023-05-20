export interface TimeTable {
    group: string,
    study: Study,
    subGroupsTable: SubGroupsTable []
}

export interface Study {
    day: string,
    periods: Period []
}

export interface SubGroupsTable {
    subgroup: string,
    study: Study []
}

export interface Period {
    startTime: string,
    endTime: string,
    lab: string,
    numberOfStudents: number,
    assistant: string,
    room: number
}

