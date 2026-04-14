import { useState } from "react";
import styled from "styled-components";

const Nav = styled.header`
  background: #0a0a0f;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0 2.5rem;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  flex-shrink: 0;
`;

const LogoIcon = styled.div`
  width: 36px;
  height: 36px;
  background: #e5001a;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  box-shadow: 0 0 16px rgba(229, 0, 26, 0.45);
`;

const LogoText = styled.span`
  font-family: 'Bebas Neue', 'Impact', sans-serif;
  font-size: 1.65rem;
  color: #fff;
  letter-spacing: 1.5px;
`;

const SearchWrapper = styled.div`
  flex: 1;
  max-width: 620px;
  margin: 0 2rem;
  position: relative;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
  font-size: 15px;
  pointer-events: none;
`;

const SearchInput = styled.input`
  width: 100%;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 40px;
  padding: 11px 20px 11px 44px;
  color: #fff;
  font-size: 0.88rem;
  outline: none;
  transition: all 0.25s;
  font-family: inherit;
  box-sizing: border-box;

  &::placeholder { color: #6b7280; }

  &:focus {
    border-color: rgba(229, 0, 26, 0.5);
    background: rgba(255, 255, 255, 0.09);
    box-shadow: 0 0 0 3px rgba(229, 0, 26, 0.1);
  }
`;

const WatchlistBtn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.2s;
  &:hover { opacity: 0.75; }
`;

const WatchlistLabel = styled.span`
  font-size: 0.72rem;
  color: #9ca3af;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const WatchlistCount = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
`;

const Header = ({ watchlistCount = 1, onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch?.(e.target.value);
  };

  return (
    <Nav>
      <Logo>
        <LogoIcon>🎬</LogoIcon>
        <LogoText>CineVault</LogoText>
      </Logo>

      <SearchWrapper>
        <SearchIcon>🔍</SearchIcon>
        <SearchInput
          placeholder="Search for movies, genres..."
          value={query}
          onChange={handleChange}
        />
      </SearchWrapper>

      <WatchlistBtn>
        <WatchlistLabel>Watchlist</WatchlistLabel>
        <WatchlistCount>{watchlistCount} movies</WatchlistCount>
      </WatchlistBtn>
    </Nav>
  );
};

export default Header;
