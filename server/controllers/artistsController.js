import { models } from '../models/model.js';

const artistsController = {};

artistsController.getTopArtists = async (req, res, next) => {
  try {
    const topArtists = await models.getTopArtists();
    res.locals.topArtists = topArtists;
    return next();

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

artistsController.getTopArtistsByYear = async (req, res, next) => {
  const { year } = req.query;
  try {
    const topArtistsByYear = await models.getTopArtistsByYear(year);
    res.locals.topArtistsByYear = topArtistsByYear;
    return next();

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

artistsController.getTopArtistsByYearByMonth = async (req, res, next) => {
  const { year } = req.query;
  try {
    const topArtistsByYearByMonth = await models.getTopArtistsByYearByMonth(year);
    res.locals.topArtistsByYearByMonth = topArtistsByYearByMonth;
    return next();

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


export default artistsController;
