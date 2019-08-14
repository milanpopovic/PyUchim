import simpleplot

import math
dataset=[]
for i in range(101):
    x = 2*math.pi/100*i
    y = math.sin(x)
    dataset.append((x,y))
    
simpleplot.plot_lines('Sin graph', 400, 300, 'x', 'y',[dataset])