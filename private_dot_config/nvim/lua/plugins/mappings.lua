return {
  {
    "AstroNvim/astrocore",
    ---@type AstroCoreOpts
    opts = {
      mappings = {
        n = {
          ga = { "<Plug>(EasyAlign)", desc = "EasyAlign for motion/text object" },
        },
        v = {
          ga = { "<Plug>(EasyAlign)", desc = "EasyAlign in visual mode" },
        },
      },
    },
  },
  {
    "AstroNvim/astrolsp",
    ---@type AstroLSPOpts
    opts = {
      mappings = {},
    },
  },
}
