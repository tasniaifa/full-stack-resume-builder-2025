import { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';

const Signup = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

   // Function to handle sign-up with Google
   const signUpWithGoogle = async () => {
    setAuthing(true);
    
    // Use Firebase to sign up with Google
    signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
            navigate('/Login');
        })
        .catch(error => {
            console.log(error);
            setAuthing(false);
        });
};

    const signUpWithEmail = async () => {
        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setAuthing(true);
        setError('');

        createUserWithEmailAndPassword(auth, email, password)
            .then(response => {
                console.log(response.user.uid);
                navigate('/Login');
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                setAuthing(false);
            });
    };

    return (
        <div className='w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800'>
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.6 }}
                className='w-full max-w-md p-8 bg-gray-950 shadow-lg rounded-lg backdrop-blur-lg bg-opacity-90 border border-gray-700'>
                <h3 className='text-4xl font-bold text-white mb-4 text-center'>Create Account</h3>
                <p className='text-gray-400 text-center mb-6'>Sign up to get started</p>
                
                <div className='w-full flex flex-col mb-6'>
                    <input
                        type='email'
                        placeholder='Email'
                        className='w-full py-3 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                    <input
                        type='password'
                        placeholder='Password'
                        className='w-full py-3 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                    <input
                        type='password'
                        placeholder='Confirm Password'
                        className='w-full py-3 px-4 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4'
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                {error && <div className='text-red-500 mb-4 text-sm text-center'>{error}</div>}

                <button
                    className='w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg p-3 text-center transition duration-300'
                    onClick={signUpWithEmail}
                    disabled={authing}>
                    Sign Up
                </button>
                
                <div className='w-full flex items-center justify-center relative my-6'>
                    <div className='w-full h-[1px] bg-gray-600'></div>
                    <p className='absolute text-gray-400 bg-gray-950 px-2'>OR</p>
                </div>
                
                <button
                    className='w-full bg-white text-gray-900 font-semibold rounded-lg p-3 text-center flex items-center justify-center gap-3 transition duration-300 hover:bg-gray-100'
                    onClick={signUpWithGoogle}
                    disabled={authing}>
                    <FcGoogle size={24} /> Sign Up With Google
                </button>
                
                <div className='text-center mt-6'>
                    <p className='text-gray-400'>Already have an account? <a href='/login' className='text-indigo-400 hover:underline'>Log In</a></p>
                </div>
            </motion.div>
        </div>
    );
}

export default Signup;
