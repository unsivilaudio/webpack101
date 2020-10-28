import { parseInputs } from './utils/parse-inputs';
import { inputsAreValid } from './utils/inputs-are-valid';

const app = (alertService, componentService) => {
    alertService.hideErrors();

    componentService.onClick(() => {
        const inputs = componentService.getInputs();
        const parsedInputs = parseInputs(...inputs);
        if (inputsAreValid(...parsedInputs)) {
            const [numA, numB] = parsedInputs;
            componentService.setResult(numA + numB);
        } else {
            componentService.setResult('');
            alertService.handleAdditionError(inputs, parsedInputs);
        }
    });
};

export default app;
