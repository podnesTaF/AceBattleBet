import {IPbs} from "@/utils/types/teams";
import {getMin} from "@/utils/time";

export const getMilePb = (pbs: IPbs[]) => {
    const mile = pbs.find(pb => pb.distance === 1609)
    if(!mile) {
        return 'debut'
    } else {
        return getMin(mile.time)
    }
}