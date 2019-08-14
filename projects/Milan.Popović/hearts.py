import simpleplot
from math import sin,cos,pi

s1,s2,s3=[],[],[]
for i in range(int(200*pi)):
    t = i/100
    x = 16*sin(t)**3
    y = 13*cos(t)-5*cos(2*t)-2*cos(3*t)-cos(4*t)
    s1.append((x-4,y))
    s2.append((x,y))
    s3.append((x+4,y))

simpleplot.plot_lines('For', 400, 400, 'x', 'y',
  [s1,s2,s3], True, ['Aleksandra','Jelena','Mila'])