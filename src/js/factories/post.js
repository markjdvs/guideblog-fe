angular
  .module('myGuideBlog')
  .factory('Post', Post);

Post.$inject = ['$resource', 'API_URL'];
function Post($resource, API_URL) {
  return new $resource(`${API_URL}/posts/:id`, { id: '@id' }, {
    update: { method: 'PUT' },
    upVote: { method: 'PUT', url: `${API_URL}/posts/:id/upvote` },
    downVote: { method: 'PUT', url: `${API_URL}/posts/:id/downvote` }
  });
}
