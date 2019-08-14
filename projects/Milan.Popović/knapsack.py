#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sun Nov 11 20:29:14 2018

@author: milan
"""
from random import sample,randint

def maxVal(w, v, i, mW):
    global num_calls
    num_calls += 1
    if i == 0:
        if w[i] <= mW: return v[i]
        else: return 0
    without_i = maxVal(w, v, i-1, mW)
    if w[i] > mW: return without_i
    else:    
        with_i = v[i] + maxVal(w,v,i-1,mW-w[i])
        return max(without_i, with_i)

def fastMaxVal(w, v, i, mW, memo={}):
    global num_calls
    num_calls += 1
    try:
#        print(i,mW)
#        print(memo[(i,mW)])
        return memo[(i, mW)]
    except KeyError:
        if i == 0:
            if w[i] <= mW: 
                memo[(i,mW)] = v[i]
                return v[i]
            else: 
                memo[(i,mW)] = 0
                return 0
        without_i = fastMaxVal(w, v, i-1, mW)
        if w[i] > mW: 
            memo[(i,mW)] = without_i
            return without_i
        else:    
            with_i = v[i] + fastMaxVal(w,v,i-1,mW-w[i])
            res = max(without_i, with_i)
            memo[(i, mW)] = res
            return res
    
    
weights=[1,5,3,4]
vals = [15,10,9,5]
c = 30
weights = sample([i for i in range(101)],c)
vals = sample([i*10 for i in range(101)],c)
num_calls=0
res=maxVal(weights, vals, len(vals)-1, c*10)
print(num_calls, res)
num_calls=0
res1=fastMaxVal(weights, vals, len(vals)-1, c*10)
print(num_calls, res1)