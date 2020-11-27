import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import {RecordsResponse} from './types';
import {formatDate} from './helps';
import Pagination from './Pagination';

const BASE_URL = 'http://localhost:8080'

const Records = () =>{
    const [ recordsResponse, setRecordsResponse]=useState<RecordsResponse>();
    const [activePage , setActivePage] = useState(0);
   
    useEffect(()=>{
        axios.get( `${BASE_URL}/records?linesPerPage=12&page${activePage}` )
        .then(response => setRecordsResponse(response.data)); 
    }, [activePage]);

    const handlePageChanges = (index: number) => {
        setActivePage(index);
    } 


    return (
        <div className = "page-container">
            <table className = "records-table" cellPadding="0" cellSpacing ="0">
                <thead>
                    <tr>
                        <th>
                            INSTANT
                        </th>
                        <th>
                            HOME
                        </th>
                        <th>
                            IDADE
                        </th>
                        <th>
                            PLATAFORMA
                        </th>
                        <th>
                            GENERO
                        </th>
                        <th>
                            TITULO DO GAME
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {recordsResponse?.content.map(Records=> (

                    <tr key={Records.id}>
                        <td>{formatDate(Records.moment)}</td>
                        <td>{Records.name}</td>
                        <td>{Records.age}</td>
                        <td className="text-secondary">{Records.gamePlatform}</td>
                        <td>{Records.genreName}</td>
                        <td className = "text-primary">{Records.gameTitle}</td>
                    </tr>
                    ))};
                    
                    
                </tbody>
            </table>
                <Pagination 
                activePage={activePage}
                goToPage={handlePageChanges}
                totalPages={recordsResponse?.totalPages}
                
                />
        </div>
    );
}


export default Records;