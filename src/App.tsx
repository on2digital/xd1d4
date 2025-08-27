import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Layout from './components/Layout/Layout';
import LoginForm from './components/Auth/LoginForm';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import Cases from './pages/Cases';
import Documents from './pages/Documents';
import Research from './pages/Research';
import TimeTrackingPage from './pages/TimeTracking';
import ClientPortalPage from './pages/ClientPortal';

const AppContent: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-blue-700 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <LoginForm />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
        <Route path="/cases" element={
          <ProtectedRoute requiredRoles={['chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk']}>
            <Cases />
          </ProtectedRoute>
        } />
        <Route path="/documents" element={
          <ProtectedRoute requiredRoles={['chamber_admin', 'senior_lawyer', 'junior_lawyer', 'clerk']}>
            <Documents />
          </ProtectedRoute>
        } />
        <Route path="/research" element={
          <ProtectedRoute requiredRoles={['chamber_admin', 'senior_lawyer', 'junior_lawyer']}>
            <Research />
          </ProtectedRoute>
        } />
        <Route path="/time" element={
          <ProtectedRoute requiredRoles={['chamber_admin', 'senior_lawyer', 'junior_lawyer']}>
            <TimeTrackingPage />
          </ProtectedRoute>
        } />
        <Route path="/client-portal" element={
          <ProtectedRoute requiredRoles={['client']}>
            <ClientPortalPage />
          </ProtectedRoute>
        } />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            className: 'text-sm',
          }}
        />
      </Router>
    </AuthProvider>
  );
}

export default App;