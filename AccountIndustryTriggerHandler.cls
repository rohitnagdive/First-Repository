public class AccountIndustryTriggerHandler {
    public Static void updateRating(List<Account> accList){
        for(Account objAcc: accList){
            if(!String.isBlank(objAcc.Industry) && objAcc.Industry== 'Media' || objAcc.Industry== 'Energy'){
                objAcc.Rating= 'Hot';
                
            }
            
        }
        
    }
    public Static void createRelatedContact(List<Account> accList){
        List<Contact> conList= new List<Contact>();
        for(Account objAcc: accList){
            Contact objCon= new Contact();
            objCon.FirstName= 'Test FirstName';
            objCon.LastName= 'Test LastName';
            objCon.AccountId= objAcc.Id;
            conList.add(objCon);
            
        }
        if(!conList.isEmpty()){
            insert conList;
            
        }
        
    }
    
}