module.exports.get = getProfilePicture;

function getProfilePicture($, _, options) {
  var initials = '';
  options.name && _.map(options.name, function(namePart) {
    initials += namePart.substring(0,1);
  });

  var style = options.imgUrl && "background-image: url(" + options.imgUrl + ");" || "";
  var elt = $('<a>', {'class': 'ef-profile-image', target: '_blank', href: options.url || '#'}).append(
    $('<div>', {'style': style}).append(
      !options.imgUrl && $('<div>', {'class': 'ef-initials'}).append(initials),
      $('<a>', {'class': 'ef-times', target: '_blank', href: options.timeUrl || '#'}).append($('<i>', {'class': 'fa fa-times'})),
      $('<a>', {'class': 'ef-check', target: '_blank', href: options.checkUrl || '#'}).append($('<i>', {'class': 'fa fa-check'}))
    )
  );
  return elt;
}