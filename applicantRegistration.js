import { LightningElement } from 'lwc';
import createApplicantRecord from '@salesforce/apex/applicantProvider.createApplicantRecord';

export default class ApplicantRegistration extends LightningElement {
    objApp= {'sObjectType': 'Applicant__c'}
    submitRecord(){
        this.objApp.First_Name__c= this.template.querySelector('lightning-input[data-formfield="firstName"]').value;
        this.objApp.Last_Name__c= this.template.querySelector('lightning-input[data-formfield="lastName"]').value;
        createApplicantRecord({objApplicant :this.objApp })
        .then ((result)=>{
            console.log(result)
        })
        .catch ((error)=>{
            console.log(error)
        })

    }
    get options() {
        return [
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' },
            { label: 'Transgender', value: 'Transgender' },
        ];
    }

    handleChange(event) {
        this.objApp.Gender__c = event.detail.value;
    }
}