/**
 * Created by richardhancock on 1/01/18.
 */
app.controller('ProjectsCtrl', ['$scope', function ($scope) {
  $scope.images = [
    {
      id: 1,
      title: 'Garage North Wall - Inside View',
      alt: 'Garage North Wall - Inside View',
      url: 'images/storm-water-steps/IMG_1604-garage-north-wall-inside.png',
      thumbUrl: 'images/storm-water-steps/IMG_1604-garage-north-wall-inside.png',
      bubbleUrl: 'images/storm-water-steps/IMG_1604-garage-north-wall-inside.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1604-garage-north-wall-inside.png',
      desc: 'Garage North Wall - Inside View.',
      deletable: true
    },
    {
      id: 2,
      title: 'Garage North Wall - Front View',
      alt: 'Garage North Wall - Front View',
      url: 'images/storm-water-steps/IMG_1605-garage-north-wall-front.png',
      thumbUrl: 'images/storm-water-steps/IMG_1605-garage-north-wall-front.png',
      bubbleUrl: 'images/storm-water-steps/IMG_1605-garage-north-wall-front.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1605-garage-north-wall-front.png',
      desc: 'Garage North Wall - Front View'
    },
    {
      id: 3,
      title: 'Garage North Wall - Current Steps - Lower View',
      alt: 'Garage North Wall - Current Steps - Lower View',
      url: 'images/storm-water-steps/IMG_1606-garage-north-wall-current-steps-1.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1606-garage-north-wall-current-steps-1.png',
      desc: 'Garage North Wall - Current Steps - Lower View'
    },
    {
      id: 4,
      title: 'Garage North Wall - Current Steps - Upper View',
      alt: 'Garage North Wall - Current Steps - Upper View',
      url: 'images/storm-water-steps/IMG_1608-garage-north-wall-current-steps-2.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1608-garage-north-wall-current-steps-2.png',
      desc: 'Garage North Wall - Current Steps - Upper View'
    },
    {
      id: 5,
      title: 'Storm Water Corner - 1',
      alt: 'Storm Water Corner - 1',
      url: 'images/storm-water-steps/IMG_1610-storm-water-corner-1.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1610-storm-water-corner-1.png',
      desc: 'Storm Water Corner - 1'
    },
    {
      id: 6,
      title: 'Storm Water Corner - 2',
      alt: 'Storm Water Corner - 2',
      url: 'images/storm-water-steps/IMG_1611-storm-water-corner-2.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1611-storm-water-corner-2.png',
      desc: 'Storm Water Corner - 2'
    },
    {
      id: 7,
      title: 'Storm Water Corner - 3',
      alt: 'Storm Water Corner - 3',
      url: 'images/storm-water-steps/IMG_1612-storm-water-corner-3.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1612-storm-water-corner-3.png',
      desc: 'Storm Water Corner - 3'
    },
    {
      id: 8,
      title: 'Storm Water Corner - 4',
      alt: 'Storm Water Corner - 4',
      url: 'images/storm-water-steps/IMG_1617-storm-water-corner-4.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1617-storm-water-corner-4.png',
      desc: 'Storm Water Corner - 4'
    },
    {
      id: 9,
      title: 'Storm Water Corner - 5',
      alt: 'Storm Water Corner - 5',
      url: 'images/storm-water-steps/IMG_1618-storm-water-corner-5.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1618-storm-water-corner-5.png',
      desc: 'Storm Water Corner - 5'
    },
    {
      id: 10,
      title: 'Storm Water Corner - 6',
      alt: 'Storm Water Corner - 6',
      url: 'images/storm-water-steps/IMG_1619-storm-water-corner-6.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1619-storm-water-corner-6.png',
      desc: 'Storm Water Corner - 6'
    },
    {
      id: 11,
      title: 'Storm Water Corner - 7',
      alt: 'Storm Water Corner - 7',
      url: 'images/storm-water-steps/IMG_1620-storm-water-corner-7.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1620-storm-water-corner-7.png',
      desc: 'Storm Water Corner - 7'
    },
    {
      id: 12,
      title: 'Wooden Steps Above Storm Water',
      alt: 'Wooden Steps Above Storm Water',
      url: 'images/storm-water-steps/IMG_1613-wooden-steps-above-storm-water.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1613-wooden-steps-above-storm-water.png',
      desc: 'Wooden Steps Above Storm Water'
    },
    {
      id: 13,
      title: 'Garage North Wall - Current Steps Looking Down',
      alt: 'Garage North Wall - Current Steps Looking Down',
      url: 'images/storm-water-steps/IMG_1615-garage-north-wall-current-steps-looking-down.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1615-garage-north-wall-current-steps-looking-down.png',
      desc: 'Garage North Wall - Current Steps Looking Down'
    },
    {
      id: 14,
      title: 'Wooden Steps - Looking Down',
      alt: 'Wooden Steps - Looking Down',
      url: 'images/storm-water-steps/IMG_1621-wooden-steps-looking-down.png',
      extUrl: 'https://breakerbay.github.io/images/storm-water-steps/IMG_1621-wooden-steps-looking-down.png',
      desc: 'Wooden Steps - Looking Down'
    }
  ];

  /*****************************************************/

  // configurations
  $scope.conf = {
    thumbnails: true,
    inline: false,
    bubbles: false,
    imgBubbles: false,
    bgClose: false
  };


  // Gallery methods gateway
  $scope.methods = {};
  $scope.openGallery = function () {
    console.log('ProjectsCtrl, open gallery ...');
//    console.log('ProjectsCtrl, created project: '  + JSON.stringify($scope.project));
    $scope.methods.open();
  };

  $scope.addPhoto = function () {
    var n = Math.floor(Math.random() * 13) + 1;
    $scope.images.push(
      {
        url: 'demo-images/' + n + '.jpg',
        thumbUrl: 'demo-images/thumbs/' + n + '.jpg',
        bubbleUrl: 'demo-images/bubbles/' + n + '.jpg'
      }
    );
  };

  $scope.removePhoto = function () {
    if ($scope.images.length > 1) $scope.images.pop();
  };

  // Gallery callbacks
  $scope.opened = function () {
    console.info('Gallery opened!');
  };

  $scope.closed = function () {
    console.warn('Gallery closed!');
  };

  $scope.delete = function (img, cb) {
    console.log('Delete  img: ' + JSON.stringify(img));
    cb();
  }

}]);

app.controller('ProjectCtrl', ['$scope', 'project', '$sce', function ($scope, project, $sce) {
  $scope.project = project.data;
  console.log("ProjectCtrl project:" + JSON.stringify(project));

  $scope.trusted = $sce.trustAsHtml($scope.project.summary);
}]);