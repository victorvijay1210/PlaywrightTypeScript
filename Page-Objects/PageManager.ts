import { Expect,Page,test } from "@playwright/test";
import { NavigationPage } from '../Page-Objects/NavigationPage';


export class PageManager{

    private readonly page:Page
    private readonly navigationPage:NavigationPage
    constructor(page:Page){
     this.page=page
     this.navigationPage = new NavigationPage(this.page)

    }

    navigateTo(){
        return this.navigationPage
    }
}