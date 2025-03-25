import { useState, useTransition, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: ${props => props.theme.colors.navBackground};
  color: ${props => props.theme.colors.navText};
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Logo = styled(Link)`
  color: ${props => props.theme.colors.navText};
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;

  img {
    height: 30px;
    margin-right: 10px;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.navBackground};
    padding: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: ${props => props.theme.colors.navText};
  text-decoration: none;
  font-weight: 500;
  
  &:hover {
    text-decoration: underline;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${props => props.theme.colors.navText};
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

// Search component
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    margin: 1rem 0 0;
  }
`;

const SearchInput = styled.input`
  padding: 0.6rem 1rem;
  border-radius: 20px;
  border: none;
  font-size: 0.9rem;
  width: 180px;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  transition: all 0.3s ease;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
  
  &:focus {
    outline: none;
    background-color: rgba(255, 255, 255, 0.25);
    width: 220px;
  }
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    
    &:focus {
      width: 100%;
    }
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 0.5rem;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;
  z-index: 100;
  display: ${props => (props.show ? 'block' : 'none')};
`;

const SearchResultItem = styled(Link)`
  display: block;
  padding: 0.75rem 1rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.colors.codeBackground};
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.colors.codeBackground};
    text-decoration: none;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  h4 {
    margin: 0 0 0.25rem;
    font-size: 1rem;
    color: ${props => props.theme.colors.primary};
  }
  
  p {
    margin: 0;
    font-size: 0.875rem;
    color: ${props => props.theme.colors.lightText};
  }
  
  span.highlight {
    background-color: rgba(16, 185, 129, 0.2);
    padding: 0.1rem 0.2rem;
    border-radius: 2px;
  }
`;

const NoResults = styled.div`
  padding: 1rem;
  text-align: center;
  color: ${props => props.theme.colors.lightText};
`;

// Sample search data - in a real app, this would come from your content
const searchData = [
  {
    id: 'getting-started-1',
    title: 'Installing Cypress',
    description: 'Learn how to install and set up Cypress in your project',
    path: '/getting-started#installation',
    category: 'getting-started'
  },
  {
    id: 'getting-started-2',
    title: 'Writing Your First Test',
    description: 'Step-by-step guide to writing your first Cypress test',
    path: '/getting-started#first-test',
    category: 'getting-started'
  },
  {
    id: 'commands-1',
    title: 'cy.visit()',
    description: 'Visit a URL in your application',
    path: '/commands#visit',
    category: 'commands'
  },
  {
    id: 'commands-2',
    title: 'cy.get()',
    description: 'Get one or more DOM elements by selector',
    path: '/commands#get',
    category: 'commands'
  },
  {
    id: 'commands-3',
    title: 'cy.contains()',
    description: 'Get elements containing specific text',
    path: '/commands#contains',
    category: 'commands'
  },
  {
    id: 'best-practices-1',
    title: 'Selecting Elements',
    description: 'Best practices for selecting elements in Cypress tests',
    path: '/best-practices#selecting-elements',
    category: 'best-practices'
  },
  {
    id: 'examples-1',
    title: 'Login Form Testing',
    description: 'Example of testing a login form with Cypress',
    path: '/examples#login-form',
    category: 'examples'
  },
  {
    id: 'resources-1',
    title: 'Official Documentation',
    description: 'Link to the official Cypress documentation',
    path: '/resources#official-docs',
    category: 'resources'
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [isPending, startTransition] = useTransition();
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length >= 2) {
      startTransition(() => {
        // Filter search results based on query
        const results = searchData.filter(item => 
          item.title.toLowerCase().includes(query.toLowerCase()) || 
          item.description.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setShowResults(true);
      });
    } else {
      setShowResults(false);
    }
  };

  const handleSearchItemClick = (path) => {
    setSearchQuery('');
    setShowResults(false);
    navigate(path);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close search results when route changes
  useEffect(() => {
    setShowResults(false);
    setSearchQuery('');
  }, [location.pathname]);

  // Highlight matching text in search results
  const highlightMatch = (text, query) => {
    if (!query || query.length < 2) return text;
    
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
  };

  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo to="/">
          <img src="/cypress-logo.png" alt="Cypress Logo" />
          Cypress Guide
        </Logo>
        
        <MenuButton onClick={toggleMenu}>
          {isOpen ? '✕' : '☰'}
        </MenuButton>
        
        <NavLinks isOpen={isOpen}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/getting-started">Getting Started</NavLink>
          <NavLink to="/commands">Commands</NavLink>
          <NavLink to="/best-practices">Best Practices</NavLink>
          <NavLink to="/examples">Examples</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          
          <SearchContainer ref={searchRef}>
            <SearchInput 
              type="text" 
              placeholder={isPending ? "Searching..." : "Search..."}
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search"
            />
            <SearchIcon>🔍</SearchIcon>
            
            <SearchResults show={showResults}>
              {searchResults.length === 0 ? (
                <NoResults>No results found for "{searchQuery}"</NoResults>
              ) : (
                searchResults.map(result => (
                  <SearchResultItem 
                    key={result.id} 
                    to={result.path}
                    onClick={() => handleSearchItemClick(result.path)}
                  >
                    <h4 dangerouslySetInnerHTML={{ 
                      __html: highlightMatch(result.title, searchQuery) 
                    }} />
                    <p dangerouslySetInnerHTML={{ 
                      __html: highlightMatch(result.description, searchQuery) 
                    }} />
                  </SearchResultItem>
                ))
              )}
            </SearchResults>
          </SearchContainer>
        </NavLinks>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar; 