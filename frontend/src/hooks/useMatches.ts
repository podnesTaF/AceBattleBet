import {useEffect, useState} from "react";
import {IMatch} from "@/utils/types/match";
import {Api} from "@/api";

export const useMatches = () => {
    const [matches, setMatches] = useState<IMatch[]>([]);

    useEffect(() => {
        (async () => {
            try {

                const arr = await Api().match.getAll()
                setMatches(arr)
            } catch (err) {
                console.warn('Matches fetching', err)
            }
        })()
    }, [])

    return {matches, setMatches} as const
}