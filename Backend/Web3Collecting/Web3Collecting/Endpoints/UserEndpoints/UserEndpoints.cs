using Microsoft.AspNetCore.Identity.UI.Services;
using Microsoft.AspNetCore.Mvc;
using Web3Collecting.Models.User;

namespace Web3Collecting.Endpoints.UserEndpoints;

public static class UserEndpoints
{
    public static void RegisterUserEndpoints(this IEndpointRouteBuilder routes)
    {
        var users = routes.MapGroup("/api/users");

        users.MapGet("", async () => await Task.FromResult("Hello, users!"));
        

    }
}