trigger UpdateLeadName on Lead (after update) {
  /*  Set<Id> setIds = new Set<Id>();
    List<Lead> lstLeadUpdate = new List<Lead>();
    for(Lead leadInstance : Trigger.Old){
        setIds.add(leadInstance.Id);
    }
    System.debug('setIds---'+setIds);

    List<Lead> lstLead = [select id,FirstName,LastName from Lead where id=:Trigger];

    for(Lead leadUpdate : lstLead){
        leadUpdate.FirstName = leadUpdate.FirstName + ' ' + 'Hello';
        leadUpdate.LastName  = leadUpdate.LastName + ' ' + 'world';
        lstLeadUpdate.add(leadUpdate);
        
    }
    system.debug('lstLeadUpdate----'+lstLeadUpdate);
    update lstLeadUpdate;*/
}