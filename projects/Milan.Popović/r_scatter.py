import simpleplot
import random

dataset = [(i+random.randint(0,2),i+random.randint(0,2)) for i in range(50)]
simpleplot.plot_scatter('Sample', 400, 300, 'x', 'y', 
                        [dataset])