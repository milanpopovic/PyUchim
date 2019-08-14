import simpleplot

dataset1 = {3: 5, 8: 2, 1: 3}
dataset2 = [(1, 2), (4, 7), (2, 5), (7, 6)]
simpleplot.plot_bars('Sample', 400, 300, 'x', 'y', 
                     [dataset1, dataset2], ['dataset1', 'dataset2'])