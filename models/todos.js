/**
 *
 * @authors iu2fish wfenng@gmail.com
 * @date    2014-11-27 22:19:45
 * @version 0.0.1
 */

var app = app || {};

app.Todo = Backbone.Model.extend({
  default: {
    title:'',
    completed:false
  },

  toggle:function () {
    this.save({
      completed: !this.get('completed')
    });
  }
});
