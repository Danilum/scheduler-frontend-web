// import myJson from "./response.json";
import myJson from "./generator_response.json";
import {
    DayOfWeeks,
    HoursOfDay, Period,
    Schedule,
    Study,
    TimeSlot,
    TimeSlotType,
    TimeTable
} from "@/views/timetable/feature-rules";


export const timeTable: TimeTable [] = myJson as TimeTable []

export const getSchedule = (studies: Study[], common: Study[]): Schedule[] => {
    const schedule: Schedule[] = []

    HoursOfDay.forEach(hoursName => {
        const daySlot: TimeSlot[] = []
        DayOfWeeks.forEach(dayName => {
            const day = studies.filter(it => it.day == dayName)[0]
            const dayCommon = common.filter(it => it.day == dayName)[0]
            if (!day && !dayCommon){
                daySlot.push({isFree: true, periods: undefined, isCommon: false})
            }else {
                let period: Period | undefined = undefined
                let isCommon = false
                if (day){
                    const exist = day.periods?.filter(it => {
                        const tt = it.startTime + " - " + it.endTime
                        // TODO compare time slots with back-end response.
                        return tt == hoursName
                    })[0]
                    if (exist){
                        period = exist
                    }
                }
                if (dayCommon){
                    const exist = dayCommon.periods?.filter(it => {
                        const tt = it.startTime + " - " + it.endTime
                        // TODO compare time slots with back-end response.
                        return tt == hoursName
                    })[0]
                    if (exist){
                        period = exist
                        isCommon = true
                    }
                }
                if (period){
                    daySlot.push({isFree: false, periods: period, isCommon: isCommon})
                }else {
                    daySlot.push({isFree: true, periods: period,  isCommon: isCommon})
                }
            }
        })
        schedule.push({time: hoursName, slots: daySlot})
    })

    return schedule
}

