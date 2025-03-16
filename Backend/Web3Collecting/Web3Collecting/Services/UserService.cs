using Microsoft.EntityFrameworkCore;
using Web3Collecting.DataAccess;
using Web3Collecting.Models.User;

namespace Web3Collecting.Services;

public class UserService
{
    private UserInfoDbContext _dbContext;
    protected List<UserInfo> _userInfos;

    public UserService(UserInfoDbContext dbContext)
    {
        _dbContext = dbContext;
        _userInfos = _dbContext.UserInfos.ToList();
    }

    public bool CreateUserInfo(string visitorId, string componentInfo)
    {
        var createdUser = new UserInfo(visitorId, componentInfo);
        _dbContext.UserInfos.Add(createdUser);
        _dbContext.SaveChanges();
        return true;
    }
    
    public UserInfo GetCurrentUserInfo(string visitorId)
    {
        var currentUser = _userInfos.Single(u => u.VisitorId.ToLower().Equals(visitorId.ToLower()));
        if (currentUser == null)
        {
            throw new ArgumentException("Not found this user");
        }
        return currentUser;
    }

    public async Task<bool> UserInfoUpdate(string visitorId, string componentInfo)
    {
        var currentUser = GetCurrentUserInfo(visitorId);
        currentUser.ComponentInfo = componentInfo;
        await _dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<bool> DeleteUserInfoAsync(string visitorId)
    {
        var currentUser = GetCurrentUserInfo(visitorId);
        
        _dbContext.UserInfos.Remove(currentUser);
        await _dbContext.SaveChangesAsync();
        return true;
    }

   
}