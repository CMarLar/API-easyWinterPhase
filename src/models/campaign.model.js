class Campaign
{
    constructor(campaign_name,user_id,campaign_id=null)
    {
        this.campaign_id = campaign_id,
        this.campaign_name = campaign_name,
        this.user_id = user_id
    }
}

module.exports = {Campaign};