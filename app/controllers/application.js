import Controller from '@ember/controller';

export default Controller.extend({
  actions:{
    add(){
      var name= this.get('firstName');
      var lastName= this.get('lastName');
      var nickname= this.get('nickname');
      var age= this.get('age');
			var author= this.store.createRecord('author', {firstName: name, lastName: lastName,nickname:nickname, age: age});
      author.save();
    }
  }
});
