import styled from "styled-components";

const Card = styled.div`
  flex: 0 0 auto;
  width: 220px;
  cursor: pointer;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-6px);
  }

  &:hover img {
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
  }
`;

const Poster = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  border-radius: 10px;
  overflow: hidden;
  background: #1a1a2e;
`;

const PosterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: box-shadow 0.25s ease;
  display: block;
`;

const PosterFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
`;

const WatchlistBadge = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s, background 0.2s;
  backdrop-filter: blur(4px);

  ${Card}:hover & {
    opacity: 1;
  }

  &:hover {
    background: rgba(229, 0, 26, 0.8);
    border-color: #e5001a;
  }
`;

const Info = styled.div`
  margin-top: 10px;
  padding: 0 2px;
`;

const Title = styled.h3`
  font-size: 0.95rem;
  font-weight: 600;
  color: #f1f1f1;
  margin: 0 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.82rem;
`;

const Year = styled.span`
  color: #9ca3af;
`;

const Rating = styled.span`
  color: #f59e0b;
  display: flex;
  align-items: center;
  gap: 3px;
  font-weight: 600;
`;

const MoveiCard = ({ movie, onAddToWatchlist }) => {
  const { title, year, rating, poster } = movie;

  return (
    <Card>
      <Poster>
        {poster ? (
          <PosterImg src={poster} alt={title} />
        ) : (
          <PosterFallback>🎬</PosterFallback>
        )}
        <WatchlistBadge
          onClick={(e) => {
            e.stopPropagation();
            onAddToWatchlist?.(movie);
          }}
          title="Add to Watchlist"
        >
          +
        </WatchlistBadge>
      </Poster>

      <Info>
        <Title>{title}</Title>
        <Meta>
          <Year>{year}</Year>
          <Rating>★ {rating}</Rating>
        </Meta>
      </Info>
    </Card>
  );
};

export default MoveiCard;
