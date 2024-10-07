import { expect, Page } from "@playwright/test"
import { HelperBase } from "./HelperBase";

export class NavigationPage extends HelperBase{


    constructor(page: Page) {
        super(page)
    }


    async formLayoutsPage(): Promise<void> {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Form Layout').click();
    }

    async datePickerPage() {
        await this.selectGroupMenuItem('Forms');
        await this.page.getByText('Datepicker').click();
    }

    async smartTablePage() {
        await this.selectGroupMenuItem('Tables & Data');
        await this.page.getByText('Smart Table').click();
    }

    async toastrPage() {
        await this.page.getByText('Modal & Overlays').click();
        await this.page.getByText('Toastr').click();

    }

    async tooltipPage() {
        await this.selectGroupMenuItem('Modal & Overlays');
        await this.page.getByText('Tooltip').click();

    }

     async selectGroupMenuItem(title: string) {
        const titleText = this.page.getByTitle(title);
        const expanded = await titleText.getAttribute('aria-expanded');
        if (expanded === 'false') {
            await titleText.click()
        }
    }

    async fillBasicForm(email: string, Password: string) {
        await this.formLayoutsPage();
        await this.page.getByRole('textbox', { name: 'Email address' }).fill(email);
        await this.page.locator('#exampleInputPassword1').fill(Password);
        await this.page.getByText('Check me out').check();
        await expect(this.page.getByText('Check me out')).toBeChecked();
    }
}