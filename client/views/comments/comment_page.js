Template.comment_page.helpers({
  post: function () {
    return this.comment && Posts.findOne(this.comment.post);
  }
});