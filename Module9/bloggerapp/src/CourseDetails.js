import { courses } from "./Data";

function CourseDetails() {

    return (
        <div>
            <h2>Course Details</h2>

            {
                courses.map(course => (
                    <div key={course.id}>
                        <h1>{course.cname}</h1>
                        <h4>{course.date}</h4>
                    </div>
                ))
            }

        </div>
    );
}

export default CourseDetails;