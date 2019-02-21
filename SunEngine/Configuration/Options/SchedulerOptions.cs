namespace SunEngine.Configuration.Options
{
    public class SchedulerOptions
    {
        public int SpamProtectionCacheClearMinutes { get; set; }
        public int JwtBlackListServiceClearMinutes { get; set; }
        public int LongSessionsClearDays { get; set; }
    }
}