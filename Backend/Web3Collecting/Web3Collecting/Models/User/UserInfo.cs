using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Web3Collecting.Models.User;

[PrimaryKey("VisitorId")]
public class UserInfo
{
    public UserInfo(string visitorId, string componentInfo)
    {
        VisitorId = visitorId;
        ComponentInfo = componentInfo;
    }
    public string VisitorId { get; init; }
    public string ComponentInfo { get; init; }
    
}