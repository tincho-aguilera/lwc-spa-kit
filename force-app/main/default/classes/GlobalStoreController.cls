public with sharing class GlobalStoreController {

    @AuraEnabled(cacheable=true)
    public static String getValue(String key) {
        // User_Store__c record = [
        //     SELECT Key__c, Value__c
        //     FROM User_Store__c
        //     WHERE Key__c = :key AND CreatedById = :UserInfo.getUserId()
        //     LIMIT 1
        // ];
        // return record != null ? record.Value__c : null;
        return null;
    }

    @AuraEnabled
    public static void setValue(String key, String jsonValue) {
        // User_Store__c existing;
        // try {
        //     existing = [
        //         SELECT Id
        //         FROM User_Store__c
        //         WHERE Key__c = :key AND CreatedById = :UserInfo.getUserId()
        //         LIMIT 1
        //     ];
        // } catch (Exception e) {
        //     existing = null;
        // }

        // if (existing != null) {
        //     existing.Value__c = jsonValue;
        //     update existing;
        // } else {
        //     User_Store__c newRecord = new User_Store__c();
        //     newRecord.Key__c = key;
        //     newRecord.Value__c = jsonValue;
        //     insert newRecord;
        // }
    }
}
