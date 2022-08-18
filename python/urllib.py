import urllib.request

handler = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')

for line in handler:
  print(line.decode().strip())