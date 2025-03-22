
namespace Web3Collecting.Endpoints.Contracts;

public class UserInfoDto
{
    public string VisitorId { get; set; }
    public ComponentsDto ComponentInfo { get; set; }
}

public class ComponentsDto
{
    public FontsDto Fonts { get; set; }
    public DomBlockersDto DomBlockers { get; set; }
    public FontPreferencesDto FontPreferences { get; set; }
    public AudioDto Audio { get; set; }
    public ScreenFrameDto ScreenFrame { get; set; }
    public CanvasDto Canvas { get; set; }
    public OsCpuDto OsCpu { get; set; }
    public LanguagesDto Languages { get; set; }
    public ColorDepthDto ColorDepth { get; set; }
    public DeviceMemoryDto DeviceMemory { get; set; }
    public ScreenResolutionDto ScreenResolution { get; set; }
    public HardwareConcurrencyDto HardwareConcurrency { get; set; }
    public TimezoneDto Timezone { get; set; }
    public StorageDto SessionStorage { get; set; }
    public StorageDto LocalStorage { get; set; }
    public StorageDto IndexedDB { get; set; }
    public StorageDto OpenDatabase { get; set; }
    public PlatformDto Platform { get; set; }
    public PluginsDto Plugins { get; set; }
    public TouchSupportDto TouchSupport { get; set; }
    public VendorDto Vendor { get; set; }
    public VendorFlavorsDto VendorFlavors { get; set; }
    public CookiesEnabledDto CookiesEnabled { get; set; }
    public ColorGamutDto ColorGamut { get; set; }
    public MathDto Math { get; set; }
    public WebGLBasicsDto WebGlBasics { get; set; }
    public WebGLExtensionsDto WebGlExtensions { get; set; }
}

public class FontsDto { public List<string> Value { get; set; } public int Duration { get; set; } }
public class DomBlockersDto { public int Duration { get; set; } }
public class FontPreferencesDto { public Dictionary<string, double> Value { get; set; } public int Duration { get; set; } }
public class AudioDto { public double Value { get; set; } public int Duration { get; set; } }
public class ScreenFrameDto { public List<int> Value { get; set; } public int Duration { get; set; } }
public class CanvasDto { public CanvasValueDto Value { get; set; } public int Duration { get; set; } }
public class CanvasValueDto { public bool Winding { get; set; } public string Geometry { get; set; } public string Text { get; set; } }
public class OsCpuDto { public int Duration { get; set; } }
public class LanguagesDto { public List<List<string>> Value { get; set; } public int Duration { get; set; } }
public class ColorDepthDto { public int Value { get; set; } public int Duration { get; set; } }
public class DeviceMemoryDto { public int Value { get; set; } public int Duration { get; set; } }
public class ScreenResolutionDto { public List<int> Value { get; set; } public int Duration { get; set; } }
public class HardwareConcurrencyDto { public int Value { get; set; } public int Duration { get; set; } }
public class TimezoneDto { public string Value { get; set; } public int Duration { get; set; } }
public class StorageDto { public bool Value { get; set; } public int Duration { get; set; } }
public class PlatformDto { public string Value { get; set; } public int Duration { get; set; } }
public class PluginsDto { public List<PluginDto> Value { get; set; } public int Duration { get; set; } }
public class PluginDto { public string Name { get; set; } public string Description { get; set; } public List<MimeTypeDto> MimeTypes { get; set; } }
public class MimeTypeDto { public string Type { get; set; } public string Suffixes { get; set; } }
public class TouchSupportDto { public TouchSupportValueDto Value { get; set; } public int Duration { get; set; } }
public class TouchSupportValueDto { public int MaxTouchPoints { get; set; } public bool TouchEvent { get; set; } public bool TouchStart { get; set; } }
public class VendorDto { public string Value { get; set; } public int Duration { get; set; } }
public class VendorFlavorsDto { public List<string> Value { get; set; } public int Duration { get; set; } }
public class CookiesEnabledDto { public bool Value { get; set; } public int Duration { get; set; } }
public class ColorGamutDto { public string Value { get; set; } public int Duration { get; set; } }
public class MathDto { public Dictionary<string, double> Value { get; set; } public int Duration { get; set; } }
public class WebGLBasicsDto { public Dictionary<string, string> Value { get; set; } public int Duration { get; set; } }
public class WebGLExtensionsDto { public Dictionary<string, List<string>> Value { get; set; } public int Duration { get; set; } }

