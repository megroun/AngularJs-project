var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider){
    $routeProvider
        .when("/books",{
            templateUrl: "./partials/book-list.html",
            controller:"BookListCtrl" 
        })
        .when("/kart",{
            templateUrl: "./partials/kart-list.html",
            controller:"KartListCtrl" 
        })
        .otherwise({
            redirectTo:"/books"
        });
});

myApp.factory("bookServices",function(){
    var books=[
        {
            name:'The secret of the apartment',
            img: 'hotelWeb.jpg',
            price: 205,
            rating: 'Rating 4.0',
            Binding: 'Binding: Paper Back',
            Publisher: 'Random House India',
            Released: 'Released : 12-08-2018',
            details: 'The secret of the apartment'
        },
        {
            name:'Door 113',
            img: 'apartments.jpeg',
            price: 189,
            rating: 'Rating 4.1',
            Binding: 'Binding: Paper Back',
            Publisher: 'Random House India',
            Released: 'Released : 12-08-2018',
            details: 'The story about the girl in 113 was...'
        },
        {
            name:'The haunted hotel',
            img: 'hotelWeb.jpg',
            price: 224,
            rating: 'Rating 4.5',
            Binding: 'Binding: Paper Back',
            Publisher: 'Random House India',
            Released: 'Released : 12-08-2018',
            details: 'The terrific hotel....'
        },
        {
            name:'The saloon',
            img: 'saloonWeb.jpeg',
            price: 489,
            rating: 'Rating 4.2',
            Binding: 'Binding: Paper Back',
            Publisher: 'Random House India',
            Released: 'Released : 12-08-2018',
            details: 'The saloon what was kept un-used for years....'
        },
    ];
    return {
        getBooks: function(){
            return books;
        }
    };
});

myApp.factory("kartService", function(){
    var kart = [];
    return{
        getKart: function(){
            return kart;
        },
        addToKart: function(book){
            kart.push(book);
        },
        buy: function(book){
            alert("Thanks for the purchase!!:", book.name);
        }
    }
})

myApp.controller("KartListCtrl",function($scope, kartService){
        $scope.kart= kartService.getKart();
        $scope.buy = function(book){
            kartService.buy(book);
        }

});
myApp.controller("HeaderCtrl",function($scope, $location){
        $scope.appData= {
            title: 'BookGallery',
            tagline: 'World for the books'
        };
        $scope.nav = {}
        $scope.nav.isActive = function(path){
            if(path===$location.path()){
                return true;
            }
            else{
                return false;
            }
        }
});
myApp.controller("BookListCtrl",function($scope, bookServices, kartService){
    $scope.books= bookServices.getBooks();
    $scope.addToCart = function(book){
        kartService.addToKart(book);
    }
});
// console.log('Data Passed', BookListCtrl);