const theme = {
  colors: {
    primary: '#2563eb',         // Bright blue - primary brand color
    secondary: '#4f46e5',       // Indigo - secondary brand color
    accent: '#10b981',          // Emerald - accent color for highlights
    background: '#ffffff',      // White background
    darkBackground: '#f8fafc',  // Light gray for alternating sections
    text: '#1e293b',            // Slate dark for main text
    lightText: '#64748b',       // Slate medium for secondary text
    link: '#2563eb',            // Same as primary for consistency
    codeBackground: '#f1f5f9',  // Very light slate for code blocks
    navBackground: '#1e293b',   // Slate dark for navbar
    navText: '#ffffff',         // White for navbar text
    footerBackground: '#0f172a', // Slate darker for footer
    footerText: '#e2e8f0',      // Slate lightest for footer text
    success: '#10b981',         // Emerald for success messages
    warning: '#f59e0b',         // Amber for warnings
    error: '#ef4444',           // Red for errors
    info: '#3b82f6',            // Blue for info
  },
  fonts: {
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    code: "'Source Code Pro', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  space: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },
  breakpoints: {
    mobile: '576px',
    tablet: '768px',
    desktop: '992px',
    largeDesktop: '1200px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
  radii: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  transitions: {
    default: 'all 0.3s ease',
    fast: 'all 0.15s ease',
    slow: 'all 0.5s ease',
  }
};

export default theme; 