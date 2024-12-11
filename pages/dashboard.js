import { useSession } from 'next-auth/react';
import styles from '../styles/Home.module.css';

const Dashboard = () => {
    const { data: session } = useSession();

    // Sample data for demonstration
    const attendancePercentage = 90; // Example attendance percentage
    const grades = [
        { subject: 'Math', grade: 'A' },
        { subject: 'Science', grade: 'B+' },
        { subject: 'English', grade: 'A-' },
    ];
    const assignments = [
        { title: 'Math Homework', dueDate: '2024-12-15' },
        { title: 'Science Project', dueDate: '2024-12-20' },
    ];
    const schedule = [
        { day: 'Monday', classes: ['Math', 'Science'] },
        { day: 'Tuesday', classes: ['English', 'History'] },
    ];

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Student Dashboard</h1>
                {session ? (
                    <div className={styles.dashboard}>
                        <h2>Welcome, {session.user.name}!</h2>
                        <div className={styles.dashboardGrid}>
                            <div className={styles.dashboardCard}>
                                <h3>Attendance</h3>
                                <p>{attendancePercentage}% Attendance</p>
                            </div>
                            <div className={styles.dashboardCard}>
                                <h3>Grades</h3>
                                <ul>
                                    {grades.map((grade, index) => (
                                        <li key={index}>
                                            {grade.subject}: {grade.grade}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.dashboardCard}>
                                <h3>Upcoming Assignments</h3>
                                <ul>
                                    {assignments.map((assignment, index) => (
                                        <li key={index}>
                                            {assignment.title} - Due: {assignment.dueDate}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.dashboardCard}>
                                <h3>Class Schedule</h3>
                                <ul>
                                    {schedule.map((day, index) => (
                                        <li key={index}>
                                            {day.day}: {day.classes.join(', ')}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Please log in to view your dashboard.</p>
                )}
            </main>
        </div>
    );
};

export default Dashboard;