using Web3Collecting.DataAccess;
using Web3Collecting.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddControllers();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<UserInfoDbContext>();
builder.Services.AddScoped<UserService>();

var app = builder.Build();

using var scope = app.Services.CreateScope();
await using var dbContext = scope.ServiceProvider.GetService<UserInfoDbContext>();
await dbContext.Database.EnsureCreatedAsync();
var service = scope.ServiceProvider.GetService<UserService>();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapControllers();
app.UseHttpsRedirection();

var user =  await service.DeleteUserInfoAsync("test2");
Console.WriteLine("sdsdsd");

app.Run();




