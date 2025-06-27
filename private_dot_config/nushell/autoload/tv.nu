
def fe [] {
  let file = fd -t f . | tv --preview 'bat -n --color=always {0}' 
  e $"($file)"
}
