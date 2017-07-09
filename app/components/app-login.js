import Ember from 'ember';
import Validator from '../mixins/object-validator';

export default Ember.Component.extend(Validator, {
  i18n:     Ember.inject.service(),
  session:  Ember.inject.service(),
  password: null,
  email:    null,
  errors:   null,

  actions: {
    authenticate() {
      if( this.validate() ) {
        this.get('session').authenticate('authenticator:devise', this.get('email'), this.get('password')).catch( reason => {
          this.set('errors', reason.errors.params);
        });
      } else {
        this.set('errors', this.get('i18n').t('components.app-login.errors.blank'));
      }
    }
  },

  validations: {
    email:    { presence: true },
    password: { presence: true }
  }
});
