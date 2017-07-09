import DeviseAuthenticator from 'ember-simple-auth/authenticators/devise';
import ENV from "../config/environment";

export default DeviseAuthenticator.extend({
  serverTokenEndpoint: `${ENV.host}/api/v1/coaches/sign_in`,
  resourceName: 'coach'
});
