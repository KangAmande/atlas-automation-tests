class WorkOrderPage {
    get createBtn() { return $('~create-work-order-button'); }
    get titleInput() { return $('~work-order-title'); }
    get submitBtn() { return $('~submit-button'); }

    async createNewOrder(title: string) {
        await this.createBtn.click();
        await this.titleInput.setValue(title);
        await this.submitBtn.click();
    }
}
export default new WorkOrderPage();