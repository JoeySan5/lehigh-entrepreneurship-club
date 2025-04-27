import React, { FC } from 'react';
import Head from 'next/head';

const CalendarIcon: FC = () => (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="14" width="64" height="58" rx="4" fill="#F0F2F5" stroke="#4A90E2" strokeWidth="2" />
        <rect x="8" y="14" width="64" height="16" fill="#4A90E2" />
        <path d="M20 8V20" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 8V20" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 38H32M48 38H60M20 52H32M48 52H60" stroke="#4A90E2" strokeWidth="2" strokeLinecap="round" />
        <circle cx="40" cy="52" r="6" fill="#FFAB40" />
        <path d="M38 51L40 53L42 51" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const SocialIcon: FC<{ type: string }> = ({ type }) => {
    switch (type) {
        case 'instagram':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 5.838C8.597 5.838 5.838 8.597 5.838 12C5.838 15.403 8.597 18.162 12 18.162C15.403 18.162 18.162 15.403 18.162 12C18.162 8.597 15.403 5.838 12 5.838ZM12 16C9.791 16 8 14.209 8 12C8 9.791 9.791 8 12 8C14.209 8 16 9.791 16 12C16 14.209 14.209 16 12 16Z" fill="#E1306C" />
                    <path d="M18.406 7.034C19.2014 7.034 19.846 6.38938 19.846 5.594C19.846 4.79861 19.2014 4.154 18.406 4.154C17.6106 4.154 16.966 4.79861 16.966 5.594C16.966 6.38938 17.6106 7.034 18.406 7.034Z" fill="#E1306C" />
                </svg>
            );
        case 'linkedin':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z" fill="#0077B5" />
                </svg>
            );
        case 'groupme':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.999 3C7.029 3 3 7.029 3 12.000C3 16.971 7.029 21 11.999 21C16.97 21 21 16.971 21 12.000C21 7.029 16.97 3 11.999 3Z" fill="#00AFF0" />
                    <path d="M11.999 15.092C8.78 15.092 6.167 13.434 6.167 11.346C6.167 9.259 8.78 7.601 11.999 7.601C15.219 7.601 17.831 9.259 17.831 11.346C17.831 13.434 15.219 15.092 11.999 15.092ZM8.207 12.433C8.207 12.015 7.82 11.677 7.339 11.677C6.858 11.677 6.471 12.015 6.471 12.433C6.471 12.85 6.858 13.189 7.339 13.189C7.82 13.189 8.207 12.85 8.207 12.433ZM10.471 10.374C10.471 9.956 10.084 9.618 9.603 9.618C9.122 9.618 8.735 9.956 8.735 10.374C8.735 10.792 9.122 11.13 9.603 11.13C10.084 11.13 10.471 10.792 10.471 10.374ZM13.527 10.374C13.527 9.956 13.14 9.618 12.659 9.618C12.178 9.618 11.791 9.956 11.791 10.374C11.791 10.792 12.178 11.13 12.659 11.13C13.14 11.13 13.527 10.792 13.527 10.374ZM15.791 12.433C15.791 12.015 15.404 11.677 14.923 11.677C14.442 11.677 14.055 12.015 14.055 12.433C14.055 12.85 14.442 13.189 14.923 13.189C15.404 13.189 15.791 12.85 15.791 12.433Z" fill="white" />
                </svg>
            );
        default:
            return null;
    }
};

const backgroundImageStyle: React.CSSProperties = {
   position: 'absolute',
   top: 0, left: 0,
   width: '100%', height: '100%',
   objectFit: 'cover',
   zIndex: 1,
 };

// Put social links below
const JoinNow: FC = () => {
    const socialLinks = [
        { id: 'instagram', url: 'https://www.instagram.com/lehighlec/', title: 'Follow us on Instagram' },
        { id: 'linkedin', url: 'https://www.linkedin.com/in/lehigh-entrepreneurship-club-631458352/', title: 'Connect with us on LinkedIn' },
        { id: 'groupme', url: 'https://groupme.com/join_group/96241654/MNNdbAj5', title: 'Join our GroupMe' },
    ];
    // Put calendar link below
    const calendarUrl = 'https://calendar.google.com/calendar/u/0?cid=bGVoaWdoLm52Y0BnbWFpbC5jb20';

    const containerStyle: React.CSSProperties = {
        height: '100vh',
        width: '100vw',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        overflow: 'hidden',
    };

    const contentWrapperStyle: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1fr 350px 1fr', // CONTROLS MIDDLE COLUMN SIZE HERE
        width: '95%',
        maxWidth: '1480px',
        gap: '20px',
        height: '90vh',
        position: 'relative',
        zIndex: 2,
    };

    const panelStyle: React.CSSProperties = {
        height: '100%',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        background: 'transparent',
        borderRadius: '16px',
        overflow: 'hidden',
    };

    const titleStyle: React.CSSProperties = {
        fontSize: '3rem',
        color: 'white', 
        marginBottom: '0.5rem',
        fontWeight: 'bold', 
    };

    const subtitleStyle: React.CSSProperties = {
        fontSize: '1.5rem',
        color: 'white', 
        marginBottom: '2rem',
    };

    const joinTitleStyle: React.CSSProperties = {
        fontSize: '1.8rem',
        color: 'white',
        marginBottom: '1.5rem',
        fontWeight: 'bold', 
    };

    const formStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    };

    const inputStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        backgroundColor: 'white',
        transition: 'border-color 0.3s',
        color: 'black',
    };

    const buttonStyle: React.CSSProperties = {
        width: '100%',
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4a90e2',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    };

    const socialSectionStyle: React.CSSProperties = {
        marginTop: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const socialTextStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: 'white', 
        marginBottom: '0.5rem',
    };

    const socialIconsStyle: React.CSSProperties = {
        display: 'flex',
        gap: '1rem',
    };

    const socialLinkStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48px',
        height: '48px',
        backgroundColor: '#f5f5f5',
        borderRadius: '50%',
        transition: 'transform 0.2s, background-color 0.2s',
    };

    const centerSpacerStyle: React.CSSProperties = {
        height: '100%',
        background: 'transparent', 
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '16px',
    };

    const handshakeImageStyle: React.CSSProperties = {
        width: '100%',
        maxWidth: '180px',
        height: 'auto',
        display: 'block',
        margin: '0 auto',
        position: 'relative',
        zIndex: 2,
    };

    const calendarSectionStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
    };

    const calendarTitleStyle: React.CSSProperties = {
        fontSize: '1.8rem',
        color: 'white', 
        marginBottom: '1.5rem',
        fontWeight: 'bold',
    };

    const calendarLinkStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#4a90e2',
        transition: 'transform 0.2s',
        marginBottom: '1.5rem',
    };

    const calendarLinkTextStyle: React.CSSProperties = {
        marginTop: '0.5rem',
        fontWeight: 500,
        color: 'white', 
    };

    const calendarDescriptionStyle: React.CSSProperties = {
        fontSize: '1rem',
        color: 'white', 
        maxWidth: '80%',
    };

    const joinButtonStyle: React.CSSProperties = {
      display: 'inline-block',
      padding: '1rem 2rem',
      fontSize: '1.25rem',
      fontWeight: 600,
      color: '#fff',
      backgroundColor: '#FF8C00',        // your hex-changeable orange
      border: 'none',
      borderRadius: '999px',              // full pill
      cursor: 'pointer',
      textDecoration: 'none',             // for <a>
      userSelect: 'none',
      transition: 'transform 0.1s ease',
    };
    
    const joinButtonActiveStyle: React.CSSProperties = {
      transform: 'scale(0.95)',           // quick “press” animation
    };

    return (
        <div style={containerStyle}>
            <img
              src="/images/background.png"
              alt="Background decoration"
              style={backgroundImageStyle}
            />
            <div style={contentWrapperStyle}>
                <div style={{ ...panelStyle }}>
                    <h1 style={titleStyle}>Welcome!</h1>
                    <p style={subtitleStyle}>Join our community to get started.</p>

                    <div style={joinButtonStyle}>
                      <a
                        href="https://lehigh.campuslabs.com/engage/organization/lec"
                        style={joinButtonStyle}
                      >
                        Join Now
                      </a>
                    </div>

                    <div style={socialSectionStyle}>
                        <p style={socialTextStyle}>Connect with us:</p>
                        <div style={socialIconsStyle}>
                            {socialLinks.map(social => (
                                <a
                                    key={social.id}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={socialLinkStyle}
                                    title={social.title}
                                >
                                    <SocialIcon type={social.id} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div style={centerSpacerStyle}>
                </div>

                <div style={{ ...panelStyle, ...calendarSectionStyle }}>
                    <h2 style={calendarTitleStyle}>See upcoming events</h2>
                    <a
                        href={calendarUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={calendarLinkStyle}
                        title="View our calendar"
                    >
                        <CalendarIcon />
                        <span style={calendarLinkTextStyle}>Open Calendar</span>
                    </a>
                    <p style={calendarDescriptionStyle}>
                        Stay up to date with all our upcoming meetings, workshops, and social gatherings.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Home() {
    return (
        <>
            <Head>
                <title>Join Now | Our Community</title>
                <meta name="description" content="Join our community and stay up to date with all our upcoming events." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <JoinNow />
        </>
    );
}

