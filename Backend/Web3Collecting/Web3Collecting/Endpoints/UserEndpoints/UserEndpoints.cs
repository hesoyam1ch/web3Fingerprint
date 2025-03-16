using System.Threading.Channels;
using Newtonsoft.Json.Linq;
using Web3Collecting.Endpoints.Contracts;
using Web3Collecting.Services;

namespace Web3Collecting.Endpoints.UserEndpoints;

public static class UserEndpoints
{
    public static void RegisterUserEndpoints(this IEndpointRouteBuilder app)
    {
        var users = app.MapGroup("/api/users");


        users.MapGet("/{visitorId}", (string visitorId, UserService userService) =>
        {
            var currentUser = userService.GetCurrentUserInfo(visitorId);
            return Results.Ok(currentUser);
        });

        

        users.MapPost("/create", async (UserInfoDto userInfoDto,UserService userService) =>
        {
            JObject  dd = JObject.FromObject(userInfoDto.ComponentInfo);
            string dds = dd.ToString();
            JObject returneed = JObject.Parse(dds);
            ComponentsDto comp = returneed.ToObject<ComponentsDto>();
            
            bool createdResult = await userService.CreateUserInfoAsync(userInfoDto.VisitorId, dd.ToString());
            if (createdResult)
            {
                return Results.Ok();
            }
        
            return Results.Problem();
        });
    }
}