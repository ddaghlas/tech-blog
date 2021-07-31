const router = require('express').Router();
const {Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    // Get all events and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User, as: 'author',
          attributes: ['username'],
        },
      ],
    });

    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    // User is not required to be logged in to view the homepage
    res.render('homepage', {
      posts: {...posts},
      logged_in: req.session.logged_in
    });

    // res.status(200).json(events);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User, as: 'author',
          attributes: { exlude: ['password']},
        },
        {
          model: Comment,
          include: [
            {
              model: User, as: 'commenter',
              attributes: ['username'],
            },
          ],
        },
      ],
    });

    // Serializing the data so the template can read it
    const post = postData.get({ plain: true });
    console.dir(post);

    // Pass serialized data and session flag into template
    // User must be logged in
    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });

    // res.status(200).json(event);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    console.log(`user_id = ${req.session.user_id}`);
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password']},
      include: [{ model: Post}],
    });

    const users = userData.get({ plain: true });

    res.render('dashboard', {
      ...users,
      logged_in: req.session.logged_in
    });

  // res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newPost', withAuth, async (req, res) => {
  try {
    // console.log(`user_id = ${req.session.user_id}`);
    // // Find the logged in user based on the session ID
    // const userData = await User.findByPk(req.session.user_id, {
    //   attributes: { exclude: ['password']},
    //   include: [{ model: Post}],
    // });

    // const users = userData.get({ plain: true });

    res.render('newPost', {
      logged_in: req.session.logged_in
    });
  
  // res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }

    res.render('signup');
});

module.exports = router;