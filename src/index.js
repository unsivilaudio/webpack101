import App from './app/app';
import ComponentService from './app/component.service';
import AlertService from './app/alert.service';

const alertService = new AlertService();
const componentService = new ComponentService();

App(alertService, componentService);
