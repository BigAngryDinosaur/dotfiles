return {
  {
    "yetone/avante.nvim",
    opts = { -- extend the plugin options
      provider = "openai", -- Use OpenAI as the provider
      openai = { -- OpenAI-specific settings
        endpoint = "https://api.openai.com/v1", -- Default OpenAI API endpoint
        model = "gpt-4o", -- Model to use, e.g., gpt-4
        api_key_name = { "op", "item", "get", "hfj4pajsqgf2ahsnimyzwvch74", "--fields", "OpenAI: Coding" },
        timeout = 30000, -- Timeout in milliseconds
        temperature = 0.7, -- Adjust creativity level
        max_tokens = 2000, -- Adjust token limit as needed
      },
    },
  },
}
