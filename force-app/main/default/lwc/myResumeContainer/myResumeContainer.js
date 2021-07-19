import { LightningElement } from 'lwc';
import * as RESUME_DATA from './myResumeContainerData.js'

export default class MyResumeContainer extends LightningElement {
    PROFILE_IMAGE = RESUME_DATA.PROFILE_IMAGE
    SOCIAL_LINKS = RESUME_DATA.SOCIAL_LINKS
    USER_DETAILS = RESUME_DATA.USER_DETAILS
    RESUME_DATA = RESUME_DATA
}