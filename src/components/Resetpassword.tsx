import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, confirmPasswordReset } from 'firebase/auth';

const ResetPassword: React.FC = () => {
    const [newPassword, setNewPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [oobCode, setOobCode] = useState<string | null>(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const code = queryParams.get('oobCode');
        if (code) {
            setOobCode(code);
        } else {
            setMessage('Invalid or missing password reset code.');
        }
    }, [location]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!oobCode) return;

        const auth = getAuth();

        try {
            await confirmPasswordReset(auth, oobCode, newPassword);
            setMessage('Password has been reset successfully. You can now log in.');
            navigate('/login'); 
        } catch (error) {
            setMessage('Error resetting password. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="Enter new password"
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300"
                    >
                        Reset Password
                    </button>
                </form>
                {message && <p className="text-center text-red-500 mt-4">{message}</p>}
            </div>
        </div>
    );
};

export default ResetPassword;
