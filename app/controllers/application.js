import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    add(){
      var name= this.get('name');
			var author= this.store.createRecord('author', {name: name});
      author.save();
    }
  }
});
