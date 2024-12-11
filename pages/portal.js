import { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';

const Portal = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '', studentId: '' });
    const [isSignup, setIsSignup] = useState(false); // State to toggle between login and signup

    const handleLogin = async (e) => {
        e.preventDefault();
        const result = await signIn('credentials', {
            redirect: false,
            email: loginData.email,
            password: loginData.password,
        });

        if (result.error) {
            alert(result.error); // Show error message
        } else {
            router.push('/dashboard'); // Redirect to dashboard
        }
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(signupData),
            });
            const data = await res.json();

            if (res.ok) {
                alert('Signup successful! Please log in.');
                setIsSignup(false);
                setSignupData({ name: '', email: '', password: '', studentId: '' });
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Signup error:', error);
            alert('An error occurred during signup');
        }
    };

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {session && (
                    <button 
                        onClick={() => signOut({ callbackUrl: '/' })} 
                        className={styles.logoutButton}
                    >
                        Logout
                    </button>
                )}
            </header>
            <main className={styles.main}>
                <h1 className={styles.title}>Student Portal</h1>
                {status === 'loading' ? (
                    <div className={styles.loading}>Loading...</div>
                ) : !session ? (
                    <div className={styles.loginContainer}>
                        {!isSignup ? (
                            <>
                                <form onSubmit={handleLogin} className={styles.loginForm}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Student Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={loginData.email}
                                            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={loginData.password}
                                            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className={styles.loginButton}>
                                        Login
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsSignup(true)} 
                                        className={styles.switchButton}
                                    >
                                        Need an account? Sign up
                                    </button>
                                </form>
                            </>
                        ) : (
                            <>
                                <form onSubmit={handleSignup} className={styles.signupForm}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={signupData.name}
                                            onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="signupEmail">Email</label>
                                        <input
                                            type="email"
                                            id="signupEmail"
                                            name="email"
                                            value={signupData.email}
                                            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="studentId">Student ID</label>
                                        <input
                                            type="text"
                                            id="studentId"
                                            name="studentId"
                                            value={signupData.studentId}
                                            onChange={(e) => setSignupData({ ...signupData, studentId: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="signupPassword">Password</label>
                                        <input
                                            type="password"
                                            id="signupPassword"
                                            name="password"
                                            value={signupData.password}
                                            onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                            required
                                        />
                                    </div>
                                    <button type="submit" className={styles.loginButton}>
                                        Sign Up
                                    </button>
                                    <button 
                                        type="button" 
                                        onClick={() => setIsSignup(false)} 
                                        className={styles.switchButton}
                                    >
                                        Already have an account? Login
                                    </button>
                                </form>
                            </>
                        )}
                    </div>
                ) : (
                    <div className={styles.dashboard}>
                        <h2>Welcome, {session.user.name}!</h2>
                    </div>
                )}
            </main>
        </div>
    );
};

export default Portal;