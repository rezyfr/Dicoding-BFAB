const mapDBToSong = ({
  id,
  title,
  performer,
}) => ({
  id,
  title,
  performer,
});

const mapDBToSongDetail = ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  inserted_at,
  updated_at,
}) => ({
  id,
  title,
  year,
  performer,
  genre,
  duration,
  insertedAt: inserted_at,
  updatedAt: updated_at,
});

module.exports = { mapDBToSong, mapDBToSongDetail };
