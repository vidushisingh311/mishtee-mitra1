"use client";

import React, { useState, useEffect } from 'react';

/**
 * mishTee Delivery Mitra - Unified Mobile Dashboard
 * Built for Next.js (App Router)
 * All logic and design contained in a single block for easy copying.
 */

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Logic for the pulsing status indicator
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // UI Component Styles
  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    minHeight: '100vh',
    backgroundColor: '#FFFFFF',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
    boxSizing: 'border-box',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
  };

  const logoStyle = {
    width: '80px',
    height: 'auto',
    marginBottom: '10px',
  };

  const titleStyle = {
    color: '#FF6B00',
    fontSize: '24px',
    fontWeight: '800',
    margin: '0 0 20px 0',
    textAlign: 'center',
  };

  const statusBadgeStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#F0FFF4',
    border: '1px solid #C6F6D5',
    padding: '8px 16px',
    borderRadius: '25px',
    marginBottom: '40px',
  };

  const dotStyle = {
    width: '10px',
    height: '10px',
    backgroundColor: '#38A169',
    borderRadius: '50%',
    marginRight: '10px',
    opacity: isPulsing ? 1 : 0.4,
    boxShadow: isPulsing ? '0 0 8px #38A169' : 'none',
    transition: 'all 0.5s ease-in-out',
  };

  const statusTextStyle = {
    color: '#2F855A',
    fontSize: '14px',
    fontWeight: '600',
  };

  const cardStyle = {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: '15px',
    padding: '24px',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
    border: '1px solid #F0F0F0',
    marginBottom: '40px',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    color: '#718096',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    fontWeight: '700',
    display: 'block',
    marginBottom: '8px',
  };

  const valueStyle = {
    color: '#1A202C',
    fontSize: '20px',
    fontWeight: '700',
  };

  const buttonStyle = {
    width: '100%',
    backgroundColor: '#FF6B00',
    color: '#FFFFFF',
    border: 'none',
    borderRadius: '12px',
    padding: '20px',
    fontSize: '18px',
    fontWeight: '700',
    cursor: 'pointer',
    marginTop: 'auto',
    boxShadow: '0 4px 15px rgba(255, 107, 0, 0.3)',
    transition: 'transform 0.1s ease',
  };

  return (
    <div style={{ backgroundColor: '#F7FAFC', minHeight: '100vh' }}>
      <main style={containerStyle}>
        {/* Branding */}
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee logo" 
          style={logoStyle}
        />
        <h1 style={titleStyle}>mishTee Delivery Mitra</h1>

        {/* Live Status */}
        <div style={statusBadgeStyle}>
          <div style={dotStyle}></div>
          <span style={statusTextStyle}>Agent Online</span>
        </div>

        {/* Task Details */}
        <div style={cardStyle}>
          <span style={labelStyle}>Current Task</span>
          <div style={valueStyle}>Deliver to: Arjun Mehta</div>
          <div style={{ marginTop: '15px', color: '#4A5568', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}>📍</span> 
            Sector 7, HSR Layout, Bangalore
          </div>
        </div>

        {/* Navigation Action */}
        <button 
          style={buttonStyle}
          onClick={() => window.open('https://maps.google.com', '_blank')}
          onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
          onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Start Navigation
        </button>

        {/* Footer info */}
        <footer style={{ marginTop: '30px', color: '#A0AEC0', fontSize: '12px' }}>
          App Version 2.1.0 • Secure Session
        </footer>
      </main>
    </div>
  );
}
