import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/FakeAuthContext';
import { useEffect } from 'react';

function ProtectedRoute({ children }) {
    const { isAunthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAunthenticated) navigate('/');
    }, [isAunthenticated, navigate]);

    return isAunthenticated ? children : null;
}

export default ProtectedRoute;
