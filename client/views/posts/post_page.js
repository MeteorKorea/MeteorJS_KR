Template.post_page.helpers({
  post: function () {
    return Posts.findOne(this.postId);
  },
  body_formatted: function(){
    var html_body=marked(this.body);
    return html_body.autoLink();
  },
  canComment: function(){
    return canComment(Meteor.user());
  }
}); 

Template.post_page.rendered = function(){
  if((scrollToCommentId=Session.get('scrollToCommentId')) && !this.rendered && $('#'+scrollToCommentId).exists()){
    scrollPageTo('#'+scrollToCommentId);
    Session.set('scrollToCommentId', null);
    this.rendered=true;
  }
  if(this.data) {
    var post = Posts.findOne(this.data.postId);
    document.title = post && post.headline || document.title;
  }
};