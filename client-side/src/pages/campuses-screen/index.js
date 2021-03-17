import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import CampusList from '../../components/campus-list';
import LoadingIndicatorSpinner from '../../components/loading';


const CampusesScreen = () => {
    const campusesUrl = 'http://localhost:8080/campuses',
        [campuses, setCampuses] = useState(null),
        [isLoading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            const result = await Axios(campusesUrl);
            console.log(result);
            setCampuses(result.data);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
        fetchData();
    }, []);


    return (
        <div>
            {isLoading ? <LoadingIndicatorSpinner /> :
                <CampusList campuses={campuses} />}
        </div>
    )
}
export default CampusesScreen;