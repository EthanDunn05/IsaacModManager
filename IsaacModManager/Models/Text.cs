namespace IsaacModManager.Models
{
    // No, I can't use a string
    public class Text
    {
        public Text(string body)
        {
            Body = body;
        }

        public string Body { get; }
    }
}