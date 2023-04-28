import { useState } from 'react'
import apiUtils from "../utils/apiUtils"
import uuid from 'react-uuid';

const ViewOne = () => {
    const [students, setStudents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const URL = apiUtils.getUrl()

    const getStudents = async () => {
        try {
            const response = await apiUtils.http().get(URL + '/top')
            setStudents(response.data)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="center">
            <h1>Get Students</h1>
            <button onClick={getStudents} className="btn btn-primary">Get students</button>
            {!isLoading ? <ul>{students.map((student) => <li className="students" key={uuid()}> Name: {student.name} Score: {student.score}</li>)}</ul>
                : <br></br>}
        </div >
    )
}

export default ViewOne