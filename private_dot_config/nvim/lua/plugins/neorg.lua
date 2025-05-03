return {
  {
    "benlubas/neorg-interim-ls",
    lazy = true,
    config = function() require("neorg-interim-ls").setup() end,
  },
  {
    "nvim-neorg/neorg",
    version = "*",
    event = "VeryLazy",
    dependencies = { "nvim-treesitter/nvim-treesitter" },
    opts = function(_, opts)
      local astrocore = require "astrocore"
      return astrocore.extend_tbl(opts, {
        load = {
          ["core.defaults"] = {}, -- Loads default behaviour
          ["core.concealer"] = {}, -- Adds pretty icons to your documents
          ["core.keybinds"] = {}, -- Adds default keybindings
          ["core.journal"] = {}, -- Enables support for the journal module
          ["core.dirman"] = { -- Manages Neorg workspaces
            config = {
              workspaces = {
                notes = "~/projects/notes",
              },
              default_workspace = "notes",
            },
          },
        },
      })
    end,
  },
}
