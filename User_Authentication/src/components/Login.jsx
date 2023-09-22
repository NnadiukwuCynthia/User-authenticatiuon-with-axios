import { useEffect, useState, useRef } from 'react';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef()

    const [userName, setUserName] = useState('');
    const [Pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        setErrMsg('');
    }, [userName, Pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setPwd('');
        setUserName('');
        console.log(userName, Pwd);
    }
  return (
    <>
    <section>
            <p ref={errRef} className={errMsg ? 'errMsg' : 'offScreen'} aria-live='assertive'>
                {errMsg}
            </p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
             type="text"
             id="username"
             ref={userRef}
             autoComplete='off'
             value={userName}
             onChange={(e) => setUserName(e.target.value)}
             required
             />
        </form>
    </section>
    </>
  )
};

export default Login;