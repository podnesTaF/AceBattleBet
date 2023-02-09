import {useEffect, useState} from "react";
import {Api} from "@/api";
import {ResponseCompNames} from "@/models/competitions";

export const useCompetitions = () => {
    const [competitions, setCompetitions] = useState<{
        id: number,
        attributes: {
            name: string
        }
    }[]>();

    useEffect(() => {
        (async () => {
            try {
                const arr = await Api().competition.getCompNames();
                setCompetitions(arr)
            } catch (err) {
                console.warn('Competitions fetching', err)
            }
        })()
    }, [])

    return {competitions, setCompetitions} as const
}