import { useState } from "react";
import styled from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MoveiCard from "./components/MoveiCard";

const Page = styled.div`
  min-height: 100vh;
  background: #0a0a0f;
  color: #fff;
  font-family: 'Inter', sans-serif;
`;

const Main = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2.5rem;
`;

const Hero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const HeroTitle = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  span { color: #e5001a; }
`;

const HeroSub = styled.p`
  color: #9ca3af;
  font-size: 1rem;
`;

const SearchRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 3rem;
`;

const Input = styled.input`
  width: 420px;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 40px;
  padding: 14px 24px;
  color: #fff;
  font-size: 0.95rem;
  outline: none;
  font-family: inherit;

  &::placeholder { color: #6b7280; }
  &:focus {
    border-color: rgba(229,0,26,0.5);
    box-shadow: 0 0 0 3px rgba(229,0,26,0.1);
  }
`;

const RecommendBtn = styled.button`
  background: #e5001a;
  color: #fff;
  border: none;
  border-radius: 40px;
  padding: 14px 28px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  font-family: inherit;

  &:hover { opacity: 0.85; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

const SectionTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #f1f1f1;
  span { color: #e5001a; }
`;

const CardsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 4rem;
  color: #6b7280;
  font-size: 0.95rem;
`;

const ErrorMsg = styled.div`
  text-align: center;
  padding: 2rem;
  color: #e5001a;
  font-size: 0.9rem;
`;

export default function App() {
  const [movie, setMovie] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState("");
  const [error, setError] = useState("");
  const [watchlist, setWatchlist] = useState([]);

  const getRecommendations = async () => {
    if (!movie.trim()) return;
    setLoading(true);
    setError("");
    setResults([]);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/recommend/?movie=${encodeURIComponent(movie)}`
      );
      const data = await res.json();

      if (!data.recommendations || data.recommendations.length === 0) {
        setError(`No results found for "${movie}". Try "Avatar" or "Inception".`);
      } else {
        // Map title strings into MoveiCard format
        const formatted = data.recommendations.map((title) => ({
          title,
          year: "—",
          rating: "N/A",
          poster: null,
        }));
        setResults(formatted);
        setSearched(movie);
      }
    } catch (err) {
      setError("Could not connect to backend. Make sure Django is running.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") getRecommendations();
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prev) =>
      prev.find((m) => m.title === movie.title) ? prev : [...prev, movie]
    );
  };

  return (
    <Page>
      <Header watchlistCount={watchlist.length} />

      <Main>
        <Hero>
          <HeroTitle>Find your next <span>favourite film</span></HeroTitle>
          <HeroSub>Powered by real ML — TF-IDF + cosine similarity on 5000 movies</HeroSub>
        </Hero>

        <SearchRow>
          <Input
            placeholder='Try "Inception", "Avatar", "The Dark Knight"...'
            value={movie}
            onChange={(e) => setMovie(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <RecommendBtn onClick={getRecommendations} disabled={loading}>
            {loading ? "Finding..." : "Recommend"}
          </RecommendBtn>
        </SearchRow>

        {error && <ErrorMsg>{error}</ErrorMsg>}

        {results.length > 0 && (
          <>
            <SectionTitle>
              Because you liked <span>{searched}</span>
            </SectionTitle>
            <CardsGrid>
              {results.map((m, i) => (
                <MoveiCard key={i} movie={m} onAddToWatchlist={addToWatchlist} />
              ))}
            </CardsGrid>
          </>
        )}

        {results.length === 0 && !loading && !error && (
          <EmptyState>Search a movie above to get recommendations</EmptyState>
        )}
      </Main>

      <Footer />
    </Page>
  );
}