from Naked.toolshed.shell import execute_js, muterun_js

response = muterun_js('mpg.js')
if response.exitcode == 0:
  print(response.stdout)
else:
  sys.stderr.write(response.stderr)