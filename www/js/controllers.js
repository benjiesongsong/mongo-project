angular.module('starter.controllers', [])
.controller('RegisterCtrl', ['$http', '$scope', '$state', function($http, $scope, $state) {
  var API = 'http://localhost:8106/'
  let me = this;

  me.register = function (user) {
    return $http.post(API + 'register', user).then(function (res) {
      alert('User created!')
      $scope.user = '';
      $state.go('tab.login');
    })
  }
}])
  .controller('LoginCtrl', ['$http', '$scope', '$state', function ($http, $scope, $state) {
    var API = 'http://localhost:8106/'
    let me = this;

    me.login = function (user) {
      return $http.post(API + 'login', user).then(function (err, user) {
        if (err) throw err;
        if (user) {
          alert('Login success!');
          $scope.user = '';
          return;
          $state.go('tab.create');
        }
      })
    }


  }])
  .controller('CreateBlogCtrl', ['$http', '$scope', '$state', function($http, $scope, $state) {
    var API = 'http://localhost:8106/'
    let me = this;

    me.getBlogs = function () {
      return $http.get(API + 'blogs').then(function (res) {
        $scope.blogs = res.data
      })
    }

    me.createBlog = function (blog) {
      return $http.post(API + 'blogs/create', blog).then(function (res) {
        alert('Blog post created!')
        $scope.blog = '';
        me.getBlogs()
        $state.go('tab.blogs')

      })
    }
  }])


  .controller('BlogCtrl', ['$http', '$scope', '$state', function($http, $scope) {
    var API = 'http://localhost:8106/'
    let me = this;

    me.getBlogs = function () {
      return $http.get(API + 'blogs').then(function (res) {
        $scope.blogs = res.data
      })
    }
    me.getBlogs()
  }])



