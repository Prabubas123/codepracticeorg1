public class FetchAccountRecords {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        List<Account> lstAcc = [select id,name from Account limit 10];
        return lstAcc;
    }
   
    @AuraEnabled(cacheable=true)
    public static List<Account> getRelatedContacts(){
        List<Account> lstAcc = [select id,name,(select id,lastname,FirstName from Contacts) from Account limit 10];
        return lstAcc;
    }
}
