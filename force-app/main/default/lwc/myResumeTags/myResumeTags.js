import { api, LightningElement } from 'lwc';

export default class MyResumeTags extends LightningElement {
    @api tagsList
    @api details
    // @api heading = details.HEADING
    // @api list = details.LIST
    // get isHeading() {
    //     return `slds-var-m-top_medium ${this.type === 'MAIN' ? 'section_heading' : 'section_subHeading'}`
    // }
}