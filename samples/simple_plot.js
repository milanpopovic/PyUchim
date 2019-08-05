function select_sample_simple_plot(){
var z = new Array();

z[1] = `
'''
Plot lines

Displays a plot in a new window named framename with the width and 
height given in pixels. The x-axis is labeled with the string xlabel. 
The y-axis is labeled with the string ylabel.

The data to display is given in datasets, which is a sequence of 
data sets. Each data set is connected with a line through each 
data point. Each data set can be given in either of two representations.

A data set can be a sequence of 2-element sequences, where a 2-element 
sequence represents an x,y-pair. This allows for multiple points to have 
the same x value. Points are displayed in the given order.
A data set can also be a dictionary mapping each x value to a 
corresponding y value. Points are displayed in order of x value.
The optional boolean points indicates that the individual points should 
be indicated. It defaults to False.

The optional legends is a sequence of strings that label the data sets 
and will be displayed in a legend. If omitted, there will be no legend. 
The length of this sequence should be the same as the length of datasets..
'''
import simpleplot

dataset1 = {3: 5, 8: 2, 1: 3}
dataset2 = [(1, 2), (4, 7), (2, 5), (7, 6)]
simpleplot.plot_lines('Sample', 400, 300, 'x', 'y', 
    [dataset1, dataset2], True, ['dataset1', 'dataset2'])
`

z[2] = `
'''
Bar plot

Each data point is represented by a vertical bar, and corresponding data 
points of each data set are grouped together.
'''

import simpleplot

dataset1 = {3: 5, 8: 2, 1: 3}
dataset2 = [(1, 2), (4, 7), (2, 5), (7, 6)]
simpleplot.plot_bars('Sample', 400, 300, 'x', 'y', 
    [dataset1, dataset2], ['dataset1', 'dataset2'])

`
z[3] = `
'''
Scatter plot

Each data point is represented by a colored dot, and corresponding data 
points of each data set are the same color. 
'''

import simpleplot

dataset1 = {3: 5, 8: 2, 1: 3}
dataset2 = [(1, 2), (4, 7), (1, 5), (2, 5), (4, 3), (7, 6)]
simpleplot.plot_scatter('Sample', 400, 300, 'x', 'y', 
    [dataset1, dataset2], ['dataset1', 'dataset2'])
`

z[4] = `
'''
Sine function plot
'''

import simpleplot

import math
dataset=[]
for i in range(101):
    x = 2*math.pi/100*i
    y = math.sin(x)
    dataset.append((x,y))
    
simpleplot.plot_lines('Sin graph', 400, 300, 'x', 'y',[dataset])
`

prog = ''
for (var i=1; i < z.length; i++)
  prog = prog+z[i];
$model.view.setCode(prog);
$model.reset();
$("#open_file").val("");
}
