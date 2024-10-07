import { Page } from "@playwright/test";

export class HelperBase{
   readonly page: Page;
    constructor(page:Page){
        this.page=page;
    }

    async waitForNumberofSeconds(timeunits:number){
        await this.page.waitForTimeout(timeunits*4)
    }
}