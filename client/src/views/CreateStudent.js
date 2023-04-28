import { useState } from 'react'
import apiUtils from "../utils/apiUtils"

const Two = () => {
    const [scores, setScores] = useState({ exam: 0, quiz: 0, homework: 0 });
    const [studentData, setStudentData] = useState({ name: "", scores: scores });

    const URL = apiUtils.getUrl()

    const updateStudentData = (event) => {
        setStudentData({ ...studentData, [event.target.id]: event.target.value })
        console.log(studentData);
    }

    const updateScores = (event) => {
        setScores({ ...scores, [event.target.id]: event.target.value })
        console.log(scores);
    }

    const create = async () => {
        await apiUtils.http().post(URL + '/create', student)
    }

    const student = {
        name: studentData.name, scores: [
            { score: parseInt(scores.exam), type: "exam" },
            { score: parseInt(scores.quiz), type: "quiz" },
            { score: parseInt(scores.homework), type: "homework" }
        ]
    }

    return (
        <div className="center">
            <h1>Create Student</h1>
            <form onChange={updateStudentData}>
                <div className="mb-3 form-input">
                    <label className="form-label">Student name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
            </form>

            <form onChange={updateScores}>
                <div className="mb-3 form-input">
                    <label className="form-label">Exam Score</label>
                    <input type="text" className="form-control" id="exam" />
                </div>
                <div className="mb-3 form-input">
                    <label className="form-label">Quiz Score</label>
                    <input type="text" className="form-control" id="quiz" />
                </div>
                <div className="mb-3 form-input">
                    <label className="form-label">Homework Score</label>
                    <input type="text" className="form-control" id="homework" />
                </div>
            </form>

            <button onClick={create} type="submit" className="btn btn-outline-secondary">Create Student</button>
        </div>
    )
}

export default Two