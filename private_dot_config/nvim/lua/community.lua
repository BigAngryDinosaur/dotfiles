-- AstroCommunity: import any community modules here
-- We import this file in `lazy_setup.lua` before the `plugins/` folder.
-- This guarantees that the specs are processed before any user plugins.

---@type LazySpec
return {
  "AstroNvim/astrocommunity",
  { import = "astrocommunity.pack.lua" },
  { import = "astrocommunity.pack.rust" },
  { import = "astrocommunity.pack.swift" },
  { import = "astrocommunity.pack.typescript" },
  { import = "astrocommunity.motion.flash-nvim" },
  { import = "astrocommunity.motion.mini-ai" },
  { import = "astrocommunity.completion.avante-nvim" },
  { import = "astrocommunity.utility.noice-nvim" },
  { import = "astrocommunity.color.ccc-nvim" },
  { import = "astrocommunity.syntax.vim-easy-align" },
  -- import/override with your plugins folder
}
