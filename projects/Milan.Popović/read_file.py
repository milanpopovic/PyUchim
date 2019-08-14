import urllib2

a_file = urllib2.urlopen('localhost/PyStudio/projects/milan.popovic/sample_file.txt')
print(a_file.read())