using Microsoft.EntityFrameworkCore;
using Web3Collecting.Models.User;

namespace Web3Collecting.DataAccess;

public class UserInfoDbContext : DbContext
{
    private readonly IConfiguration _configuration;
    public DbSet<UserInfo> UserInfos => Set<UserInfo>();


    public UserInfoDbContext(IConfiguration configuration)
    {
        _configuration = configuration;
    }


    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseNpgsql(_configuration.GetConnectionString("Database"));
    }
}