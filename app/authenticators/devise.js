import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import ENV from "../config/environment";

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: `${ENV.host}/v1/coaches/sign_in`
});
