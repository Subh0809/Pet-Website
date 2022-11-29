// var app = angular.module('myApp', []);
var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
  $routeProvider

    .when('/', {
      templateUrl: 'first.html',
      controller: 'FirstController',
    })

    .when('/second', {
      templateUrl: 'second.html',
      controller: 'SecondController',
    })

    .when('/third', {
      templateUrl: 'third.html',
      controller: 'ThirdController',
    })

    .when('/fourth', {
      templateUrl: 'fourth.html',
      controller: 'FourthController',
    })

    .otherwise({ redirectTo: '/' });
});

app.filter('searchFor', function () {
  return function (arr, searchString) {
    if (!searchString) {
      return arr;
    }

    var result = [];

    searchString = searchString.toLowerCase();

    angular.forEach(arr, function (item) {
      if (item.title.toLowerCase().indexOf(searchString) !== -1) {
        result.push(item);
      }
    });

    return result;
  };
});

function OrderFormController($scope) {
  // Define the model properties. The view will loop
  // through the services array and genreate a li
  // element for every one of its items.

  $scope.services = [
    {
      name: 'Labrador',
      price: 12000,
      active: true,
    },
    {
      name: 'Golden Retriever',
      price: 18000,
      active: false,
    },
    {
      name: 'Pug',
      price: 11000,
      active: false,
    },
    {
      name: 'Siberian Husky',
      price: 22000,
      active: false,
    }, {
      name: 'Pomeranian',
      price: 13000,
      active: false,
    }
  ];

  $scope.toggleActive = function (s) {
    s.active = !s.active;
  };

  // Helper method for calculating the total price

  $scope.total = function () {
    var total = 0;

    // Use the angular forEach helper method to
    // loop through the services array:

    angular.forEach($scope.services, function (s) {
      if (s.active) {
        total += s.price;
      }
    });

    return total;
  };

  $scope.items = [
    {
			url: 'https://www.akc.org/dog-breeds/golden-retriever/',
			title: 'Information on Golden Retriever',
		},
		{
			url: 'https://www.alphapaw.com/blog/best-dog-food-for-huskies/',
			title: 'Siberain Husky Food Habits',
		},
		{
			url: 'https://www.loveyourdog.com/golden-retriever-vs-labrador-retriever/#:~:text=The%20main%20difference%20between%20the,much%20more%20energetic%20and%20boisterous.',
			title: 'Golden Retriever VS Labrador',
		},
		{
			url: 'https://dogtime.com/dog-breeds/siberian-husky#/slide/1',
			title: 'Get to know a Siberian Husky',
		},
		{
			url: 'https://www.indianpets.in/dogs/pugs-favourite-food-what-pugs-can-and-cant-eat/#:~:text=Pugs%20loves%20eating%20meat.,%2C%20boiled%20potato%2C%20and%20kale.',
			title: 'Pug Favourite Food',
		},
		{
			url: 'https://www.wikihow.com/Take-Care-of-a-Pomeranian',
			title: 'Taking Care of a Pomeranian',
		}
  ];
}

window.onload = function () {
  var navHome = document.getElementById('navHome');
  var navItems = document.getElementById('navItems');
  var navSearch = document.getElementById('navSearch');
  var navAbout = document.getElementById('navAbout');

  var firstSection = document.getElementById('first.html');
  var secondSection = document.getElementById('second.html');
  var thirdSection = document.getElementById('third.html');
  var fourthSection = document.getElementById('fourth.html');

  navHome.onclick = function () {
    firstSection.style.display = 'block';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'none';
  };
  navItems.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'block';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'none';
  };
  navSearch.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'block';
    fourthSection.style.display = 'none';
  };
  navAbout.onclick = function () {
    firstSection.style.display = 'none';
    secondSection.style.display = 'none';
    thirdSection.style.display = 'none';
    fourthSection.style.display = 'block';
  };

  var items = document.querySelectorAll('#item');
  var input = document.querySelectorAll('#input');
  input.forEach((element) => {
    element.value =
      element.parentElement.previousElementSibling.firstElementChild.innerText; //get the product name of current element into input value
    element.oninput = function () {
      element.parentElement.previousElementSibling.firstElementChild.innerText =
        element.value;
    };
    element.onblur = function () {
      element.style.display = 'none';
    };
  });

  var editBtn = document.querySelectorAll('#editBtn');
  editBtn.forEach((element) => {
    element.onclick = function () {
      element.nextElementSibling.style.display === 'none'
        ? (element.nextElementSibling.style.display = 'block')
        : (element.nextElementSibling.style.display = 'none');
    };
  });
  console.log(editBtn);
};
