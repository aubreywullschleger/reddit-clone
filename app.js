(function () {
    var app = angular.module('redditClone', []);

    app.controller('postController', function ($scope) {
        $scope.posts = [];

        $scope.addPost = function () {
            $scope.posts.push({
                title: $scope.post.title,
                author: $scope.post.author,
                image: $scope.post.image,
                description: $scope.post.description,
                date: $scope.post.date = new Date()
            });
        };

        $scope.castVote = {
            upVotes: 0,
            downVotes: 0,
            totalVotes: $scope.upVotes + $scope.downVotes
        };

        $scope.orderVotes = function() {
            $scope.posts.push({votes: $scope.castVote.totalVotes});
            console.log($scope.posts);
        };
        //
        //$scope.orderVotes = function (arr) {
        //    for(i=0; i<arr.length; i++) {
        //     if(arr[i].)
        //    }
        //}
    });
})();
