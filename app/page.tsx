"use client";

import React, { useState, useEffect, CSSProperties } from 'react';

/**
 * mishTee Delivery Mitra - Final Type-Safe Dashboard
 * Optimized to pass 'npm run build' with strict TypeScript checks.
 */

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Defining styles directly with CSSProperties ensures TS validation
  const styles: Record<string, CSSProperties> = {
    wrapper: {
      backgroundColor: '#F7FAFC',
      minHeight: '100vh',
    },
    container: {
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
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '10px',
    },
    title: {
      color: '#FF6B00',
      fontSize: '24px',
      fontWeight: '800',
      margin: '0 0 20px 0',
      textAlign: 'center',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#F0FFF4',
      border: '1px solid #C6F6D5',
      padding: '8px 16px',
      borderRadius: '25px',
      marginBottom: '40px',
    },
    dot: {
      width: '10px',
      height: '10px',
      backgroundColor: '#38A169',
      borderRadius: '50%',
      marginRight: '10px',
      opacity: isPulsing ? 1 : 0.4,
      boxShadow: isPulsing ? '0 0 8px #38A169' : 'none',
      transition: 'all 0.5s ease-in-out',
    },
    statusText: {
      color: '#2F855A',
      fontSize: '14px',
      fontWeight: '600',
    },
    card: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: '15px',
      padding: '24px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
      border: '1px solid #F0F0F0',
      marginBottom: '40px',
      boxSizing: 'border-box',
    },
    label: {
      color: '#718096',
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      fontWeight: '700',
      display: 'block',
      marginBottom: '8px',
    },
    value: {
      color: '#1A202C',
      fontSize: '20px',
      fontWeight: '700',
    },
    button: {
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
    },
    footer: {
      marginTop: '30px',
      color: '#A0AEC0',
      fontSize: '12px',
    }
  };

  return (
    <div style={styles.wrapper}>
      <main style={styles.container}>
        <img 
          src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
          alt="mishTee logo" 
          style={styles.logo}
        />
        <h1 style={styles.title}>mishTee Delivery Mitra</h1>

        <div style={styles.statusBadge}>
          <div style={styles.dot}></div>
          <span style={styles.statusText}>Agent Online</span>
        </div>

        <div style={styles.card}>
          <span style={styles.label}>Current Task</span>
          <div style={styles.value}>Deliver to: Arjun Mehta</div>
          <div style={{ marginTop: '15px', color: '#4A5568', fontSize: '14px', display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: '5px' }}>📍</span> 
            Sector 7, HSR Layout, Bangalore
          </div>
        </div>

        <button 
          style={styles.button}
          onClick={() => window.open('https://maps.google.com', '_blank')}
        >
          Start Navigation
        </button>

        <footer style={styles.footer}>
          App Version 2.1.2 • Build Verified
        </footer>
      </main>
    </div>
  );
}
