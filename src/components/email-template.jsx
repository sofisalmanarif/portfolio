// 'use client'
import Link from 'next/link';
import * as React from 'react';



export const EmailTemplate = ({ name, message, email }) => (
    <div style={{
        fontFamily: 'Arial, sans-serif',
        color: '#333',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ddd',
        borderRadius: '8px',
      }}
    >
      <h2 style={{ color: '#007bff', textAlign: 'center' }}>Hello, {name}!</h2>
  
      <p style={{
          fontSize: '16px',
          lineHeight: '1.5',
          color: '#555',
          marginBottom: '20px',
        }}
      >
        {message}
      </p>
  
      <hr style={{ border: 'none', borderTop: '1px solid #eee' }} />
  
      <footer style={{
          fontSize: '14px',
          color: '#888',
          textAlign: 'center',
          marginTop: '20px',
        }}
      >
        <p>Contact: <a href={`mailto:${email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{email}</a></p>
      </footer>
    </div>
  );
  
