return {
  {
    "yetone/avante.nvim",
    opts = { -- extend the plugin options
      provider = "openai", -- Use OpenAI as the provider
      openai = { -- OpenAI-specific settings
        endpoint = "https://api.openai.com/v1", -- Default OpenAI API endpoint
        model = "gpt-4o", -- Model to use, e.g., gpt-4
        timeout = 30000, -- Timeout in milliseconds
        temperature = 0.7, -- Adjust creativity level
        max_tokens = 2000, -- Adjust token limit as needed
      },
    },
  },
}
