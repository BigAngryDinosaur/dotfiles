return {
  "AstroNvim/astrocore",
  ---@type AstroCoreOpts
  opts = {
    mappings = {
      n = {
        ["<Leader>nn"] = { ":source ~/.config/nvim/lua/test.lua<cr>" },
        ["<C-d>"] = { "<C-d>zz" },
        ["<C-u>"] = { "<C-u>zz" },
        ["<D-PageDown>"] = { "<C-d>zz" },
        ["<D-PageUp>"] = { "<C-u>zz" },
      },
    },
  },
}
