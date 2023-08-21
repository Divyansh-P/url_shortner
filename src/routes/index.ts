import express from 'express';
import Url from '../model/Url';
const router = express.Router();

router.get('/:urlId', async (req, res) => {
  try {
    const url = await Url.findOne({ urliD: req.params.urlId });
    if (url) {
      await Url.updateOne(
        {
          urliD: req.params.urlId,
        },
        { $inc: { clicks: 1 } }
      );
      return res.redirect(url.origurl);
    } else res.status(404).json('Not found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server Error');
  }
});

export default router;