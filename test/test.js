var profilePicture = require('../profilePicture');

var $ = window.$;
var _ = window._;

$('body').append(
  profilePicture.get($, _, {
    name: ['Matthew', 'Branthwaite']
  }),
  profilePicture.get($, _, {
    name: ['Outraged', 'Potato']
  }).addClass('check'),
  profilePicture.get($, _, {
    name: ['Other', 'Guy'],
    imgUrl: '/backgroundImg.JPG'
  }).addClass('times')
);
