import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    line-height: ${props => props.theme.lineHeights.normal};
    color: ${props => props.theme.colors.text};
    background-color: ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: ${props => props.theme.space[4]};
    color: ${props => props.theme.colors.primary};
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: ${props => props.theme.lineHeights.tight};
  }

  h1 {
    font-size: ${props => props.theme.fontSizes['4xl']};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes['3xl']};
    }
  }

  h2 {
    font-size: ${props => props.theme.fontSizes['3xl']};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes['2xl']};
    }
  }

  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSizes.xl};
    }
  }

  h4 {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  h5 {
    font-size: ${props => props.theme.fontSizes.lg};
  }

  h6 {
    font-size: ${props => props.theme.fontSizes.md};
  }

  p {
    margin-bottom: ${props => props.theme.space[4]};
  }

  a {
    color: ${props => props.theme.colors.link};
    text-decoration: none;
    transition: ${props => props.theme.transitions.default};
    
    &:hover {
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-bottom: ${props => props.theme.space[4]};
    padding-left: ${props => props.theme.space[6]};
  }

  li {
    margin-bottom: ${props => props.theme.space[2]};
  }

  code {
    font-family: ${props => props.theme.fonts.code};
    background-color: ${props => props.theme.colors.codeBackground};
    padding: ${props => props.theme.space[1]} ${props => props.theme.space[2]};
    border-radius: ${props => props.theme.radii.sm};
    font-size: 0.9em;
  }

  pre {
    background-color: ${props => props.theme.colors.codeBackground};
    padding: ${props => props.theme.space[4]};
    border-radius: ${props => props.theme.radii.md};
    overflow-x: auto;
    margin-bottom: ${props => props.theme.space[6]};
    font-family: ${props => props.theme.fonts.code};
    
    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: ${props => props.theme.fonts.body};
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.space[4]};
  }

  section {
    padding: ${props => props.theme.space[12]} 0;
    
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
      padding: ${props => props.theme.space[8]} 0;
    }
  }
  
  /* Add smooth scrolling for anchor links */
  html {
    scroll-behavior: smooth;
  }
  
  /* Add styles for highlighted text */
  ::selection {
    background-color: ${props => props.theme.colors.primary};
    color: white;
  }
`;

export default GlobalStyle; 