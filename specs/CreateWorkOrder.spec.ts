import WorkOrderPage from '../page-objects/WorkOrderPage';

describe('Regression Suite', () => {
    it('should create a work order successfully', async () => {
        await WorkOrderPage.createNewOrder('Fix broken HVAC');
        // Add assertion here to verify success message
    });
});