import React, {useEffect} from 'react';
import MainLayout from "@/layouts/MainLayout";
import axios from "axios";
import Matches from "@/components/competition/Matches/index";
import CompetitionIntro from "@/components/competition/CompetitionIntro";


const Competition = () => {
    const [competition, setCompetition] = React.useState(null)



    return (
        <MainLayout>
            <main className='bg-black h-full'>
                <CompetitionIntro />
                <Matches />
            </main>
        </MainLayout>
    );
};

export default Competition;
