angular
  .module('myGuideBlog')
  .controller('StopsShowCtrl', StopsShowCtrl);

StopsShowCtrl.$inject = ['Stop', 'Post', '$state', '$stateParams'];
function StopsShowCtrl(Stop, Post, $state, $stateParams) {
  const vm = this;
  vm.stop = Stop.get($stateParams);
  vm.isReadOnly = false;

  function addPost() {
    vm.post.stop_id = vm.stop.id;

    Post
      .save({ post: vm.post })
      .$promise
      .then((post) => {
        vm.stop.posts.push(post);
        vm.post = {};
      });
      vm.stopForm.$setPristine();
      vm.stopForm.$setUntouched();
  }

  vm.addPost = addPost;

  function forReal() {
    return true;
  }

  function deletePost(post) {
    Post
      .delete({ id: post.id })
      .$promise
      .then(() => {
        const index = vm.stop.posts.indexOf(post);
        vm.stop.posts.splice(index, 1);
      });
  }
  vm.deletePost = deletePost;

  function upVote(post) {
    Post
      .upVote({ id: post.id })
      .$promise
      .then(() => {
        $state.reload();
      });
  }
  vm.upVote = upVote;

  function downVote(post) {
    Post
      .downVote({ id: post.id })
      .$promise
      .then(() => {
        $state.reload();
      });
  }
  vm.downVote = downVote;
}
